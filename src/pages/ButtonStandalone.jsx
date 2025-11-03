import CTAButton from '../components/CTAButton'
import Icon from '../components/Icon'

export default function ButtonStandalone() {
  return (
    <>
      {/* Button Examples Section */}
      <section style={{ 
        background: 'var(--romantic-ivory)',
        padding: '4rem 0'
      }}>
        <div className="content-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem', fontSize: '3rem' }}>Button System Demo</h1>
            <p style={{ color: 'var(--warm-walnut)', fontSize: '1.25rem' }}>Current CTAButton implementation and shadcn migration examples</p>
          </div>

          {/* Current Button Examples */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--dusty-rose)', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>Current Button Variants</h2>
            
            {/* Primary Buttons */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem', fontSize: '1.5rem' }}>Primary Buttons</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <CTAButton variant="primary" size="small">Small Primary</CTAButton>
                <CTAButton variant="primary">Normal Primary</CTAButton>
                <CTAButton variant="primary" size="large">Large Primary</CTAButton>
                <CTAButton variant="primary" disabled>Disabled Primary</CTAButton>
              </div>
            </div>

            {/* Outline Buttons */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem', fontSize: '1.5rem' }}>Outline Buttons</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <CTAButton variant="outline" size="small">Small Outline</CTAButton>
                <CTAButton variant="outline">Normal Outline</CTAButton>
                <CTAButton variant="outline" size="large">Large Outline</CTAButton>
                <CTAButton variant="outline" disabled>Disabled Outline</CTAButton>
              </div>
            </div>

            {/* Special Variant Buttons */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem', fontSize: '1.5rem' }}>Special Variants</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <CTAButton variant="vr-special">VR Special</CTAButton>
                <CTAButton variant="vr-barn">VR Barn</CTAButton>
                <CTAButton variant="vr-bridal">VR Bridal</CTAButton>
                <CTAButton variant="submit">Submit Form</CTAButton>
              </div>
            </div>

            {/* Button with Icons */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--warm-walnut)', marginBottom: '1rem', fontSize: '1.5rem' }}>Buttons with Icons</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <CTAButton variant="primary">
                  <Icon name="calendar" size="sm" color="white" />
                  Schedule Visit
                </CTAButton>
                <CTAButton variant="outline">
                  <Icon name="camera" size="sm" color="dusty-rose" />
                  View Gallery
                </CTAButton>
                <CTAButton variant="primary" href="/contact">
                  Contact Us
                  <Icon name="arrow-right" size="sm" color="white" />
                </CTAButton>
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
            <h2 style={{ color: 'var(--charcoal-gray)', marginBottom: '1rem' }}>Button Migration Documentation</h2>
            <p style={{ color: 'var(--warm-walnut)' }}>Complete guide for migrating CTAButton to shadcn Button components</p>
          </div>

          {/* Current Implementation */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Current CTAButton Implementation</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// Current React Component
import CTAButton from '../components/CTAButton'

// Usage Examples
<CTAButton variant="primary" size="large">
  Schedule Your Visit
</CTAButton>

<CTAButton variant="outline" href="/gallery">
  View Gallery
</CTAButton>

<CTAButton variant="primary" disabled>
  Coming Soon
</CTAButton>

// Current CTAButton Props
export const CTAButton = ({ 
  variant = 'primary',    // primary, outline, vr-special, vr-barn, vr-bridal
  size = 'normal',        // normal, large, small  
  href,                   // External link
  to,                     // React Router link
  onClick,                // Click handler
  children,               // Button content
  className = '',         // Additional CSS classes
  disabled = false,       // Disabled state
  type = 'button',        // Button type
  ariaLabel,              // Accessibility label
  target,                 // Link target
  rel                     // Link relationship
}) => {
  // Component logic...
}`}
            </pre>
          </div>

          {/* Shadcn Migration Target */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Shadcn Button Migration Target</h3>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`// Shadcn Button Implementation
import { Button } from "@/components/ui/button"
import { Calendar, Camera, ArrowRight } from "lucide-react"

// Direct Migration Examples
<Button variant="default" size="lg">
  Schedule Your Visit
</Button>

<Button variant="outline" asChild>
  <a href="/gallery">View Gallery</a>
</Button>

<Button variant="default" disabled>
  Coming Soon
</Button>

// With Icons (Lucide React)
<Button variant="default" size="lg">
  <Calendar className="mr-2 h-4 w-4" />
  Schedule Your Visit
</Button>

<Button variant="outline">
  <Camera className="mr-2 h-4 w-4" />
  View Gallery
</Button>

<Button variant="default" asChild>
  <Link to="/contact" className="inline-flex items-center">
    Contact Us
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</Button>

// Shadcn Button Props Interface
interface ButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}`}
            </pre>
          </div>

          {/* Button Props & Values Documentation */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Button Props & Values Documentation</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Complete mapping of current CTAButton props to shadcn Button equivalents</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* BUTTON VARIANT MAPPINGS */

// Current CTAButton → Shadcn Button
variant="primary"     → variant="default"
variant="outline"     → variant="outline" 
variant="vr-special"  → variant="default" + custom className
variant="vr-barn"     → variant="secondary" + custom className
variant="vr-bridal"   → variant="outline" + custom className
variant="submit"      → variant="default" + type="submit"
variant="floating"    → variant="default" + fixed positioning

/* BUTTON SIZE MAPPINGS */

// Current CTAButton → Shadcn Button
size="small"          → size="sm"
size="normal"         → size="default" (or omit)
size="large"          → size="lg"

/* BUTTON STATE MAPPINGS */

// Current CTAButton → Shadcn Button
disabled={true}       → disabled={true}
type="submit"         → type="submit"
onClick={handler}     → onClick={handler}
className="custom"    → className="custom"

/* LINK BEHAVIOR MAPPINGS */

// Current CTAButton → Shadcn Button
href="/path"          → <Button asChild><a href="/path">...</a></Button>
to="/path"            → <Button asChild><Link to="/path">...</Link></Button>
target="_blank"       → <Button asChild><a target="_blank">...</a></Button>

/* ACCESSIBILITY MAPPINGS */

// Current CTAButton → Shadcn Button
ariaLabel="text"      → aria-label="text"
rel="noopener"        → rel="noopener" (on child link)

/* ICON INTEGRATION */

// Current CTAButton → Shadcn Button + Lucide
<Icon name="calendar" size="sm" color="white" />
→ <Calendar className="mr-2 h-4 w-4" />

<Icon name="camera" size="sm" color="dusty-rose" />
→ <Camera className="mr-2 h-4 w-4" />

<Icon name="arrow-right" size="sm" color="white" />  
→ <ArrowRight className="ml-2 h-4 w-4" />

/* USAGE PATTERNS */

// Pattern 1: Simple Button
// Before
<CTAButton variant="primary">Click Me</CTAButton>
// After  
<Button variant="default">Click Me</Button>

// Pattern 2: Link Button
// Before
<CTAButton variant="outline" href="/gallery">View Gallery</CTAButton>
// After
<Button variant="outline" asChild>
  <a href="/gallery">View Gallery</a>
</Button>

// Pattern 3: Router Link Button
// Before
<CTAButton variant="primary" to="/contact">Contact</CTAButton>
// After
<Button variant="default" asChild>
  <Link to="/contact">Contact</Link>
</Button>

// Pattern 4: Button with Icon
// Before
<CTAButton variant="primary">
  <Icon name="calendar" size="sm" color="white" />
  Schedule Visit
</CTAButton>
// After
<Button variant="default">
  <Calendar className="mr-2 h-4 w-4" />
  Schedule Visit
</Button>

// Pattern 5: Custom Styled Button
// Before
<CTAButton variant="vr-special" className="my-custom-class">
  Special Action
</CTAButton>
// After
<Button 
  variant="default" 
  className={cn("bg-rose-400 hover:bg-amber-900", "my-custom-class")}
>
  Special Action
</Button>`}
            </pre>
          </div>

          {/* Visual Button Examples Gallery */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Visual Button Examples Gallery</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Side-by-side comparison of current vs shadcn button implementations</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* VISUAL BUTTON COMPARISON */

┌─────────────────────────────────────────────────────────────────────────────┐
│ CURRENT CTABUTTON vs SHADCN BUTTON                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ PRIMARY VARIANTS                                                            │
│ ┌─────────────────────┐    ┌─────────────────────┐                         │
│ │ Current CTAButton   │ →  │ Shadcn Button       │                         │
│ │ ┌─────────────────┐ │    │ ┌─────────────────┐ │                         │
│ │ │ Schedule Visit  │ │    │ │ Schedule Visit  │ │                         │
│ │ │ [dusty-rose bg] │ │    │ │ [default theme] │ │                         │
│ │ └─────────────────┘ │    │ └─────────────────┘ │                         │
│ └─────────────────────┘    └─────────────────────┘                         │
│                                                                             │
│ OUTLINE VARIANTS                                                            │
│ ┌─────────────────────┐    ┌─────────────────────┐                         │
│ │ Current CTAButton   │ →  │ Shadcn Button       │                         │
│ │ ┌─────────────────┐ │    │ ┌─────────────────┐ │                         │
│ │ │  View Gallery   │ │    │ │  View Gallery   │ │                         │
│ │ │ [dusty-rose bdr]│ │    │ │ [outline theme] │ │                         │
│ │ └─────────────────┘ │    │ └─────────────────┘ │                         │
│ └─────────────────────┘    └─────────────────────┘                         │
│                                                                             │
│ SIZE VARIANTS                                                               │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ Current: size="small" | size="normal" | size="large"                   │ │
│ │ ┌───────┐ ┌─────────────┐ ┌─────────────────┐                         │ │  
│ │ │ Small │ │   Normal    │ │     Large       │                         │ │
│ │ └───────┘ └─────────────┘ └─────────────────┘                         │ │
│ │                                                                         │ │
│ │ Shadcn: size="sm" | size="default" | size="lg"                         │ │
│ │ ┌───────┐ ┌─────────────┐ ┌─────────────────┐                         │ │
│ │ │  sm   │ │   default   │ │       lg        │                         │ │
│ │ └───────┘ └─────────────┘ └─────────────────┘                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ BUTTON STATES                                                               │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ Current:   [Normal]  [Hover]  [Disabled]  [Focus]                      │ │
│ │ Shadcn:    [Normal]  [Hover]  [Disabled]  [Focus] + [Loading]          │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ICON INTEGRATION                                                            │
│ ┌─────────────────────┐    ┌─────────────────────┐                         │
│ │ Current: Icon comp  │ →  │ Shadcn: Lucide      │                         │
│ │ ┌─────────────────┐ │    │ ┌─────────────────┐ │                         │
│ │ │ [📅] Schedule   │ │    │ │ [📅] Schedule   │ │                         │
│ │ │     Visit       │ │    │ │     Visit       │ │                         │
│ │ └─────────────────┘ │    │ └─────────────────┘ │                         │
│ └─────────────────────┘    └─────────────────────┘                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

/* BUTTON STATE FLOW */

Normal → Hover → Focus → Active → Disabled

Current CTAButton:
[dusty-rose] → [warm-walnut] → [outline] → [pressed] → [opacity-50]

Shadcn Button:
[primary] → [primary/90] → [ring-2] → [primary/95] → [disabled]

/* RESPONSIVE BEHAVIOR */

Mobile (< 768px):
- Current: Manual responsive classes
- Shadcn: Built-in responsive variants

<Button size="sm" className="md:size-default lg:size-lg">
  Responsive Button
</Button>

/* ANIMATION STATES */

Current CTAButton:
- transition: all 0.3s ease
- hover: transform translateY(-2px)
- active: transform translateY(0)

Shadcn Button:
- Built-in transitions via Tailwind
- Focus-visible ring animations  
- Smooth state transitions`}
            </pre>
          </div>

          {/* Button Token Mappings */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Button Token Mappings</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>CSS custom property mapping for consistent button styling migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* COMPLETE BUTTON TOKEN MAPPING TABLE */

┌────────────────────┬─────────────────────┬─────────────────────┬─────────────────────┐
│ CSS Property       │ Current Value       │ Design Token        │ Shadcn/Tailwind     │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ BUTTON COLORS                                                                        │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ background         │ #9D6B7B             │ --dusty-rose        │ bg-rose-400         │
│ background:hover   │ #6B4E3D             │ --warm-walnut       │ hover:bg-amber-900  │
│ color              │ #FFFFFF             │ --soft-white        │ text-white          │
│ border-color       │ #9D6B7B             │ --dusty-rose        │ border-rose-400     │
│ border:hover       │ #6B4E3D             │ --warm-walnut       │ hover:border-amber  │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ BUTTON SPACING                                                                       │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ padding            │ 0.75rem 1.5rem      │ --space-sm --space  │ px-6 py-3           │
│ padding (small)    │ 0.5rem 1rem         │ --space-xs --space  │ px-4 py-2           │
│ padding (large)    │ 1rem 2rem           │ --space-md --space  │ px-8 py-4           │
│ margin             │ 0.5rem              │ --space-xs          │ m-2                 │
│ gap                │ 0.5rem              │ --space-xs          │ gap-2               │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ BUTTON TYPOGRAPHY                                                                    │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ font-family        │ 'Montserrat'        │ --font-body         │ font-sans           │
│ font-size          │ 1rem                │ --text-base         │ text-base           │
│ font-size (small)  │ 0.875rem            │ --text-sm           │ text-sm             │
│ font-size (large)  │ 1.125rem            │ --text-lg           │ text-lg             │
│ font-weight        │ 500                 │ --font-medium       │ font-medium         │
│ line-height        │ 1.5                 │ --leading-normal    │ leading-normal      │
│ letter-spacing     │ 0.025em             │ --tracking-wide     │ tracking-wide       │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ BUTTON BORDERS                                                                       │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ border-radius      │ 50px                │ --radius-full       │ rounded-full        │
│ border-width       │ 2px                 │ --border-medium     │ border-2            │
│ border-style       │ solid               │ --                  │ border-solid        │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ BUTTON SHADOWS                                                                       │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ box-shadow         │ 0 4px 6px rgba(...) │ --shadow-md         │ shadow-md           │
│ box-shadow:hover   │ 0 10px 15px rgba... │ --shadow-lg         │ hover:shadow-lg     │
│ box-shadow:focus   │ 0 0 0 3px rgba(...) │ --focus-ring        │ focus:ring-2        │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ BUTTON TRANSITIONS                                                                   │
├────────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ transition         │ all 0.3s ease       │ --transition-normal │ transition-all      │
│ transform:hover    │ translateY(-2px)    │ --                  │ hover:-translate-y  │
│ transition-duration│ 300ms               │ --duration-normal   │ duration-300        │
│ transition-easing  │ ease                │ --easing-standard   │ ease-in-out         │
└────────────────────┴─────────────────────┴─────────────────────┴─────────────────────┘

/* BUTTON VARIANT TOKEN MAPPING */

// Primary Button (variant="primary" → variant="default")
.romantic-button.primary {
  background: var(--dusty-rose);           → bg-rose-400
  color: var(--soft-white);                → text-white  
  border: none;                            → border-0
  padding: var(--space-sm) var(--space);   → px-6 py-3
  border-radius: var(--radius-full);       → rounded-full
  transition: var(--transition-normal);    → transition-all duration-300
}

.romantic-button.primary:hover {
  background: var(--warm-walnut);          → hover:bg-amber-900
  transform: translateY(-2px);             → hover:-translate-y-0.5
  box-shadow: var(--shadow-lg);            → hover:shadow-lg
}

// Outline Button (variant="outline" → variant="outline")
.romantic-button.outline {
  background: transparent;                 → bg-transparent
  color: var(--dusty-rose);                → text-rose-400
  border: 2px solid var(--dusty-rose);     → border-2 border-rose-400
  padding: var(--space-sm) var(--space);   → px-6 py-3
  border-radius: var(--radius-full);       → rounded-full
}

.romantic-button.outline:hover {
  background: var(--dusty-rose);           → hover:bg-rose-400
  color: var(--soft-white);                → hover:text-white
  border-color: var(--dusty-rose);         → hover:border-rose-400
}

/* CUSTOM BUTTON VARIANTS */

// VR Special (variant="vr-special" → custom variant)
.romantic-button.vr-special {
  background: linear-gradient(45deg, var(--champagne-gold), var(--dusty-rose));
  → bg-gradient-to-r from-amber-200 to-rose-400
  
  color: var(--text-dark);                 → text-amber-900
  border: none;                            → border-0
  position: relative;                      → relative
  overflow: hidden;                        → overflow-hidden
}

// VR Barn (variant="vr-barn" → secondary + custom)
.romantic-button.vr-barn {
  background: var(--warm-walnut);          → bg-amber-900
  color: var(--cream-pearl);               → text-amber-50
  border: 2px solid var(--deep-forest);    → border-2 border-slate-700
}

// VR Bridal (variant="vr-bridal" → outline + custom)
.romantic-button.vr-bridal {
  background: var(--blush-pink);           → bg-rose-100
  color: var(--dusty-rose);                → text-rose-400
  border: 2px solid var(--champagne-gold); → border-2 border-amber-200
}

/* SIZE VARIANT MAPPINGS */

// Small Size (size="small" → size="sm")
.romantic-button.size-small {
  padding: var(--space-xs) var(--space-sm); → px-3 py-1.5
  font-size: var(--text-sm);                → text-sm
  border-radius: var(--radius-md);          → rounded-lg
}

// Large Size (size="large" → size="lg") 
.romantic-button.size-large {
  padding: var(--space-md) var(--space-xl); → px-8 py-4
  font-size: var(--text-lg);                → text-lg
  font-weight: var(--font-semibold);        → font-semibold
}

/* STATE MAPPINGS */

// Disabled State
.romantic-button:disabled {
  opacity: 0.5;                            → disabled:opacity-50
  cursor: not-allowed;                     → disabled:cursor-not-allowed
  background: var(--muted-mauve);          → disabled:bg-slate-300
  color: var(--warm-walnut);               → disabled:text-slate-500
}

// Focus State
.romantic-button:focus {
  outline: 2px solid var(--dusty-rose);    → focus:ring-2 focus:ring-rose-400
  outline-offset: 2px;                     → focus:ring-offset-2
  box-shadow: var(--focus-ring);           → focus:ring-opacity-50
}

/* ICON INTEGRATION TOKENS */

// Current Icon System → Lucide React
Icon name="calendar" size="sm" color="white"
→ <Calendar className="mr-2 h-4 w-4" />

Icon name="camera" size="sm" color="dusty-rose"  
→ <Camera className="mr-2 h-4 w-4 text-rose-400" />

Icon name="arrow-right" size="sm" color="white"
→ <ArrowRight className="ml-2 h-4 w-4" />

// Icon Size Mappings
size="xs" → h-3 w-3
size="sm" → h-4 w-4  
size="md" → h-5 w-5
size="lg" → h-6 w-6
size="xl" → h-8 w-8`}
            </pre>
          </div>

          {/* Button Component Anatomy */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Button Component Anatomy Breakdown</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Detailed breakdown of current CTAButton structure vs shadcn Button architecture</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* COMPONENT ANATOMY COMPARISON */

┌─────────────────────────────────────────────────────────────────────────────┐
│ CURRENT CTABUTTON ARCHITECTURE                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ CTAButton.jsx                                                               │
│ ├── Props Interface (JavaScript)                                            │
│ │   ├── variant: string                                                      │
│ │   ├── size: string                                                         │
│ │   ├── href/to: string                                                      │
│ │   ├── onClick: function                                                    │
│ │   └── children: ReactNode                                                  │
│ │                                                                             │
│ ├── Logic Layer                                                              │
│ │   ├── getBaseClass() - Determines CSS class                               │
│ │   ├── Conditional rendering (Link/a/button)                               │
│ │   └── Props spreading and validation                                       │
│ │                                                                             │
│ ├── Render Layer                                                             │
│ │   ├── <Link> for React Router                                             │
│ │   ├── <a> for external links                                              │
│ │   └── <button> for form actions                                           │
│ │                                                                             │
│ └── Styling (CSS Classes)                                                    │
│     ├── .romantic-button (base)                                             │
│     ├── .primary/.outline (variants)                                        │
│     ├── .size-small/.size-large (sizes)                                     │
│     └── Custom CSS with design tokens                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ SHADCN BUTTON ARCHITECTURE                                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ button.tsx                                                                  │
│ ├── Props Interface (TypeScript)                                            │
│ │   ├── variant: "default" | "destructive" | "outline" | "secondary" |     │
│ │   │           "ghost" | "link"                                            │
│ │   ├── size: "default" | "sm" | "lg" | "icon"                             │
│ │   ├── asChild: boolean                                                     │
│ │   ├── className: string                                                    │
│ │   └── Standard HTML button props                                          │
│ │                                                                             │
│ ├── Variant System (class-variance-authority)                               │
│ │   ├── buttonVariants() - CVA configuration                                │
│ │   ├── Compound variants for size + variant combinations                   │
│ │   └── Default props and validation                                        │
│ │                                                                             │
│ ├── Render Layer (Radix Primitives)                                         │
│ │   ├── Slot component for polymorphic rendering                            │
│ │   ├── forwardRef for ref passing                                          │
│ │   └── Automatic accessibility attributes                                  │
│ │                                                                             │
│ └── Styling (Tailwind + CVA)                                                │
│     ├── Base classes (Tailwind utilities)                                   │
│     ├── Variant classes (dynamic)                                           │
│     ├── Size classes (responsive)                                           │
│     └── Built-in states (hover, focus, disabled)                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

/* STRUCTURAL DIFFERENCES */

Current CTAButton Structure:
├── Manual conditional rendering
├── String-based variant system  
├── Custom CSS classes
├── Props validation in component
└── Manual accessibility handling

Shadcn Button Structure:
├── Polymorphic rendering (asChild)
├── Type-safe variant system (CVA)
├── Tailwind utility classes
├── TypeScript interface validation
└── Built-in accessibility (Radix)

/* COMPONENT IMPLEMENTATION COMPARISON */

// CURRENT CTABUTTON COMPONENT LOGIC
export const CTAButton = ({ 
  variant = 'primary',
  size = 'normal',
  href,
  to,
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
  target,
  rel
}) => {
  // Manual class name building
  const getBaseClass = () => {
    if (variant === 'submit') {
      return 'cta-submit-button';
    } else if (variant === 'floating') {
      return 'floating-cta';
    } else if (variant.startsWith('vr-')) {
      return \`romantic-button \${variant}\`;
    } else {
      return \`romantic-button \${variant}\`;
    }
  };

  const baseClass = getBaseClass();
  const finalClassName = \`\${baseClass} \${size !== 'normal' ? \`size-\${size}\` : ''} \${className}\`.trim();

  // Manual conditional rendering
  if (to) {
    return <Link to={to} className={finalClassName} onClick={onClick}>{children}</Link>;
  }
  
  if (href) {
    return <a href={href} className={finalClassName} target={target} rel={rel}>{children}</a>;
  }
  
  return <button type={type} className={finalClassName} onClick={onClick} disabled={disabled}>{children}</button>;
};

// SHADCN BUTTON COMPONENT LOGIC
import { buttonVariants } from "./button-variants"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

// CVA VARIANT CONFIGURATION
const buttonVariants = cva(
  // Base classes
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/* MIGRATION BENEFITS */

Current Limitations:
❌ No TypeScript safety
❌ Manual accessibility handling  
❌ String-based variant system
❌ Limited composability
❌ Manual conditional rendering
❌ CSS class conflicts possible
❌ No built-in loading states
❌ Manual focus management

Shadcn Advantages:
✅ Full TypeScript integration
✅ Built-in accessibility (Radix)
✅ Type-safe variant system (CVA)
✅ Polymorphic composition (asChild)
✅ Automatic conditional rendering
✅ Tailwind utility consistency
✅ Loading state support
✅ Automatic focus management
✅ Better testing integration
✅ Design system consistency`}
            </pre>
          </div>

          {/* Button State Management & Interactions */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Button State Management & Interactions</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Comprehensive guide to button states, interactions, and event handling migration</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* BUTTON STATE MANAGEMENT COMPARISON */

/* CURRENT CTABUTTON STATES */

// Basic States
.romantic-button {
  /* Normal state */
  background: var(--dusty-rose);
  color: var(--soft-white);
  transition: all 0.3s ease;
}

.romantic-button:hover {
  /* Hover state */
  background: var(--warm-walnut);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(157, 107, 123, 0.3);
}

.romantic-button:focus {
  /* Focus state */
  outline: 2px solid var(--dusty-rose);
  outline-offset: 2px;
}

.romantic-button:active {
  /* Active/pressed state */
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(157, 107, 123, 0.2);
}

.romantic-button:disabled {
  /* Disabled state */
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--muted-mauve);
  transform: none;
}

/* SHADCN BUTTON STATES */

// Enhanced State System (Built-in Tailwind)
const buttonVariants = cva(
  // Base state with transitions
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // ... other variants with built-in state handling
      }
    }
  }
)

/* INTERACTION PATTERNS */

/* 1. CLICK HANDLING */

// Current CTAButton
<CTAButton 
  variant="primary" 
  onClick={(e) => {
    console.log('Button clicked:', e.target);
    // Manual event handling
  }}
>
  Click Me
</CTAButton>

// Shadcn Button
<Button 
  variant="default" 
  onClick={(e) => {
    console.log('Button clicked:', e.target);
    // Same event handling, better TypeScript support
  }}
>
  Click Me
</Button>

/* 2. FORM SUBMISSION */

// Current CTAButton
<CTAButton 
  variant="submit" 
  type="submit"
  onClick={handleSubmit}
>
  Submit Form
</CTAButton>

// Shadcn Button
<Button 
  variant="default" 
  type="submit"
  onClick={handleSubmit}
>
  Submit Form
</Button>

/* 3. NAVIGATION HANDLING */

// Current CTAButton (External Link)
<CTAButton 
  variant="outline" 
  href="/gallery"
  target="_blank"
  rel="noopener noreferrer"
>
  View Gallery
</CTAButton>

// Shadcn Button (External Link)
<Button variant="outline" asChild>
  <a href="/gallery" target="_blank" rel="noopener noreferrer">
    View Gallery
  </a>
</Button>

// Current CTAButton (Router Link)
<CTAButton 
  variant="primary" 
  to="/contact"
>
  Contact Us
</CTAButton>

// Shadcn Button (Router Link)
<Button variant="default" asChild>
  <Link to="/contact">Contact Us</Link>
</Button>

/* 4. ASYNC OPERATIONS & LOADING STATES */

// Current CTAButton (Manual Loading)
const [isLoading, setIsLoading] = useState(false);

<CTAButton 
  variant="primary" 
  disabled={isLoading}
  onClick={async () => {
    setIsLoading(true);
    await submitForm();
    setIsLoading(false);
  }}
>
  {isLoading ? 'Submitting...' : 'Submit Form'}
</CTAButton>

// Shadcn Button (Enhanced Loading)
import { Loader2 } from "lucide-react"

<Button 
  variant="default" 
  disabled={isLoading}
  onClick={async () => {
    setIsLoading(true);
    await submitForm();
    setIsLoading(false);
  }}
>
  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  {isLoading ? 'Submitting...' : 'Submit Form'}
</Button>

/* 5. CONDITIONAL STATES */

// Current CTAButton (Manual State Management)
<CTAButton 
  variant={isSuccess ? "primary" : "outline"}
  disabled={isDisabled}
  className={isSuccess ? "success-state" : ""}
>
  {isSuccess ? 'Success!' : 'Try Again'}
</CTAButton>

// Shadcn Button (Enhanced State Management)
<Button 
  variant={isSuccess ? "default" : "outline"}
  disabled={isDisabled}
  className={cn(
    isSuccess && "bg-green-500 hover:bg-green-600",
    isError && "bg-red-500 hover:bg-red-600"
  )}
>
  {isSuccess && <CheckCircle className="mr-2 h-4 w-4" />}
  {isError && <XCircle className="mr-2 h-4 w-4" />}
  {isSuccess ? 'Success!' : isError ? 'Error' : 'Try Again'}
</Button>

/* EVENT HANDLING PATTERNS */

/* 1. KEYBOARD NAVIGATION */

// Current CTAButton (Basic)
<CTAButton 
  variant="primary"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAction();
    }
  }}
>
  Action Button
</CTAButton>

// Shadcn Button (Enhanced)
<Button 
  variant="default"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleAction();
    }
  }}
  // Built-in focus management
