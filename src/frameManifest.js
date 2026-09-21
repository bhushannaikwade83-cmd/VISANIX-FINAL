// Single unified video sequence covering the whole journey. Preloaded up
// front so nothing loads mid-scroll (see App.jsx).
export const SEQUENCES = {
  main: 438,
}

export function allFrameUrls() {
  const urls = []
  for (const [dir, count] of Object.entries(SEQUENCES)) {
    for (let i = 1; i <= count; i++) {
      urls.push(`/frames/${dir}/f_${String(i).padStart(3, '0')}.jpg`)
    }
  }
  return urls
}
