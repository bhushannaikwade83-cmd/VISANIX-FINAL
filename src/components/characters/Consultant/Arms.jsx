export function LeftArm() {
  return (
    <g className="arm arm-l">
      {/* Arm capsule outside the torso */}
      <rect x="16" y="76" width="18" height="68" rx="9" fill="#0ea5a0" />

      {/* Hand */}
      <circle cx="25" cy="150" r="9" fill="#eab28a" />
    </g>
  )
}

export function RightArm() {
  return (
    <g className="arm arm-r">
      {/* Arm capsule outside the torso */}
      <rect x="86" y="76" width="18" height="68" rx="9" fill="#2dd4bf" />

      {/* Hand */}
      <circle cx="95" cy="150" r="9" fill="#eab28a" />
    </g>
  )
}
