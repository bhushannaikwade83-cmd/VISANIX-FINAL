export function LeftArm() {
  return (
    <g className="arm arm-l">
      {/* Upper arm - rounded */}
      <rect x="18" y="66" width="16" height="42" rx="8" fill="#2f6fd6" />

      {/* Forearm - rounded */}
      <rect x="18" y="108" width="14" height="36" rx="7" fill="#3875dc" />

      {/* Hand - proper size */}
      <ellipse cx="25" cy="148" rx="10" ry="12" fill="#f6c9a0" />

      {/* Fingers */}
      <circle cx="19" cy="155" r="1.8" fill="#d4a574" />
      <circle cx="24" cy="158" r="1.8" fill="#d4a574" />
      <circle cx="30" cy="158" r="1.8" fill="#d4a574" />
      <circle cx="35" cy="155" r="1.8" fill="#d4a574" />
    </g>
  )
}

export function RightArm() {
  return (
    <g className="arm arm-r">
      {/* Upper arm - rounded */}
      <rect x="86" y="66" width="16" height="42" rx="8" fill="#7aa5f5" />

      {/* Forearm - rounded */}
      <rect x="88" y="108" width="14" height="36" rx="7" fill="#5a92f0" />

      {/* Hand - proper size */}
      <ellipse cx="95" cy="148" rx="10" ry="12" fill="#f6c9a0" />

      {/* Fingers */}
      <circle cx="85" cy="155" r="1.8" fill="#d4a574" />
      <circle cx="90" cy="158" r="1.8" fill="#d4a574" />
      <circle cx="96" cy="158" r="1.8" fill="#d4a574" />
      <circle cx="102" cy="155" r="1.8" fill="#d4a574" />
    </g>
  )
}
