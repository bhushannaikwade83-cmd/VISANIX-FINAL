import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Pins a full-viewport scene and hands the caller a scrubbed timeline.
 * `build(tl)` adds tweens; selector strings inside are scoped to the scene.
 *
 * Uses useEffect (not useLayoutEffect) deliberately: ScrollVideoMain's pin
 * is also set up in a useEffect, and React fires sibling components'
 * useEffects in DOM order. That guarantees the video's (much larger) pin
 * spacer already exists by the time this scene calculates its own
 * ScrollTrigger start position - otherwise this scene's trigger position
 * gets calculated against a page that doesn't have the video's spacer
 * height yet, causing it to pin far too early (mid-video instead of after
 * it).
 */
export function useScene(build, { end = '+=180%', scrub = 1 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end,
          pin: true,
          scrub,
          anticipatePin: 1,
        },
      })
      build(tl, gsap)
    }, ref)
    return () => ctx.revert()
  }, [])

  return ref
}