>
  Action Button
</Button>

/* 2. FOCUS MANAGEMENT */

// Current CTAButton (Manual)
const buttonRef = useRef(null);

useEffect(() => {
  if (shouldFocus) {
    buttonRef.current?.focus();
  }
}, [shouldFocus]);

<CTAButton 
  ref={buttonRef}
  variant="primary"
  onFocus={() => console.log('Button focused')}
  onBlur={() => console.log('Button blurred')}
>
  Focus Me
</CTAButton>

// Shadcn Button (Enhanced)
const buttonRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  if (shouldFocus) {
    buttonRef.current?.focus();
  }
}, [shouldFocus]);

<Button 
  ref={buttonRef}
  variant="default"
  onFocus={() => console.log('Button focused')}
  onBlur={() => console.log('Button blurred')}
  // Built-in focus-visible styles
>
  Focus Me
</Button>

/* 3. TOUCH/MOBILE INTERACTIONS */

// Current CTAButton (Basic Touch)
<CTAButton 
  variant="primary"
  onTouchStart={() => console.log('Touch started')}
  onTouchEnd={() => console.log('Touch ended')}
  style={{ touchAction: 'manipulation' }}
>
  Touch Button
</CTAButton>

// Shadcn Button (Enhanced Touch)
<Button 
  variant="default"
  onTouchStart={() => console.log('Touch started')}
  onTouchEnd={() => console.log('Touch ended')}
  className="touch-manipulation" // Built-in touch optimization
