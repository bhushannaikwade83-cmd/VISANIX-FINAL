import { useEffect, useRef } from 'react'
import { useScene } from './useScene.js'
import gsap from 'gsap'

export default function Scene1Dream() {
  const videoRef = useRef(null)

  const ref = useScene((tl, gsap) => {
    // sync video playback with scroll timeline
    if (videoRef.current) {
      const video = videoRef.current

      // get video duration and sync playback to scroll
      const syncVideo = () => {
        tl.to(video, {
          currentTime: video.duration,
          duration: 1,
          ease: 'none',
        }, 0)
      }

      if (video.readyState >= 1) {
        syncVideo()
      } else {
        video.onloadedmetadata = syncVideo
      }

      // ensure video plays
      tl.call(() => {
        if (video.paused) video.play().catch(() => {})
      }, [], 0)
    }

    // text animations (visible at start, fade out at end)
    tl.fromTo('.s1-copy', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0)
    tl.to('.s1-copy', { opacity: 0, y: -40, duration: 0.5 }, 0.7)
  }, { end: '+=100%' })

  return (
    <section ref={ref} className="scene s1-hero" aria-label="Dream to travel">
      {/* full-screen video background */}
      <video
        ref={videoRef}
        className="s1-video"
        src="/scene1-hero.mp4"
        preload="metadata"
        playsInline
        muted
        crossOrigin="anonymous"
      />

      {/* overlay gradient for text readability */}
      <div className="s1-overlay" />

      {/* text content */}
      <div className="scene-copy s1-copy" style={{ position: 'relative', zIndex: 10, textAlign: 'center', opacity: 1, transform: 'translateY(0)' }}>
        <span className="scene-tag">Chapter 01 — The Dream</span>
        <h2>Your Journey Starts Here.</h2>
        <p>Study, work, or travel abroad — the world is closer than you think.</p>
      </div>
    </section>
  )
}
