export default function FeatureBlocksStandalone() {
  return (
    <>
      {/* ID: FEATURE_BLOCKS_001 - Numbered Feature Blocks */}
      <section id="feature-blocks" className="alternating-blocks">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Alternating Layouts</div>
            <h2 className="section-title">Numbered Feature Blocks</h2>
            <p className="lead">Elegant alternating content blocks with numbered badges, perfect for highlighting venue features</p>
          </div>

          <div className="blocks-container">
            <div className="block-item">
              <div className="block-content">
                <div className="number">01</div>
                <h3>The Historic Barn</h3>
                <p>Step into a piece of Minnesota history. Our meticulously restored barn combines century-old craftsmanship with modern amenities, creating the perfect backdrop for your celebration.</p>
                <ul className="feature-list">
                  <li>Climate-controlled comfort year-round</li>
                  <li>Original exposed beam architecture</li>
                  <li>Capacity for up to 300 guests</li>
                  <li>State-of-the-art lighting system</li>
                </ul>
                <a href="#" className="btn-outline">Explore The Barn</a>
              </div>
              <div className="block-image">
                <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800" alt="Historic barn interior" width="800" height="500" />
                <span className="image-badge">100+ Years</span>
              </div>
            </div>

            <div className="block-item reverse">
              <div className="block-content">
                <div className="number">02</div>
                <h3>Vineyard Ceremonies</h3>
                <p>Exchange vows surrounded by rolling hills and grape vines. Our vineyard offers multiple ceremony sites, each with its own unique charm and breathtaking views.</p>
                <ul className="feature-list">
                  <li>Sunset ceremony perfection</li>
                  <li>Natural amphitheater setting</li>
                  <li>Rain backup in covered pavilion</li>
                  <li>Complimentary wine tasting for couples</li>
                </ul>
                <a href="#" className="btn-outline">View Ceremony Sites</a>
              </div>
              <div className="block-image">
                <img src="https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=800" alt="Vineyard ceremony site" width="800" height="500" />
                <span className="image-badge">5 Locations</span>
              </div>
            </div>

            <div className="block-item">
              <div className="block-content">
                <div className="number">03</div>
                <h3>Enchanted Forest</h3>
                <p>Wander through our mile-long paths beneath ancient oaks and whispering pines. The forest provides endless opportunities for stunning photography and intimate moments.</p>
                <ul className="feature-list">
                  <li>Professional trail lighting available</li>
                  <li>Hidden clearings for portraits</li>
                  <li>Seasonal wildflower meadows</li>
                  <li>Private couple's photography hour</li>
                </ul>
                <a href="#" className="btn-outline">Discover The Grounds</a>
              </div>
              <div className="block-image">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="Enchanted forest" width="800" height="500" />
                <span className="image-badge">400 Acres</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Display Section */}
      <section style={{ 
        background: 'var(--cream-pearl)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Feature Blocks Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the alternating feature blocks above</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`<!-- Numbered Feature Blocks Section -->
<section id="feature-blocks" className="alternating-blocks">
  <div className="content-wrapper">
    <div className="section-header center">
      <div className="script-accent">Alternating Layouts</div>
      <h2 className="section-title">Numbered Feature Blocks</h2>
      <p className="lead">
        Elegant alternating content blocks with numbered badges, 
        perfect for highlighting venue features
      </p>
    </div>

    <div className="blocks-container">
      <!-- Block 1 - Standard Layout -->
      <div className="block-item">
        <div className="block-content">
          <div className="number">01</div>
          <h3>The Historic Barn</h3>
          <p>Step into a piece of Minnesota history...</p>
          <ul className="feature-list">
            <li>Climate-controlled comfort year-round</li>
            <li>Original exposed beam architecture</li>
            <li>Capacity for up to 300 guests</li>
            <li>State-of-the-art lighting system</li>
          </ul>
          <a href="#" className="btn-outline">Explore The Barn</a>
        </div>
        <div className="block-image">
          <img src="image.jpg" alt="Historic barn interior" width="800" height="500" />
          <span className="image-badge">100+ Years</span>
        </div>
      </div>

      <!-- Block 2 - Reverse Layout -->
      <div className="block-item reverse">
        <div className="block-content">
          <div className="number">02</div>
          <h3>Vineyard Ceremonies</h3>
          <p>Exchange vows surrounded by rolling hills...</p>
          <ul className="feature-list">
            <li>Sunset ceremony perfection</li>
            <li>Natural amphitheater setting</li>
            <li>Rain backup in covered pavilion</li>
            <li>Complimentary wine tasting for couples</li>
          </ul>
          <a href="#" className="btn-outline">View Ceremony Sites</a>
        </div>
        <div className="block-image">
          <img src="image.jpg" alt="Vineyard ceremony site" width="800" height="500" />
          <span className="image-badge">5 Locations</span>
        </div>
      </div>

      <!-- Block 3 - Standard Layout -->
      <div className="block-item">
        <!-- Content structure repeats -->
      </div>
    </div>
  </div>
</section>`}
            </pre>
          </div>

          {/* React JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>React JavaScript Implementation</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// React Component for Feature Blocks
import React from 'react'

// Feature blocks data structure
const featureBlocks = [
  {
    number: "01",
    title: "The Historic Barn",
    description: "Step into a piece of Minnesota history. Our meticulously restored barn combines century-old craftsmanship with modern amenities, creating the perfect backdrop for your celebration.",
    features: [
      "Climate-controlled comfort year-round",
      "Original exposed beam architecture", 
      "Capacity for up to 300 guests",
      "State-of-the-art lighting system"
    ],
    image: "/images/barn-interior.jpg",
    badge: "100+ Years",
    link: "#explore-barn",
    linkText: "Explore The Barn"
  },
  {
    number: "02",
    title: "Vineyard Ceremonies",
    description: "Exchange vows surrounded by rolling hills and grape vines. Our vineyard offers multiple ceremony sites, each with its own unique charm and breathtaking views.",
    features: [
      "Sunset ceremony perfection",
      "Natural amphitheater setting",
      "Rain backup in covered pavilion", 
      "Complimentary wine tasting for couples"
    ],
    image: "/images/vineyard-ceremony.jpg",
    badge: "5 Locations",
    link: "#ceremony-sites",
    linkText: "View Ceremony Sites"
  },
  {
    number: "03",
    title: "Enchanted Forest",
    description: "Wander through our mile-long paths beneath ancient oaks and whispering pines. The forest provides endless opportunities for stunning photography and intimate moments.",
    features: [
      "Professional trail lighting available",
      "Hidden clearings for portraits",
      "Seasonal wildflower meadows",
      "Private couple's photography hour"
    ],
    image: "/images/enchanted-forest.jpg", 
    badge: "400 Acres",
    link: "#discover-grounds",
    linkText: "Discover The Grounds"
  }
]

export default function FeatureBlocksSection() {
  return (
    <section className="alternating-blocks">
      <div className="content-wrapper">
        <div className="section-header center">
          <div className="script-accent">Alternating Layouts</div>
          <h2 className="section-title">Numbered Feature Blocks</h2>
          <p className="lead">
            Elegant alternating content blocks with numbered badges, 
            perfect for highlighting venue features
          </p>
        </div>

        <div className="blocks-container">
          {featureBlocks.map((block, index) => (
            <div 
              key={block.number} 
              className={\`block-item \${index % 2 === 1 ? 'reverse' : ''}\`}
            >
              <div className="block-content">
                <div className="number">{block.number}</div>
                <h3>{block.title}</h3>
                <p>{block.description}</p>
                <ul className="feature-list">
                  {block.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href={block.link} className="btn-outline">
                  {block.linkText}
                </a>
              </div>
              <div className="block-image">
                <img 
                  src={block.image} 
                  alt={block.title} 
                  width="800" 
                  height="500" 
                />
                <span className="image-badge">{block.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Animation on scroll functionality (optional)
import { useEffect } from 'react'

const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const blockItems = document.querySelectorAll('.block-item')
    blockItems.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])
}`}
            </pre>
          </div>

          {/* Vanilla JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Vanilla JavaScript Implementation</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// Vanilla JavaScript for Feature Blocks
// Data structure for feature blocks
const featureBlocksData = [
  {
    number: "01",
    title: "The Historic Barn",
    description: "Step into a piece of Minnesota history. Our meticulously restored barn combines century-old craftsmanship with modern amenities, creating the perfect backdrop for your celebration.",
    features: [
      "Climate-controlled comfort year-round",
      "Original exposed beam architecture",
      "Capacity for up to 300 guests", 
      "State-of-the-art lighting system"
    ],
    image: "/images/barn-interior.jpg",
    badge: "100+ Years",
    link: "#explore-barn",
    linkText: "Explore The Barn"
  },
  {
    number: "02", 
    title: "Vineyard Ceremonies",
    description: "Exchange vows surrounded by rolling hills and grape vines. Our vineyard offers multiple ceremony sites, each with its own unique charm and breathtaking views.",
    features: [
      "Sunset ceremony perfection",
      "Natural amphitheater setting",
      "Rain backup in covered pavilion",
      "Complimentary wine tasting for couples"
    ],
    image: "/images/vineyard-ceremony.jpg",
    badge: "5 Locations",
    link: "#ceremony-sites",
    linkText: "View Ceremony Sites"
  },
  {
    number: "03",
    title: "Enchanted Forest", 
    description: "Wander through our mile-long paths beneath ancient oaks and whispering pines. The forest provides endless opportunities for stunning photography and intimate moments.",
    features: [
      "Professional trail lighting available",
      "Hidden clearings for portraits",
      "Seasonal wildflower meadows",
      "Private couple's photography hour"
    ],
    image: "/images/enchanted-forest.jpg",
    badge: "400 Acres",
    link: "#discover-grounds",
    linkText: "Discover The Grounds"
  }
]

// Function to create feature list HTML
function createFeatureList(features) {
  return features.map(feature => 
    \`<li>\${feature}</li>\`
  ).join('')
}

// Function to create a single block HTML
function createBlockHTML(block, index) {
  const isReverse = index % 2 === 1
  const reverseClass = isReverse ? ' reverse' : ''
  
  return \`
    <div class="block-item\${reverseClass}">
      <div class="block-content">
        <div class="number">\${block.number}</div>
        <h3>\${block.title}</h3>
        <p>\${block.description}</p>
        <ul class="feature-list">
          \${createFeatureList(block.features)}
        </ul>
        <a href="\${block.link}" class="btn-outline">
          \${block.linkText}
        </a>
      </div>
      <div class="block-image">
        <img src="\${block.image}" alt="\${block.title}" width="800" height="500" />
        <span class="image-badge">\${block.badge}</span>
      </div>
    </div>
  \`
}

// Function to render all blocks
function renderFeatureBlocks() {
  const container = document.querySelector('.blocks-container')
  if (!container) return
  
  const blocksHTML = featureBlocksData
    .map((block, index) => createBlockHTML(block, index))
    .join('')
  
  container.innerHTML = blocksHTML
}

// Scroll animation functionality
function initScrollAnimations() {
  // Check if Intersection Observer is supported
  if (!window.IntersectionObserver) {
    // Fallback: just show all blocks
    document.querySelectorAll('.block-item').forEach(item => {
      item.classList.add('animate-in')
    })
    return
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        // Optional: stop observing after animation
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all block items
  document.querySelectorAll('.block-item').forEach(item => {
    observer.observe(item)
  })
}

// Button click handlers
function initButtonHandlers() {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-outline')) {
      e.preventDefault()
      const href = e.target.getAttribute('href')
      
      // Handle different link types
      if (href.startsWith('#')) {
        // Scroll to anchor
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (href.startsWith('/')) {
        // Navigate to internal page
        window.location.href = href
      } else {
        // External link
        window.open(href, '_blank')
      }
    }
  })
}

// Image lazy loading (performance optimization)
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src || img.src
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img)
    })
  }
}

// Main initialization function
function initFeatureBlocks() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
  
  function init() {
    renderFeatureBlocks()
    initScrollAnimations()
    initButtonHandlers()
    initLazyLoading()
    
    console.log('Feature blocks initialized')
  }
}

// Auto-initialize when script loads
initFeatureBlocks()

// Export for manual initialization if needed
window.FeatureBlocks = {
  init: initFeatureBlocks,
  render: renderFeatureBlocks,
  data: featureBlocksData
}

// Usage examples:
//
// 1. Basic usage (auto-initializes):
// <script src="feature-blocks.js"></script>
//
// 2. Manual initialization:
// window.FeatureBlocks.init()
//
// 3. Custom data:
// window.FeatureBlocks.data = customData
// window.FeatureBlocks.render()
//
// 4. Re-render with new data:
// fetch('/api/feature-blocks').then(r => r.json()).then(data => {
//   window.FeatureBlocks.data = data
//   window.FeatureBlocks.render()
// })`}
            </pre>
          </div>

          {/* CSS Code */}
          <div>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>CSS Styles</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* Alternating Feature Blocks Section */
.alternating-blocks {
  background: linear-gradient(135deg, rgba(74, 52, 38, 1) 0%, rgba(45, 58, 47, 1) 100%);
  color: white;
  padding: 100px 0;
}

.alternating-blocks .section-header {
  color: white;
  text-align: center;
  margin-bottom: 4rem;
}

.alternating-blocks .script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--champagne-gold);
  margin-bottom: 1rem;
}