>
  Touch Button
</Button>

/* STATE VALIDATION PATTERNS */

// TypeScript State Validation (Shadcn Advantage)
interface ButtonState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isDisabled: boolean;
}

const getButtonProps = (state: ButtonState): ButtonProps => {
  return {
    variant: state.isSuccess ? "default" : state.isError ? "destructive" : "outline",
    disabled: state.isLoading || state.isDisabled,
    className: cn(
      state.isLoading && "cursor-wait",
      state.isSuccess && "bg-green-500",
      state.isError && "bg-red-500"
    )
  };
};

<Button {...getButtonProps(buttonState)}>
  {getButtonText(buttonState)}
</Button>

/* ANIMATION & TRANSITION STATES */

// Current CTAButton CSS Transitions
.romantic-button {
  transition: all 0.3s ease;
}

.romantic-button:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

// Shadcn Button Enhanced Transitions
// Built into Tailwind classes:
// - transition-colors (color changes)
// - transition-all (all properties)
// - duration-150/300/500 (timing)
// - ease-in-out (easing)

<Button 
  variant="default"
  className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
>
  Animated Button
</Button>

/* ACCESSIBILITY STATE MANAGEMENT */

// Current CTAButton (Manual ARIA)
<CTAButton 
  variant="primary"
  aria-label="Submit contact form"
  aria-describedby="submit-help"
  aria-pressed={isPressed}
  role="button"
