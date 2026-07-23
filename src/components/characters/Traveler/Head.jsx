export function Head({ mood = 'neutral' }) {
  return (
    <g className="head">
      {/* Head - smaller, more proportional */}
      <circle cx="60" cy="36" r="20" fill="#f6c9a0" />

      {/* Hair - natural brown */}
      <path
        d="M 40 36 Q 38 12 60 10 Q 82 12 80 36 L 80 42 Q 76 20 60 18 Q 44 20 40 42 Z"
        fill="#6b4226"
      />

      {/* Eyes - with pupils */}
      <circle cx="52" cy="34" r="2.5" fill="#16305e" />
      <circle cx="68" cy="34" r="2.5" fill="#16305e" />
      <circle cx="52.5" cy="33.5" r="1.2" fill="#fff" />
      <circle cx="68.5" cy="33.5" r="1.2" fill="#fff" />

      {/* Nose */}
      <path d="M 60 35 L 60 42" stroke="#d4a574" strokeWidth="1.5" strokeLinecap="round" />

      {/* Mouth - changes with mood */}
      {mood === 'happy' ? (
        <path d="M 52 46 Q 60 50 68 46" stroke="#16305e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M 52 46 Q 60 48 68 46" stroke="#16305e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}

      {/* Eyebrows */}
      <path d="M 48 30 Q 52 28 56 30" stroke="#5a3520" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 64 30 Q 68 28 72 30" stroke="#5a3520" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>
  )
}
