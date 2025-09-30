export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        {items.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="breadcrumb-separator">/</span>}
            {item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span className="current">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  )
}
