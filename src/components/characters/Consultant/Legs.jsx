export function LeftLeg() {
  return (
    <g className="leg leg-l">
      {/* Leg */}
      <rect x="44" y="155" width="13" height="48" rx="6.5" fill="#0e2a52" />

      {/* Foot */}
      <ellipse cx="47" cy="207" rx="13" ry="7" fill="#0b2244" />
    </g>
  )
}

export function RightLeg() {
  return (
    <g className="leg leg-r">
      {/* Leg */}
      <rect x="63" y="155" width="13" height="48" rx="6.5" fill="#16386e" />

      {/* Foot */}
      <ellipse cx="73" cy="207" rx="13" ry="7" fill="#0e2a52" />
    </g>
  )
}
