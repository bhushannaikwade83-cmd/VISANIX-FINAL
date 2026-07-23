export function LeftLeg() {
  return (
    <g className="leg leg-l">
      {/* Thigh - navy */}
      <rect x="45" y="122" width="14" height="38" rx="7" fill="#0e2a52" />

      {/* Calf - darker navy */}
      <rect x="46" y="160" width="12" height="38" rx="6" fill="#061629" />

      {/* Foot - black shoes */}
      <ellipse cx="52" cy="202" rx="9" ry="6" fill="#0b1428" />

      {/* Shoe sole */}
      <ellipse cx="52" cy="205" rx="10" ry="3" fill="#050810" />
    </g>
  )
}

export function RightLeg() {
  return (
    <g className="leg leg-r">
      {/* Thigh - navy */}
      <rect x="61" y="122" width="14" height="38" rx="7" fill="#16386e" />

      {/* Calf - darker navy */}
      <rect x="62" y="160" width="12" height="38" rx="6" fill="#0d2352" />

      {/* Foot - black shoes */}
      <ellipse cx="68" cy="202" rx="9" ry="6" fill="#0e2a52" />

      {/* Shoe sole */}
      <ellipse cx="68" cy="205" rx="10" ry="3" fill="#050810" />
    </g>
  )
}