>
  Submit
</CTAButton>

// Shadcn Button (Enhanced ARIA)
<Button 
  variant="default"
  aria-label="Submit contact form"
  aria-describedby="submit-help"
  aria-pressed={isPressed}
  // Built-in role and accessibility attributes
>
  Submit
</Button>`}
            </pre>
          </div>

          {/* Button Accessibility & ARIA Documentation */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Button Accessibility & ARIA Documentation</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Complete accessibility migration guide for WCAG 2.1 AA compliance</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* ACCESSIBILITY MIGRATION GUIDE */

/* CURRENT CTABUTTON ACCESSIBILITY */

// Basic Accessibility (Manual Implementation)
<CTAButton 
  variant="primary"
  aria-label="Schedule your venue tour"
  tabIndex={0}
  role="button"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  <Icon name="calendar" size="sm" color="white" aria-hidden="true" />
  Schedule Tour
</CTAButton>

/* SHADCN BUTTON ACCESSIBILITY */

// Enhanced Accessibility (Built-in + Radix Primitives)
<Button 
  variant="default"
  aria-label="Schedule your venue tour"
  // tabIndex, role, keyboard handling automatically handled
>
  <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
  Schedule Tour
</Button>

/* WCAG 2.1 AA COMPLIANCE CHECKLIST */

┌─────────────────────────────────────────────────────────────────────────────┐
│ ACCESSIBILITY REQUIREMENT               │ CURRENT │ SHADCN │ STATUS         │
├─────────────────────────────────────────┼─────────┼────────┼────────────────┤
│ 1.4.3 Contrast (Minimum)               │ Manual  │ Built  │ ✅ Enhanced    │
│ 1.4.11 Non-text Contrast              │ Manual  │ Built  │ ✅ Enhanced    │
│ 2.1.1 Keyboard Navigation              │ Manual  │ Built  │ ✅ Enhanced    │
│ 2.1.2 No Keyboard Trap                 │ Manual  │ Built  │ ✅ Enhanced    │
│ 2.4.3 Focus Order                      │ Manual  │ Built  │ ✅ Enhanced    │
│ 2.4.7 Focus Visible                    │ Manual  │ Built  │ ✅ Enhanced    │
│ 3.2.2 On Input                         │ Manual  │ Built  │ ✅ Enhanced    │
│ 4.1.2 Name, Role, Value               │ Manual  │ Built  │ ✅ Enhanced    │
│ 4.1.3 Status Messages                  │ Manual  │ Built  │ ✅ Enhanced    │
└─────────────────────────────────────────┴─────────┴────────┴────────────────┘

/* DETAILED ACCESSIBILITY FEATURES */

/* 1. COLOR CONTRAST COMPLIANCE */

// Current CTAButton (Manual Validation)
.romantic-button.primary {
  background: #9D6B7B;  /* Need to verify contrast ratio */
  color: #FFFFFF;       /* 4.5:1 ratio required */
}

.romantic-button.outline {
  color: #9D6B7B;       /* Against background: need 4.5:1 */
  border: 2px solid #9D6B7B;
}

// Shadcn Button (Built-in Compliance)
// CSS variables automatically maintain contrast ratios
:root {
  --primary: 210 40% 50%;           /* hsl values for automatic contrast */
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
}

// Automatic contrast validation with Tailwind
<Button variant="default">  {/* Guaranteed 4.5:1 contrast */}
  High Contrast Text
</Button>

/* 2. KEYBOARD NAVIGATION */

// Current CTAButton (Manual Implementation)
const CTAButton = ({ onClick, children, ...props }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(e);
    }
  };

  return (
    <button 
      onKeyDown={handleKeyDown}
      tabIndex={0}
      {...props}
    >
      {children}
    </button>
  );
};

// Shadcn Button (Automatic Keyboard Handling)
// Built-in keyboard support via Radix Primitives
<Button 
  variant="default"
  onClick={handleClick}
  // Automatic Enter/Space handling
  // Automatic Tab navigation
  // Automatic Arrow key support (when appropriate)
>
  Auto Keyboard Support
</Button>

/* 3. FOCUS MANAGEMENT */

// Current CTAButton (Manual Focus Styles)
.romantic-button:focus {
  outline: 2px solid var(--dusty-rose);
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(157, 107, 123, 0.3);
}

// Shadcn Button (Enhanced Focus Management)
// Built-in focus-visible support
.button {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2;
}

// Usage with custom focus indicators
<Button 
  variant="default"
  className="focus-visible:ring-rose-400 focus-visible:ring-offset-rose-100"
>
  Custom Focus Ring
</Button>

/* 4. ARIA ATTRIBUTES & ROLES */

// Current CTAButton (Manual ARIA)
<CTAButton 
  variant="primary"
  role="button"
  aria-label="Submit contact form"
  aria-describedby="form-help-text"
  aria-pressed={isPressed}
  aria-expanded={isExpanded}
  aria-disabled={isDisabled}
>
  Submit Form
</CTAButton>

// Shadcn Button (Enhanced ARIA)
<Button 
  variant="default"
  aria-label="Submit contact form"
  aria-describedby="form-help-text"
  aria-pressed={isPressed}
  aria-expanded={isExpanded}
  disabled={isDisabled}  // Automatically sets aria-disabled
  // role="button" automatically applied
>
  Submit Form
</Button>

/* 5. SCREEN READER SUPPORT */

// Current CTAButton (Manual Screen Reader Text)
<CTAButton variant="primary">
  <Icon name="calendar" size="sm" color="white" />
  <span className="sr-only">Schedule your venue tour for</span>
  Schedule Tour
</CTAButton>

// Shadcn Button (Enhanced Screen Reader Support)
<Button variant="default">
  <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
  <span className="sr-only">Schedule your venue tour for</span>
  Schedule Tour
</Button>

/* 6. LOADING & DISABLED STATES */

// Current CTAButton (Manual State Announcements)
<CTAButton 
  variant="primary"
  disabled={isLoading}
  aria-busy={isLoading}
  aria-live="polite"
>
  {isLoading ? (
    <>
      <span className="sr-only">Form is being submitted</span>
      Submitting...
    </>
  ) : (
    'Submit Form'
  )}
</CTAButton>

// Shadcn Button (Enhanced State Management)
<Button 
  variant="default"
  disabled={isLoading}
  aria-busy={isLoading}
  aria-live="polite"
>
  {isLoading && (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      <span className="sr-only">Form is being submitted</span>
    </>
  )}
  {isLoading ? 'Submitting...' : 'Submit Form'}
</Button>

/* 7. RESPONSIVE ACCESSIBILITY */

// Current CTAButton (Manual Mobile Accessibility)
<CTAButton 
  variant="primary"
  style={{ 
    minHeight: '44px',      // Touch target size
    minWidth: '44px',
    touchAction: 'manipulation'
  }}
>
  Mobile Button
</CTAButton>

// Shadcn Button (Built-in Mobile Accessibility)
<Button 
  variant="default"
  size="lg"  // Automatically ensures 44px minimum touch target
  className="touch-manipulation"  // Built-in touch optimization
>
  Mobile Button
</Button>

/* 8. HIGH CONTRAST MODE SUPPORT */

// Current CTAButton (Manual High Contrast)
@media (prefers-contrast: high) {
  .romantic-button {
    border: 2px solid ButtonText;
    background: ButtonFace;
    color: ButtonText;
  }
}

// Shadcn Button (Automatic High Contrast)
// Built-in support for Windows High Contrast Mode
// Automatic color adjustments via CSS system colors
<Button 
  variant="default"
  // Automatically adapts to high contrast mode
>
  High Contrast Support
</Button>

/* 9. REDUCED MOTION SUPPORT */

// Current CTAButton (Manual Motion Control)
.romantic-button {
  transition: all 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .romantic-button {
    transition: none;
    transform: none !important;
  }
}

// Shadcn Button (Built-in Motion Control)
// Automatic reduced motion support via Tailwind
<Button 
  variant="default"
  className="transition-all motion-reduce:transition-none motion-reduce:transform-none"
>
  Respects Motion Preferences
</Button>

/* ACCESSIBILITY TESTING CHECKLIST */

Manual Testing:
□ Tab navigation works correctly
□ Enter/Space keys activate button
□ Focus indicators are visible
□ Screen reader announces button correctly
□ High contrast mode displays properly
□ Touch targets are at least 44px
□ Button states are announced properly

Automated Testing:
□ axe-core accessibility testing
□ WAVE browser extension
□ Lighthouse accessibility audit
□ Pa11y command line testing
□ Jest + jest-axe unit tests

Tools for Testing:
- Screen Readers: NVDA (Windows), VoiceOver (Mac), JAWS
- Browser Extensions: axe DevTools, WAVE, Accessibility Insights
- Command Line: pa11y, axe-cli, lighthouse-ci
- Testing Libraries: @testing-library/jest-dom, jest-axe

/* MIGRATION ACCESSIBILITY BENEFITS */

Current Limitations:
❌ Manual ARIA attribute management
❌ Inconsistent focus indicators
❌ No automatic high contrast support
❌ Manual keyboard event handling
❌ Limited screen reader optimization
❌ Manual touch target sizing
❌ No reduced motion support

Shadcn Advantages:
✅ Automatic ARIA attribute management
✅ Consistent, accessible focus indicators
✅ Built-in high contrast mode support
✅ Automatic keyboard event handling
✅ Enhanced screen reader optimization
✅ Automatic touch target sizing
✅ Built-in reduced motion support
✅ WCAG 2.1 AA compliance by default
✅ Automated accessibility testing integration`}
            </pre>
          </div>

          {/* Button CMS Field Suggestions */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Button CMS Field Suggestions</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Sanity CMS schema and field mapping for button content management</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* SANITY CMS BUTTON SCHEMA */

// schemas/button.js
export default {
  name: 'button',
  title: 'Button Component',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Button Text',
      type: 'string',
      description: 'The text displayed on the button',
      validation: Rule => Rule.required().max(30)
    },
    {
      name: 'variant',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          {title: 'Primary (Filled)', value: 'default'},
          {title: 'Outline', value: 'outline'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Ghost (Minimal)', value: 'ghost'},
          {title: 'Link Style', value: 'link'},
          {title: 'Destructive (Red)', value: 'destructive'}
        ],
        layout: 'radio'
      },
      initialValue: 'default'
    },
    {
      name: 'size',
      title: 'Button Size',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Default', value: 'default'},
          {title: 'Large', value: 'lg'},
          {title: 'Icon Only', value: 'icon'}
        ],
        layout: 'radio'
      },
      initialValue: 'default'
    },
    {
      name: 'actionType',
      title: 'Action Type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal Link', value: 'internal'},
          {title: 'External Link', value: 'external'},
          {title: 'Form Submit', value: 'submit'},
          {title: 'JavaScript Action', value: 'action'},
          {title: 'Download File', value: 'download'}
        ],
        layout: 'dropdown'
      },
      initialValue: 'internal'
    },
    {
      name: 'internalLink',
      title: 'Internal Page',
      type: 'reference',
      to: [{type: 'page'}],
      hidden: ({parent}) => parent?.actionType !== 'internal',
      validation: Rule => Rule.custom((value, context) => {
        const actionType = context.parent?.actionType;
        if (actionType === 'internal' && !value) {
          return 'Internal link is required for internal action type';
        }
        return true;
      })
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({parent}) => parent?.actionType !== 'external',
      validation: Rule => Rule.custom((value, context) => {
        const actionType = context.parent?.actionType;
        if (actionType === 'external' && !value) {
          return 'External URL is required for external action type';
        }
        return true;
      })
    },
    {
      name: 'downloadFile',
      title: 'File to Download',
      type: 'file',
      hidden: ({parent}) => parent?.actionType !== 'download'
    },
    {
      name: 'actionFunction',
      title: 'JavaScript Function',
      type: 'string',
      description: 'Function name to call (e.g., "openModal", "scrollToSection")',
      hidden: ({parent}) => parent?.actionType !== 'action',
      validation: Rule => Rule.regex(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/, {
        name: 'JavaScript function name'
      })
    },
    {
      name: 'icon',
      title: 'Button Icon',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Icon Name',
          type: 'string',
          description: 'Lucide icon name (e.g., "calendar", "arrow-right")',
          validation: Rule => Rule.regex(/^[a-z0-9-]+$/, {
            name: 'Lucide icon name (lowercase, hyphens allowed)'
          })
        },
        {
          name: 'position',
          title: 'Icon Position',
          type: 'string',
          options: {
            list: [
              {title: 'Before Text', value: 'before'},
              {title: 'After Text', value: 'after'},
              {title: 'Icon Only', value: 'only'}
            ]
          },
          initialValue: 'before'
        }
      ]
    },
    {
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'For external links only',
      hidden: ({parent}) => parent?.actionType !== 'external',
      initialValue: true
    },
    {
      name: 'ariaLabel',
      title: 'Accessibility Label',
      type: 'string',
      description: 'Screen reader description (optional, falls back to button text)',
      validation: Rule => Rule.max(100)
    },
    {
      name: 'isDisabled',
      title: 'Disabled State',
      type: 'boolean',
      description: 'Disable the button (useful for coming soon features)',
      initialValue: false
    },
    {
      name: 'customClasses',
      title: 'Custom CSS Classes',
      type: 'string',
      description: 'Additional Tailwind classes for custom styling',
      validation: Rule => Rule.regex(/^[a-z0-9-\s:\/\[\]]*$/i, {
        name: 'Valid CSS classes'
      })
    }
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'variant',
      actionType: 'actionType'
    },
    prepare({title, subtitle, actionType}) {
      return {
        title: title || 'Untitled Button',
        subtitle: \`\${subtitle || 'default'} • \${actionType || 'action'}\`
      }
    }
  }
}

// schemas/buttonGroup.js - For multiple buttons
export default {
  name: 'buttonGroup',
  title: 'Button Group',
  type: 'object',
  fields: [
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{type: 'button'}],
      validation: Rule => Rule.max(4).warning('Consider limiting to 4 buttons for better UX')
    },
    {
      name: 'layout',
      title: 'Button Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Horizontal (Row)', value: 'horizontal'},
          {title: 'Vertical (Column)', value: 'vertical'},
          {title: 'Wrap (Responsive)', value: 'wrap'}
        ]
      },
      initialValue: 'horizontal'
    },
    {
      name: 'spacing',
      title: 'Button Spacing',
      type: 'string',
      options: {
        list: [
          {title: 'Tight (0.5rem)', value: 'tight'},
          {title: 'Normal (1rem)', value: 'normal'},
          {title: 'Loose (1.5rem)', value: 'loose'}
        ]
      },
      initialValue: 'normal'
    },
    {
      name: 'alignment',
      title: 'Button Alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
          {title: 'Justified', value: 'justified'}
        ]
      },
      initialValue: 'left'
    }
  ]
}

/* CONTENT FIELD MAPPING */

// Field Name → Component Prop → Usage
text → children → Button text content
variant → variant → Button visual style
size → size → Button size variant
actionType → (conditional logic) → Determines link/button type
internalLink → asChild + Link → React Router navigation
externalUrl → asChild + a → External navigation
downloadFile → asChild + a + download → File download
actionFunction → onClick → JavaScript function call
icon.name → Icon component → Lucide icon
icon.position → className logic → Icon positioning
openInNewTab → target="_blank" → Link behavior
ariaLabel → aria-label → Accessibility
isDisabled → disabled → Button state
customClasses → className → Additional styling

/* USAGE EXAMPLE IN REACT */

import { Button } from "@/components/ui/button"
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'
import * as Icons from 'lucide-react'
import { Link } from 'react-router-dom'

const buttonQuery = groq\`
  *[_type == "button"] {
    text,
    variant,
    size,
    actionType,
    internalLink->{slug},
    externalUrl,
    downloadFile{asset->{url}},
    actionFunction,
    icon,
    openInNewTab,
    ariaLabel,
    isDisabled,
    customClasses
  }
\`

export const CMSButton = ({ buttonData }) => {
  const {
    text,
    variant = 'default',
    size = 'default',
    actionType,
    internalLink,
    externalUrl,
    downloadFile,
    actionFunction,
    icon,
    openInNewTab,
    ariaLabel,
    isDisabled,
    customClasses
  } = buttonData;

  // Get Lucide icon component
  const IconComponent = icon?.name ? Icons[toPascalCase(icon.name)] : null;

  // Handle click actions
  const handleClick = () => {
    if (actionType === 'action' && actionFunction) {
      // Call global function or use function registry
      window[actionFunction]?.();
    }
  };

  // Render icon
  const renderIcon = (position) => {
    if (!IconComponent || icon?.position !== position) return null;
    
    const iconClasses = position === 'before' ? 'mr-2 h-4 w-4' : 'ml-2 h-4 w-4';
    return <IconComponent className={iconClasses} aria-hidden="true" />;
  };

  // Button content
  const buttonContent = (
    <>
      {renderIcon('before')}
      {icon?.position !== 'only' && text}
      {renderIcon('after')}
    </>
  );

  // Internal link
  if (actionType === 'internal' && internalLink?.slug) {
    return (
      <Button 
        variant={variant} 
        size={size} 
        disabled={isDisabled}
        aria-label={ariaLabel || text}
        className={customClasses}
        asChild
      >
        <Link to={\`/\${internalLink.slug.current}\`}>
          {buttonContent}
        </Link>
      </Button>
    );
  }

  // External link
  if (actionType === 'external' && externalUrl) {
    return (
      <Button 
        variant={variant} 
        size={size} 
        disabled={isDisabled}
        aria-label={ariaLabel || text}
        className={customClasses}
        asChild
      >
        <a 
          href={externalUrl}
          target={openInNewTab ? '_blank' : '_self'}
          rel={openInNewTab ? 'noopener noreferrer' : undefined}
        >
          {buttonContent}
        </a>
      </Button>
    );
  }

  // Download link
  if (actionType === 'download' && downloadFile?.asset) {
    return (
      <Button 
        variant={variant} 
        size={size} 
        disabled={isDisabled}
        aria-label={ariaLabel || text}
        className={customClasses}
        asChild
      >
        <a 
          href={downloadFile.asset.url}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonContent}
        </a>
      </Button>
    );
  }

  // Default button (submit or action)
  return (
    <Button 
      variant={variant} 
      size={size} 
      disabled={isDisabled}
      aria-label={ariaLabel || text}
      className={customClasses}
      type={actionType === 'submit' ? 'submit' : 'button'}
      onClick={handleClick}
    >
      {buttonContent}
    </Button>
  );
};

/* BUTTON GROUP COMPONENT */

export const CMSButtonGroup = ({ buttonGroupData }) => {
  const { buttons, layout, spacing, alignment } = buttonGroupData;

  const spacingClasses = {
    tight: 'gap-2',
    normal: 'gap-4', 
    loose: 'gap-6'
  };

  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    justified: 'justify-between'
  };

  const layoutClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
    wrap: 'flex-row flex-wrap'
  };

  return (
    <div className={\`flex \${layoutClasses[layout]} \${spacingClasses[spacing]} \${alignmentClasses[alignment]}\`}>
      {buttons?.map((button, index) => (
        <CMSButton key={index} buttonData={button} />
      ))}
    </div>
  );
};

/* CMS EDITOR PREVIEW COMPONENT */

// sanity-studio/components/ButtonPreview.jsx
import { Button } from "@/components/ui/button"

export const ButtonPreview = ({ value }) => {
  if (!value?.text) {
    return <div style={{ padding: '1rem', color: '#999' }}>No button text</div>;
  }

  const variantStyles = {
    default: { background: '#9D6B7B', color: 'white' },
    outline: { border: '2px solid #9D6B7B', color: '#9D6B7B', background: 'transparent' },
    secondary: { background: '#f1f5f9', color: '#334155' },
    ghost: { background: 'transparent', color: '#9D6B7B' },
    link: { background: 'transparent', color: '#9D6B7B', textDecoration: 'underline' }
  };

  const sizeStyles = {
    sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    default: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    lg: { padding: '1rem 2rem', fontSize: '1.125rem' }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <button
        style={{
          ...variantStyles[value.variant || 'default'],
          ...sizeStyles[value.size || 'default'],
          borderRadius: '50px',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '500',
          opacity: value.isDisabled ? 0.5 : 1
        }}
        disabled={value.isDisabled}
      >
        {value.text}
      </button>
      <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#666' }}>
        {value.variant || 'default'} • {value.size || 'default'} • {value.actionType || 'action'}
      </div>
    </div>
  );
};`}
            </pre>
          </div>

          {/* Button Migration & Best Practices */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ color: 'var(--dusty-rose)', marginBottom: '1rem', fontSize: '1.5rem' }}>Button Migration & Best Practices</h3>
            <p style={{ color: 'var(--warm-walnut)', marginBottom: '2rem' }}>Complete migration strategy, testing guidelines, and future-proofing for button system</p>
            <pre style={{
              background: '#2d3748',
              color: '#e2e8f0',
              padding: '2rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
{`/* BUTTON MIGRATION STRATEGY */

/* PHASE 1: SETUP & PREPARATION */

// 1. Install shadcn/ui Button Component
npx shadcn-ui@latest add button

// 2. Install Supporting Dependencies
npm install @radix-ui/react-slot
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
npm install lucide-react

// 3. Create Custom Button Variants (if needed)
// components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Custom variants for wedding venue
        venue: "bg-rose-400 text-white hover:bg-amber-900 rounded-full",
        barn: "bg-amber-900 text-amber-50 hover:bg-slate-700 border-2 border-slate-700",
        bridal: "bg-rose-100 text-rose-400 hover:bg-rose-400 hover:text-white border-2 border-amber-200"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        // Custom sizes
        xl: "h-12 rounded-full px-10 text-lg"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/* PHASE 2: COMPONENT MIGRATION */

// Step 1: Create Migration Mapping Function
const migrateCTAButtonProps = (props) => {
  const {
    variant: ctaVariant,
    size: ctaSize,
    href,
    to,
    children,
    className,
    ...restProps
  } = props;

  // Map CTAButton variants to shadcn variants
  const variantMap = {
    'primary': 'venue',
    'outline': 'outline',
    'vr-special': 'venue',
    'vr-barn': 'barn',
    'vr-bridal': 'bridal',
    'submit': 'default',
    'floating': 'venue'
  };

  // Map CTAButton sizes to shadcn sizes
  const sizeMap = {
    'small': 'sm',
    'normal': 'default',
    'large': 'lg'
  };

  return {
    variant: variantMap[ctaVariant] || 'default',
    size: sizeMap[ctaSize] || 'default',
    className,
    ...restProps
  };
};

// Step 2: Create Wrapper Component for Gradual Migration
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const MigratedButton = ({
  variant = 'primary',
  size = 'normal',
  href,
  to,
  children,
  className,
  ...props
}) => {
  const migratedProps = migrateCTAButtonProps({ variant, size, className, ...props });

  // Handle link behavior
  if (href) {
    return (
      <Button {...migratedProps} asChild>
        <a href={href} {...(props.target && { target: props.target, rel: props.rel || 'noopener noreferrer' })}>
          {children}
        </a>
      </Button>
    );
  }

  if (to) {
    return (
      <Button {...migratedProps} asChild>
        <Link to={to}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button {...migratedProps}>
      {children}
    </Button>
  );
};

// Step 3: Icon Migration Helper
import * as LucideIcons from 'lucide-react'

const migrateIconToLucide = (iconName, size = 'sm', position = 'before') => {
  const iconMap = {
    'calendar': 'Calendar',
    'camera': 'Camera',
    'arrow-right': 'ArrowRight',
    'arrow-left': 'ArrowLeft',
    'phone': 'Phone',
    'email': 'Mail',
    'location': 'MapPin',
    'download': 'Download',
    'external': 'ExternalLink'
  };

  const sizeMap = {
    'xs': 'h-3 w-3',
    'sm': 'h-4 w-4',
    'md': 'h-5 w-5',
    'lg': 'h-6 w-6',
    'xl': 'h-8 w-8'
  };

  const positionMap = {
    'before': 'mr-2',
    'after': 'ml-2',
    'only': ''
  };

  const IconComponent = LucideIcons[iconMap[iconName]];
  if (!IconComponent) return null;

  return (
    <IconComponent 
      className={cn(sizeMap[size], positionMap[position])} 
      aria-hidden="true" 
    />
  );
};

/* PHASE 3: BULK MIGRATION */

// Migration Script Template
const migrateButtonsInFile = (filePath) => {
  // 1. Replace imports
  // Before: import CTAButton from '../components/CTAButton'
  // After: import { Button } from "@/components/ui/button"

  // 2. Replace component usage
  // Before: <CTAButton variant="primary" size="large">Text</CTAButton>
  // After: <Button variant="venue" size="lg">Text</Button>

  // 3. Handle link buttons
  // Before: <CTAButton variant="outline" href="/gallery">Gallery</CTAButton>
  // After: <Button variant="outline" asChild><a href="/gallery">Gallery</a></Button>

  // 4. Handle router links
  // Before: <CTAButton variant="primary" to="/contact">Contact</CTAButton>
  // After: <Button variant="venue" asChild><Link to="/contact">Contact</Link></Button>

  // 5. Migrate icons
  // Before: <Icon name="calendar" size="sm" color="white" />
  // After: <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
};

/* PHASE 4: TESTING STRATEGY */

// 1. Visual Regression Testing
// test/button.visual.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Button Migration Visual Tests', () => {
  const variants = ['default', 'outline', 'secondary', 'ghost', 'link', 'venue', 'barn', 'bridal'];
  const sizes = ['sm', 'default', 'lg', 'xl'];

  variants.forEach(variant => {
    sizes.forEach(size => {
      test(\`Button \${variant} \${size} matches design\`, async ({ page }) => {
        await page.goto(\`/test/button?variant=\${variant}&size=\${size}\`);
        await expect(page.locator('[data-testid="button"]')).toHaveScreenshot(\`button-\${variant}-\${size}.png\`);
      });
    });
  });

  test('Button states (hover, focus, disabled)', async ({ page }) => {
    await page.goto('/test/button');
    
    // Normal state
    await expect(page.locator('[data-testid="button-normal"]')).toHaveScreenshot('button-normal.png');
    
    // Hover state
    await page.locator('[data-testid="button-hover"]').hover();
    await expect(page.locator('[data-testid="button-hover"]')).toHaveScreenshot('button-hover.png');
    
    // Focus state
    await page.locator('[data-testid="button-focus"]').focus();
    await expect(page.locator('[data-testid="button-focus"]')).toHaveScreenshot('button-focus.png');
    
    // Disabled state
    await expect(page.locator('[data-testid="button-disabled"]')).toHaveScreenshot('button-disabled.png');
  });
});

// 2. Accessibility Testing
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Button } from '@/components/ui/button'

expect.extend(toHaveNoViolations)

describe('Button Accessibility', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(
      <Button variant="default">Accessible Button</Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('supports keyboard navigation', async () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );
    
    const button = getByRole('button');
    
    // Test Enter key
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    // Test Space key
    fireEvent.keyDown(button, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  test('has proper ARIA attributes', () => {
    const { getByRole } = render(
      <Button aria-label="Custom label" disabled>
        Button Text
      </Button>
    );
    
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });
});

// 3. Performance Testing
test('Button renders efficiently', async () => {
  const renderTime = await measureRenderTime(() => {
    render(<Button variant="default">Performance Test</Button>);
  });
  
  expect(renderTime).toBeLessThan(16); // < 16ms for 60fps
});

/* PHASE 5: ROLLBACK STRATEGY */

// 1. Keep Original CTAButton as Backup
// components/CTAButtonLegacy.jsx (renamed from CTAButton.jsx)

// 2. Create Feature Flag System
const useButtonMigration = () => {
  return process.env.REACT_APP_USE_SHADCN_BUTTONS === 'true';
};

export const AdaptiveButton = (props) => {
  const useShadcn = useButtonMigration();
  
  if (useShadcn) {
    return <MigratedButton {...props} />;
  }
  
  return <CTAButtonLegacy {...props} />;
};

// 3. Gradual Rollout Strategy
// Week 1: Hero page only
// Week 2: Hero + Contact pages
// Week 3: All pages except forms
// Week 4: Full migration

/* PERFORMANCE OPTIMIZATION */

// 1. Bundle Size Analysis
// Check impact on bundle size
npm run build -- --analyze

// Before migration:
// CTAButton: ~2KB (including CSS)
// After migration:
// Shadcn Button: ~8KB (including dependencies)
// Net increase: ~6KB (acceptable for features gained)

// 2. Runtime Performance
// Current CTAButton: Manual class concatenation
// Shadcn Button: CVA-optimized class generation
// Expected improvement: 15-20% faster class generation

// 3. Tree Shaking Optimization
// Ensure only used Lucide icons are included
import { Calendar, Camera, ArrowRight } from 'lucide-react'; // ✅ Good
import * as Icons from 'lucide-react'; // ❌ Imports all icons

/* MAINTENANCE STRATEGY */

// 1. Update Schedule
// Monthly: Check for shadcn/ui updates
// Quarterly: Review custom variants for brand consistency
// Annually: Audit button usage patterns and optimize

// 2. Documentation Updates
// Maintain migration documentation
// Update design system documentation
// Keep component prop documentation current

// 3. Monitoring
// Track button click analytics
// Monitor Core Web Vitals impact
// Watch for accessibility regressions

/* MIGRATION SUCCESS METRICS */

// Before Migration:
// ❌ 5 different button implementations
// ❌ Inconsistent styling
// ❌ Manual accessibility management
// ❌ No TypeScript safety
// ❌ Limited reusability

// After Migration:
// ✅ 1 unified button system
// ✅ Consistent design system integration
// ✅ Automatic accessibility compliance
// ✅ Full TypeScript safety
// ✅ High reusability and composability
// ✅ Better developer experience
// ✅ Easier maintenance
// ✅ Future-proof architecture

/* FUTURE ENHANCEMENTS */

// Phase 6: Advanced Features
// - Loading states with spinners
// - Tooltip integration
// - Button groups and toolbars
// - Keyboard shortcuts
// - Analytics integration
// - A/B testing support
// - Animation presets
// - Voice interaction support`}
            </pre>
          </div>

        </div>
      </section>
    </>
  )
}