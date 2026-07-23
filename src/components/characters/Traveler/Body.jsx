export function Body() {
  return (
    <g className="body">
      {/* Torso - proper proportions */}
      <rect x="38" y="60" width="44" height="60" rx="22" fill="#4b7ce8" />

      {/* Shirt collar - white detail */}
      <path d="M 50 60 L 54 70 M 70 60 L 66 70" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>
  )
}
