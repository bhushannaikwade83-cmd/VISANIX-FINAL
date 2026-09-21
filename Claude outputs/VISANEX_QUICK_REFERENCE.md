# ⚡ VISANEX Quick Reference Card

## 📌 At a Glance

| Aspect | Details |
|--------|---------|
| **Project** | VisaNex Scroll-Story Website (Visa Consultancy) |
| **Status** | 🔄 In Development (Major Architecture Pivot) |
| **Total Size** | ~130 MB (22 MB frames + dependencies) |
| **Code Size** | ~580 lines JS/JSX |
| **Node Modules** | ~110 MB (cached locally) |
| **Scenes** | 8 pinned scroll-driven chapters |
| **Frames** | 438 pre-rendered JPEGs (main sequence) |
| **Git Status** | 3 commits ahead of origin/main (unpushed) |
| **Dev Server** | `npm run dev` → `http://localhost:5173` |

---

## 🏗️ Key Pivot: Old → New

### ❌ OLD (Deleted)
- Hand-coded SVG characters (Traveler, Consultant)
- 3D models + material textures
- Video files (hero.mp4, story.mp4)
- 8 individual scene components (Scene0-7)

### ✅ NEW (Added)
- Pre-rendered video frame sequences (438 JPEGs)
- `ScrollVideoMain.jsx` + `ScrollVideoScene.jsx`
- Upfront frame preloading (no mid-scroll spinners)
- Scene8 CTA (final call-to-action)

---

## 📂 Essential Files

| File | Lines | Purpose |
|------|-------|---------|
| `src/App.jsx` | 111 | Root app, frame preloading logic |
| `src/components/ScrollVideoMain.jsx` | 82 | Scroll-sync orchestrator |
| `src/components/ScrollVideoScene.jsx` | 225 | Per-scene frame scrubbing |
| `src/scenes/Scene8CTA.jsx` | 100 | Final CTA scene (hand-coded SVG) |
| `src/frameManifest.js` | 15 | Frame sequence definitions |
| `package.json` | — | Dependencies: React, GSAP, Lenis, Three.js |
| `src/story.css` | 24 KB | Design system & animations |
| `public/frames/` | 22 MB | 438 JPEG frames (main/) |

---

## ⚙️ Scripts

```bash
npm run dev       # Start dev server (:5173)
npm run build     # Create production build
npm run preview   # Preview production build
```

---

## 🎬 Story Scenes

1. **Dream to Travel** — Map + destination chips
2. **Meet VisaNex** — Office scene
3. **Document Verification** — Document checklist
4. **Visa Processing** — Application pipeline
5. **Visa Approved** — Celebration
6. **Airport** — Parallax clouds + plane
7. **Welcome Abroad** — City skyline
8. **CTA** — Book Consultation / Apply Now

---

## 🚨 Immediate Action Items

### Before Pushing to Git
- [ ] Review & test all 8 scenes in browser
- [ ] Verify frame loading (check DevTools Network tab)
- [ ] Test on mobile (iOS/Android)
- [ ] Decide: Keep or remove Three.js from dependencies?

### Commits to Push
```bash
git log --oneline -3
# 86b69fb Remove Scene 1 completely
# 1466237 Implement Scene0 scroll-driven video intro
# e3486c2 Redesign characters with realistic human proportions
```
👉 **Action:** `git push origin main`

### After Push
- [ ] Deploy to staging/production
- [ ] Monitor initial load time (cold-start delay)
- [ ] Set up analytics to track CTA conversions
- [ ] Optimize frame codec (WebP + fallback)

---

## 📊 Git Status Summary

```
Branch: main
Status: 3 commits ahead of origin/main

Changes NOT staged:
✗ package-lock.json (39 deletions)
✗ 20+ deleted: old components, videos, 3D models
✗ Modified: App.jsx, index.css, story.css, useScene.js

Untracked:
? .vite/ (build cache)
? public/frames/ (438 frames)
? ScrollVideo*.jsx (new components)

Deleted sizes:
- 7924 lines of code (old scenes/characters)
- ~60 MB of models, videos, textures (already in git history)
```

---

## 🎯 Performance Notes

### Current
- ✅ Zero mid-scroll spinners (preload all frames)
- ✅ Smooth scroll (Lenis + GSAP)
- ✅ Responsive frame rendering

### Concerns
- ⚠️ Cold-start delay (loading 438 frames before story reveals)
- ⚠️ Frame file size (22 MB JPEG = bandwidth intensive)
- ⚠️ Mobile performance (may need adaptive quality)

### Improvements
- 🔧 WebP codec (30–40% smaller, modern browsers)
- 🔧 Lazy load per-scene (reduce cold-start)
- 🔧 Service Worker caching (offline + speed boost)
- 🔧 Image CDN with responsive sizing

---

## 📱 Tech Stack Summary

| Layer | Tech |
|-------|------|
| **UI Framework** | React 18.3.1 |
| **Build Tool** | Vite 6.0.0 |
| **Animation** | GSAP 3.15.0 (ScrollTrigger) |
| **Scroll** | Lenis 1.3.25 (smooth) |
| **3D** | Three.js 0.185.1 (candidate for removal) |
| **Styling** | CSS (story.css) |

---

## 💡 Key Concepts

### Upfront Frame Preloading (`App.jsx`)
```js
function usePreloadAll() {
  // Load all 438 frames before render
  // Shows loading bar (%)
  // Once ready=true, story mounts
}
```
**Why?** Prevents blank frames during scroll. Trade-off: longer cold-start.

### Scroll-Synced Frame Display (`ScrollVideoMain.jsx`)
```js
// Map scroll progress (0–100%) → frame index (0–437)
currentFrame = Math.floor(scrollProgress * 437)
// Render frame at scroll position
```

### Per-Scene GSAP Timelines (`ScrollVideoScene.jsx`)
```js
// Each scene has its own GSAP timeline
// Scrubs through frames as user scrolls
// Can layer additional animations on top
```

---

## 🔗 Related Files

### In This Project
- `.claude/launch.json` — Dev launcher config
- `.claude/settings.local.json` — Local settings
- `.gitignore` — Git exclusions
- `vite.config.js` — Vite setup
- `index.html` — HTML entry point
- `README.md` — Project guide

### Generated/Cached
- `node_modules/` — Dependencies (~110 MB)
- `.vite/` — Build cache
- `dist/` — Production build output (after `npm run build`)

---

## 🎓 What's Next?

**This Week:**
- Test all scenes in production mode
- Optimize frame codec
- Push commits to git

**Next Week:**
- Deploy to production
- Monitor analytics
- Gather feedback from visa consultancy team

**Next Month:**
- A/B test different pacing/content
- Mobile performance optimization
- Re-render frames with updated copy/branding

---

## 📞 Support Resources

- **Dev Server:** `npm run dev` → `http://localhost:5173`
- **Build Docs:** `https://vitejs.dev`
- **GSAP ScrollTrigger:** `https://gsap.com/docs/v3/Plugins/ScrollTrigger/`
- **React Docs:** `https://react.dev`
- **Lenis Smooth Scroll:** `https://lenis.darkroom.engineering`

---

**Report Generated:** September 19, 2026 | **Analyst:** Claude Haiku 4.5
