import { useEffect, useState } from 'react'

/**
 * ID: DIAMOND_CARDS_001
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
      {/* Internal ID tag */}
      <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: DIAMOND_CARDS_001</div>
        <div style={{ fontFamily: 'Dancing Script, cursive', fontSize: '1.75rem', color: '#7A1CAC', marginBottom: '0.5rem' }}>Gemstone Effect</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#2C2416', marginBottom: '1rem' }}>Diamond Cards</h2>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.125rem', color: '#4A3426', maxWidth: '800px', margin: '0 auto' }}>
          Interactive diamond-shaped cards with iridescent edges, animated sheen effects, and hover interactions
        </p>
      </div>
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
      {/* ComponentLibrary-specific elegant hover overrides */}
      <style>{`
        /* Apply elegant hover animation to all card types in ComponentLibrary */
        .package-card {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .package-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15) !important;
        }
        .package-card.featured:hover {
          transform: scale(1.05) translateY(-8px) !important;
        }
        
        .testimonial-card {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        .blog-card {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .blog-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15) !important;
        }
        
        /* Keep image animations synced with parent timing */
        .blog-card:hover .blog-image img {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
      `}</style>
      
      {/* ID: HEADER_001 - Header Pattern */}
      <div style={{ padding: '0.5rem 2rem', background: '#f5f5f5', borderBottom: '1px solid #ddd', textAlign: 'center' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px' }}>ID: HEADER_001</div>
      </div>
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
                <li><a href="#venue-tabs">Venue Tabs</a></li>
                <li><a href="#trust-badges">Trust Badges</a></li>
              </ul>
            </nav>
            <div className="header-cta">
              <a href="#contact" className="romantic-button">Contact Us</a>
            </div>
          </div>
        </div>
      </header>

      {/* ID: HERO_001 - Hero Pattern */}
      <section className="hero-enhanced">
        <div className="romantic-overlay"></div>
        <div className="content-wrapper">
          <div style={{ position: 'relative', zIndex: 2, paddingTop: '1rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>ID: HERO_001</div>
          </div>
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

      {/* ID: BUTTONS_001 - Buttons Section */}
      <section id="buttons" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: BUTTONS_001</div>
            <div className="script-accent">Interactive Elements</div>
            <h2 className="section-title">Button Components</h2>
            <p className="lead">Elegant buttons with hover animations and multiple variants</p>
          </div>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            <button className="romantic-button primary">Primary Button</button>
            <button className="romantic-button outline">Outline Button</button>
            <button className="romantic-button">Default Button</button>
          </div>

        </div>
      </section>

      {/* ID: TYPOGRAPHY_001 - Typography Section */}
      <section id="typography" className="section" style={{ background: 'var(--blush-pink)' }}>
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: TYPOGRAPHY_001</div>
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

        </div>
      </section>

      {/* ID: VENUE_CARDS_001 - Card Components */}
      <section id="cards" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: VENUE_CARDS_001</div>
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

        </div>
      </section>

      {/* ID: PACKAGE_CARDS_001 - Package Cards */}
      <section className="section" style={{ background: 'var(--cream-pearl)' }}>
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: PACKAGE_CARDS_001</div>
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

      {/* ID: TWO_COLUMN_LAYOUT_001 - Two Column Layout */}
      <section id="sections" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: TWO_COLUMN_LAYOUT_001</div>
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

        </div>
      </section>

      {/* ID: TESTIMONIAL_CARDS_001 - Testimonial Cards */}
      <section className="section" style={{ background: 'var(--blush-pink)' }}>
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: TESTIMONIAL_CARDS_001</div>
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

      {/* ID: VENDOR_CARDS_001 - Vendor Directory Cards */}
      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: VENDOR_CARDS_001</div>
            <div className="script-accent">Business Listings</div>
            <h2 className="section-title">Vendor Directory Cards</h2>
            <p className="lead">Clean, information-focused cards for vendor listings with contact details</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Sprunk Entertainment
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)',
                marginBottom: '1.5rem'
              }}>
                Professional DJ and entertainment services for weddings and special events.
              </p>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--warm-walnut)',
                letterSpacing: '0.02em'
              }}>
                📞 612-440-0777
              </div>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Princeton Floral
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)',
                marginBottom: '1.5rem'
              }}>
                Local florist specializing in wedding arrangements, bridal bouquets, and venue decorations.
              </p>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--warm-walnut)',
                letterSpacing: '0.02em'
              }}>
                📞 763-389-3433
              </div>
            </div>

            <div className="testimonial-card">
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 400,
                color: 'var(--warm-walnut)',
                marginBottom: '1rem'
              }}>
                Fable Catering
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--sage-green)',
                marginBottom: '1.5rem'
              }}>
                Creative catering services with custom menu options for special events.
              </p>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--warm-walnut)',
                letterSpacing: '0.02em'
              }}>
                📞 612-500-6838
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ID: FEATURE_BLOCKS_001 - Numbered Feature Blocks */}
      <section id="feature-blocks" className="alternating-blocks">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: FEATURE_BLOCKS_001</div>
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

      {/* ID: FORMS_001 - Form Components */}
      <section id="forms" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: FORMS_001</div>
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

        </div>
      </section>

      {/* ID: STATS_001 - Stats Section */}
      <section className="trust-section">
        <div className="content-wrapper">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>ID: STATS_001</div>
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

      {/* ID: LOVE_STORIES_GALLERY_001 - Love Stories Gallery */}
      <section className="love-stories-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: LOVE_STORIES_GALLERY_001</div>
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

      {/* ID: FAQ_ACCORDION_001 - FAQ Accordion Pattern */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="faq-header">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>ID: FAQ_ACCORDION_001</div>
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

      {/* ID: BLOG_CARDS_001 - Blog Cards Pattern */}
      <section id="blog" className="blog-section">
        <div className="container">
          <div className="blog-header">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>ID: BLOG_CARDS_001</div>
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

      {/* ID: SOCIAL_PROOF_001 - Social Proof Quote */}
      <section id="social-proof" className="social-proof">
        <div className="container social-content">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '1rem', textAlign: 'center' }}>ID: SOCIAL_PROOF_001</div>
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

      {/* ID: HERO_CARDS_001 - Hero Image Cards - 4 Column */}
      <section id="hero-cards" className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: HERO_CARDS_001</div>
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead">From the historic barn to enchanted forests, explore the stunning settings for your celebration</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginTop: '3rem'
          }}>
            {/* Historic Barn Card */}
            <div className="block-image event-hero-card" style={{ position: 'relative', height: '400px', cursor: 'pointer', overflow: 'hidden', transition: 'transform 0.4s ease', transform: 'translateY(0)' }}>
              <img
                src="/images/wedding-32-1j9.jpg"
                alt="The Historic Barn"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                  transition: 'filter 0.4s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                transition: 'opacity 0.4s ease'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.35rem 1.25rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '20px',
                  minWidth: '180px'
                }}>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.025em',
                    margin: 0
                  }}>The Historic Barn</h3>
                </div>
              </div>
            </div>

            {/* Vineyard Card */}
            <div className="block-image event-hero-card" style={{ position: 'relative', height: '400px', cursor: 'pointer', overflow: 'hidden', transition: 'transform 0.4s ease', transform: 'translateY(0)' }}>
              <img
                src="/images/d4-7e6.jpg"
                alt="The Vineyard"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                  transition: 'filter 0.4s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                transition: 'opacity 0.4s ease'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.35rem 1.25rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '20px',
                  minWidth: '180px'
                }}>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.025em',
                    margin: 0
                  }}>The Vineyard</h3>
                </div>
              </div>
            </div>

            {/* Oak Forest Card */}
            <div className="block-image event-hero-card" style={{ position: 'relative', height: '400px', cursor: 'pointer', overflow: 'hidden', transition: 'transform 0.4s ease', transform: 'translateY(0)' }}>
              <img
                src="/images/6-9e8.jpg"
                alt="Oak Forest"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                  transition: 'filter 0.4s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                transition: 'opacity 0.4s ease'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.35rem 1.25rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '20px',
                  minWidth: '180px'
                }}>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.025em',
                    margin: 0
                  }}>Oak Forest</h3>
                </div>
              </div>
            </div>

            {/* Bridal Suite Card */}
            <div className="block-image event-hero-card" style={{ position: 'relative', height: '400px', cursor: 'pointer', overflow: 'hidden', transition: 'transform 0.4s ease', transform: 'translateY(0)' }}>
              <img
                src="/images/d16-8j3.jpg"
                alt="Bridal Suite"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                  transition: 'filter 0.4s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                transition: 'opacity 0.4s ease'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.35rem 1.25rem',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '20px',
                  minWidth: '180px'
                }}>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.025em',
                    margin: 0
                  }}>Bridal Suite</h3>
                </div>
              </div>
            </div>

          </div>

          <style jsx>{`
            .event-hero-card {
              transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
            .event-hero-card:hover {
              transform: translateY(-8px) !important;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            }
            .event-hero-card:hover img {
              filter: brightness(1) !important;
            }
            .event-hero-card:hover > div:nth-child(2) {
              opacity: 0.3;
            }
          `}</style>
        </div>
      </section>

      {/* ID: TRUST_BADGES_001 - Trust Badges & Stats Section */}
      <section id="trust-badges" className="trust-section">
        <div className="content-wrapper">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem', textAlign: 'center' }}>ID: TRUST_BADGES_001</div>
          <div className="script-accent center">As Featured In</div>
          <div className="trust-badges">
            <div className="trust-badge">The Knot</div>
            <div className="trust-badge">WeddingWire</div>
            <div className="trust-badge">Martha Stewart Weddings</div>
            <div className="trust-badge">Minnesota Bride</div>
            <div className="trust-badge">Style Me Pretty</div>
          </div>
          <div className="trust-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Couples Married</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Star Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ID: VENUE_TABS_001 - Explore Our Spaces - Tabbed Venue Display */}
      <section id="venue-tabs" className="section-warm">
        <div className="content-wrapper venue-content">
          <div className="venue-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: VENUE_TABS_001</div>
            <h2 className="section-title">Explore Our Spaces</h2>
            <p className="lead">Every corner tells a story, every space creates memories</p>
          </div>
          <div className="venue-tabs">
            <button className="venue-tab active">The Barn</button>
            <button className="venue-tab">Bridal Suite</button>
            <button className="venue-tab">Groom's Quarters</button>
            <button className="venue-tab">Garden Pavilion</button>
          </div>
          <div className="venue-display">
            <div className="venue-main-image">
              <img src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800" alt="The Historic Barn" width="800" height="500" />
            </div>
            <div className="venue-details">
              <h3>The Historic Barn</h3>
              <p>Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.</p>
              <div className="venue-features">
                <div className="venue-feature">
                  <h5>Capacity</h5>
                  <p>Up to 300 guests</p>
                </div>
                <div className="venue-feature">
                  <h5>Features</h5>
                  <p>Built-in bar & dance floor</p>
                </div>
                <div className="venue-feature">
                  <h5>Lighting</h5>
                  <p>Edison bulbs & chandeliers</p>
                </div>
                <div className="venue-feature">
                  <h5>Climate</h5>
                  <p>Heated & air conditioned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ID: BREADCRUMBS_001 - Breadcrumbs Pattern */}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: BREADCRUMBS_001</div>
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

      {/* ID: FLOATING_CTA_001 - Floating CTA */}
      <div style={{ padding: '1rem 2rem', textAlign: 'center', background: '#f5f5f5' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: FLOATING_CTA_001</div>
      </div>
      <div className="floating-cta">
        <span>💡</span>
        Component Library
      </div>

      {/* ID: SCHEDULE_VISIT_FORM_001 - Schedule Your Visit Form (ARCHIVED from home page) */}
      <section className="contact-section section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: SCHEDULE_VISIT_FORM_001</div>
            <div className="script-accent">Archived Component</div>
            <h2 className="section-title">Schedule Your Visit Form</h2>
            <p className="lead">Original contact form from home page - archived for reference</p>
          </div>
          <div className="contact-grid">
            <div className="contact-content">
              <div className="script-accent">Let's Start Planning</div>
              <h2 className="section-title">Schedule Your Visit</h2>
              <p className="lead">
                Ready to see where your love story will unfold? Schedule a private tour
                and let us show you why Rum River Wedding Barn is the perfect setting for your celebration.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h4>Visit Us</h4>
                    <p>12500 Rum River Drive<br />Princeton, MN 55371</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h4>Call Us</h4>
                    <p>(763) 555-BARN<br />Available 7 days a week</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h4>Email Us</h4>
                    <p>hello@rumriverweddings.com<br />We respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-header">
                  <h3>Book Your Tour</h3>
                  <p>Fill out the form below and we'll be in touch within 24 hours.</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Bride's Name</label>
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label>Partner's Name</label>
                    <input type="text" placeholder="Partner's name" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="(123) 456-7890" />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Wedding Date</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Guest Count</label>
                    <select>
                      <option>Select guest count</option>
                      <option>50-100 guests</option>
                      <option>100-150 guests</option>
                      <option>150-200 guests</option>
                      <option>200+ guests</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Tell us about your dream wedding</label>
                  <textarea rows={4} placeholder="Share your vision with us..."></textarea>
                </div>

                <button type="submit" className="romantic-button primary full-width">
                  Schedule My Tour
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ID: CONTACT_FORM_001 - Let's Connect Form Section */}
      <section id="lets-connect-form" className="cta-contact-section">
        <div className="cta-contact-container">
          <div className="cta-contact-header">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: CONTACT_FORM_001</div>
            <p className="script-font">Let&apos;s Connect</p>
            <h2>Start Planning Your Perfect Day</h2>
            <p>We&apos;d love to hear about your vision and show you around our beautiful venue.</p>
          </div>
          <form className="cta-contact-form" id="contactForm">
            <div className="cta-form-row">
              <div className="cta-form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="cta-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="cta-form-row">
              <div className="cta-form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="cta-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div className="cta-form-row">
              <div className="cta-form-group">
                <label htmlFor="eventDate">Preferred Event Date</label>
                <input type="date" id="eventDate" name="eventDate" />
              </div>
              <div className="cta-form-group">
                <label htmlFor="guestCount">Estimated Guest Count</label>
                <select id="guestCount" name="guestCount">
                  <option value="">Select Range</option>
                  <option value="50-100">50-100 Guests</option>
                  <option value="100-150">100-150 Guests</option>
                  <option value="150-200">150-200 Guests</option>
                  <option value="200+">200+ Guests</option>
                </select>
              </div>
            </div>
            <div className="cta-form-group cta-full-width">
              <label htmlFor="message">Tell Us About Your Dream Wedding</label>
              <textarea id="message" name="message" placeholder="Share your vision with us..."></textarea>
            </div>
            <button type="submit" className="cta-submit-button">
              <span>SEND MESSAGE</span>
            </button>
          </form>
        </div>
      </section>

      {/* ID: MAP_DIRECTIONS_001 - Map & Directions Section */}
      <section id="map-directions" className="map-section">
        <div className="map-container">
          <div className="map-info">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: MAP_DIRECTIONS_001</div>
            <h2>Find Your Way to Forever</h2>
            <div className="location-details">
              <div className="location-item">
                <div className="location-icon">📍</div>
                <div className="location-text">
                  <h4>Address</h4>
                  <p>12500 Rum River Drive<br />Princeton, MN 55371</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">🚗</div>
                <div className="location-text">
                  <h4>Easy Access From</h4>
                  <p>45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">✈️</div>
                <div className="location-text">
                  <h4>Nearest Airport</h4>
                  <p>Minneapolis-St. Paul International<br />55 miles (1 hour drive)</p>
                </div>
              </div>
              <div className="location-item">
                <div className="location-icon">🏨</div>
                <div className="location-text">
                  <h4>Accommodations</h4>
                  <p>Partner hotels in Princeton & Milaca<br />Group rates available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map-embed">
            <div className="map-placeholder">
              <p>Interactive Map</p>
              <p style={{fontSize: '16px', marginTop: '10px'}}>Click to view on Google Maps</p>
            </div>
          </div>
        </div>
      </section>

      {/* ID: FOOTER_PATTERNS_001 - Footer Patterns */}
      <section id="footer-patterns" style={{ background: 'white', padding: '0' }}>
        <div className="content-wrapper" style={{ padding: '4rem 2rem 0' }}>
          <div className="section-header center">
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', marginBottom: '0.5rem' }}>ID: FOOTER_PATTERNS_001</div>
            <div className="script-accent">Footer Components</div>
            <h2 className="section-title">Footer Patterns</h2>
            <p className="lead">Two footer styles - rendered exactly as they appear on the site</p>
          </div>
        </div>

        {/* ID: FOOTER_SIMPLE_CTA_001 - Simple CTA Footer */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ padding: '1rem 2rem', background: '#f5f5f5', borderTop: '1px solid #ddd' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', textAlign: 'center' }}>ID: FOOTER_SIMPLE_CTA_001</div>
          </div>
          <div style={{
            padding: '60px 20px',
            background: 'linear-gradient(135deg, #4A3426 0%, #6B4E3D 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <h2 style={{
                fontSize: '48px',
                marginBottom: '20px',
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                lineHeight: 1.2
              }}>Begin Your Love Story</h2>
              <p style={{
                fontSize: '18px',
                marginBottom: '40px',
                opacity: 0.9,
                lineHeight: 1.6
              }}>
                Let us help you create the wedding of your dreams<br />
                at Rum River Barn & Vineyard
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                marginBottom: '50px',
                flexWrap: 'wrap'
              }}>
                <a href="#" style={{
                  background: '#D4A574',
                  color: 'white',
                  padding: '15px 40px',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}>SCHEDULE A TOUR</a>
                <a href="#" style={{
                  background: '#D4A574',
                  color: 'white',
                  padding: '15px 40px',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  transition: 'all 0.3s ease'
                }}>REQUEST PRICING</a>
              </div>
              <p style={{
                fontSize: '16px',
                opacity: 0.8,
                lineHeight: 1.8
              }}>
                📍 12500 Rum River Drive, Princeton, MN 55371<br />
                📞 (555) 123-4567 | ✉️ weddings@rumriverbarn.com
              </p>
            </div>
          </div>
        </div>

        {/* ID: FOOTER_ENHANCED_001 - Enhanced 3-Column Footer */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{ padding: '1rem 2rem', background: '#f5f5f5', borderTop: '1px solid #ddd' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#666', letterSpacing: '1px', textAlign: 'center' }}>ID: FOOTER_ENHANCED_001</div>
          </div>
          <footer style={{
            padding: '60px 20px 40px',
            background: '#2C2416',
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
                marginBottom: '40px',
                textAlign: 'left'
              }}>
                <div>
                  <h4 style={{
                    color: 'white',
                    marginBottom: '1rem',
                    fontSize: '1.125rem',
                    fontFamily: 'Playfair Display, serif'
                  }}>Rum River Barn</h4>
                  <p style={{ lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
                    Minnesota&apos;s premier wedding venue<br />
                    where dreams come to life
                  </p>
                </div>
                <div>
                  <h4 style={{
                    color: 'white',
                    marginBottom: '1rem',
                    fontSize: '1.125rem',
                    fontFamily: 'Playfair Display, serif'
                  }}>Visit Us</h4>
                  <p style={{ lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif' }}>
                    42618 78th Street<br />
                    Hillman, MN 56338<br />
                    (320) 492-8584
                  </p>
                </div>
                <div>
                  <h4 style={{
                    color: 'white',
                    marginBottom: '1rem',
                    fontSize: '1.125rem',
                    fontFamily: 'Playfair Display, serif'
                  }}>Follow Along</h4>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="#" style={{ color: '#D4A574', textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>Facebook</a>
                    <a href="#" style={{ color: '#D4A574', textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>Instagram</a>
                    <a href="#" style={{ color: '#D4A574', textDecoration: 'none', fontFamily: 'Montserrat, sans-serif' }}>Pinterest</a>
                  </div>
                </div>
              </div>
              <div style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '2rem',
                fontSize: '0.875rem',
                textAlign: 'center'
              }}>
                <p>&copy; 2025 Rum River Barn. All rights reserved. | Designed with love in Minnesota</p>
              </div>
            </div>
          </footer>
        </div>
      </section>

      <style jsx>{`
        /* Contact Form Section Styles */
        .cta-contact-section {
          padding: 120px 40px;
          background: linear-gradient(135deg, #4A3426 0%, #6B4E3D 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-contact-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 165, 116, 0.1) 0%, transparent 70%);
          animation: rotate 30s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cta-contact-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta-contact-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .cta-contact-header h2 {
          font-size: 48px;
          line-height: 1.2;
          color: white;
          margin-bottom: 15px;
          letter-spacing: 2px;
          font-family: 'Playfair Display', serif;
        }

        .cta-contact-header .script-font {
          font-size: 28px;
          color: #D4A574;
          margin-bottom: 20px;
          font-family: 'Dancing Script', cursive;
        }

        .cta-contact-header p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
        }

        .cta-contact-form {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .cta-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .cta-form-group {
          position: relative;
        }

        .cta-form-group.cta-full-width {
          grid-column: 1 / -1;
        }

        .cta-form-group label {
          display: block;
          margin-bottom: 10px;
          color: #2C2416;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .cta-form-group input,
        .cta-form-group select,
        .cta-form-group textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid rgba(139, 99, 55, 0.1);
          border-radius: 10px;
          font-size: 16px;
          font-family: 'Georgia', serif;
          transition: all 0.3s ease;
          background: white;
        }

        .cta-form-group input:focus,
        .cta-form-group select:focus,
        .cta-form-group textarea:focus {
          outline: none;
          border-color: #D4A574;
          box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
        }

        .cta-form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .cta-submit-button {
          background: #D4A574;
          color: white;
          padding: 18px 50px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 6px 25px rgba(212, 165, 116, 0.4);
          display: block;
          margin: 40px auto 0;
          position: relative;
          overflow: hidden;
        }

        .cta-submit-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: #6B4E3D;
          transform: translate(-50%, -50%);
          transition: width 0.6s ease, height 0.6s ease;
        }

        .cta-submit-button span {
          position: relative;
          z-index: 1;
        }

        .cta-submit-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .cta-submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(212, 165, 116, 0.5);
        }

        /* Map Section Styles */
        .map-section {
          padding: 0;
          background: #FAF6F2;
          position: relative;
        }

        .map-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 600px;
        }

        .map-info {
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: white;
        }

        .map-info h2 {
          font-size: 42px;
          line-height: 1.25;
          color: #4A3426;
          margin-bottom: 30px;
          font-family: 'Playfair Display', serif;
        }

        .location-details {
          margin-bottom: 40px;
        }

        .location-item {
          display: flex;
          align-items: start;
          margin-bottom: 25px;
          color: #2C2416;
        }

        .location-icon {
          width: 40px;
          height: 40px;
          background: #D4A574;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-right: 20px;
          flex-shrink: 0;
        }

        .location-text h4 {
          color: #4A3426;
          margin-bottom: 5px;
          font-size: 18px;
          font-family: 'Playfair Display', serif;
        }

        .location-text p {
          color: #7A8B7F;
          line-height: 1.6;
          margin: 0;
        }

        .map-embed {
          background: #4A3426;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          position: relative;
          overflow: hidden;
        }

        .map-embed::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(122, 139, 127, 0.9) 0%, rgba(74, 52, 38, 0.9) 100%);
        }

        .map-placeholder {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        @media (max-width: 768px) {
          .cta-contact-section {
            padding: 80px 20px;
          }

          .cta-contact-header h2 {
            font-size: 36px;
          }

          .cta-form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cta-contact-form {
            padding: 30px;
          }

          .map-container {
            grid-template-columns: 1fr;
          }

          .map-info {
            padding: 40px 20px;
          }
        }

        .typography-examples > * {
          margin-bottom: 1.5rem;
        }

        /* Explore Our Spaces - Tabbed Venue Display */
        .venue-content {
          padding: 3rem 0;
        }

        .venue-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .venue-tabs {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .venue-tab {
          padding: 0.875rem 1.875rem;
          background: transparent;
          border: 2px solid var(--primary-plum);
          color: var(--primary-plum);
          font-family: var(--font-display);
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .venue-tab.active,
        .venue-tab:hover {
          background: var(--primary-plum);
          color: white;
        }

        .venue-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .venue-main-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
        }

        .venue-main-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        .venue-details h3 {
          font-size: 2.625rem;
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          font-family: var(--font-display);
        }

        .venue-details > p {
          font-size: 1.125rem;
          color: var(--text-medium);
          line-height: 1.8;
          margin-bottom: 2.5rem;
        }

        .venue-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.875rem;
        }

        .venue-feature h5 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--accent-gold);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .venue-feature p {
          font-size: 1rem;
          color: var(--text-dark);
        }

        @media (max-width: 768px) {
          .venue-display {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .venue-tabs {
            gap: 0.625rem;
          }

          .venue-tab {
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
          }

          .venue-details h3 {
            font-size: 2rem;
          }

          .venue-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      {/* Event Components Section */}
      <EventComponents />

      {/* Animation Style Guide */}
      <AnimationStyleGuide />
    </>
  )
}

// Event Components Section
function EventComponents() {
  const sampleEventData = [
    {
      id: 'weddings',
      name: 'Wedding Events',
      description: 'Celebrate your love story in our tranquil, charming barn setting with indoor and outdoor spaces.',
      features: ['Indoor and outdoor ceremony spaces', 'Year-round venue availability', 'Picturesque grounds for photography'],
      image: { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800', alt: 'Wedding Events', width: 800, height: 600 }
    },
    {
      id: 'engagement',
      name: 'Engagement Parties',
      description: 'Host your engagement celebration in our White Barn Loft overlooking acres of natural beauty.',
      features: ['Bring both families together', 'Rustic venue setting', 'Vineyard views'],
      image: { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', alt: 'Engagement Parties', width: 800, height: 600 }
    },
    {
      id: 'birthday',
      name: 'Birthday Parties',
      description: 'Whether turning 16 or 60, celebrate your birthday in our beautiful, recently renovated rustic space.',
      features: ['Recently renovated rustic space', 'Suitable for all ages', 'Seasonal outdoor mezzanine'],
      image: { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800', alt: 'Birthday Parties', width: 800, height: 600 }
    }
  ];

  return (
    <>
      <style>{`
        /* Event Components CSS */
        .rrb-section {
          display: grid;
          gap: 1.25rem;
          color: var(--warm-walnut);
          padding: 2rem 0;
        }

        .rrb-header h2 {
          margin: 0;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          line-height: 1.2;
          font-family: var(--font-display);
          color: var(--warm-walnut);
        }
        .rrb-header p {
          margin: 0.25rem 0 0 0;
          color: var(--sage-green);
        }

        .rrb-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .rrb-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        .rrb-card__body {
          display: grid;
          gap: .75rem;
          padding: 1rem 1.25rem 1.25rem;
        }
        .rrb-card__title {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.2;
          font-family: var(--font-display);
          color: var(--warm-walnut);
        }
        .rrb-card__desc {
          margin: 0;
          color: var(--sage-green);
          line-height: 1.6;
        }
        .rrb-card__bullets {
          display: grid; 
          gap: .5rem; 
          list-style: none; 
          padding: 0; 
          margin: 0;
        }
        .rrb-card__bullets li { 
          display: grid; 
          grid-template-columns: auto 1fr; 
          gap: .5rem; 
          font-size: 0.875rem;
          color: var(--sage-green);
        }
        .rrb-dot { 
          margin-top: .25rem; 
          color: var(--warm-walnut);
          font-weight: 600;
        }

        .rrb-btn {
          display: inline-block; 
          text-decoration: none;
          margin-top: .5rem; 
          padding: .6rem 1rem;
          background: var(--warm-walnut); 
          color: #fff; 
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .rrb-btn:hover { 
          background: var(--sage-green);
          transform: translateY(-2px);
        }

        .rrb-aspect {
          position: relative; 
          width: 100%;
        }
        .rrb-aspect::before { 
          content: ""; 
          display: block; 
          padding-top: var(--rrb-aspect-ratio, 56.25%); 
        }
        .rrb-aspect > img {
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          display: block;
        }

        .rrb-carousel {
          overflow-x: auto;
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 85%;
          gap: 1rem;
          padding: .25rem .25rem .5rem;
          scroll-snap-type: x mandatory;
        }
        .rrb-carousel > * { 
          scroll-snap-align: start; 
        }

        .rrb-grid {
          display: none;
        }

        @media (min-width: 900px) {
          .rrb-grid {
            display: grid; 
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
          .rrb-carousel { 
            display: none; 
          }
        }

        .rrb-hero-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          padding: 2rem 0;
        }

        @media (max-width: 768px) {
          .rrb-hero-strip {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>

      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Event Components</div>
            <h2 className="section-title">Modern Event Display Components</h2>
            <p className="lead">Responsive components for showcasing venue events with scroll-snap on mobile and grid on desktop</p>
          </div>

          {/* Hero Strip Component */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.5rem', 
              color: 'var(--warm-walnut)', 
              marginBottom: '1rem' 
            }}>
              Hero Strip Component
            </h3>
            <div className="rrb-hero-strip">
              <div style={{ display: 'grid', gap: '.5rem' }}>
                <h1 style={{ 
                  margin: 0, 
                  fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', 
                  lineHeight: 1.15,
                  fontFamily: 'var(--font-display)',
                  color: 'var(--warm-walnut)'
                }}>
                  Events & Celebrations
                </h1>
                <p style={{ 
                  margin: 0, 
                  color: 'var(--sage-green)',
                  fontSize: '1.125rem',
                  lineHeight: 1.6
                }}>
                  From intimate gatherings to grand celebrations, our historic barn venue creates unforgettable memories
                </p>
                <div>
                  <a className="rrb-btn" href="/contact">Check availability</a>
                </div>
              </div>
              <div className="rrb-aspect" style={{ '--rrb-aspect-ratio': '66.67%' }}>
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800" 
                  alt="Wedding celebration at barn venue"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Event Carousel Component */}
          <div>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.5rem', 
              color: 'var(--warm-walnut)', 
              marginBottom: '1rem' 
            }}>
              Event Carousel Component
            </h3>
            <EventCarousel 
              title="Events & Celebrations"
              intro="Swipe through our most popular event options or browse the grid on desktop"
              items={sampleEventData}
            />
          </div>
        </div>
      </section>
    </>
  );
}

// Event Card Component
function EventCard({ data }) {
  const { name, description, features, image, ctaHref = "/contact", ctaLabel = "Inquire" } = data;
  return (
    <article id={data.id} className="rrb-card">
      <div className="rrb-aspect" style={{ '--rrb-aspect-ratio': '66.67%' }}>
        <img 
          src={image.src}
          alt={image.alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="rrb-card__body">
        <h3 className="rrb-card__title">{name}</h3>
        <p className="rrb-card__desc">{description}</p>
        <ul className="rrb-card__bullets">
          {features.map((feature, index) => (
            <li key={index}>
              <span className="rrb-dot">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div>
          <a className="rrb-btn" href={ctaHref}>{ctaLabel}</a>
        </div>
      </div>
    </article>
  );
}

// Event Carousel Component
function EventCarousel({ title = "Events & Celebrations", intro = "Swipe through our most popular event options or browse the grid on desktop.", items }) {
  return (
    <section className="rrb-section">
      <header className="rrb-header">
        <h2>{title}</h2>
        <p>{intro}</p>
      </header>

      {/* Mobile: horizontal scroll-snap */}
      <div className="rrb-carousel" aria-label="Event categories">
        {items.map((item) => (
          <div key={item.id} style={{ scrollSnapAlign: 'start' }}>
            <EventCard data={item} />
          </div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="rrb-grid">
        {items.map((item) => (
          <EventCard key={`${item.id}-grid`} data={item} />
        ))}
      </div>
    </section>
  );
}

// Animation Style Guide Component
function AnimationStyleGuide() {
  const animationExamples = [
    {
      name: 'Primary Card Hover',
      timing: '1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: 'translateY(-8px)',
      shadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      description: 'Elegant slow rise for main content cards',
      usage: 'Venue cards, gallery cards, feature showcases'
    },
    {
      name: 'Button Hover',
      timing: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transform: 'translateY(-3px)',
      shadow: '0 8px 30px rgba(212, 165, 116, 0.3)',
      description: 'Quick responsive lift with subtle bounce',
      usage: 'CTAs, form buttons, navigation items'
    },
    {
      name: 'Image Zoom',
      timing: '1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: 'scale(1.08)',
      shadow: 'none',
      description: 'Slow graceful zoom for image overlays',
      usage: 'Gallery images, hero images, card images'
    },
    {
      name: 'Micro Interaction',
      timing: '0.3s ease',
      transform: 'translateY(-2px)',
      shadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      description: 'Subtle feedback for small elements',
      usage: 'Links, tags, badges, small buttons'
    }
  ];

  const cssVariables = [
    { name: '--transition-elegant', value: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)', description: 'Slow, luxurious movement' },
    { name: '--transition-smooth', value: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', description: 'Responsive with bounce' },
    { name: '--transition', value: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', description: 'Standard easing' }
  ];

  return (
    <>
      <style>{`
        .animation-guide-demo {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.08);
          cursor: pointer;
        }

        .animation-guide-demo.elegant-hover {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animation-guide-demo.elegant-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .animation-guide-demo.button-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .animation-guide-demo.button-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(212, 165, 116, 0.3);
        }

        .animation-guide-demo.zoom-hover {
          overflow: hidden;
        }
        .animation-guide-demo.zoom-hover img {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .animation-guide-demo.zoom-hover:hover img {
          transform: scale(1.08);
        }

        .animation-guide-demo.micro-hover {
          transition: all 0.3s ease;
        }
        .animation-guide-demo.micro-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .animation-timeline {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 1rem 0;
        }

        .animation-bar {
          flex: 1;
          height: 4px;
          background: var(--cream-pearl);
          position: relative;
          border-radius: 2px;
          overflow: hidden;
        }

        .animation-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: var(--warm-walnut);
          width: 0;
        }

        .animation-guide-demo.elegant-hover:hover .animation-progress {
          width: 100%;
          transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animation-guide-demo.button-hover:hover .animation-progress {
          width: 100%;
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .animation-guide-demo.micro-hover:hover .animation-progress {
          width: 100%;
          transition: width 0.3s ease;
        }

        .timing-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--cream-pearl);
          color: var(--warm-walnut);
          border-radius: 20px;
          font-size: 0.75rem;
          font-family: 'Monaco', monospace;
          margin: 0.5rem 0.5rem 0 0;
        }

        .usage-tag {
          display: inline-block;
          padding: 0.125rem 0.5rem;
          background: rgba(124, 139, 127, 0.1);
          color: var(--sage-green);
          border-radius: 12px;
          font-size: 0.75rem;
          margin: 0.25rem;
        }
      `}</style>

      <section className="section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Design System</div>
            <h2 className="section-title">Animation Style Guide</h2>
            <p className="lead">Consistent hover animations that create a luxurious, cohesive experience</p>
          </div>

          {/* Philosophy Section */}
          <div style={{
            background: 'var(--cream-pearl)',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '3rem'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              color: 'var(--warm-walnut)',
              marginBottom: '1rem'
            }}>
              Animation Philosophy
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '1.5rem'
            }}>
              <div>
                <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem' }}>🎯 Purposeful</h4>
                <p style={{ color: 'var(--sage-green)', fontSize: '0.875rem' }}>
                  Every animation should guide attention and provide feedback, not distract
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem' }}>⏱️ Elegant Timing</h4>
                <p style={{ color: 'var(--sage-green)', fontSize: '0.875rem' }}>
                  Slow, graceful transitions (1.2s) for primary actions create a luxurious feel
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem' }}>📐 Consistent Scale</h4>
                <p style={{ color: 'var(--sage-green)', fontSize: '0.875rem' }}>
                  Vertical lifts of 2px, 3px, or 8px maintain visual hierarchy
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem' }}>💫 Natural Easing</h4>
                <p style={{ color: 'var(--sage-green)', fontSize: '0.875rem' }}>
                  Cubic-bezier curves that feel organic and sophisticated
                </p>
              </div>
            </div>
          </div>

          {/* CSS Variables Reference */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--warm-walnut)',
              marginBottom: '1rem'
            }}>
              Core Animation Variables
            </h3>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid var(--cream-pearl)'
            }}>
              {cssVariables.map((variable, index) => (
                <div key={index} style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr auto',
                  gap: '1rem',
                  padding: '1rem 0',
                  borderBottom: index < cssVariables.length - 1 ? '1px solid var(--cream-pearl)' : 'none'
                }}>
                  <code style={{
                    color: 'var(--warm-walnut)',
                    fontFamily: 'Monaco, monospace',
                    fontSize: '0.875rem'
                  }}>
                    {variable.name}
                  </code>
                  <code style={{
                    color: 'var(--sage-green)',
                    fontFamily: 'Monaco, monospace',
                    fontSize: '0.75rem'
                  }}>
                    {variable.value}
                  </code>
                  <span style={{
                    color: 'var(--sage-green)',
                    fontSize: '0.875rem'
                  }}>
                    {variable.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Animation Examples */}
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            color: 'var(--warm-walnut)',
            marginBottom: '1.5rem'
          }}>
            Standard Hover Patterns
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {/* Primary Card Example */}
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--warm-walnut)', marginBottom: '1rem' }}>
                Primary Card Hover
              </h4>
              <div className="animation-guide-demo elegant-hover">
                <h5 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem' }}>
                  Venue Card Example
                </h5>
                <p style={{ color: 'var(--sage-green)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Hover to see the elegant 1.2s rise
                </p>
                <div className="animation-timeline">
                  <span style={{ fontSize: '0.75rem', color: 'var(--sage-green)' }}>0s</span>
                  <div className="animation-bar">
                    <div className="animation-progress"></div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--sage-green)' }}>1.2s</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <div className="timing-badge">1.2s elegant</div>
                  <div className="timing-badge">translateY(-8px)</div>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <span className="usage-tag">Venue Cards</span>
                  <span className="usage-tag">Gallery</span>
                  <span className="usage-tag">Features</span>
                </div>
              </div>
            </div>

            {/* Button Example */}
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--warm-walnut)', marginBottom: '1rem' }}>
                Button Hover
              </h4>
              <div className="animation-guide-demo button-hover">
                <h5 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem' }}>
                  CTA Button Example
                </h5>
                <p style={{ color: 'var(--sage-green)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Hover for quick responsive lift
                </p>
                <div className="animation-timeline">
                  <span style={{ fontSize: '0.75rem', color: 'var(--sage-green)' }}>0s</span>
                  <div className="animation-bar">
                    <div className="animation-progress"></div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--sage-green)' }}>0.4s</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <div className="timing-badge">0.4s bounce</div>
                  <div className="timing-badge">translateY(-3px)</div>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <span className="usage-tag">Buttons</span>
                  <span className="usage-tag">CTAs</span>
                  <span className="usage-tag">Forms</span>
                </div>
              </div>
            </div>

            {/* Image Zoom Example */}
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--warm-walnut)', marginBottom: '1rem' }}>
                Image Zoom
              </h4>
              <div className="animation-guide-demo zoom-hover">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800"
                  alt="Gallery hover example"
                />
                <div style={{ padding: '1rem' }}>
                  <p style={{ color: 'var(--sage-green)', fontSize: '0.875rem' }}>
                    Hover for graceful zoom
                  </p>
                  <div style={{ marginTop: '1rem' }}>
                    <div className="timing-badge">1.2s elegant</div>
                    <div className="timing-badge">scale(1.08)</div>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <span className="usage-tag">Gallery</span>
                    <span className="usage-tag">Heroes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Interaction Example */}
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--warm-walnut)', marginBottom: '1rem' }}>
                Micro Interaction
              </h4>
              <div className="animation-guide-demo micro-hover">
                <h5 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem' }}>
                  Link/Tag Example
                </h5>
                <p style={{ color: 'var(--sage-green)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  Hover for subtle feedback
                </p>
                <div className="animation-timeline">
                  <span style={{ fontSize: '0.75rem', color: 'var(--sage-green)' }}>0s</span>
                  <div className="animation-bar">
                    <div className="animation-progress"></div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--sage-green)' }}>0.3s</span>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <div className="timing-badge">0.3s ease</div>
                  <div className="timing-badge">translateY(-2px)</div>
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <span className="usage-tag">Links</span>
                  <span className="usage-tag">Tags</span>
                  <span className="usage-tag">Badges</span>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Guide */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            border: '2px solid var(--cream-pearl)'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--warm-walnut)',
              marginBottom: '1.5rem'
            }}>
              Implementation Guide
            </h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem' }}>
                For Primary Content Cards (Venues, Events, Features)
              </h4>
              <pre style={{
                background: 'var(--cream-pearl)',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                overflow: 'auto'
              }}>
{`.card {
  transition: var(--transition-elegant);
  /* or: transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94); */
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}`}
              </pre>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem' }}>
                For Buttons and CTAs
              </h4>
              <pre style={{
                background: 'var(--cream-pearl)',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                overflow: 'auto'
              }}>
{`.button {
  transition: var(--transition-smooth);
  /* or: transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); */
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(212, 165, 116, 0.3);
}`}
              </pre>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem' }}>
                For Images within Cards
              </h4>
              <pre style={{
                background: 'var(--cream-pearl)',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                overflow: 'auto'
              }}>
{`.card-image {
  overflow: hidden;
}

.card-image img {
  transition: var(--transition-elegant);
  /* Matches parent card timing for cohesion */
}

.card:hover .card-image img {
  transform: scale(1.08);
}`}
              </pre>
            </div>

            <div>
              <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem' }}>
                Animation Hierarchy Rules
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0
              }}>
                <li style={{
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  background: 'var(--cream-pearl)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>👑</span>
                  <div>
                    <strong style={{ color: 'var(--warm-walnut)' }}>Primary Cards:</strong>
                    <span style={{ color: 'var(--sage-green)', marginLeft: '0.5rem' }}>
                      1.2s elegant timing, 8px lift, large shadow
                    </span>
                  </div>
                </li>
                <li style={{
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  background: 'var(--cream-pearl)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🎯</span>
                  <div>
                    <strong style={{ color: 'var(--warm-walnut)' }}>CTAs & Buttons:</strong>
                    <span style={{ color: 'var(--sage-green)', marginLeft: '0.5rem' }}>
                      0.4s smooth bounce, 3px lift, medium shadow
                    </span>
                  </div>
                </li>
                <li style={{
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  background: 'var(--cream-pearl)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>🖼️</span>
                  <div>
                    <strong style={{ color: 'var(--warm-walnut)' }}>Images:</strong>
                    <span style={{ color: 'var(--sage-green)', marginLeft: '0.5rem' }}>
                      1.2s elegant timing, scale 1.08, no shadow
                    </span>
                  </div>
                </li>
                <li style={{
                  padding: '0.75rem',
                  background: 'var(--cream-pearl)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>✨</span>
                  <div>
                    <strong style={{ color: 'var(--warm-walnut)' }}>Micro Elements:</strong>
                    <span style={{ color: 'var(--sage-green)', marginLeft: '0.5rem' }}>
                      0.3s ease, 2px lift, subtle shadow
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Best Practices */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, var(--cream-pearl), white)',
            borderRadius: '12px'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--warm-walnut)',
              marginBottom: '1.5rem'
            }}>
              Best Practices
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div>
                <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  ✅ DO
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  fontSize: '0.875rem',
                  color: 'var(--sage-green)'
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Use --transition-elegant for primary cards</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Match timing across related elements</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Keep vertical lifts consistent (2px, 3px, 8px)</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Use scale transforms sparingly (1.08 max)</li>
                  <li>• Add will-change: transform for performance</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--warm-walnut)', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  ❌ DON'T
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  fontSize: '0.875rem',
                  color: 'var(--sage-green)'
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Mix timing speeds randomly</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Use transforms larger than 10px</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Animate too many properties</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Forget to test on mobile</li>
                  <li>• Use instant transitions (0s)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
