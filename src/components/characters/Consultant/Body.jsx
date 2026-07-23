export function Body() {
  return (
    <g className="body">
      {/* Torso - teal shirt, proper proportions */}
      <rect x="38" y="60" width="44" height="60" rx="22" fill="#14b8a6" />

      {/* Tie - dark teal */}
      <rect x="58" y="64" width="4" height="46" rx="2" fill="#0f766e" />

      {/* Shirt collar - white detail */}
      <path d="M 50 60 L 54 70 M 70 60 L 66 70" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>
  )
}
