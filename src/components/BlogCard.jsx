export default function BlogCard({ category, title, description, date, readTime, image }) {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-content">
        <span className="blog-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="blog-meta">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  )
}
