import React from 'react';

/**
 * MainNavbarDemoStandalone Component
 * 
 * This is a Claude Sonnet-optimized version of the demo navigation system.
 * Features:
 * - Minimal JavaScript with inline functionality
 * - No external dependencies 
 * - Clean, readable structure
 * - All CSS inline for easy reading
 * - Complete demo navbar implementation with documentation
 */
export default function MainNavbarDemoStandalone() {
  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      lineHeight: 1.6,
      color: '#2C2416',
      margin: 0,
      padding: 0
    }}>
      
      {/* CSS Animations and Styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .demo-navbar {
          position: fixed;
          top: 1rem;
          right: 1rem;
          background: rgba(44, 36, 22, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          min-width: 320px;
          animation: slideDown 0.5s ease-out;
          font-family: 'Montserrat', sans-serif;
        }
        
        .demo-navbar.minimized {
          min-width: auto;
        }
        
        .demo-navbar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .demo-navbar-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .demo-navbar-icon {
          font-size: 1.2rem;
        }
        
        .demo-navbar-controls {
          display: flex;
          gap: 0.5rem;
        }
        
        .demo-navbar-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 6px;
          padding: 0.25rem 0.5rem;
          color: white;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.2s ease;
        }
        
        .demo-navbar-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .demo-navbar-content {
          padding: 1.25rem;
          animation: fadeIn 0.3s ease-out;
        }
        
        .demo-navbar-current {
          background: rgba(157, 107, 123, 0.2);
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          color: white;
          font-size: 0.85rem;
        }
        
        .demo-navbar-sections {
          margin-bottom: 1rem;
        }
        
        .demo-navbar-section {
          margin-bottom: 1rem;
        }
        
        .demo-navbar-category {
          color: #E4C896;
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        
        .demo-navbar-links {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .demo-navbar-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          text-align: left;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.2s ease;
          text-decoration: none;
          display: block;
        }
        
        .demo-navbar-link:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .demo-navbar-link.active {
          background: rgba(157, 107, 123, 0.3);
          color: white;
        }
        
        .demo-navbar-shortcuts {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
        }
        
        .demo-navbar-shortcuts-title {
          color: #E4C896;
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }
        
        .demo-navbar-shortcuts-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .demo-navbar-shortcuts-list span {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
        }
        
        .demo-navbar-hint {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          background: rgba(44, 36, 22, 0.9);
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.8rem;
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      {/* Demo Navigation System */}
      <div id="demo-navbar" className="demo-navbar">
        {/* Header */}
        <div className="demo-navbar-header">
          <div className="demo-navbar-title">
            <span className="demo-navbar-icon">🎛️</span>
            Demo Navigator
          </div>
          <div className="demo-navbar-controls">
            <button
              className="demo-navbar-btn"
              onClick={() => {
                const navbar = document.getElementById('demo-navbar');
                const content = document.getElementById('navbar-content');
                const btn = navbar.querySelector('.demo-navbar-btn');
                
                if (content.style.display === 'none') {
                  navbar.classList.remove('minimized');
                  content.style.display = 'block';
                  btn.innerHTML = '⬇️';
                  btn.title = 'Minimize (Ctrl+M)';
                } else {
                  navbar.classList.add('minimized');
                  content.style.display = 'none';
                  btn.innerHTML = '⬆️';
                  btn.title = 'Expand (Ctrl+M)';
                }
              }}
              title="Minimize (Ctrl+M)"
            >
              ⬇️
            </button>
            <button
              className="demo-navbar-btn"
              onClick={() => {
                document.getElementById('demo-navbar').style.display = 'none';
                const hint = document.createElement('div');
                hint.id = 'navbar-hint';
                hint.className = 'demo-navbar-hint';
                hint.innerHTML = 'Press Ctrl+D to show demo navigator';
                document.body.appendChild(hint);
              }}
              title="Hide (Ctrl+D)"
            >
              ✖️
            </button>
          </div>
        </div>

        {/* Content */}
        <div id="navbar-content" className="demo-navbar-content">
          <div className="demo-navbar-current">
            Current: <strong>Demo Navigation</strong>
          </div>

          <div className="demo-navbar-sections">
            {/* Main Pages */}
            <div className="demo-navbar-section">
              <div className="demo-navbar-category">Main</div>
              <div className="demo-navbar-links">
                <a href="/" className="demo-navbar-link">Home</a>
                <a href="/component" className="demo-navbar-link">Components</a>
              </div>
            </div>

            {/* Navigation */}
            <div className="demo-navbar-section">
              <div className="demo-navbar-category">Navigation</div>
              <div className="demo-navbar-links">
                <a href="/main-navbar-demo-standalone" className="demo-navbar-link active">Menu Navigation</a>
                <a href="/footer-demo" className="demo-navbar-link">Footer</a>
              </div>
            </div>

            {/* Sections */}
            <div className="demo-navbar-section">
              <div className="demo-navbar-category">Sections</div>
              <div className="demo-navbar-links">
                <a href="/hero-demo-standalone" className="demo-navbar-link">Hero Section</a>
                <a href="/venue-demo" className="demo-navbar-link">Venue Overview</a>
                <a href="/spaces-demo" className="demo-navbar-link">Venue Spaces</a>
              </div>
            </div>

            {/* Components */}
            <div className="demo-navbar-section">
              <div className="demo-navbar-category">Components</div>
              <div className="demo-navbar-links">
                <a href="/button-demo-standalone" className="demo-navbar-link">Button System</a>
                <a href="/button-sandbox" className="demo-navbar-link">Button Sandbox</a>
                <a href="/floating-cta-demo-standalone" className="demo-navbar-link">Floating CTA</a>
              </div>
            </div>

            {/* Forms */}
            <div className="demo-navbar-section">
              <div className="demo-navbar-category">Forms</div>
              <div className="demo-navbar-links">
                <a href="/schedule-tour-demo" className="demo-navbar-link">Schedule Tour</a>
                <a href="/schedule-visit-form-demo" className="demo-navbar-link">Visit Form</a>
              </div>
            </div>
          </div>

          <div className="demo-navbar-shortcuts">
            <div className="demo-navbar-shortcuts-title">Shortcuts:</div>
            <div className="demo-navbar-shortcuts-list">
              <span>Ctrl+D: Toggle</span>
              <span>Ctrl+M: Minimize</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Hero Background */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(44, 36, 22, 0.95) 0%, rgba(107, 78, 61, 0.9) 100%), url("/images/venue/barn-exterior-full-deck-view-evening.jpg") center/cover',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: 'white'
      }}>
        {/* Content Wrapper */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          
          {/* Hero Content */}
          <div style={{
            maxWidth: '700px',
            position: 'relative'
          }}>
            
            {/* Script Accent */}
            <div style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.5rem',
              color: '#E4C896',
              marginBottom: '1.5rem',
              fontWeight: 400
            }}>
              Demo Navigation System
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFCF8',
              marginBottom: '2rem'
            }}>
              Interactive
              <br />
              <span style={{ color: '#E4C896' }}>
                Demo Navigator
              </span>
            </h1>

            {/* Lead Paragraph */}
            <p style={{
              fontSize: '1.25rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.9)',
              opacity: 0.95,
              marginBottom: '3rem',
              fontWeight: 300,
              maxWidth: '600px'
            }}>
              Experience the floating demo navigation system with keyboard shortcuts, 
              categorized sections, and smooth animations - all optimized for Claude Sonnet readability.
            </p>

            {/* Features */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎛️</div>
                <h3 style={{ 
                  fontSize: '1rem', 
                  marginBottom: '0.5rem',
                  color: '#E4C896'
                }}>
                  Interactive Controls
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  opacity: 0.9,
                  lineHeight: 1.5
                }}>
                  Minimize, hide, and navigate with keyboard shortcuts
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
                <h3 style={{ 
                  fontSize: '1rem', 
                  marginBottom: '0.5rem',
                  color: '#E4C896'
                }}>
                  Organized Sections
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  opacity: 0.9,
                  lineHeight: 1.5
                }}>
                  Pages grouped by category for easy navigation
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                <h3 style={{ 
                  fontSize: '1rem', 
                  marginBottom: '0.5rem',
                  color: '#E4C896'
                }}>
                  Smooth Animations
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  opacity: 0.9,
                  lineHeight: 1.5
                }}>
                  CSS-only animations for optimal performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section style={{
        background: '#FEFDFB',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem',
              color: '#2C2416',
              marginBottom: '1rem'
            }}>
              Demo Navigation Implementation
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6B4E3D',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Complete code and documentation for the demo navigation system above
            </p>
          </div>

          {/* HTML Structure */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              HTML Structure
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`<!-- Demo Navigation -->
<div id="demo-navbar" className="demo-navbar">
  <!-- Header with Controls -->
  <div className="demo-navbar-header">
    <div className="demo-navbar-title">
      <span className="demo-navbar-icon">🎛️</span>
      Demo Navigator
    </div>
    <div className="demo-navbar-controls">
      <button className="demo-navbar-btn" onClick={toggleMinimize}>⬇️</button>
      <button className="demo-navbar-btn" onClick={hideNavbar}>✖️</button>
    </div>
  </div>

  <!-- Navigation Content -->
  <div id="navbar-content" className="demo-navbar-content">
    <!-- Current Page Indicator -->
    <div className="demo-navbar-current">
      Current: <strong>Demo Navigation</strong>
    </div>

    <!-- Categorized Navigation Links -->
    <div className="demo-navbar-sections">
      <div className="demo-navbar-section">
        <div className="demo-navbar-category">Main</div>
        <div className="demo-navbar-links">
          <a href="/" className="demo-navbar-link">Home</a>
          <a href="/component" className="demo-navbar-link">Components</a>
        </div>
      </div>
      
      <div className="demo-navbar-section">
        <div className="demo-navbar-category">Navigation</div>
        <div className="demo-navbar-links">
          <a href="/menu-demo" className="demo-navbar-link active">Menu Navigation</a>
          <a href="/footer-demo" className="demo-navbar-link">Footer</a>
        </div>
      </div>
    </div>

    <!-- Keyboard Shortcuts -->
    <div className="demo-navbar-shortcuts">
      <div className="demo-navbar-shortcuts-title">Shortcuts:</div>
      <div className="demo-navbar-shortcuts-list">
        <span>Ctrl+D: Toggle</span>
        <span>Ctrl+M: Minimize</span>
      </div>
    </div>
  </div>
</div>`}
            </pre>
          </div>

          {/* JavaScript Functionality */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              JavaScript Functionality
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`// Demo Navigation State Management
let isVisible = true;
let isMinimized = false;

// Toggle navbar visibility
function toggleNavbar() {
  const navbar = document.getElementById('demo-navbar');
  const hint = document.getElementById('navbar-hint');
  
  isVisible = !isVisible;
  
  if (isVisible) {
    navbar.style.display = 'block';
    if (hint) hint.style.display = 'none';
  } else {
    navbar.style.display = 'none';
    showToggleHint();
  }
}

// Toggle minimize state
function toggleMinimize() {
  const navbar = document.getElementById('demo-navbar');
  const content = document.getElementById('navbar-content');
  const btn = document.querySelector('.demo-navbar-btn');
  
  isMinimized = !isMinimized;
  
  if (isMinimized) {
    navbar.classList.add('minimized');
    content.style.display = 'none';
    btn.innerHTML = '⬆️';
    btn.title = 'Expand (Ctrl+M)';
  } else {
    navbar.classList.remove('minimized');
    content.style.display = 'block';
    btn.innerHTML = '⬇️';
    btn.title = 'Minimize (Ctrl+M)';
  }
}

// Hide navbar
function hideNavbar() {
  isVisible = false;
  document.getElementById('demo-navbar').style.display = 'none';
  showToggleHint();
}

// Show toggle hint when hidden
function showToggleHint() {
  const hint = document.createElement('div');
  hint.id = 'navbar-hint';
  hint.className = 'demo-navbar-hint';
  hint.innerHTML = 'Press Ctrl+D to show demo navigator';
  document.body.appendChild(hint);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Toggle navbar with Ctrl/Cmd + D
  if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
    e.preventDefault();
    toggleNavbar();
  }
  
  // Minimize/maximize with Ctrl/Cmd + M
  if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
    e.preventDefault();
    if (isVisible) toggleMinimize();
  }
});

// Page detection and current page highlighting
function updateCurrentPage() {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.demo-navbar-link');
  
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
  
  // Update current page display
  const currentPage = links.find(l => l.classList.contains('active'))?.textContent || 'Unknown';
  const currentDisplay = document.querySelector('.demo-navbar-current strong');
  if (currentDisplay) {
    currentDisplay.textContent = currentPage;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateCurrentPage);`}
            </pre>
          </div>

          {/* CSS Styles */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              CSS Styles
            </h3>
            <pre style={{
              background: '#1a1a1a',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '12px',
              overflow: 'auto',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace"
            }}>
{`/* Demo Navigation Container */
.demo-navbar {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: rgba(44, 36, 22, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  min-width: 320px;
  animation: slideDown 0.5s ease-out;
  font-family: 'Montserrat', sans-serif;
}

/* Header Section */
.demo-navbar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.demo-navbar-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Control Buttons */
.demo-navbar-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  color: white;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.demo-navbar-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Content Sections */
.demo-navbar-content {
  padding: 1.25rem;
  animation: fadeIn 0.3s ease-out;
}

.demo-navbar-current {
  background: rgba(157, 107, 123, 0.2);
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  color: white;
  font-size: 0.85rem;
}

/* Category Headers */
.demo-navbar-category {
  color: #E4C896;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

/* Navigation Links */
.demo-navbar-link {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  text-align: left;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  text-decoration: none;
  display: block;
}

.demo-navbar-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.demo-navbar-link.active {
  background: rgba(157, 107, 123, 0.3);
  color: white;
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Minimized State */
.demo-navbar.minimized {
  min-width: auto;
}

/* Toggle Hint */
.demo-navbar-hint {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: rgba(44, 36, 22, 0.9);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  animation: fadeIn 0.5s ease-out;
}`}
            </pre>
          </div>

          {/* Component Features */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.75rem',
              color: '#9D6B7B',
              marginBottom: '1rem'
            }}>
              Key Features
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>🎛️ Interactive Controls</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Minimize/expand functionality</li>
                  <li>Hide/show with keyboard shortcuts</li>
                  <li>Smooth CSS-only animations</li>
                  <li>Floating positioned overlay</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>📱 Organized Navigation</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Categorized page groups</li>
                  <li>Active page highlighting</li>
                  <li>Current page indicator</li>
                  <li>Logical navigation structure</li>
                </ul>
              </div>
              <div style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}>
                <h4 style={{
                  color: '#2C2416',
                  marginBottom: '0.5rem'
                }}>⚡ Performance</h4>
                <ul style={{
                  color: '#6B4E3D',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <li>Minimal JavaScript footprint</li>
                  <li>CSS-only animations</li>
                  <li>Backdrop blur effects</li>
                  <li>Claude Sonnet optimized</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline JavaScript for Demo Functionality */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Demo Navigation State
          let isVisible = true;
          let isMinimized = false;

          // Toggle navbar visibility
          function toggleNavbar() {
            const navbar = document.getElementById('demo-navbar');
            const hint = document.getElementById('navbar-hint');
            
            isVisible = !isVisible;
            
            if (isVisible) {
              navbar.style.display = 'block';
              if (hint) hint.remove();
            } else {
              navbar.style.display = 'none';
              showToggleHint();
            }
          }

          // Show toggle hint when hidden
          function showToggleHint() {
            const hint = document.createElement('div');
            hint.id = 'navbar-hint';
            hint.className = 'demo-navbar-hint';
            hint.innerHTML = 'Press Ctrl+D to show demo navigator';
            document.body.appendChild(hint);
          }

          // Keyboard shortcuts
          document.addEventListener('keydown', function(e) {
            // Toggle navbar with Ctrl/Cmd + D
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
              e.preventDefault();
              toggleNavbar();
            }
            
            // Minimize/maximize with Ctrl/Cmd + M  
            if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
              e.preventDefault();
              if (isVisible) {
                const navbar = document.getElementById('demo-navbar');
                const content = document.getElementById('navbar-content');
                const btn = navbar.querySelector('.demo-navbar-btn');
                
                if (content.style.display === 'none') {
                  navbar.classList.remove('minimized');
                  content.style.display = 'block';
                  btn.innerHTML = '⬇️';
                  btn.title = 'Minimize (Ctrl+M)';
                } else {
                  navbar.classList.add('minimized');
                  content.style.display = 'none';
                  btn.innerHTML = '⬆️';
                  btn.title = 'Expand (Ctrl+M)';
                }
              }
            }
          });
        `
      }} />
    </div>
  );
}