import { useState, useRef, useEffect } from 'react'

export default function FAQAccordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const answerRefs = useRef([])

  useEffect(() => {
    // Dynamically set max-height based on actual content height
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          ref.style.maxHeight = ref.scrollHeight + 'px'
        } else {
          ref.style.maxHeight = '0px'
        }
      }
    })
  }, [activeIndex])

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
                <div className="faq-toggle-wrapper">
                  <span className="faq-toggle-icon"></span>
                </div>
              </div>
              <div
                className="faq-answer"
                ref={el => answerRefs.current[index] = el}
              >
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
