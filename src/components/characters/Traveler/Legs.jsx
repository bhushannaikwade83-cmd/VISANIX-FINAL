export function LeftLeg() {
  return (
    <g className="leg leg-l">
      {/* Thigh - rounded */}
      <rect x="45" y="122" width="14" height="38" rx="7" fill="#1e3a6e" />

      {/* Calf - rounded */}
      <rect x="46" y="160" width="12" height="38" rx="6" fill="#0d1f47" />

      {/* Foot - proper proportions */}
      <ellipse cx="52" cy="202" rx="9" ry="6" fill="#0a1428" />

      {/* Shoe sole */}
      <ellipse cx="52" cy="205" rx="10" ry="3" fill="#050810" />
    </g>
  )
}

export function RightLeg() {
  return (
    <g className="leg leg-r">
      {/* Thigh - rounded */}
      <rect x="61" y="122" width="14" height="38" rx="7" fill="#2c528f" />

      {/* Calf - rounded */}
      <rect x="62" y="160" width="12" height="38" rx="6" fill="#1a3a5c" />

      {/* Foot - proper proportions */}
      <ellipse cx="68" cy="202" rx="9" ry="6" fill="#0d1f47" />

      {/* Shoe sole */}
      <ellipse cx="68" cy="205" rx="10" ry="3" fill="#050810" />
    </g>
  )
}
