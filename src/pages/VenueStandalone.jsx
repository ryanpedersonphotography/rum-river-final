export default function VenueStandalone() {
  return (
    <>

      {/* Your Perfect Venue Section - Numbered Feature Blocks */}
      <section className="alternating-blocks">
        <div className="content-wrapper">
          <div className="section-header center">
            <div className="script-accent">Your Perfect Venue</div>
            <h2 className="section-title">Why Choose Rum River Barn</h2>
            <p className="lead">Discover what makes our venue the perfect setting for your unforgettable celebration</p>
          </div>

          <div className="blocks-container">
            <div className="block-item">
              <div className="block-content">
                <div className="number">01</div>
                <h3>A Picturesque Location For Your Special Event</h3>
                <p className="lead">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</p>
                <p>When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.</p>
                <p>Here at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.</p>
                <p>Our goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at <strong>612-801-0546</strong>!</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg" alt="Special event venue" width="800" height="500" />
              </div>
            </div>

            <div className="block-item reverse">
              <div className="block-content">
                <div className="number">02</div>
                <h3>Rum River Barn & Vineyard</h3>
                <p className="lead">Milaca, St. Cloud, Saint Paul, and Brainerd MN</p>
                <p>Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota's premier barn wedding venue and country special events venue for your custom special event.</p>
                <p>Enjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.</p>
              </div>
              <div className="block-image styled-image light no-link">
                <img src="/images/venue/property-field-wildflowers-natural.jpg" alt="Rum River Barn and Vineyard" width="800" height="500" />
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
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Perfect Venue Section Code</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>HTML and CSS implementation of the alternating blocks section above</p>
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
{`<!-- Your Perfect Venue Section - Numbered Feature Blocks -->
<section className="alternating-blocks">
  <div className="content-wrapper">
    <div className="section-header center">
      <div className="script-accent">Your Perfect Venue</div>
      <h2 className="section-title">Why Choose Rum River Barn</h2>
      <p className="lead">
        Discover what makes our venue the perfect setting for your
        unforgettable celebration
      </p>
    </div>

    <div className="blocks-container">
      <div className="block-item">
        <div className="block-content">
          <div className="number">01</div>
          <h3>A Picturesque Location For Your Special Event</h3>
          <p className="lead">Near Milaca, Saint Paul, St Cloud, and Brainerd MN</p>
          <p>When it comes to special occasions such as weddings, birthday parties,
             or other events, it is important to have the perfect setting. You want
             to ensure that your event is at a location that people will remember.</p>
          <p>Here at Rum River Barn, we understand the importance of your special
             occasion. We are different from other special event venues because we
             allow you to pretty much run the show. When you choose us, you do not
             have to worry about us saying no.</p>
          <p>Our goal is to help you have your perfect day. We tend to book up fast,
             so don't wait—call us today at <strong>612-801-0546</strong>!</p>
        </div>
        <div className="block-image styled-image light no-link">
          <img src="/images/venue/barn-interior-ceiling-beams-lighting.jpg"
               alt="Special event venue" width="800" height="500" />
        </div>
      </div>

      <div className="block-item reverse">
        <div className="block-content">
          <div className="number">02</div>
          <h3>Rum River Barn & Vineyard</h3>
          <p className="lead">Milaca, St. Cloud, Saint Paul, and Brainerd MN</p>
          <p>Nestled within 400 acres of pure country and rustic charm, this is
             the perfect barn wedding venue in Minnesota. On a peaceful hillside
             overlooking grape vineyards, mile-long manicured old oak forests,
             and white pines next to a whispering brook, we offer Minnesota's
             premier barn wedding venue and country special events venue for
             your custom special event.</p>
          <p>Enjoy the serenity, peacefulness, and amazing beauty which has been
             carved out of the forests and developed for the past 100 years.</p>
        </div>
        <div className="block-image styled-image light no-link">
          <img src="/images/venue/property-field-wildflowers-natural.jpg"
               alt="Rum River Barn and Vineyard" width="800" height="500" />
        </div>
      </div>
    </div>
  </div>
</section>`}
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
{`/* Numbered Feature Blocks - Alternating Layout */
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

.alternating-blocks .section-title {
  color: white;
  font-family: var(--font-display);
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.alternating-blocks .script-accent {
  color: var(--champagne-gold);
  font-family: var(--font-script);
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.alternating-blocks .lead {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  line-height: 1.7;
}

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

.block-item.reverse {
  direction: rtl;
}

.block-item.reverse .block-content {
  direction: ltr;
}

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
  line-height: 1.2;
}

.block-content p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
}

.block-content .lead {
  color: var(--champagne-gold);
  font-weight: 400;
  margin-bottom: 2rem;
}

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

/* Mobile Responsive */
@media (max-width: 768px) {
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
}`}
            </pre>
          </div>

          {/* Design Token Mappings */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Design Token Mappings</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current values → Design tokens → Shadcn/Tailwind equivalents for venue sections</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* VENUE SECTION COLOR MAPPINGS */
// Current hardcoded                         → Design Token           → Shadcn/Tailwind
rgba(74, 52, 38, 1)                         → var(--warm-walnut)     → bg-amber-900
rgba(45, 58, 47, 1)                         → var(--deep-forest)     → bg-slate-700
linear-gradient(135deg, rgba(74,52,38,1)...)→ --                    → bg-gradient-to-br from-amber-900 to-slate-700
#E4C896                                     → var(--champagne-gold)  → text-amber-200
rgba(255, 255, 255, 0.9)                   → --                    → text-white/90
rgba(0, 0, 0, 0.3)                          → --                    → shadow-black/30

/* SPACING MAPPINGS - VENUE SPECIFIC */
// Current               → Design Token          → Shadcn/Tailwind
100px                   → var(--space-3xl)      → py-25 (custom)
4rem                    → var(--space-xl)       → mt-16
80px                    → var(--space-2xl)      → gap-20
120px                   → var(--space-4xl)      → mb-30 (custom)
40px                    → var(--space-lg)       → p-10
20px                    → var(--space-md)       → p-5

/* TYPOGRAPHY MAPPINGS - VENUE CONTENT */
// Current               → Design Token          → Shadcn/Tailwind
3rem                    → var(--text-3xl)       → text-5xl
2.5rem                  → var(--text-2xl)       → text-4xl
1.75rem                 → var(--text-xl)        → text-2xl
1.25rem                 → var(--text-lg)        → text-xl
1.125rem                → var(--text-base)      → text-lg
line-height: 1.8        → --                    → leading-relaxed
line-height: 1.2        → --                    → leading-tight

/* LAYOUT MAPPINGS - GRID SYSTEM */
// Current                           → Shadcn/Tailwind
display: grid                       → grid
grid-template-columns: 1fr 1fr      → grid-cols-2
gap: 80px                          → gap-20
align-items: center                → items-center
direction: rtl                     → Custom solution needed

/* BORDER & SHADOW MAPPINGS */
// Current                                    → Shadcn/Tailwind
border-radius: 20px                          → rounded-2xl
box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3)  → shadow-2xl shadow-black/30
object-fit: cover                            → object-cover`}
            </pre>
          </div>

          {/* Component Anatomy Breakdown */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Component Anatomy Breakdown</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current venue section classes mapped to shadcn/Tailwind component patterns</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* VENUE COMPONENT STRUCTURE MAPPING */

// Current Implementation → Shadcn Equivalent
.alternating-blocks {
  // Complex gradient background + layout
} 
→ <section className="bg-gradient-to-br from-amber-900 to-slate-700 text-white py-25">
    {/* Content */}
  </section>

.content-wrapper {
  // Container with max-width and centering
}
→ <div className="container mx-auto px-4 max-w-7xl">

.section-header.center {
  // Centered header content
}
→ <div className="text-center mb-16">
    <p className="font-script text-2xl text-amber-200 mb-4">
    <h2 className="font-serif text-5xl text-white mb-6">
    <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
  </div>

.blocks-container {
  // Container for alternating blocks
}
→ <div className="mt-16 space-y-30">

.block-item {
  // Grid layout for content + image
}
→ <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-30">

.block-item.reverse {
  // Reversed layout (image first)
}
→ <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-30">
    <div className="lg:order-2">{/* Content */}</div>
    <div className="lg:order-1">{/* Image */}</div>
  </div>

.block-content {
  // Content area with padding
}
→ <div className="p-10 space-y-6">

.number {
  // Large decorative number
}
→ <div className="font-serif text-5xl text-amber-200/50 font-medium leading-none mb-5">

.block-content h3 {
  // Large heading
}
→ <h3 className="font-serif text-4xl text-white leading-tight mb-6">

.block-content p {
  // Body text styling
}
→ <p className="text-lg leading-relaxed text-white/90 mb-8">

.block-content .lead {
  // Lead paragraph with accent color
}
→ <p className="text-xl text-amber-200 font-normal mb-8">

.block-image {
  // Image container with styling
}
→ <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
    <img className="w-full h-96 object-cover" />
  </div>

/* SHADCN COMPONENT EQUIVALENTS */
- Section wrapper → Custom section with Tailwind classes
- Content container → <div className="container mx-auto px-4">
- Grid layout → <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
- Typography → Built-in Tailwind text classes + custom fonts
- Images → <img> with Tailwind classes or Next.js Image component
- Spacing → Tailwind spacing utilities (p-*, m-*, space-y-*)

/* RESPONSIVE BEHAVIOR */
- Large screens: 2-column grid with image/content alternating
- Mobile: Single column with consistent image-content order
- Spacing scales down appropriately on smaller screens`}
            </pre>
          </div>

          {/* TypeScript Interface Documentation */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>TypeScript Interface Documentation</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Props, state, and data structure definitions for venue section migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// TypeScript interfaces for Venue section migration

interface VenueBlock {
  id: string;
  number: string;
  title: string;
  leadText?: string;
  content: string[];
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  callToAction?: {
    text: string;
    action: string;
  };
}

interface VenueSectionHeader {
  scriptAccent: string;
  title: string;
  description: string;
}

interface VenueSectionProps {
  header?: VenueSectionHeader;
  blocks: VenueBlock[];
  variant?: 'default' | 'compact' | 'expanded';
  showNumbers?: boolean;
  className?: string;
}

interface VenueSectionState {
  visibleBlocks: Set<string>;
  imagesLoaded: Set<string>;
  currentViewport: 'mobile' | 'tablet' | 'desktop';
}

// Default venue content structure
const defaultVenueHeader: VenueSectionHeader = {
  scriptAccent: "Your Perfect Venue",
  title: "Why Choose Rum River Barn",
  description: "Discover what makes our venue the perfect setting for your unforgettable celebration"
}

const defaultVenueBlocks: VenueBlock[] = [
  {
    id: "location",
    number: "01",
    title: "A Picturesque Location For Your Special Event",
    leadText: "Near Milaca, Saint Paul, St Cloud, and Brainerd MN",
    content: [
      "When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.",
      "Here at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.",
      "Our goal is to help you have your perfect day. We tend to book up fast, so don't wait—call us today at 612-801-0546!"
    ],
    image: {
      src: "/images/venue/barn-interior-ceiling-beams-lighting.jpg",
      alt: "Special event venue",
      width: 800,
      height: 500
    }
  },
  {
    id: "property",
    number: "02", 
    title: "Rum River Barn & Vineyard",
    leadText: "Milaca, St. Cloud, Saint Paul, and Brainerd MN",
    content: [
      "Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota's premier barn wedding venue and country special events venue for your custom special event.",
      "Enjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years."
    ],
    image: {
      src: "/images/venue/property-field-wildflowers-natural.jpg",
      alt: "Rum River Barn and Vineyard",
      width: 800,
      height: 500
    }
  }
]

// Layout configuration
interface VenueLayoutConfig {
  blockSpacing: string;
  gridGap: string;
  contentPadding: string;
  imageAspectRatio: string;
}

const venueLayoutConfig: VenueLayoutConfig = {
  blockSpacing: "mb-30", // 120px bottom margin
  gridGap: "gap-20", // 80px gap
  contentPadding: "p-10", // 40px padding
  imageAspectRatio: "aspect-[8/5]" // 800x500 ratio
}

// Usage example for migration:
// const VenueSection: React.FC<VenueSectionProps> = ({ 
//   header = defaultVenueHeader, 
//   blocks = defaultVenueBlocks,
//   showNumbers = true,
//   variant = 'default'
// }) => {
//   const [state, setState] = useState<VenueSectionState>({
//     visibleBlocks: new Set(),
//     imagesLoaded: new Set(),
//     currentViewport: 'desktop'
//   });
//   // Component implementation...
// }`}
            </pre>
          </div>

          {/* Responsive Breakpoint Mapping */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Responsive Breakpoint Mapping</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>CSS media queries converted to Tailwind responsive classes for venue layout</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* VENUE RESPONSIVE BREAKPOINT CONVERSIONS */

// Current CSS Media Queries → Tailwind Responsive Classes

/* Desktop Layout (Current Default) */
.block-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 120px;
}

/* Tailwind Equivalent */
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-30">

/* Mobile Responsive (Current) */
@media (max-width: 768px) {
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

/* Tailwind Mobile-First Equivalent */
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20 lg:mb-30">
  <div className="p-5 lg:p-10">
    <div className="text-4xl lg:text-5xl">01</div>
    <h3 className="text-3xl lg:text-4xl">Title</h3>
  </div>
</div>

/* Specific Venue Layout Breakpoints */
// Current CSS                      → Tailwind Classes
grid-template-columns: 1fr 1fr     → grid-cols-1 lg:grid-cols-2
gap: 80px                          → gap-10 lg:gap-20
margin-bottom: 120px               → mb-20 lg:mb-30
padding: 40px                      → p-5 lg:p-10
font-size: 3rem                    → text-4xl lg:text-5xl
font-size: 2.5rem                  → text-3xl lg:text-4xl

/* RTL Direction Handling for Reverse Blocks */
// Current CSS                      → Tailwind Solution
.block-item.reverse {              → <div className="grid grid-cols-1 lg:grid-cols-2">
  direction: rtl;                     <div className="lg:order-2">Content</div>
}                                     <div className="lg:order-1">Image</div>
.block-item.reverse .block-content {  </div>
  direction: ltr;                   
}

/* Image Responsive Behavior */
// Current                          → Tailwind Responsive
.block-image img {                 → <img className="w-full h-64 md:h-80 lg:h-96 object-cover" />
  height: 500px;
  object-fit: cover;
}

/* Typography Scaling */
// Current Font Sizes               → Tailwind Responsive
font-size: 3rem;                  → text-4xl lg:text-5xl (number)
font-size: 2.5rem;                → text-3xl lg:text-4xl (h3)
font-size: 1.75rem;               → text-xl lg:text-2xl (script-accent)
font-size: 1.25rem;               → text-lg lg:text-xl (lead)
font-size: 1.125rem;              → text-base lg:text-lg (body)

/* Section Padding Responsive */
// Current                          → Tailwind Responsive  
padding: 100px 0;                 → py-16 lg:py-25 (custom)

/* Background Gradient Responsive */
// Consider different gradients for mobile vs desktop if needed
background: linear-gradient(...)   → bg-gradient-to-br from-amber-900 to-slate-700
                                    lg:bg-gradient-to-r (optional: change direction on large screens)`}
            </pre>
          </div>

          {/* Animation & Interaction Notes */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Animation & Interaction Notes</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Current animations and interactive behaviors for venue section migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* VENUE SECTION ANIMATION INVENTORY */

/* Current State: Static Layout */
// The venue section currently has no CSS animations or transitions
// This presents an opportunity to add engaging animations during migration

/* RECOMMENDED ANIMATIONS FOR MIGRATION */

/* 1. Scroll-triggered Block Animations */
// Stagger animation for each block item
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ 
    duration: 0.8, 
    delay: index * 0.2,
    ease: [0.21, 1.11, 0.81, 0.99]
  }}
>

/* 2. Number Badge Animation */
// Animated number reveal with scale effect
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 0.5 }}
  transition={{ 
    duration: 0.6,
    delay: 0.3,
    type: "spring",
    stiffness: 200
  }}
  className="text-5xl font-serif text-amber-200/50"
>

/* 3. Image Reveal Animation */
// Clip-path or scale animation for images
<motion.div
  initial={{ clipPath: "inset(100% 0 0 0)" }}
  whileInView={{ clipPath: "inset(0% 0 0 0)" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="overflow-hidden rounded-2xl"
>

/* 4. Text Content Stagger */
// Stagger text elements within each block
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

/* 5. Hover Interactions */
// Subtle hover effects for block items
.block-item:hover .block-image {
  transform: scale(1.05);
  transition: transform 0.6s ease;
}

// Tailwind equivalent:
<div className="group">
  <div className="group-hover:scale-105 transition-transform duration-500">
    <img />
  </div>
</div>

/* INTERSECTION OBSERVER SETUP */
// For performance-conscious scroll animations
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    },
    { 
      threshold: 0.1,
      rootMargin: '-50px 0px'
    }
  )

  document.querySelectorAll('.block-item').forEach((el) => {
    observer.observe(el)
  })

  return () => observer.disconnect()
}, [])

/* CSS FALLBACK ANIMATIONS */
// For non-JS environments or preference settings
@layer components {
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .animate-delay-200 {
    animation-delay: 0.2s;
  }
  
  .animate-delay-400 {
    animation-delay: 0.4s;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ACCESSIBILITY CONSIDERATIONS */
// Respect user motion preferences
@media (prefers-reduced-motion: reduce) {
  .block-item {
    animation: none;
    transform: none;
  }
}

// React implementation:
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

<motion.div
  initial={!prefersReducedMotion ? { opacity: 0, y: 60 } : {}}
  animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
>

/* PERFORMANCE OPTIMIZATIONS */
- Use transform and opacity for animations (GPU accelerated)
- Implement will-change property only during animations
- Consider using CSS contain for complex layouts
- Lazy load images with intersection observer
- Debounce scroll events if adding scroll-based effects`}
            </pre>
          </div>

          {/* Dependency Analysis */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Dependency Analysis</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>External dependencies and migration strategies for venue section</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* VENUE SECTION CURRENT DEPENDENCIES */

/* 1. CSS Dependencies */
// Design tokens from tokens.css
// Grid system (CSS Grid)
// Custom fonts (Playfair Display, Dancing Script, Montserrat) 
// Gradient backgrounds
// Image styling and responsive behavior

/* 2. No JavaScript Dependencies */
// Currently static - no React state or effects
// No external libraries or components
// No animations or interactions

/* 3. Content Structure */
// Hardcoded content in JSX
// Static image paths
// No CMS or dynamic content loading

/* MIGRATION DEPENDENCIES TO ADD */

/* 1. Core Shadcn/ui Setup */
npm install @radix-ui/react-slot
npm install class-variance-authority  
npm install clsx
npm install tailwind-merge

/* 2. Animation Libraries (Recommended) */
npm install framer-motion              // For scroll animations
npm install react-intersection-observer // For scroll triggers

/* 3. Image Optimization (Optional) */
npm install next/image                 // If using Next.js
npm install react-image               // For lazy loading
npm install @plaiceholder/next        // For image placeholders

/* 4. Utility Libraries */
npm install @tailwindcss/typography   // For prose content
npm install tailwindcss-animate       // Built-in animations

/* CONTENT MANAGEMENT MIGRATION */

/* Option A: Static Content with TypeScript */
// Define interfaces and export data
// src/data/venueContent.ts
export const venueBlocks: VenueBlock[] = [...]

/* Option B: CMS Integration */
// Contentful, Sanity, or Strapi
npm install @contentful/rich-text-react-renderer
npm install @sanity/client

/* Option C: Markdown + MDX */
npm install @mdx-js/react
npm install remark-gfm

/* TAILWIND CONFIGURATION UPDATES */

// tailwind.config.js additions for venue section
module.exports = {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',    // Custom spacing
        '22': '5.5rem',    // for venue layout
        '30': '7.5rem',    // 120px equivalent
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
        'body': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'champagne-gold': '#E4C896',
        'warm-walnut': '#6B4E3D',
        'deep-forest': '#3A4A3C',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-up-delay': 'fadeInUp 0.8s ease-out 0.2s forwards',
      }
    }
  }
}

