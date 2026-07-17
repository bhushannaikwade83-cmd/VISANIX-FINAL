export function Head({ mood = 'neutral' }) {
  return (
    <g className="head">
      {/* Head */}
      <circle cx="60" cy="42" r="26" fill="#f6c9a0" />

      {/* Hair - swept side style */}
      <path
        d="M 34 44 Q 32 14 60 14 Q 90 14 86 46 Q 84 30 66 28 Q 44 28 40 46 Z"
        fill="#6b4226"
      />

      {/* Eyes */}
      <circle cx="50" cy="44" r="3" fill="#16305e" />
      <circle cx="70" cy="44" r="3" fill="#16305e" />

      {/* Mouth */}
      {mood === 'happy' ? (
        <path d="M 50 56 Q 60 63 70 56" stroke="#16305e" strokeWidth="3" fill="none" strokeLinecap="round" />
      ) : (
        <path d="M 51 57 Q 60 61 69 57" stroke="#16305e" strokeWidth="3" fill="none" strokeLinecap="round" />
      )}
    </g>
  )
}
