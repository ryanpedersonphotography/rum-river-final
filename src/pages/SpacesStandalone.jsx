import { useState } from 'react'
import VenueTabs from '../components/VenueTabs'
import CarouselControls from '../components/CarouselControls'

const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests' },
      { label: 'Built', value: '1920s architecture' },
      { label: 'Features', value: 'Climate controlled' },
      { label: 'Style', value: 'Rustic elegance' }
    ]
  },
  bridal: {
    title: 'Bridal Suite',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/details-antique-wheel-rustic-decor.jpg'
    ],
    description: 'A luxurious private space for the bride and bridal party to prepare for the big day, featuring elegant furnishings and ample natural light.',
    features: [
      { label: 'Capacity', value: 'Up to 8 people' },
      { label: 'Amenities', value: 'Full mirror, seating' },
      { label: 'Natural Light', value: 'Large windows' },
      { label: 'Privacy', value: 'Separate entrance' }
    ]
  },
  groom: {
    title: "Groom's Quarters",
    images: [
      '/images/venue/barn-exterior-welcome-sign-entrance.jpg',
      '/images/venue/details-building-entrance-door.jpg'
    ],
    description: 'A comfortable retreat for the groom and groomsmen, offering a relaxed atmosphere to prepare and celebrate before the ceremony.',
    features: [
      { label: 'Capacity', value: 'Up to 6 people' },
      { label: 'Atmosphere', value: 'Relaxed and private' },
      { label: 'Facilities', value: 'Seating and storage' },
      { label: 'Location', value: 'Separate from bridal' }
    ]
  },
  pavilion: {
    title: 'Garden Pavilion',
    images: [
      '/images/venue/property-field-wildflowers-natural.jpg',
      '/images/venue/barn-exterior-deck-swing-under-tree.jpg'
    ],
    description: 'An enchanting outdoor space perfect for ceremonies or cocktail hours, surrounded by lush gardens and natural beauty.',
    features: [
      { label: 'Setting', value: 'Outdoor garden' },
      { label: 'Use', value: 'Ceremonies, cocktails' },
      { label: 'Surroundings', value: 'Natural gardens' },
      { label: 'Season', value: 'Spring through fall' }
    ]
  }
}

