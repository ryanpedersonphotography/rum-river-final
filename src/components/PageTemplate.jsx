import Header from './Header'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'

export default function PageTemplate({ children, breadcrumbs }) {
  return (
    <div className="page-wrapper">
      <Header />
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <main className="page-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
