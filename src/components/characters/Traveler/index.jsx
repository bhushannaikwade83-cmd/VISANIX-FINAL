import { Head } from './Head'
import { Body } from './Body'
import { LeftArm, RightArm } from './Arms'
import { LeftLeg, RightLeg } from './Legs'

/**
 * Detailed flat-illustration Traveler character.
 * Each body part is a separate component for independent animation.
 * GSAP targets: .head, .arm-l, .arm-r, .leg-l, .leg-r, .torso
 * Transform origins set in story.css for natural joint rotation.
 */
export function Traveler({ className = '', mood = 'neutral' }) {
  return (
    <svg
      className={`person traveler ${className}`}
      viewBox="0 0 120 220"
      aria-hidden="true"
    >
      {/* Render order matters: legs first (background), then torso, then arms, then head (foreground) */}
      <LeftLeg />
      <RightLeg />
      <Body />
      <LeftArm />
      <RightArm />
      <Head mood={mood} />
    </svg>
  )
}
