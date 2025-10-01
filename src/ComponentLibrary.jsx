import { useEffect, useState } from 'react'

/**
 * DiamondCards — upgraded hover, glass overlay, and title chip.
 * - shape clip on inner wrapper (WebKit-safe)
 * - hover: zoom + lift + micro-tilt + cursor-follow glow
 * - glass: layered conic/radial highlights for gem feel
 * - title chip: glass pill w/ gradient stroke + subtle shine
 * - reduced-motion friendly
 */
function DiamondCards() {
  const [hovered, setHovered] = useState(null);
  const [cursor, setCursor]   = useState({ x: 50, y: 50 }); // % within card

  // --- tiny CSS for reduced motion + stronger GPU stability ---
  const css = `
    @media (prefers-reduced-motion: reduce) {
      .dc-bg, .dc-sheen, .dc-card { transition: none !important; transform: none !important; }
    }
  `;

  // cross-browser clip-path helper
  const clip = (poly) => ({ clipPath: poly, WebkitClipPath: poly });

  // outer grid (locked 2x2)
  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: ".5rem",
  };

  // outer card shell (no clip or transform here)
  const card = {
    position: "relative",
    height: 340,
    cursor: "pointer",
  };

  // inner wrapper that owns the clip (never animates)
  const shapeBox = (poly) => ({
    ...clip(poly),
    position: "relative",
    height: "100%",
    overflow: "hidden",
    borderRadius: 0,
    boxShadow: "0 18px 40px rgba(0,0,0,.46)",
    isolation: "isolate",
    background: "#000",
  });

  // BG image — zoom + micro-tilt + opacity change
  const bg = (img, active) => ({
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: active ? "translateY(-6px) scale(1.08) rotate3d(1,0,0,0.6deg)" : "none",
    transition: "transform .55s cubic-bezier(.22,.61,.36,1), opacity .4s ease, filter .4s ease",
    filter: active ? "saturate(1.1) contrast(1.1) brightness(1.05)" : "saturate(1.02) contrast(1.05) brightness(.65)",
    opacity: active ? 1 : 0.7,
    pointerEvents: "none",
    willChange: "transform, opacity, filter",
  });

  // Gem tint overlay — uses blend to color but keep detail
  const gem = (a, b) => ({
    position: "absolute",
    inset: 0,
    background: `linear-gradient(145deg, ${a}, ${b})`,
    opacity: 0.26,
    mixBlendMode: "overlay",
    pointerEvents: "none",
  });

  // 1) Thicker glassy edge using stacked inset shadows
  const EdgeGlass = () => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        // layered inner strokes + inner glow/darkening
        boxShadow: [
          "inset 0 0 0 12px rgba(255,255,255,.10)",   // main thick edge
          "inset 0 0 0 3px rgba(255,255,255,.22)",    // fine highlight line
          "inset 0 28px 60px rgba(255,255,255,.08)",  // top polish
          "inset 0 -48px 80px rgba(0,0,0,.55)"        // base depth
        ].join(", "),
      }}
    />
  );

  // 2) Iridescent edge band (only near the perimeter)
  const EdgeIridescence = () => (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        // colorful conic sheen that will be masked to the rim
        background:
          "conic-gradient(from 210deg at 50% 55%, " +
          "rgba(255,255,255,.00) 0deg," +
          "rgba(135,206,250,.20) 40deg," +   // light blue
          "rgba(255,192,203,.18) 110deg," +  // pink
          "rgba(173,255,47,.18) 190deg," +   // lime
          "rgba(255,255,255,.00) 270deg)",
        mixBlendMode: "screen",

        // mask out the center so the conic only hugs the edges:
        // transparent (alpha 0) at center, opaque (#000) at the outer ring
        WebkitMaskImage:
          "radial-gradient(closest-side, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 45%, #000 50%)",
        maskImage:
          "radial-gradient(closest-side, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 45%, #000 50%)",
        // more gradual transition to avoid visible circle edge
      }}
    />
  );

  // Animated diagonal sheen that sweeps on hover
  const Sheen = ({ active }) => (
    <div
      className="dc-sheen"
      style={{
        position: "absolute",
        inset: "-30% -10%",
        pointerEvents: "none",
        transform: active ? "translateX(120%)" : "translateX(-120%)",
        transition: "transform .9s cubic-bezier(.22,.61,.36,1)",
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0, transform: "rotate(20deg)",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.16) 45%, rgba(255,255,255,.33) 50%, rgba(255,255,255,.16) 55%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "screen",
          filter: "blur(.5px)",
        }}
      />
      <div
        style={{
          position: "absolute", inset: 0, transform: "rotate(20deg)",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 40%, rgba(255,255,255,.08) 50%, rgba(255,255,255,0) 60%)",
          mixBlendMode: "screen",
          filter: "blur(8px)",
        }}
      />
    </div>
  );

  // Title chip — glass pill with gradient stroke + shine
  const title = (pos, align="left", active, direction="up") => ({
    position: "absolute",
    ...pos,
    padding: ".85rem 1.05rem",
    color: "#fff",
    fontWeight: 800,
    letterSpacing: ".02em",
    textAlign: align,
    borderRadius: 12,
    background:
      "linear-gradient(180deg, rgba(18,18,18,.70), rgba(18,18,18,.55))",
    border: "1px solid transparent",
    backgroundClip: "padding-box",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,.20), 0 10px 24px rgba(0,0,0,.45)",
    transform: active ? `translateY(${direction === "down" ? "4px" : "-4px"}) scale(1.02)` : "none",
    transition: "transform .4s cubic-bezier(.22,.61,.36,1)",
    positionShine: "relative",
  });

  const titleShine = {
    position: "absolute",
    top: 0, left: 0, right: 0, height: 2,
    borderRadius: 12,
    background: "linear-gradient(90deg, rgba(255,255,255,.35), rgba(255,255,255,.0))",
    pointerEvents: "none",
  };

  // pointer tracking to move the bloom toward cursor
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursor({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <section style={{
      background: "linear-gradient(to bottom, #ffffff 0%, rgba(88, 28, 135, 0.15) 15%, rgba(88, 28, 135, 0.3) 50%, rgba(88, 28, 135, 0.15) 85%, #ffffff 100%)",
      padding: "2.75rem 2rem",
      position: "relative"
    }}>
      <style>{css}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={grid}>
          {/* WEDDINGS — top-left cut, title bottom-right — Rose */}
          <div
            style={card}
            onMouseEnter={() => setHovered("weddings")}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={onMove}
            aria-label="Weddings"
          >
            <div style={shapeBox("polygon(45% 0, 100% 0, 100% 100%, 0 100%, 0 45%)")}>
              <div className="dc-bg" style={bg("https://images.unsplash.com/photo-1519741497674-611481863552?w=1600", hovered==="weddings")} />
              <div style={gem("rgba(255, 76, 152, .42)", "rgba(255, 120, 180, .26)")} />
              <EdgeIridescence />
              <EdgeGlass />
              <Sheen active={hovered==="weddings"} />
              <div style={title({ bottom: "1rem", right: "1rem" }, "right", hovered==="weddings", "down")}>
                WEDDINGS
                <div style={titleShine} />
              </div>
            </div>
          </div>

          {/* PROPERTY — top-right cut, title bottom-left — Emerald */}
          <div
            style={card}
            onMouseEnter={() => setHovered("property")}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={onMove}
            aria-label="The Property"
          >
            <div style={shapeBox("polygon(0 0, 55% 0, 100% 45%, 100% 100%, 0 100%)")}>
              <div className="dc-bg" style={bg("https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600", hovered==="property")} />
              <div style={gem("rgba(0, 200, 140, .42)", "rgba(40, 255, 180, .26)")} />
              <EdgeIridescence />
              <EdgeGlass />
              <Sheen active={hovered==="property"} />
              <div style={title({ bottom: "1rem", left: "1rem" }, "left", hovered==="property", "down")}>
                THE PROPERTY
                <div style={titleShine} />
              </div>
            </div>
          </div>

          {/* GALLERY — bottom-left cut, title top-right — Sapphire */}
          <div
            style={card}
            onMouseEnter={() => setHovered("gallery")}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={onMove}
            aria-label="Photo Gallery"
          >
            <div style={shapeBox("polygon(0 0, 100% 0, 100% 100%, 45% 100%, 0 55%)")}>
              <div className="dc-bg" style={bg("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600", hovered==="gallery")} />
              <div style={gem("rgba(70, 150, 255, .40)", "rgba(20, 90, 255, .25)")} />
              <EdgeIridescence />
              <EdgeGlass />
              <Sheen active={hovered==="gallery"} />
              <div style={title({ top: "1rem", right: "1rem" }, "right", hovered==="gallery")}>
                PHOTO GALLERY
                <div style={titleShine} />
              </div>
            </div>
          </div>

          {/* ENGAGEMENT — bottom-right cut, title top-left — Amber */}
          <div
            style={card}
            onMouseEnter={() => setHovered("engagement")}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={onMove}
            aria-label="Engagement Parties"
          >
            <div style={shapeBox("polygon(0 0, 100% 0, 100% 55%, 55% 100%, 0 100%)")}>
              <div className="dc-bg" style={bg("https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1600", hovered==="engagement")} />
              <div style={gem("rgba(255, 186, 0, .42)", "rgba(255, 140, 0, .26)")} />
              <EdgeIridescence />
              <EdgeGlass />
              <Sheen active={hovered==="engagement"} />
              <div style={title({ top: "1rem", left: "1rem" }, "left", hovered==="engagement")}>
                ENGAGEMENT PARTIES
                <div style={titleShine} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ComponentLibrary() {
  useEffect(() => {
    // Example scroll effect for header
    const handleScroll = () => {
      const header = document.getElementById('header')
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // FAQ accordion click handler
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // Toggle active class
        const wasActive = item.classList.contains('active')

        // Close all items
        faqItems.forEach(i => i.classList.remove('active'))

        // Open clicked item if it wasn't active
        if (!wasActive) {
          item.classList.add('active')
        }
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      faqItems.forEach(item => {
        item.replaceWith(item.cloneNode(true))
      })
    }
  }, [])

  return (
    <>
      {/* Header Pattern */}
      <header id="header" className="header-enhanced">
        <div className="content-wrapper">
          <div className="header-content">
            <div className="logo-wrapper">
              <div className="logo-circle">RR</div>
              <div className="logo-text">
                <div className="logo-name">Component Library</div>
                <div className="logo-tagline">Design Patterns</div>
              </div>
            </div>
            <nav>
              <ul className="nav-menu">
                <li><a href="#buttons">Buttons</a></li>
                <li><a href="#typography">Typography</a></li>
                <li><a href="#cards">Cards</a></li>
                <li><a href="#sections">Sections</a></li>
                <li><a href="#feature-blocks">Feature Blocks</a></li>
                <li><a href="#forms">Forms</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#social-proof">Social Proof</a></li>
                <li><a href="#feature-cards">Feature Cards</a></li>
              </ul>
            </nav>
            <div className="header-cta">
              <a href="#contact" className="romantic-button">Contact Us</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Pattern */}
      <section className="hero-enhanced">
        <div className="romantic-overlay"></div>
        <div className="content-wrapper">
          <div className="hero-content">
            <div className="hero-year-badge">Pattern Library</div>
            <div className="script-accent">Reusable Components</div>
            <h1 className="hero-headline">
              Rum River<br />
              <span className="hero-accent">Design System</span>
            </h1>
            <p className="lead hero-lead">
              A collection of beautifully crafted, ready-to-use components for building elegant wedding venue websites.
            </p>
            <div className="hero-buttons">
              <button className="romantic-button primary">Get Started</button>
              <button className="romantic-button outline">Learn More</button>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Explore Components</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Buttons Section */}
      <section id="buttons" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Interactive Elements</div>
            <h2 className="section-title">Button Components</h2>
            <p className="lead">Elegant buttons with hover animations and multiple variants</p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            <button className="romantic-button primary">Primary Button</button>
            <button className="romantic-button outline">Outline Button</button>
            <button className="romantic-button">Default Button</button>
          </div>

          <div className="code-block">
            <h4>Usage:</h4>
            <pre>{`<button className="romantic-button primary">Primary Button</button>
<button className="romantic-button outline">Outline Button</button>
<button className="romantic-button">Default Button</button>`}</pre>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section id="typography" className="section" style={{ background: 'var(--blush-pink)' }}>
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Beautiful Text</div>
            <h2 className="section-title">Typography System</h2>
          </div>

          <div className="typography-examples">
            <div className="script-accent">Script Accent Text</div>
            <h1 className="hero-headline">Hero Headline Text</h1>
            <h2 className="section-title">Section Title</h2>
            <p className="lead">Lead paragraph text with increased font size and reduced opacity for hierarchy.</p>
            <p>Regular body text with standard styling for comfortable reading.</p>
          </div>

          <div className="code-block">
            <h4>Usage:</h4>
            <pre>{`<div className="script-accent">Script Text</div>
<h1 className="hero-headline">Hero Headline</h1>
<h2 className="section-title">Section Title</h2>
<p className="lead">Lead paragraph</p>`}</pre>
          </div>
        </div>
      </section>

      {/* Card Components */}
      <section id="cards" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Content Containers</div>
            <h2 className="section-title">Card Components</h2>
          </div>

          <div className="venue-grid">
            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="Card Example" width="800" height="600" />
                <div className="venue-card-badge">Featured</div>
              </div>
              <div className="venue-card-content">
                <h3>Venue Card Pattern</h3>
                <p>Cards with image reveals, badges, and structured content areas.</p>
                <div className="venue-features">
                  <span>• Feature one</span>
                  <span>• Feature two</span>
                  <span>• Feature three</span>
                </div>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800" alt="Card Example" width="800" height="600" />
                <div className="venue-card-badge">Popular</div>
              </div>
              <div className="venue-card-content">
                <h3>Image Hover Effect</h3>
                <p>Hover over cards to see the image scale and overlay animations.</p>
                <div className="venue-features">
                  <span>• Smooth transitions</span>
                  <span>• Scale effect</span>
                  <span>• Gradient overlay</span>
                </div>
              </div>
            </div>

            <div className="venue-card image-reveal">
              <div className="venue-card-image">
                <img src="https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800" alt="Card Example" width="800" height="600" />
                <div className="venue-card-badge">New</div>
              </div>
              <div className="venue-card-content">
                <h3>Flexible Layout</h3>
                <p>Responsive grid that adapts to different screen sizes.</p>
                <div className="venue-features">
                  <span>• Auto-fit columns</span>
                  <span>• Consistent spacing</span>
                  <span>• Mobile-friendly</span>
                </div>
              </div>
            </div>
          </div>

          <div className="code-block">
            <h4>Usage:</h4>
            <pre>{`<div className="venue-card image-reveal">
  <div className="venue-card-image">
    <img src="..." alt="..." />
    <div className="venue-card-badge">Badge</div>
  </div>
  <div className="venue-card-content">
    <h3>Title</h3>
    <p>Description</p>
    <div className="venue-features">
      <span>• Feature</span>
    </div>
  </div>
</div>`}</pre>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section" style={{ background: 'var(--cream-pearl)' }}>
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Pricing Tables</div>
            <h2 className="section-title">Package Cards</h2>
          </div>

          <div className="packages-grid">
            <div className="package-card">
              <div className="package-header">
                <h3>Basic</h3>
                <div className="package-price">
                  <span className="amount">$3,500</span>
                  <span className="detail">starting price</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature">✓ Feature one</div>
                <div className="feature">✓ Feature two</div>
                <div className="feature">✓ Feature three</div>
                <div className="feature">✓ Feature four</div>
              </div>
              <button className="romantic-button outline full-width">Learn More</button>
            </div>

            <div className="package-card featured">
              <div className="package-badge">Most Popular</div>
              <div className="package-header">
                <h3>Premium</h3>
                <div className="package-price">
                  <span className="amount">$5,500</span>
                  <span className="detail">starting price</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature">✓ Everything in Basic</div>
                <div className="feature">✓ Extra feature one</div>
                <div className="feature">✓ Extra feature two</div>
                <div className="feature">✓ Extra feature three</div>
                <div className="feature">✓ Extra feature four</div>
              </div>
              <button className="romantic-button primary full-width">Get Started</button>
            </div>

            <div className="package-card">
              <div className="package-header">
                <h3>Enterprise</h3>
                <div className="package-price">
                  <span className="amount">$8,500</span>
                  <span className="detail">starting price</span>
                </div>
              </div>
              <div className="package-features">
                <div className="feature">✓ Everything in Premium</div>
                <div className="feature">✓ Pro feature one</div>
                <div className="feature">✓ Pro feature two</div>
                <div className="feature">✓ Pro feature three</div>
              </div>
              <button className="romantic-button outline full-width">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section id="sections" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Layout Patterns</div>
            <h2 className="section-title">Content Grid Layouts</h2>
          </div>

          <div className="content-grid">
            <div className="experience-content">
              <div className="script-accent">Left Column</div>
              <h2 className="section-title">Golden Ratio Grid</h2>
              <p className="lead">
                Two-column layout using the golden ratio (1:1.618) for visual harmony.
              </p>

              <div className="experience-features">
                <div className="feature-item">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-content">
                    <h4>Visual Balance</h4>
                    <p>Content and images sized according to golden ratio proportions.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <div className="feature-content">
                    <h4>Responsive Design</h4>
                    <p>Automatically stacks on mobile for optimal readability.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-content">
                    <h4>Flexible Content</h4>
                    <p>Works with any combination of text, images, or components.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="experience-image image-reveal">
              <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" alt="Layout Example" width="800" height="600" />
            </div>
          </div>

          <div className="code-block">
            <h4>Usage:</h4>
            <pre>{`<div className="content-grid">
  <div className="experience-content">
    {/* Left column content */}
  </div>
  <div className="experience-image image-reveal">
    <img src="..." alt="..." />
  </div>
</div>`}</pre>
          </div>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="section" style={{ background: 'var(--blush-pink)' }}>
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Social Proof</div>
            <h2 className="section-title">Testimonial Cards</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "Beautiful design system with elegant components that are easy to customize and implement."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Jane & John Doe</div>
                <div className="author-detail">Married June 2024</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "The attention to detail and cohesive styling made building our website a breeze."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Sarah & Mike Smith</div>
                <div className="author-detail">Married August 2024</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="five-star-rating">★★★★★</div>
              <blockquote className="testimonial-quote">
                "Responsive, accessible, and absolutely gorgeous. Everything we needed in one place."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-name">Emily & David Johnson</div>
                <div className="author-detail">Married October 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered Feature Blocks */}
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

          <div className="code-block">
            <h4>Usage:</h4>
            <pre>{`<div className="block-item">
  <div className="block-content">
    <div className="number">01</div>
    <h3>Title</h3>
    <p>Description...</p>
    <ul className="feature-list">
      <li>Feature one</li>
      <li>Feature two</li>
    </ul>
    <a href="#" className="btn-outline">CTA Button</a>
  </div>
  <div className="block-image">
    <img src="..." alt="..." />
    <span className="image-badge">Badge Text</span>
  </div>
</div>

<!-- Reverse layout -->
<div className="block-item reverse">
  <!-- Same structure -->
</div>`}</pre>
          </div>
        </div>
      </section>

      {/* Form Components */}
      <section id="forms" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">User Input</div>
            <h2 className="section-title">Form Components</h2>
          </div>

          <div className="contact-form-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form className="contact-form">
              <div className="form-header">
                <h3>Contact Form Pattern</h3>
                <p>Clean, accessible form with validation-ready styling.</p>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" />
              </div>

              <div className="form-group">
                <label>Select Option</label>
                <select>
                  <option>Choose an option</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="romantic-button primary full-width">
                Submit Form
              </button>
            </form>
          </div>

          <div className="code-block">
            <h4>Usage:</h4>
            <pre>{`<div className="form-group">
  <label>Field Label</label>
  <input type="text" placeholder="Placeholder" />
</div>

<div className="form-grid">
  <div className="form-group">...</div>
  <div className="form-group">...</div>
</div>`}</pre>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="trust-section">
        <div className="content-wrapper">
          <div className="script-accent center">Trust Indicators</div>
          <div className="trust-badges">
            <div className="trust-badge">Badge One</div>
            <div className="trust-badge">Badge Two</div>
            <div className="trust-badge">Badge Three</div>
            <div className="trust-badge">Badge Four</div>
            <div className="trust-badge">Badge Five</div>
          </div>
          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Stories Gallery */}
      <section className="love-stories-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Real Love Stories</div>
            <h2 className="section-title">Weddings at the Barn</h2>
            <p className="lead">Every celebration tells a unique story of love, laughter, and happily ever after.</p>
          </div>

          <div className="wedding-gallery">
            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200" alt="Emma & James Wedding" width="1200" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Emma & James</div>
                <div className="gallery-season">Summer 2024</div>
                <div className="gallery-details">200 Guests • Garden Ceremony</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800" alt="Sarah & Michael Wedding" width="800" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Sarah & Michael</div>
                <div className="gallery-season">Fall 2024</div>
                <div className="gallery-details">150 Guests • Barn Reception</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800" alt="Rachel & David Wedding" width="800" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Rachel & David</div>
                <div className="gallery-season">Spring 2024</div>
                <div className="gallery-details">175 Guests • Vineyard Ceremony</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="Jessica & Ryan Wedding" width="800" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Jessica & Ryan</div>
                <div className="gallery-season">Summer 2024</div>
                <div className="gallery-details">125 Guests • Forest Ceremony</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800" alt="Amanda & Chris Wedding" width="800" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Amanda & Chris</div>
                <div className="gallery-season">Winter 2023</div>
                <div className="gallery-details">75 Guests • Intimate Celebration</div>
              </div>
            </div>

            <div className="gallery-item image-reveal">
              <img src="https://images.unsplash.com/photo-1525772764200-be829a350797?w=1200" alt="Lauren & Mark Wedding" width="1200" height="800" />
              <div className="gallery-overlay">
                <div className="gallery-couple-names">Lauren & Mark</div>
                <div className="gallery-season">Fall 2023</div>
                <div className="gallery-details">250 Guests • Full Weekend</div>
              </div>
            </div>
          </div>

          <div className="gallery-footer">
            <button className="romantic-button outline">View Full Gallery</button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Pattern */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="faq-header">
            <p className="script-font">Questions?</p>
            <h2>Everything You Need to Know</h2>
          </div>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can we bring our own vendors?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Absolutely! We believe in giving you complete creative freedom. Bring your preferred caterers, florists, photographers, and musicians. We also have a list of trusted local vendors if you need recommendations.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>What's included with the venue rental?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Your rental includes exclusive use of our historic barn, ceremony sites, bridal suite, groom's quarters, tables, chairs, and access to our 400-acre property for photos. We also provide setup and breakdown assistance.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you have indoor and outdoor options?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Yes! Our property offers multiple ceremony sites including the vineyard overlook, oak grove, and brookside garden. Our barn provides a beautiful indoor space that can be decorated to match any theme or season.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How far in advance should we book?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>We recommend booking 12-18 months in advance, especially for peak season dates (May through October). However, we sometimes have last-minute availability, so don't hesitate to call us at 612-801-0546.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Pattern */}
      <section id="blog" className="blog-section">
        <div className="container">
          <div className="blog-header">
            <h2>Stories from the Barn</h2>
            <p>Insights, inspiration, and behind-the-scenes moments</p>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600" alt="Fall Wedding" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Planning Tips</span>
                <h3>Creating Your Perfect Fall Wedding</h3>
                <p>Discover how autumn colors and seasonal touches can make your wedding day magical...</p>
                <div className="blog-meta">
                  <span>October 15, 2024</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600" alt="Real Wedding" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Real Weddings</span>
                <h3>Sarah & Michael's Rustic Romance</h3>
                <p>A beautiful June celebration that perfectly blended elegant details with countryside charm...</p>
                <div className="blog-meta">
                  <span>September 28, 2024</span>
                  <span>8 min read</span>
                </div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600" alt="Winter Wedding" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Seasonal Guide</span>
                <h3>Winter Wonderland Weddings</h3>
                <p>Embrace the magic of winter with cozy details and breathtaking snowy landscapes...</p>
                <div className="blog-meta">
                  <span>September 12, 2024</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Quote */}
      <section id="social-proof" className="social-proof">
        <div className="container social-content">
          <div className="social-logos">
            <span className="social-logo">THE KNOT</span>
            <span className="social-logo">WEDDINGWIRE</span>
            <span className="social-logo">MARTHA STEWART</span>
            <span className="social-logo">MINNESOTA BRIDE</span>
          </div>
          <p className="social-text">
            "Rum River Barn isn't just a venue—it's <span className="highlight">where dreams come to life</span>.
            Their commitment to saying 'yes' to every couple's vision sets them apart as
            <span className="highlight">Minnesota's most accommodating wedding destination</span>."
          </p>
        </div>
      </section>

      <DiamondCards />

      {/* Breadcrumbs Pattern */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <span>
            <a href="/">Home</a>
          </span>
          <span>
            <span className="breadcrumb-separator">/</span>
            <a href="/components">Components</a>
          </span>
          <span>
            <span className="breadcrumb-separator">/</span>
            <span className="current">Breadcrumbs</span>
          </span>
        </div>
      </nav>

      {/* Floating CTA */}
      <div className="floating-cta">
        <span>💡</span>
        Component Library
      </div>

      <style jsx>{`
        .code-block {
          background: var(--deep-forest);
          color: var(--cream-pearl);
          padding: 2rem;
          border-radius: 8px;
          margin-top: 3rem;
          overflow-x: auto;
        }

        .code-block h4 {
          color: var(--champagne-gold);
          margin-bottom: 1rem;
          font-family: var(--font-display);
        }

        .code-block pre {
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
          white-space: pre-wrap;
        }

        .typography-examples > * {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </>
  )
}
