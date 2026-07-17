import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Pins a full-viewport scene and hands the caller a scrubbed timeline.
 * `build(tl)` adds tweens; selector strings inside are scoped to the scene.
 */
export function useScene(build, { end = '+=180%', scrub = 1 } = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
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
