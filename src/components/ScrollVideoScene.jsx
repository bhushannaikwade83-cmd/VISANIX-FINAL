import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollVideoScene
 * ----------------------------------------------------------------
 * Reusable scroll-scrubbed cinematic video engine. One or more
 * pre-extracted JPEG frame sequences (public/frames/<dir>/f_NNN.jpg)
 * are concatenated into a single scrubbed timeline and painted to a
 * <canvas> as the user scrolls, pinned via GSAP ScrollTrigger + the
 * site's existing Lenis smoothing.
 *
 * Reliability notes:
 *  1. The pin's scroll length is a fixed constant (frame count is
 *     known up front), so the ScrollTrigger is created immediately on
 *     mount - the page's total scrollable height never shifts later,
 *     which is what causes a "content jumps" bug on scroll-video sites.
 *  2. Frames are NOT eagerly loaded on mount. An IntersectionObserver
 *     starts preloading once the section is roughly 1.5 viewports away,
 *     so multiple video scenes on one page don't fire hundreds of
 *     requests simultaneously at first paint.
 *  3. Frames are never blocked-on as a group. drawFrame() always shows
 *     SOMETHING once at least one frame anywhere in the sequence has
 *     finished loading - if the exact requested frame isn't ready yet
 *     (e.g. user scrolled ahead of the download), it falls back to the
 *     nearest already-loaded frame instead of leaving the canvas blank
 *     or showing a blocking loader mid-scroll.
 */
export default function ScrollVideoScene({
  sequences,
  pxPerFrame = 7,
  labels = [],
  resolveTo = null,
  ariaLabel,
  id,
}) {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const drawFrameRef = useRef(() => {})
  const stateRef = useRef({ currentFrame: 0, anyLoaded: false })
  const [showPlaceholder, setShowPlaceholder] = useState(true)

  const total = sequences.reduce((sum, seq) => sum + seq.count, 0)

  function frameSrc(i) {
    let idx = i
    for (const seq of sequences) {
      if (idx < seq.count) return `/frames/${seq.dir}/f_${String(idx + 1).padStart(3, '0')}.jpg`
      idx -= seq.count
    }
    const last = sequences[sequences.length - 1]
    return `/frames/${last.dir}/f_${String(last.count).padStart(3, '0')}.jpg`
  }

  function isLoaded(img) {
    return !!img && img.complete && img.naturalWidth > 0
  }

  // Pin + canvas: fixed geometry, created immediately, independent of load state.
  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let lastDrawn = -1

    function resize() {
      const w = section.clientWidth
      const h = section.clientHeight
      if (!w || !h) return
      canvas.width = w
      canvas.height = h
      lastDrawn = -1
      drawFrame(stateRef.current.currentFrame)
    }

    function paint(img) {
      const cw = canvas.width
      const ch = canvas.height
      // Always fill the full screen edge-to-edge (cover fit) on every
      // device, mobile included. An earlier version letterboxed narrow
      // portrait screens to guarantee no cropping, but in practice that
      // rendered as a small video band with large empty margins - worse
      // than a bit of edge cropping. Filling the screen is what "fits
      // properly" in practice, so cover fit now applies universally.
      const scale = Math.max(cw / img.width, ch / img.height)
      const w = img.width * scale
      const h = img.height * scale
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h)
    }

    function drawFrame(index) {
      const wanted = Math.max(0, Math.min(total - 1, Math.round(index)))
      stateRef.current.currentFrame = wanted
      const imgs = imagesRef.current
      if (!imgs.length) return

      let useIdx = -1
      if (isLoaded(imgs[wanted])) {
        useIdx = wanted
      } else {
        // nearest already-loaded frame, searching backward then forward
        let back = wanted
        while (back >= 0 && !isLoaded(imgs[back])) back--
        let fwd = wanted
        while (fwd < total && !isLoaded(imgs[fwd])) fwd++
        if (back >= 0 && fwd < total) useIdx = wanted - back <= fwd - wanted ? back : fwd
        else if (back >= 0) useIdx = back
        else if (fwd < total) useIdx = fwd
      }

      if (useIdx === -1) return // nothing loaded anywhere yet
      if (useIdx === lastDrawn) return
      lastDrawn = useIdx
      stateRef.current.anyLoaded = true
      setShowPlaceholder(false)
      paint(imgs[useIdx])
    }
    drawFrameRef.current = drawFrame

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(section)

    const proxy = { frame: 0 }
    const ctxAnim = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${total * pxPerFrame}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      })

      tl.to(proxy, { frame: total - 1, duration: total, onUpdate: () => drawFrame(proxy.frame) }, 0)

      labels.forEach((l) => {
        const inAt = l.inAt * total
        const outAt = l.outAt * total
        tl.to(`.${l.className}`, { opacity: 1, y: 0, duration: 10 }, inAt)
        tl.to(`.${l.className}`, { opacity: 0, y: -16, duration: 8 }, Math.max(inAt + 12, outAt - 8))
      })

      if (resolveTo) {
        tl.to('.svh-resolve', { opacity: 1, duration: 12 }, total - 14)
      }
    }, section)

    return () => {
      ro.disconnect()
      ctxAnim.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Lazy preload: start fetching once the scene is roughly 1.5 viewports away.
  useEffect(() => {
    const section = sectionRef.current
    let cancelled = false
    let started = false

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true
          io.disconnect()
          preload()
        }
      },
      { rootMargin: '150% 0px 150% 0px' },
    )
    io.observe(section)

    function preload() {
      const imgs = new Array(total)
      for (let i = 0; i < total; i++) {
        const img = new Image()
        img.decoding = 'async'
        img.onload = img.onerror = () => {
          if (cancelled) return
          drawFrameRef.current(stateRef.current.currentFrame)
        }
        img.src = frameSrc(i)
        imgs[i] = img
      }
      imagesRef.current = imgs
    }

    return () => {
      cancelled = true
      io.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={sectionRef} className="scene svh-scene" aria-label={ariaLabel} id={id}>
      <canvas ref={canvasRef} className="svh-canvas" />

      {showPlaceholder && (
        <div className="svh-loading">
          <span className="svh-loading-dot" />
        </div>
      )}

      <div className="svh-vignette" />
      {resolveTo && <div className="svh-resolve" />}

      {labels.map((l) => (
        <div key={l.className} className={`svh-label ${l.className}`}>
          <span className="scene-tag">{l.tag}</span>
          <h2>{l.heading}</h2>
        </div>
      ))}
    </section>
  )
}
