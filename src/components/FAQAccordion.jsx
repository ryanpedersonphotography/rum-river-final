import { useState } from 'react'

export default function FAQAccordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <p className="script-font">Questions?</p>
          <h2>Everything You Need to Know</h2>
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