.alternating-blocks .section-title {
  font-family: var(--font-display);
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
}

.alternating-blocks .lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
}

/* Block Container */
.blocks-container {
  margin-top: 4rem;
}

.block-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 120px;
}

.block-item:last-child {
  margin-bottom: 0;
}

/* Reverse Layout (Image on Left) */
.block-item.reverse {
  direction: rtl;
}

.block-item.reverse .block-content {
  direction: ltr;
}

/* Block Content */
.block-content {
  padding: 40px;
}

.block-content .number {
  font-size: 3rem;
  color: var(--champagne-gold);
  opacity: 0.5;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 20px;
  font-family: var(--font-display);
}

.block-content h3 {
  font-size: 2.5rem;
  margin-bottom: 25px;
  font-family: var(--font-display);
  color: white;
}

.block-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
}

/* Feature List */
.feature-list {
  list-style: none;
  margin-bottom: 30px;
  padding-left: 0;
}

.feature-list li {
  padding: 12px 0;
  position: relative;
  padding-left: 30px;
  color: rgba(255, 255, 255, 0.8);
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--champagne-gold);
  font-weight: 500;
  font-size: 1.125rem;
}

/* Outline Button */
.btn-outline {
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid var(--champagne-gold);
  color: var(--champagne-gold);
  text-decoration: none;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: var(--champagne-gold);
  color: var(--warm-walnut);
}

/* Block Image */
.block-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.block-image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;
}

/* Image Badge */
.image-badge {
  position: absolute;
  top: 30px;
  right: 30px;
  background: var(--dusty-rose);
  color: white;
  padding: 15px 25px;
  border-radius: 50px;
  font-size: 0.875rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .block-item {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 80px;
  }
  
  .block-item.reverse {
    direction: ltr;
  }
  
  .block-content {
    padding: 20px;
  }
  
  .block-content h3 {
    font-size: 2rem;
  }
  
  .block-content .number {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .alternating-blocks {
    padding: 60px 0;
  }
  
  .alternating-blocks .section-title {
    font-size: 2.5rem;
  }
  
  .block-image img {
    height: 300px;
  }
  
  .image-badge {
    padding: 10px 20px;
    font-size: 0.75rem;
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}