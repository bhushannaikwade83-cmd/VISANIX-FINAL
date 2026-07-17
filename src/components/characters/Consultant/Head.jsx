export function Head() {
  return (
    <g className="head">
      {/* Head */}
      <circle cx="60" cy="42" r="26" fill="#eab28a" />

      {/* Hair - short professional style */}
      <path
        d="M 34 44 Q 32 12 60 12 Q 88 12 86 44 L 86 52 Q 82 32 64 30 Q 44 30 34 52 Z"
        fill="#2b1d12"
      />

      {/* Eyes */}
      <circle cx="50" cy="44" r="3" fill="#16305e" />
      <circle cx="70" cy="44" r="3" fill="#16305e" />

      {/* Mouth */}
      <path d="M 50 56 Q 60 63 70 56" stroke="#16305e" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  )
}
