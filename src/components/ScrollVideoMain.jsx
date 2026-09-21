import ScrollVideoScene from './ScrollVideoScene.jsx'

/**
 * The entire journey as ONE continuous 18.27s clip (438 frames @ 24fps),
 * scroll-scrubbed start to finish. This is the whole site - there is no
 * separate page/section after it. The video's own native ending (the
 * "VisaNix" wordmark forming and holding, ~12-18s) IS the closing moment;
 * nothing is layered on top of it after it fades in.
 *
 * Sampled at 24fps (up from 15fps) purely for smoother scroll-scrubbing -
 * more frames means less visual jump between adjacent frames as you
 * scroll. pxPerFrame is reduced proportionally (40 -> 25) so the total
 * scroll distance for the whole page is unchanged (~10,950px either way) -
 * same page length, same pacing, just finer steps through it.
 *
 * Beat timing mapped by hand against the actual footage (half-second
 * sampling), not guessed - defined in real seconds via t(), so none of it
 * changes when the frame count/fps above changes:
 *   0.0  - 2.3s   traveler walks across the world map             -> Dream
 *   2.3  - 3.8s   arrives at the office, sits with the consultant  -> Meet
 *   3.8  - 8.3s   passport + checklist verification (long beat)    -> Documents
 *   8.3  - 10.3s  scan icon -> "VISA APPROVED" -> celebration      -> Approved
 *   10.3 - 11.8s  walks past the window, plane visible outside     -> Departure
 *   11.8 - 18.27s empty glass office, "VisaNix" wordmark forms     -> closing reveal
 */
export default function ScrollVideoMain() {
  const total = 438 // 18.25s @ 24fps
  const t = (seconds) => (seconds * 24) / total

  return (
    <ScrollVideoScene
      id="journey"
      ariaLabel="The VisaNex journey, start to finish"
      sequences={[{ dir: 'main', count: total }]}
      pxPerFrame={25}
      labels={[
        {
          className: 'svh-label-dream',
          tag: 'Chapter 01 — The Dream',
          heading: 'Your Journey Starts Here.',
          inAt: t(0.3),
          outAt: t(2.1),
        },
        {
          className: 'svh-label-meet',
          tag: 'Chapter 02 — Meet VisaNex',
          heading: 'Expert Guidance, From Hello.',
          inAt: t(2.5),
          outAt: t(3.6),
        },
        {
          className: 'svh-label-docs',
          tag: 'Chapter 03 — Documents',
          heading: 'Every Paper, Perfectly in Place.',
          inAt: t(4.0),
          outAt: t(7.9),
        },
        {
          className: 'svh-label-approved',
          tag: 'Chapter 04 — Approved',
          heading: 'The Moment Everything Changes.',
          inAt: t(8.4),
          outAt: t(10.1),
        },
        {
          className: 'svh-label-departure',
          tag: 'Chapter 05 — Departure',
          heading: 'Wheels Up.',
          inAt: t(10.4),
          outAt: t(11.6),
        },
        {
          className: 'svh-label-cta',
          tag: 'Chapter 06 — VisaNex',
          heading: 'Start Your Global Journey.',
          inAt: t(12.1),
          outAt: t(13.6),
        },
      ]}
    />
  )
}