export default function SpacesStandalone() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleVenueChange = (venue) => {
    setActiveVenue(venue)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % venueData[activeVenue].images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueData[activeVenue].images.length - 1 : prev - 1
    )
  }

  return (
    <>
      {/* Discover Our Spaces - Tabbed Venue Display */}
      <section className="section-warm">
        <div className="content-wrapper venue-content">
          <div className="venue-header center">
            <div className="script-accent">Your Perfect Setting</div>
            <h2 className="section-title">Discover Our Spaces</h2>
            <p className="lead" style={{ margin: '1.5rem auto 0', textAlign: 'center' }}>Every corner tells a story, every space creates memories</p>
          </div>
          <VenueTabs
            tabs={[
              { key: 'barn', label: 'The Barn' },
              { key: 'bridal', label: 'Bridal Suite' },
              { key: 'groom', label: "Groom's Quarters" },
              { key: 'pavilion', label: 'Garden Pavilion' }
            ]}
            activeTab={activeVenue}
            onChange={handleVenueChange}
          />
          <div className="venue-display">
            <div className="venue-main-image">
              <img src={venueData[activeVenue].images[currentImageIndex]} alt={venueData[activeVenue].title} width="800" height="500" />
              <CarouselControls
                totalItems={venueData[activeVenue].images.length}
                currentIndex={currentImageIndex}
                onNext={nextImage}
                onPrev={prevImage}
                onDotClick={setCurrentImageIndex}
              />
            </div>
            <div className="venue-details">
              <h3>{venueData[activeVenue].title}</h3>
              <p>{venueData[activeVenue].description}</p>
              <div className="venue-features">
                {venueData[activeVenue].features.map((feature, index) => (
                  <div key={index} className="venue-feature">
                    <h5>{feature.label}</h5>
                    <p>{feature.value}</p>
                  </div>
                ))}
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
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Venue Spaces Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML, JavaScript, and CSS implementation of the tabbed venue display above</p>
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
{`<!-- Discover Our Spaces - Tabbed Venue Display -->
<section className="section-warm">
  <div className="content-wrapper venue-content">
    <div className="venue-header center">
      <div className="script-accent">Your Perfect Setting</div>
      <h2 className="section-title">Discover Our Spaces</h2>
      <p className="lead" style={{ textAlign: 'center' }}>
        Every corner tells a story, every space creates memories
      </p>
    </div>
    
    <!-- Tab Navigation -->
    <VenueTabs
      tabs={[
        { key: 'barn', label: 'The Barn' },
        { key: 'bridal', label: 'Bridal Suite' },
        { key: 'groom', label: "Groom's Quarters" },
        { key: 'pavilion', label: 'Garden Pavilion' }
      ]}
      activeTab={activeVenue}
      onChange={handleVenueChange}
    />
    
    <!-- Content Display -->
    <div className="venue-display">
      <div className="venue-main-image">
        <img src={venueData[activeVenue].images[currentImageIndex]} 
             alt={venueData[activeVenue].title} width="800" height="500" />
        <CarouselControls
          totalItems={venueData[activeVenue].images.length}
          currentIndex={currentImageIndex}
          onNext={nextImage}
          onPrev={prevImage}
          onDotClick={setCurrentImageIndex}
        />
      </div>
      <div className="venue-details">
        <h3>{venueData[activeVenue].title}</h3>
        <p>{venueData[activeVenue].description}</p>
        <div className="venue-features">
          {venueData[activeVenue].features.map((feature, index) => (
            <div key={index} className="venue-feature">
              <h5>{feature.label}</h5>
              <p>{feature.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>`}
            </pre>
          </div>

          {/* JavaScript Code */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>JavaScript Functionality</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// React Component with State Management
import { useState } from 'react'
import VenueTabs from '../components/VenueTabs'
import CarouselControls from '../components/CarouselControls'

// Venue Data Structure
const venueData = {
  barn: {
    title: 'The Historic Barn',
    images: [
      '/images/venue/barn-interior-exposed-beams-chandeliers.jpg',
      '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
      '/images/venue/barn-exterior-full-view-landscape.jpg'
    ],
    description: 'Our crown jewel, this beautifully restored barn...',
    features: [
      { label: 'Capacity', value: 'Up to 300 guests' },
      { label: 'Built', value: '1920s architecture' },
      { label: 'Features', value: 'Climate controlled' },
      { label: 'Style', value: 'Rustic elegance' }
    ]
  }
  // ... other venue objects
}

export default function SpacesComponent() {
  const [activeVenue, setActiveVenue] = useState('barn')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle tab switching
  const handleVenueChange = (venue) => {
    setActiveVenue(venue)
    setCurrentImageIndex(0) // Reset to first image
  }

  // Image carousel navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      (prev + 1) % venueData[activeVenue].images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueData[activeVenue].images.length - 1 : prev - 1
    )
  }

  return (
    // Component JSX here...
  )
}

