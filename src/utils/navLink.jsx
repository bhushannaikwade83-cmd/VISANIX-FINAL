export function NavLink({ href, onClick, className, children }) {
  // Convert href to page name (e.g., "/contact" -> "contact")
  const page = href.startsWith('/') ? href.slice(1) : href

  return (
    <button
      onClick={() => onClick(page)}
      className={className}
    >
      {children}
    </button>
  )
}
