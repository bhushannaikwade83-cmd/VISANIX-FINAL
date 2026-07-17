# VisaNex — Scroll-Driven Story

A premium, Apple/Linear-style scroll-storytelling website. Each chapter of the
customer's visa journey is a pinned, full-screen scene animated as you scroll —
scrolling down plays the story forward, scrolling up rewinds it.

Built with **React + GSAP ScrollTrigger + Lenis**, all illustrations are
hand-coded SVG — no videos, no external assets.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## The story (8 pinned scenes)

1. **Dream to Travel** — world map, floating destination chips, hero headline
2. **Meet VisaNex** — traveler walks into the office (scroll-synced walk cycle), consultant waves, speech bubbles
3. **Document Verification** — documents bounce onto the desk, checklist ticks itself
4. **Visa Processing** — application → secure cloud → embassy pipeline with flowing progress, camera zoom
5. **Visa Approved** — stamp slam, particle burst, celebration
6. **Airport** — parallax clouds (3 layers), plane takeoff, live departure board, luggage roll
7. **Welcome Abroad** — city skyline with landmarks, falling confetti
8. **Call to Action** — glowing logo, "Book Consultation" / "Apply Now"

## Where to edit

- Scenes live in `src/scenes/Scene*.jsx` — each builds its own scrubbed GSAP
  timeline via the shared `useScene` hook (`src/scenes/useScene.js`).
- Characters are in `src/components/People.jsx` (SVG with animatable limbs).
- Design system (colors, cards, shadows) is in `src/story.css`.
- Scroll length per scene: the `end: '+=180%'` option in `useScene` — bigger
  means slower, more cinematic scrubbing.
