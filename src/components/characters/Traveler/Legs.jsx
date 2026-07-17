export function LeftLeg() {
  return (
    <g className="leg leg-l">
      {/* Leg */}
      <rect x="44" y="155" width="13" height="48" rx="6.5" fill="#1e3a6e" />

      {/* Foot */}
      <ellipse cx="47" cy="207" rx="13" ry="7" fill="#16305e" />
    </g>
  )
}

export function RightLeg() {
  return (
    <g className="leg leg-r">
      {/* Leg */}
      <rect x="63" y="155" width="13" height="48" rx="6.5" fill="#2c528f" />

      {/* Foot */}
      <ellipse cx="73" cy="207" rx="13" ry="7" fill="#1e3a6e" />
    </g>
  )
}
