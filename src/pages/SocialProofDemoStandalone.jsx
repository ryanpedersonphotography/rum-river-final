export default function SocialProofDemoStandalone() {
  // Testimonial data
  const testimonialsData = [
    {
      id: 1,
      quote: "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.",
      author: "Sarah & Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=300&fit=crop&crop=face&auto=format&q=80",
      galleryLink: "/gallery"
    },
    {
      id: 2,
      quote: "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.",
      author: "Emma & James Wilson",
      avatar: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop&crop=face&auto=format&q=80",
      galleryLink: "/gallery"
    },
    {
      id: 3,
      quote: "The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn't have asked for more.",
      author: "Amanda & Chris Thompson",
      avatar: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop&crop=face&auto=format&q=80",
      galleryLink: "/gallery"
    }
  ];

  // Star Icon Component
  const StarIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      style={{
        width: '20px',
        height: '20px',
        color: '#E4C896', // champagne-gold
        transition: 'all 0.3s ease'
      }}
    >
      <path 
        fillRule="evenodd" 
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  return (
    <>
      {/* Social Proof Light Theme Component */}
      <section style={{
        background: '#F4E4E1', // blush-pink
        padding: '100px 0',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.75rem',
              color: '#9D6B7B', // dusty-rose
              marginBottom: '1rem',
              display: 'block'
            }}>
              Love Letters
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '3rem',
              color: '#6B4E3D', // warm-walnut
              marginBottom: '1.5rem',
              margin: '0 0 1.5rem 0'
            }}>
              What Couples Say
            </h2>
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              color: '#2C2416', // text-dark
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Real stories from real couples who celebrated at Rum River Barn
            </p>
          </div>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {testimonialsData.map((testimonial) => (
              <a
                key={testimonial.id}
                href={testimonial.galleryLink}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget.querySelector('.testimonial-card');
                  const overlay = e.currentTarget.querySelector('.avatar-overlay');
                  const cta = e.currentTarget.querySelector('.wedding-gallery-cta');
                  const avatar = e.currentTarget.querySelector('.couple-avatar');
                  const avatarImg = e.currentTarget.querySelector('.avatar-image');
                  
                  if (card) {
                    card.style.transform = 'translateY(-8px)';
                    card.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
                    const afterElement = card.querySelector('.card-underline');
                    if (afterElement) afterElement.style.width = '100%';
                  }
                  if (overlay) overlay.style.opacity = '0.8';
                  if (cta) {
                    cta.style.opacity = '0.85';
                    cta.style.transform = 'translateY(0)';
                  }
                  if (avatar) avatar.style.transform = 'scale(1.05)';
                  if (avatarImg) {
                    avatarImg.style.transform = 'scale(1.05)';
                    avatarImg.style.filter = 'brightness(1.08) contrast(1.03)';
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget.querySelector('.testimonial-card');
                  const overlay = e.currentTarget.querySelector('.avatar-overlay');
                  const cta = e.currentTarget.querySelector('.wedding-gallery-cta');
                  const avatar = e.currentTarget.querySelector('.couple-avatar');
                  const avatarImg = e.currentTarget.querySelector('.avatar-image');
                  
                  if (card) {
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
                    const afterElement = card.querySelector('.card-underline');
                    if (afterElement) afterElement.style.width = '0';
                  }
                  if (overlay) overlay.style.opacity = '0';
                  if (cta) {
                    cta.style.opacity = '0';
                    cta.style.transform = 'translateY(10px)';
                  }
                  if (avatar) avatar.style.transform = 'scale(1)';
                  if (avatarImg) {
                    avatarImg.style.transform = 'scale(1)';
                    avatarImg.style.filter = 'brightness(1.05) contrast(1.02)';
                  }
                }}
              >
                <div 
                  className="testimonial-card"
                  style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(20px) saturate(1.2)',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Champagne Gold Underline */}
                  <div 
                    className="card-underline"
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '0',
                      height: '3px',
                      background: '#E4C896', // champagne-gold
                      transition: 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />

                  {/* Testimonial Quote */}
                  <blockquote style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.125rem',
                    lineHeight: '1.6',
                    color: '#6B4E3D', // warm-walnut
                    fontStyle: 'italic',
                    margin: '0 0 2rem 0',
                    position: 'relative',
                    zIndex: '1',
                    textAlign: 'left'
                  }}>
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Five Star Rating */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    margin: '1.5rem 0'
                  }}>
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>

                  {/* Testimonial Author */}
                  <div style={{
                    paddingTop: '1rem',
                    position: 'relative',
                    zIndex: '1'
                  }}>
                    {/* Couple Avatar */}
                    <div 
                      className="couple-avatar"
                      style={{
                        position: 'relative',
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 1rem',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    >
                      <img
                        className="avatar-image"
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          filter: 'brightness(1.05) contrast(1.02)'
                        }}
                      />
                      {/* Champagne Gold Overlay */}
                      <div 
                        className="avatar-overlay"
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.3) 0%, rgba(212, 165, 116, 0.5) 50%, rgba(212, 165, 116, 0.7) 100%)',
                          borderRadius: '50%',
                          opacity: '0',
                          transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          backdropFilter: 'blur(4px)'
                        }}
                      />
                    </div>

                    {/* Author Name */}
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#9D6B7B', // dusty-rose
                      marginBottom: '0.5rem'
                    }}>
                      {testimonial.author}
                    </div>

                    {/* Wedding Gallery CTA */}
                    <div 
                      className="wedding-gallery-cta"
                      style={{
                        color: '#9D6B7B', // dusty-rose
                        opacity: '0',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        marginTop: '0.5rem',
                        letterSpacing: '0.02em',
                        transform: 'translateY(10px)',
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    >
                      View Their Wedding Gallery
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Dark Theme Component */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        color: 'white',
        padding: '100px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Dark Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.75rem',
              color: '#E4C896', // champagne-gold
              marginBottom: '1rem',
              display: 'block'
            }}>
              Love Letters
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '3rem',
              color: '#ffffff',
              marginBottom: '1.5rem',
              margin: '0 0 1.5rem 0'
            }}>
              What Couples Say - Dark Theme
            </h2>
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.8)',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Real stories from real couples who celebrated at Rum River Barn
            </p>
          </div>

          {/* Dark Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {testimonialsData.map((testimonial) => (
              <a
                key={`dark-${testimonial.id}`}
                href={testimonial.galleryLink}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget.querySelector('.dark-testimonial-card');
                  const overlay = e.currentTarget.querySelector('.dark-avatar-overlay');
                  const cta = e.currentTarget.querySelector('.dark-wedding-gallery-cta');
                  const avatar = e.currentTarget.querySelector('.dark-couple-avatar');
                  const avatarImg = e.currentTarget.querySelector('.dark-avatar-image');
                  
                  if (card) {
                    card.style.transform = 'translateY(-8px)';
                    card.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)';
                    card.style.borderColor = 'rgba(212, 165, 116, 0.3)';
                    card.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
                    const afterElement = card.querySelector('.dark-card-underline');
                    if (afterElement) afterElement.style.width = '100%';
                  }
                  if (overlay) overlay.style.opacity = '0.9';
                  if (cta) {
                    cta.style.opacity = '0.9';
                    cta.style.transform = 'translateY(0)';
                    cta.style.color = 'rgba(255, 255, 255, 0.9)';
                  }
                  if (avatar) avatar.style.transform = 'scale(1.05)';
                  if (avatarImg) {
                    avatarImg.style.transform = 'scale(1.05)';
                    avatarImg.style.filter = 'brightness(1.0) contrast(1.15) saturate(1.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget.querySelector('.dark-testimonial-card');
                  const overlay = e.currentTarget.querySelector('.dark-avatar-overlay');
                  const cta = e.currentTarget.querySelector('.dark-wedding-gallery-cta');
                  const avatar = e.currentTarget.querySelector('.dark-couple-avatar');
                  const avatarImg = e.currentTarget.querySelector('.dark-avatar-image');
                  
                  if (card) {
                    card.style.transform = 'translateY(0)';
                    card.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)';
                    card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                    const afterElement = card.querySelector('.dark-card-underline');
                    if (afterElement) afterElement.style.width = '0';
                  }
                  if (overlay) overlay.style.opacity = '0';
                  if (cta) {
                    cta.style.opacity = '0';
                    cta.style.transform = 'translateY(10px)';
                    cta.style.color = 'rgba(255, 255, 255, 0.7)';
                  }
                  if (avatar) avatar.style.transform = 'scale(1)';
                  if (avatarImg) {
                    avatarImg.style.transform = 'scale(1)';
                    avatarImg.style.filter = 'brightness(0.9) contrast(1.1) saturate(1.1)';
                  }
                }}
              >
                <div 
                  className="dark-testimonial-card"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
                    backdropFilter: 'blur(20px) saturate(1.2)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Dark Champagne Gold Underline */}
                  <div 
                    className="dark-card-underline"
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '0',
                      height: '3px',
                      background: 'linear-gradient(90deg, #E4C896 0%, rgba(212, 165, 116, 0.8) 50%, #E4C896 100%)',
                      boxShadow: '0 0 15px rgba(212, 165, 116, 0.5)',
                      transition: 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />

                  {/* Dark Testimonial Quote */}
                  <blockquote style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.125rem',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontStyle: 'italic',
                    margin: '0 0 2rem 0',
                    position: 'relative',
                    zIndex: '1',
                    textAlign: 'left'
                  }}>
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Dark Five Star Rating */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    margin: '1.5rem 0'
                  }}>
                    {[...Array(5)].map((_, index) => (
                      <svg 
                        key={index}
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        style={{
                          width: '20px',
                          height: '20px',
                          color: '#E4C896', // champagne-gold
                          filter: 'drop-shadow(0 0 8px rgba(212, 165, 116, 0.3))',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Dark Testimonial Author */}
                  <div style={{
                    paddingTop: '1rem',
                    position: 'relative',
                    zIndex: '1'
                  }}>
                    {/* Dark Couple Avatar */}
                    <div 
                      className="dark-couple-avatar"
                      style={{
                        position: 'relative',
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 1rem',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    >
                      <img
                        className="dark-avatar-image"
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          filter: 'brightness(0.9) contrast(1.1) saturate(1.1)'
                        }}
                      />
                      {/* Dark Champagne Gold Overlay */}
                      <div 
                        className="dark-avatar-overlay"
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          bottom: '0',
                          background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.4) 0%, rgba(212, 165, 116, 0.6) 50%, rgba(212, 165, 116, 0.8) 100%)',
                          borderRadius: '50%',
                          opacity: '0',
                          transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          backdropFilter: 'blur(4px)',
                          boxShadow: 'inset 0 0 20px rgba(212, 165, 116, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)'
                        }}
                      />
                    </div>

                    {/* Dark Author Name */}
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#E4C896', // champagne-gold
                      textShadow: '0 0 10px rgba(212, 165, 116, 0.3)',
                      marginBottom: '0.5rem'
                    }}>
                      {testimonial.author}
                    </div>

                    {/* Dark Wedding Gallery CTA */}
                    <div 
                      className="dark-wedding-gallery-cta"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        opacity: '0',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        marginTop: '0.5rem',
                        letterSpacing: '0.02em',
                        transform: 'translateY(10px)',
                        transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      }}
                    >
                      View Their Wedding Gallery
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section style={{ 
        background: '#FFFCF8', // cream-pearl
        padding: '4rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#2C2416', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Social Proof Testimonials Component</h2>
            <p style={{ color: '#6B4E3D', fontFamily: "'Montserrat', sans-serif" }}>Interactive testimonial cards with synchronized 1.2s animations and dual theme support</p>
          </div>
          
          {/* HTML Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>HTML Structure</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`<!-- Social Proof Testimonials Section -->
<section className="testimonials-section">
  <div className="content-wrapper">
    <!-- Section Header -->
    <div className="section-header center">
      <div className="script-accent">Love Letters</div>
      <h2 className="section-title">What Couples Say</h2>
      <p className="lead">
        Real stories from real couples who celebrated at Rum River Barn
      </p>
    </div>

    <!-- Testimonials Grid -->
    <div className="testimonials-grid">
      <!-- Testimonial Card -->
      <a href="/gallery" className="testimonial-card-link">
        <div className="testimonial-card">
          <!-- Champagne Gold Underline Animation -->
          <div className="card-underline"></div>

          <!-- Testimonial Quote -->
          <blockquote className="testimonial-quote">
            "From our first tour to our last dance, the team at Rum River made our dreams come true.
            The barn was absolutely magical, and our guests are still talking about how perfect everything was."
          </blockquote>

          <!-- Five Star Rating with Heroicons -->
          <div className="five-star-rating">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="star-icon">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
            <!-- 4 more identical star SVGs -->
          </div>

          <!-- Testimonial Author Section -->
          <div className="testimonial-author">
            <!-- Couple Avatar with Champagne Gold Overlay -->
            <div className="couple-avatar">
              <img 
                src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=300&fit=crop&crop=face&auto=format&q=80" 
                alt="Sarah & Michael Johnson"
                className="avatar-image"
              />
              <!-- Synchronized Champagne Gold Overlay -->
              <div className="avatar-overlay"></div>
            </div>
            
            <!-- Author Name -->
            <div className="author-name">Sarah & Michael Johnson</div>
            
            <!-- Floating CTA Text -->
            <div className="wedding-gallery-cta">
              View Their Wedding Gallery
            </div>
          </div>
        </div>
      </a>

      <!-- Additional testimonial cards with identical structure... -->
    </div>
  </div>
</section>

<!-- Dark Theme Variation -->
<section className="testimonials-section dark">
  <!-- Identical structure with dark theme styling -->
</section>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>JavaScript Implementation</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`// React Component with Testimonials Data
export default function SocialProofTestimonials() {
  // Testimonial data structure
  const testimonialsData = [
    {
      id: 1,
      quote: "From our first tour to our last dance, the team at Rum River made our dreams come true. The barn was absolutely magical, and our guests are still talking about how perfect everything was.",
      author: "Sarah & Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=300&fit=crop&crop=face&auto=format&q=80",
      galleryLink: "/gallery"
    },
    {
      id: 2,
      quote: "We wanted rustic elegance, and Rum River delivered beyond our wildest expectations. The historic charm combined with modern amenities was exactly what we were looking for.",
      author: "Emma & James Wilson",
      avatar: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop&crop=face&auto=format&q=80",
      galleryLink: "/gallery"
    },
    {
      id: 3,
      quote: "The team went above and beyond to make our winter wedding absolutely magical. Even in February, the barn felt warm and romantic. We couldn't have asked for more.",
      author: "Amanda & Chris Thompson",
      avatar: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300&h=300&fit=crop&crop=face&auto=format&q=80",
      galleryLink: "/gallery"
    }
  ];

  // Star Icon Component (Heroicons)
  const StarIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      className="star-icon"
    >
      <path 
        fillRule="evenodd" 
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  // Synchronized Hover Handlers (1.2s timing)
  const handleHoverEnter = (e) => {
    const card = e.currentTarget.querySelector('.testimonial-card');
    const overlay = e.currentTarget.querySelector('.avatar-overlay');
    const cta = e.currentTarget.querySelector('.wedding-gallery-cta');
    const avatar = e.currentTarget.querySelector('.couple-avatar');
    const avatarImg = e.currentTarget.querySelector('.avatar-image');
    
    // Card elevation and underline
    if (card) {
      card.style.transform = 'translateY(-8px)';
      card.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
      const afterElement = card.querySelector('.card-underline');
      if (afterElement) afterElement.style.width = '100%';
    }
    
    // Avatar overlay reveal
    if (overlay) overlay.style.opacity = '0.8';
    
    // CTA text float up
    if (cta) {
      cta.style.opacity = '0.85';
      cta.style.transform = 'translateY(0)';
    }
    
    // Avatar scale and enhancement
    if (avatar) avatar.style.transform = 'scale(1.05)';
    if (avatarImg) {
      avatarImg.style.transform = 'scale(1.05)';
      avatarImg.style.filter = 'brightness(1.08) contrast(1.03)';
    }
  };

  const handleHoverLeave = (e) => {
    const card = e.currentTarget.querySelector('.testimonial-card');
    const overlay = e.currentTarget.querySelector('.avatar-overlay');
    const cta = e.currentTarget.querySelector('.wedding-gallery-cta');
    const avatar = e.currentTarget.querySelector('.couple-avatar');
    const avatarImg = e.currentTarget.querySelector('.avatar-image');
    
    // Reset card state
    if (card) {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
      const afterElement = card.querySelector('.card-underline');
      if (afterElement) afterElement.style.width = '0';
    }
    
    // Reset overlay
    if (overlay) overlay.style.opacity = '0';
    
    // Reset CTA
    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(10px)';
    }
    
    // Reset avatar
    if (avatar) avatar.style.transform = 'scale(1)';
    if (avatarImg) {
      avatarImg.style.transform = 'scale(1)';
      avatarImg.style.filter = 'brightness(1.05) contrast(1.02)';
    }
  };

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial, isDark = false }) => (
    <a
      href={testimonial.galleryLink}
      className="testimonial-card-link"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <div className={\`testimonial-card \${isDark ? 'dark' : ''}\`}>
        {/* Champagne Gold Underline */}
        <div className="card-underline" />

        {/* Testimonial Quote */}
        <blockquote className="testimonial-quote">
          "{testimonial.quote}"
        </blockquote>

        {/* Five Star Rating */}
        <div className="five-star-rating">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>

        {/* Testimonial Author */}
        <div className="testimonial-author">
          {/* Couple Avatar with Overlay */}
          <div className="couple-avatar">
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className="avatar-image"
            />
            <div className="avatar-overlay" />
          </div>
          
          {/* Author Name */}
          <div className="author-name">{testimonial.author}</div>
          
          {/* Floating CTA Text */}
          <div className="wedding-gallery-cta">
            View Their Wedding Gallery
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <>
      {/* Light Theme Section */}
      <section className="testimonials-section">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Love Letters</div>
            <h2 className="section-title">What Couples Say</h2>
            <p className="lead">
              Real stories from real couples who celebrated at Rum River Barn
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map(testimonial => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Dark Theme Section */}
      <section className="testimonials-section dark">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Love Letters</div>
            <h2 className="section-title">What Couples Say - Dark Theme</h2>
            <p className="lead">
              Real stories from real couples who celebrated at Rum River Barn
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map(testimonial => (
              <TestimonialCard 
                key={\`dark-\${testimonial.id}\`} 
                testimonial={testimonial} 
                isDark={true}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Usage Examples
const TestimonialsVariations = () => {
  return (
    <>
      {/* Basic Implementation */}
      <SocialProofTestimonials />
      
      {/* Custom Data Implementation */}
      <SocialProofTestimonials 
        testimonials={customTestimonialsData}
        sectionTitle="Client Reviews"
        accentText="Testimonials"
        theme="light"
      />
      
      {/* Dark Theme Only */}
      <SocialProofTestimonials 
        theme="dark"
        testimonials={testimonialsData}
      />
    </>
  );
};`}
            </pre>
          </div>

          {/* CSS Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>CSS Styling</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontFamily: 'monospace'
            }}>
{`/* Social Proof Testimonials Section */
.testimonials-section {
  background: #F4E4E1; /* blush-pink */
  padding: 100px 0;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Header */
.section-header.center {
  text-align: center;
  margin-bottom: 4rem;
}

.script-accent {
  font-family: 'Dancing Script', cursive;
  font-size: 1.75rem;
  color: #9D6B7B; /* dusty-rose */
  margin-bottom: 1rem;
  display: block;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #6B4E3D; /* warm-walnut */
  margin: 0 0 1.5rem 0;
}

.lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: #2C2416; /* text-dark */
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Testimonial Card Link */
.testimonial-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* Testimonial Cards - Light Theme */
.testimonial-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(1.2);
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

/* Champagne Gold Underline Animation */
.card-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: #E4C896; /* champagne-gold */
  transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Card Hover States */
.testimonial-card-link:hover .testimonial-card {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.testimonial-card-link:hover .card-underline {
  width: 100%;
}

/* Testimonial Quote */
.testimonial-quote {
  font-family: 'Playfair Display', serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #6B4E3D; /* warm-walnut */
  font-style: italic;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 1;
  text-align: left;
}

/* Five Star Rating */
.five-star-rating {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin: 1.5rem 0;
}

.star-icon {
  width: 20px;
  height: 20px;
  color: #E4C896; /* champagne-gold */
  transition: all 0.3s ease;
}

/* Testimonial Author Section */
.testimonial-author {
  padding-top: 1rem;
  position: relative;
  z-index: 1;
}

/* Couple Avatar with Champagne Gold Overlay */
.couple-avatar {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: brightness(1.05) contrast(1.02);
}

/* Champagne Gold Overlay - Synchronized with Card Animation */
.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(212, 165, 116, 0.3) 0%,
    rgba(212, 165, 116, 0.5) 50%,
    rgba(212, 165, 116, 0.7) 100%
  );
  border-radius: 50%;
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(4px);
}

/* Avatar Hover Effects */
.testimonial-card-link:hover .couple-avatar {
  transform: scale(1.05);
}

.testimonial-card-link:hover .avatar-image {
  transform: scale(1.05);
  filter: brightness(1.08) contrast(1.03);
}

.testimonial-card-link:hover .avatar-overlay {
  opacity: 0.8;
}

/* Author Name */
.author-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #9D6B7B; /* dusty-rose */
  margin-bottom: 0.5rem;
}

/* Floating Wedding Gallery CTA */
.wedding-gallery-cta {
  color: #9D6B7B; /* dusty-rose */
  opacity: 0;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
  letter-spacing: 0.02em;
  transform: translateY(10px);
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.testimonial-card-link:hover .wedding-gallery-cta {
  opacity: 0.85;
  transform: translateY(0);
}

/* Dark Theme Styles */
.testimonials-section.dark {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
}

.testimonials-section.dark .script-accent {
  color: #E4C896; /* champagne-gold */
}

.testimonials-section.dark .section-title {
  color: #ffffff;
}

.testimonials-section.dark .lead {
  color: rgba(255, 255, 255, 0.8);
}

/* Dark Theme Testimonial Cards */
.testimonials-section.dark .testimonial-card {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.08) 0%, 
    rgba(255, 255, 255, 0.04) 100%);
  backdrop-filter: blur(20px) saturate(1.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.testimonials-section.dark .testimonial-card-link:hover .testimonial-card {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.12) 0%, 
    rgba(255, 255, 255, 0.06) 100%);
  border-color: rgba(212, 165, 116, 0.3);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* Dark Theme Text Elements */
.testimonials-section.dark .testimonial-quote {
  color: rgba(255, 255, 255, 0.9);
}

.testimonials-section.dark .star-icon {
  color: #E4C896; /* champagne-gold */
  filter: drop-shadow(0 0 8px rgba(212, 165, 116, 0.3));
}

.testimonials-section.dark .author-name {
  color: #E4C896; /* champagne-gold */
  text-shadow: 0 0 10px rgba(212, 165, 116, 0.3);
}

.testimonials-section.dark .wedding-gallery-cta {
  color: rgba(255, 255, 255, 0.7);
}

.testimonials-section.dark .testimonial-card-link:hover .wedding-gallery-cta {
  color: rgba(255, 255, 255, 0.9);
  opacity: 0.9;
}

/* Dark Theme Avatar Effects */
.testimonials-section.dark .avatar-image {
  filter: brightness(0.9) contrast(1.1) saturate(1.1);
}

.testimonials-section.dark .testimonial-card-link:hover .avatar-image {
  filter: brightness(1.0) contrast(1.15) saturate(1.2);
}

.testimonials-section.dark .avatar-overlay {
  background: linear-gradient(135deg, 
    rgba(212, 165, 116, 0.4) 0%,
    rgba(212, 165, 116, 0.6) 50%,
    rgba(212, 165, 116, 0.8) 100%);
  box-shadow: 
    inset 0 0 20px rgba(212, 165, 116, 0.2),
    0 0 30px rgba(212, 165, 116, 0.1);
}

.testimonials-section.dark .testimonial-card-link:hover .avatar-overlay {
  background: linear-gradient(135deg, 
    rgba(212, 165, 116, 0.7) 0%,
    rgba(212, 165, 116, 0.9) 50%,
    rgba(212, 165, 116, 1.0) 100%);
  box-shadow: 
    inset 0 0 30px rgba(212, 165, 116, 0.3),
    0 0 40px rgba(212, 165, 116, 0.2);
  opacity: 0.9;
}

/* Dark Theme Underline */
.testimonials-section.dark .card-underline {
  background: linear-gradient(90deg, 
    #E4C896 0%, 
    rgba(212, 165, 116, 0.8) 50%, 
    #E4C896 100%);
  box-shadow: 0 0 15px rgba(212, 165, 116, 0.5);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .testimonial-card {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .testimonial-quote {
    font-size: 1rem;
  }
}

/* Animation Classes for Scroll Triggers */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-up.animate-in {
  opacity: 1;
  transform: translateY(0);
}`}
            </pre>
          </div>

          {/* Key Features */}
          <div>
            <h3 style={{ color: '#9D6B7B', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>Key Features</h3>
            <div style={{
              background: '#F4E4E1',
              padding: '2rem',
              borderRadius: '8px',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li><strong>Synchronized 1.2s Animations:</strong> All hover effects (card lift, overlay reveal, CTA float) use identical timing</li>
                <li><strong>Dual Theme Support:</strong> Light and dark theme variations with theme-specific styling</li>
                <li><strong>Interactive Testimonial Cards:</strong> Card elevation, champagne gold underline animation, and gleam effects</li>
                <li><strong>Dynamic Avatar Overlays:</strong> Champagne gold gradient overlays with backdrop blur effects</li>
                <li><strong>Floating CTA Text:</strong> "View Their Wedding Gallery" text floats up from below on hover</li>
                <li><strong>Five-Star Rating System:</strong> Heroicons star SVGs with consistent champagne gold styling</li>
                <li><strong>Responsive Grid Layout:</strong> Auto-fit grid that adapts from 3-column desktop to 1-column mobile</li>
                <li><strong>Typography Hierarchy:</strong> Three-font system with script accent, serif headings, and sans-serif body</li>
                <li><strong>Glass Morphism Cards:</strong> Backdrop blur effects with subtle transparency and border styling</li>
                <li><strong>Design System Integration:</strong> Uses consistent color tokens, spacing, and animation easing</li>
                <li><strong>Accessibility Features:</strong> Proper alt tags, semantic HTML, keyboard navigation support</li>
                <li><strong>Performance Optimized:</strong> Efficient hover handlers, optimized images, minimal reflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}