/* COMPONENT STRUCTURE FOR MIGRATION */

// Recommended file structure:
// components/venue/
//   ├── VenueSection.tsx
//   ├── VenueBlock.tsx
//   ├── VenueHeader.tsx
//   └── types.ts

/* SHADCN COMPONENT MAPPING */

// Current Structure → Shadcn Components
Static JSX → Custom components with proper TypeScript
CSS Grid → Tailwind grid utilities
Image styling → Image component with optimization
Content blocks → Reusable VenueBlock components

/* MIGRATION CHECKLIST - VENUE SECTION */
□ Set up Tailwind custom spacing values (30 = 120px)
□ Configure custom font families in Tailwind
□ Create VenueBlock component with TypeScript interfaces
□ Implement responsive grid with Tailwind classes
□ Add image optimization (Next.js Image or similar)
□ Implement scroll animations with Framer Motion
□ Create content data structure (static or CMS)
□ Add proper TypeScript typing throughout
□ Test responsive behavior across breakpoints
□ Performance audit and accessibility review
□ Add proper SEO meta tags and structured data

/* PERFORMANCE CONSIDERATIONS */
- Use CSS Grid with Tailwind for optimal layout performance
- Implement image lazy loading and proper sizing
- Consider using CSS containment for complex layouts
- Add proper preload hints for hero images
- Optimize font loading (font-display: swap)

/* ACCESSIBILITY ENHANCEMENTS */
- Add proper ARIA labels for numbered blocks
- Ensure sufficient color contrast (especially on gradient bg)
- Implement skip links for keyboard navigation
- Add alt text for all images
- Respect prefers-reduced-motion for animations

/* CONTENT STRATEGY */
- Make phone number and contact info configurable
- Add structured data for business/venue information  
- Consider multi-language support if needed
- Plan for future content expansion (more blocks, testimonials)
- Add admin interface for content management`}
            </pre>
          </div>

        </div>
      </section>
    </>
  )
}