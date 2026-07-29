import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Scene0Video() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return

    const video = videoRef.current

    // Wait for video metadata to load
    const handleLoadedMetadata = () => {
      if (!video.duration || !isFinite(video.duration)) return

      console.log(`Scene0Video: Video loaded, duration=${video.duration}s`)

      const scrollBuffer = 400
      const totalScrollDistance = (video.duration * 300) + scrollBuffer

      // Use GSAP animation tied to scroll
      gsap.to(video, {
        currentTime: video.duration,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalScrollDistance}px`,
          scrub: 1,
          pin: true,
          markers: false,
        },
        ease: 'none',
      })

      console.log('Scene0Video: GSAP animation created')
    }

    if (video.readyState >= 1) {
      handleLoadedMetadata()
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata)
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars?.trigger === sectionRef.current) {
          t.kill()
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="scene s0-video-scene" aria-label="Video intro">
      <video
        ref={videoRef}
        muted
        playsInline
        src="/videos/intro.mp4"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div className="s0-video-overlay" />
    </section>
  )
}