// VenueTabs Component
export const VenueTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="venue-tabs">
      {tabs.map(tab => (
        <button
          key={tab.key}
          className={\`venue-tab \${activeTab === tab.key ? 'active' : ''}\`}
          onClick={() => onChange(tab.key)}
          aria-pressed={activeTab === tab.key}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};`}
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
{`/* Discover Our Spaces Section */
.section-warm {
  background: var(--cream-pearl);
  padding: 100px 0;
}

.venue-content {
  padding: 0;
}

.venue-header {
  text-align: center;
  margin-bottom: 3rem;
}

.venue-header .script-accent {
  font-family: var(--font-script);
  font-size: 1.75rem;
  color: var(--dusty-rose);
  margin-bottom: 1rem;
}

.venue-header .section-title {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--warm-walnut);
  margin-bottom: 1.5rem;
}

.venue-header .lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-dark);
  opacity: 0.9;
  margin: 1.5rem auto 0;
  text-align: center;
}

/* Venue Tabs */
.venue-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.venue-tab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid var(--dusty-rose);
  color: var(--dusty-rose);
  border-radius: 30px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.venue-tab:hover {
  background: var(--dusty-rose);
  color: white;
  transform: translateY(-2px);
}

.venue-tab.active {
  background: var(--dusty-rose);
  color: white;
}

/* Venue Display */
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

/* Venue Details */
.venue-details h3 {
  font-size: 2.5rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
}

.venue-details > p {
  font-size: 1.125rem;
  color: var(--deep-brown);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.venue-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.venue-feature {
  text-align: left;
}

.venue-feature h5 {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--dusty-rose);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.venue-feature p {
  font-size: 0.875rem;
  color: var(--text-dark);
  opacity: 0.8;
  margin: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .venue-display {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .venue-tabs {
    gap: 0.625rem;
  }
  
  .venue-tab {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
  
  .venue-details h3 {
    font-size: 2rem;
  }
  
  .venue-features {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}`}
            </pre>
          </div>

          {/* Design Token Mappings */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Design Token Mappings</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current values → Design tokens → Shadcn/Tailwind equivalents for spaces section</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* SPACES SECTION COLOR MAPPINGS */
// Current hardcoded               → Design Token           → Shadcn/Tailwind
var(--cream-pearl)                → var(--cream-pearl)     → bg-amber-50
var(--dusty-rose)                 → var(--dusty-rose)      → border-rose-400, bg-rose-400
var(--warm-walnut)                → var(--warm-walnut)     → text-amber-900
var(--text-dark)                  → var(--text-dark)       → text-slate-800
var(--deep-brown)                 → var(--deep-brown)      → text-amber-800
rgba(0,0,0,0.15)                  → --                    → shadow-slate-900/15

/* SPACING MAPPINGS - SPACES INTERACTIVE */
// Current               → Design Token          → Shadcn/Tailwind
100px                   → var(--space-3xl)      → py-25 (custom)
3rem                    → var(--space-xl)       → mb-12
5rem                    → var(--space-2xl)      → gap-20
2.5rem                  → var(--space-lg)       → mb-10
1.5rem                  → var(--space-md)       → mb-6, gap-6
1rem                    → var(--space-sm)       → gap-4
0.75rem                 → var(--space-xs)       → py-3, px-6

/* TYPOGRAPHY MAPPINGS - SPACES CONTENT */
// Current               → Design Token          → Shadcn/Tailwind
3rem                    → var(--text-3xl)       → text-5xl
2.5rem                  → var(--text-2xl)       → text-4xl
1.75rem                 → var(--text-xl)        → text-2xl
1.25rem                 → var(--text-lg)        → text-xl
1.125rem                → var(--text-base)      → text-lg
0.875rem                → var(--text-sm)        → text-sm
line-height: 1.8        → --                    → leading-relaxed
line-height: 1.7        → --                    → leading-relaxed

/* BUTTON & INTERACTION MAPPINGS */
// Current                           → Shadcn/Tailwind
border: 2px solid var(--dusty-rose) → border-2 border-rose-400
border-radius: 30px                 → rounded-full
padding: 0.75rem 1.5rem             → py-3 px-6
text-transform: uppercase           → uppercase
letter-spacing: 0.05em              → tracking-wide
transition: all 0.3s ease          → transition-all duration-300
transform: translateY(-2px)         → hover:-translate-y-1

/* GRID LAYOUT MAPPINGS */
// Current                           → Shadcn/Tailwind
display: grid                       → grid
grid-template-columns: 1fr 1fr      → grid-cols-1 lg:grid-cols-2
gap: 5rem                          → gap-10 lg:gap-20
grid-template-columns: 1fr 1fr      → grid-cols-2 (features)
align-items: center                → items-center

/* BORDER & SHADOW MAPPINGS */
// Current                                    → Shadcn/Tailwind
border-radius: 12px                          → rounded-xl
box-shadow: 0 25px 50px rgba(0,0,0,0.15)    → shadow-2xl shadow-slate-900/15
object-fit: cover                            → object-cover
height: 500px                                → h-96 lg:h-[500px]`}
            </pre>
          </div>

          {/* Component Anatomy Breakdown */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Component Anatomy Breakdown</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current spaces section classes mapped to shadcn/Tailwind component patterns</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* SPACES COMPONENT STRUCTURE MAPPING */

// Current Implementation → Shadcn Equivalent
.section-warm {
  // Light background section
} 
→ <section className="bg-amber-50 py-25">

.content-wrapper.venue-content {
  // Container with no extra padding
}
→ <div className="container mx-auto px-4">

.venue-header.center {
  // Centered header content
}
→ <div className="text-center mb-12">
    <p className="font-script text-2xl text-rose-400 mb-4">
    <h2 className="font-serif text-5xl text-amber-900 mb-6">
    <p className="text-xl leading-relaxed text-slate-800 opacity-90 mx-auto">
  </div>

.venue-tabs {
  // Tab navigation container
}
→ <Tabs defaultValue="barn" className="w-full">
    <TabsList className="grid w-full grid-cols-4 rounded-full bg-transparent border-2 border-rose-400">
      {tabs.map(tab => (
        <TabsTrigger 
          key={tab.key}
          value={tab.key}
          className="rounded-full py-3 px-6 text-sm font-medium uppercase tracking-wide border-2 border-transparent data-[state=active]:border-rose-400 data-[state=active]:bg-rose-400 data-[state=active]:text-white hover:bg-rose-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>

.venue-tab {
  // Individual tab button
}
→ <TabsTrigger> (as shown above, integrated into TabsList)

.venue-display {
  // Main content grid
}
→ <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

.venue-main-image {
  // Image container with carousel
}
→ <TabsContent value={venue.key}>
    <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-slate-900/15">
      <Carousel className="w-full">
        <CarouselContent>
          {venue.images.map((image, index) => (
            <CarouselItem key={index}>
              <img className="w-full h-96 lg:h-[500px] object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </TabsContent>

.venue-details {
  // Content details area
}
→ <div className="space-y-6">
    <h3 className="font-serif text-4xl text-slate-800 mb-6">
    <p className="text-lg text-amber-800 leading-relaxed mb-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Features */}
    </div>
  </div>

.venue-features {
  // Features grid
}
→ <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

.venue-feature {
  // Individual feature item
}
→ <div className="text-left">
    <h5 className="font-serif text-base text-rose-400 mb-2 font-medium">
    <p className="text-sm text-slate-800 opacity-80">
  </div>

/* SHADCN COMPONENT EQUIVALENTS */
- VenueTabs → <Tabs>, <TabsList>, <TabsTrigger>
- CarouselControls → <Carousel>, <CarouselContent>, <CarouselItem>, <CarouselPrevious>, <CarouselNext>
- Image container → <div> with Tailwind classes or <Card>
- Feature grid → <div className="grid grid-cols-2 gap-6">
- Typography → Built-in Tailwind text classes + custom fonts

/* STATE MANAGEMENT MIGRATION */
// Current React useState → Shadcn Tabs built-in state
const [activeVenue, setActiveVenue] = useState('barn')
→ <Tabs defaultValue="barn" onValueChange={setActiveVenue}>

// Current carousel state → Shadcn Carousel built-in state  
const [currentImageIndex, setCurrentImageIndex] = useState(0)
→ Carousel component handles this internally

/* RESPONSIVE BEHAVIOR */
- Desktop: 2-column grid with image/details side by side
- Mobile: Single column with image above details
- Tabs: Responsive grid layout with proper wrapping
- Features: 2-column on desktop, single column on mobile`}
            </pre>
          </div>

          {/* TypeScript Interface Documentation */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>TypeScript Interface Documentation</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Props, state, and data structure definitions for spaces section migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// TypeScript interfaces for Spaces section migration

interface VenueFeature {
  label: string;
  value: string;
}

interface VenueSpace {
  id: string;
  title: string;
  images: string[];
  description: string;
  features: VenueFeature[];
}

interface VenueTab {
  key: string;
  label: string;
}

interface SpacesSectionHeader {
  scriptAccent: string;
  title: string;
  description: string;
}

interface SpacesSectionProps {
  header?: SpacesSectionHeader;
  venues: Record<string, VenueSpace>;
  tabs: VenueTab[];
  defaultVenue?: string;
  showCarouselDots?: boolean;
  showCarouselArrows?: boolean;
  variant?: 'default' | 'compact' | 'gallery';
  className?: string;
}

interface SpacesSectionState {
  activeVenue: string;
  currentImageIndex: number;
  imageLoadingStates: Record<string, boolean>;
  tabTransitioning: boolean;
}

// Default spaces content structure
const defaultSpacesHeader: SpacesSectionHeader = {
  scriptAccent: "Your Perfect Setting",
  title: "Discover Our Spaces", 
  description: "Every corner tells a story, every space creates memories"
}

const defaultVenueData: Record<string, VenueSpace> = {
  barn: {
    id: "barn",
    title: "The Historic Barn",
    images: [
      "/images/venue/barn-interior-exposed-beams-chandeliers.jpg",
      "/images/venue/barn-interior-ceiling-beams-lighting.jpg",
      "/images/venue/barn-exterior-full-view-landscape.jpg"
    ],
    description: "Our crown jewel, this beautifully restored barn features soaring ceilings, original timber beams, and modern amenities seamlessly integrated into its historic charm.",
    features: [
      { label: "Capacity", value: "Up to 300 guests" },
      { label: "Built", value: "1920s architecture" },
      { label: "Features", value: "Climate controlled" },
      { label: "Style", value: "Rustic elegance" }
    ]
  },
  bridal: {
    id: "bridal",
    title: "Bridal Suite",
    images: [
      "/images/venue/barn-interior-exposed-beams-chandeliers.jpg",
      "/images/venue/details-antique-wheel-rustic-decor.jpg"
    ],
    description: "A luxurious private space for the bride and bridal party to prepare for the big day, featuring elegant furnishings and ample natural light.",
    features: [
      { label: "Capacity", value: "Up to 8 people" },
      { label: "Amenities", value: "Full mirror, seating" },
      { label: "Natural Light", value: "Large windows" },
      { label: "Privacy", value: "Separate entrance" }
    ]
  }
  // ... other venues
}

const defaultVenueTabs: VenueTab[] = [
  { key: "barn", label: "The Barn" },
  { key: "bridal", label: "Bridal Suite" },
  { key: "groom", label: "Groom's Quarters" },
  { key: "pavilion", label: "Garden Pavilion" }
]

// Animation and transition configuration
interface SpacesAnimationConfig {
  tabTransition: {
    duration: number;
    easing: string;
  };
  imageTransition: {
    duration: number;
    easing: string;
  };
  featureStagger: {
    delay: number;
    duration: number;
  };
}

const spacesAnimationConfig: SpacesAnimationConfig = {
  tabTransition: { duration: 300, easing: "ease-in-out" },
  imageTransition: { duration: 500, easing: "ease-out" },
  featureStagger: { delay: 100, duration: 400 }
}

// Usage example for migration:
// const SpacesSection: React.FC<SpacesSectionProps> = ({ 
//   header = defaultSpacesHeader,
//   venues = defaultVenueData,
//   tabs = defaultVenueTabs,
//   defaultVenue = 'barn',
//   showCarouselDots = true,
//   showCarouselArrows = true
// }) => {
//   const [state, setState] = useState<SpacesSectionState>({
//     activeVenue: defaultVenue,
//     currentImageIndex: 0,
//     imageLoadingStates: {},
//     tabTransitioning: false
//   });
//   
//   const handleVenueChange = (venue: string) => {
//     setState(prev => ({
//       ...prev,
//       activeVenue: venue,
//       currentImageIndex: 0,
//       tabTransitioning: true
//     }));
//   };
//   
//   // Component implementation...
// }`}
            </pre>
          </div>

          {/* Responsive Breakpoint Mapping */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Responsive Breakpoint Mapping</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>CSS media queries converted to Tailwind responsive classes for spaces layout</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* SPACES RESPONSIVE BREAKPOINT CONVERSIONS */

// Current CSS Media Queries → Tailwind Responsive Classes

/* Desktop Layout (Current Default) */
.venue-display {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
}

.venue-features {
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

/* Tailwind Equivalent */
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

/* Mobile Responsive (Current) */
@media (max-width: 768px) {
  .venue-display {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .venue-tabs {
    gap: 0.625rem;
  }
  
  .venue-tab {
    padding: 0.75rem 1.5rem;
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

/* Tailwind Mobile-First Equivalent */
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
<TabsTrigger className="py-3 px-6 text-sm lg:text-base">
<h3 className="text-3xl lg:text-4xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

/* Tab Navigation Responsive */
// Current                          → Tailwind Responsive
display: flex; justify-content: center; → flex justify-center
flex-wrap: wrap;                   → flex-wrap
gap: 1rem;                         → gap-2 md:gap-4
gap: 0.625rem; (mobile)            → gap-2

/* Tab Button Responsive */
// Current                          → Tailwind Responsive
padding: 0.75rem 1.5rem;          → py-3 px-6
font-size: 0.875rem;              → text-sm md:text-base
transform: translateY(-2px);       → hover:-translate-y-1

/* Image Container Responsive */
// Current                          → Tailwind Responsive
height: 500px;                    → h-64 md:h-80 lg:h-[500px]
border-radius: 12px;              → rounded-xl

/* Typography Scaling */
// Current Font Sizes               → Tailwind Responsive
font-size: 3rem; (title)          → text-4xl lg:text-5xl
font-size: 2.5rem; (venue h3)     → text-3xl lg:text-4xl
font-size: 1.75rem; (script)      → text-xl lg:text-2xl
font-size: 1.25rem; (lead)        → text-lg lg:text-xl
font-size: 1.125rem; (description) → text-base lg:text-lg
font-size: 1rem; (feature label)  → text-sm lg:text-base
font-size: 0.875rem; (feature value) → text-xs lg:text-sm

/* Spacing Responsive */
// Current                          → Tailwind Responsive
padding: 100px 0;                 → py-16 lg:py-25 (custom)
margin-bottom: 3rem;              → mb-8 lg:mb-12
gap: 5rem;                        → gap-10 lg:gap-20
gap: 2.5rem; (mobile)             → gap-10

/* Interactive Elements Responsive */
// Consider touch-friendly sizing on mobile
// Current button padding adequate for touch targets
// Hover effects disabled on touch devices:
@media (hover: hover) {
  .venue-tab:hover {
    transform: translateY(-2px);
  }
}

// Tailwind equivalent:
<button className="hover:hover:-translate-y-1 transition-transform">

/* Carousel Controls Responsive */
// Larger touch targets on mobile
// Different positioning for different screen sizes
// Dots vs arrows priority based on screen size`}
            </pre>
          </div>

          {/* Animation & Interaction Notes */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Animation & Interaction Notes</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current animations and interactive behaviors for spaces section migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* SPACES SECTION ANIMATION INVENTORY */

/* Current Animations */
.venue-tab {
  transition: all 0.3s ease;
}

.venue-tab:hover {
  transform: translateY(-2px);
}

/* MIGRATION ANIMATION ENHANCEMENTS */

/* 1. Tab Transition Animations */
// Enhanced tab switching with content transition
const TabsWithTransitions = ({ activeTab, onTabChange }) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange}>
      <TabsList className="relative">
        {tabs.map(tab => (
          <TabsTrigger
            key={tab.key}
            value={tab.key}
            className="relative transition-all duration-300 hover:-translate-y-1"
          >
            {tab.label}
          </TabsTrigger>
        ))}
        {/* Active tab indicator */}
        <motion.div
          className="absolute bottom-0 h-0.5 bg-rose-400"
          layoutId="activeTab"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </TabsList>
    </Tabs>
  )
}

/* 2. Content Transition Animations */
// Animate content change when tabs switch
<AnimatePresence mode="wait">
  <motion.div
    key={activeVenue}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {/* Venue content */}
  </motion.div>
</AnimatePresence>

/* 3. Image Carousel Animations */
// Enhanced carousel with smooth transitions
const AnimatedCarousel = ({ images, currentIndex }) => {
  return (
    <div className="relative overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full h-96 lg:h-[500px] object-cover"
        />
      </AnimatePresence>
      
      {/* Carousel dots with animations */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className="w-2 h-2 rounded-full bg-white/50"
            animate={{ 
              backgroundColor: index === currentIndex ? "rgb(255 255 255)" : "rgb(255 255 255 / 0.5)",
              scale: index === currentIndex ? 1.2 : 1
            }}
            transition={{ duration: 0.2 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

/* 4. Feature List Stagger Animation */
// Animate features with stagger effect
const FeaturesList = ({ features }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-left"
        >
          <h5 className="font-serif text-base text-rose-400 mb-2">
            {feature.label}
          </h5>
          <p className="text-sm text-slate-800 opacity-80">
            {feature.value}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

/* 5. Tab Button Hover Animations */
// Enhanced hover states
.venue-tab {
  @apply relative overflow-hidden;
}

.venue-tab::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.venue-tab:hover::before {
  transform: translateX(100%);
}

/* 6. Image Loading Animations */
// Smooth image loading with skeleton
const ImageWithLoading = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false)
  
  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-xl" />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

/* PERFORMANCE CONSIDERATIONS */
- Use transforms for smooth animations (GPU accelerated)
- Implement proper image preloading for carousel
- Debounce rapid tab switching
- Use will-change sparingly and remove after animations
- Consider using CSS animations for simple transitions

/* ACCESSIBILITY ENHANCEMENTS */
- Respect prefers-reduced-motion
- Proper ARIA labels for carousel controls
- Keyboard navigation for tabs and carousel
- Focus management during tab transitions
- Screen reader announcements for content changes

/* TOUCH & MOBILE INTERACTIONS */
- Swipe gestures for carousel navigation
- Touch-friendly button sizes (minimum 44px)
- Prevent hover effects on touch devices
- Optimize animation performance on mobile devices`}
            </pre>
          </div>

          {/* Dependency Analysis */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Dependency Analysis</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>External dependencies and migration strategies for spaces section</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* SPACES SECTION CURRENT DEPENDENCIES */

/* 1. React Dependencies */
import { useState } from 'react'                    // State management for tabs and carousel

/* 2. Custom Components */
import VenueTabs from '../components/VenueTabs'     // Tab navigation component
import CarouselControls from '../components/CarouselControls' // Carousel controls

/* 3. CSS Dependencies */
// Design tokens from tokens.css
// Interactive button styles with hover effects
// Grid layouts for responsive behavior
// Custom font families and typography scales

/* 4. Content Structure */
// Complex nested venue data object
// Image arrays for carousel functionality
// Features array for each venue

/* MIGRATION DEPENDENCIES TO ADD */

/* 1. Shadcn/ui Components */
npm install @radix-ui/react-tabs              // For tab navigation
npm install @radix-ui/react-slot              // Base component utilities
npm install class-variance-authority          // For component variants
npm install clsx tailwind-merge               // Utility functions

/* 2. Carousel Functionality */
npm install embla-carousel-react              // Robust carousel (shadcn recommended)
// OR
npm install @radix-ui/react-navigation-menu   // Alternative navigation

/* 3. Animation Libraries */
npm install framer-motion                     // For complex animations
npm install @tailwindcss/container-queries    // For responsive containers

/* 4. Image Optimization */
npm install next/image                        // If using Next.js
npm install react-intersection-observer      // For lazy loading
npm install @plaiceholder/next               // For image placeholders

/* SHADCN COMPONENT MAPPING */

// Current → Shadcn Equivalent
VenueTabs → import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
CarouselControls → import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
Custom state management → Built-in Tabs and Carousel state handling

/* CONTENT MANAGEMENT STRATEGY */

/* Option A: Enhanced Static Data with TypeScript */
// src/data/venueSpaces.ts
export interface VenueSpace {
  id: string;
  title: string;
  images: ImageData[];
  description: string;
  features: VenueFeature[];
  metadata: {
    capacity?: string;
    availability?: string[];
    bookingInfo?: string;
  };
}

/* Option B: CMS Integration for Dynamic Content */
// Contentful or Sanity for venue data management
npm install @contentful/rich-text-react-renderer
npm install @sanity/client

/* Option C: Image Management Service */
// For optimized venue image delivery
npm install cloudinary
npm install @cloudinary/react

/* TAILWIND CONFIGURATION UPDATES */

// tailwind.config.js additions for spaces section
module.exports = {
  theme: {
    extend: {
      spacing: {
        '25': '6.25rem',   // 100px custom spacing
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
        'body': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'dusty-rose': '#9D6B7B',
        'warm-walnut': '#6B4E3D',
        'cream-pearl': '#FBF8F4',
      },
      animation: {
        'tab-slide': 'tabSlide 0.3s ease-in-out',
        'image-fade': 'imageFade 0.5s ease-out',
        'feature-fade-up': 'fadeUp 0.4s ease-out forwards',
      },
      gridTemplateColumns: {
        'venues': 'repeat(auto-fit, minmax(300px, 1fr))',
      }
    }
  }
}

/* COMPONENT STRUCTURE FOR MIGRATION */

// Recommended file structure:
// components/spaces/
//   ├── SpacesSection.tsx
//   ├── VenueTabNavigation.tsx
//   ├── VenueImageCarousel.tsx
//   ├── VenueDetails.tsx
//   ├── VenueFeatureGrid.tsx
//   └── types.ts

/* MIGRATION CHECKLIST - SPACES SECTION */
□ Install Shadcn Tabs and Carousel components
□ Set up venue data TypeScript interfaces
□ Create VenueTabNavigation with Tabs component
□ Implement VenueImageCarousel with Carousel component
□ Build VenueDetails and VenueFeatureGrid components
□ Add proper image optimization and lazy loading
□ Implement smooth transition animations
□ Add touch/swipe support for mobile carousel
□ Create responsive grid layouts with Tailwind
□ Add proper ARIA labels and keyboard navigation
□ Test with real venue data and multiple images
□ Performance audit for image loading and transitions
□ Add error handling for missing images/data

/* PERFORMANCE OPTIMIZATIONS */
- Implement image preloading for carousel next/prev images
- Use intersection observer for tab content lazy loading
- Optimize animation performance with transform/opacity only
- Add proper image sizing and format optimization (WebP/AVIF)
- Consider virtualization for large venue datasets
- Implement proper focus management for accessibility

/* ENHANCED FEATURES TO CONSIDER */
- Virtual tour integration (360° images)
- Availability calendar integration
- Booking request modal from venue details
- Social sharing for individual venue spaces
- Venue comparison feature
- Print-friendly venue information sheets
- Multi-language support for venue descriptions

/* TESTING REQUIREMENTS */
- Cross-browser tab navigation testing
- Touch gesture testing on mobile devices
- Keyboard navigation testing
- Screen reader compatibility testing
- Performance testing with large image sets
- State management testing (tab switching, carousel)
- Responsive layout testing across breakpoints`}
            </pre>
          </div>

        </div>
      </section>
    </>
  )
}