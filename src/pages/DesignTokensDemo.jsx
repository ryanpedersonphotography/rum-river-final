import { Helmet } from 'react-helmet-async'
import tokens from '../generated/tokens.json'
import '../generated/tokens.css'

/**
 * Design Tokens Demo Page
 * Showcases the design token system and available tokens
 */
export default function DesignTokensDemo() {
  const colorCategories = [
    { name: 'Base Colors', tokens: tokens.color.base },
    { name: 'Background Colors', tokens: tokens.color.semantic.background },
    { name: 'Text Colors', tokens: tokens.color.semantic.text },
    { name: 'Accent Colors', tokens: tokens.color.semantic.accent }
  ]

  const fontSizes = Object.entries(tokens.font.size)
  const spacingSizes = Object.entries(tokens.spacing)

  return (
    <>
      <Helmet>
        <title>Design Tokens - Rum River Wedding Barn</title>
      </Helmet>

      <div style={{
        fontFamily: tokens.font.family.body,
        padding: tokens.spacing['2xl'],
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{ marginBottom: tokens.spacing['4xl'] }}>
          <h1 style={{
            fontFamily: tokens.font.family.display,
            fontSize: tokens.font.size['5xl'],
            color: tokens.color.base['warm-walnut'],
            marginBottom: tokens.spacing.md
          }}>
            Design Token System
          </h1>
          <p style={{
            fontSize: tokens.font.size.lg,
            color: tokens.color.base['sage-green'],
            lineHeight: tokens.font.lineHeight.relaxed
          }}>
            A comprehensive view of all design tokens available in the Rum River Wedding Barn design system.
          </p>
        </header>

        {/* Color Tokens */}
        <section style={{ marginBottom: tokens.spacing['5xl'] }}>
          <h2 style={{
            fontFamily: tokens.font.family.display,
            fontSize: tokens.font.size['3xl'],
            color: tokens.color.base['warm-walnut'],
            marginBottom: tokens.spacing.xl
          }}>
            Color Palette
          </h2>

          {colorCategories.map(category => (
            <div key={category.name} style={{ marginBottom: tokens.spacing['3xl'] }}>
              <h3 style={{
                fontFamily: tokens.font.family.body,
                fontSize: tokens.font.size.xl,
                fontWeight: tokens.font.weight.semibold,
                color: tokens.color.base['deep-forest'],
                marginBottom: tokens.spacing.lg
              }}>
                {category.name}
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: tokens.spacing.lg
              }}>
                {Object.entries(category.tokens).map(([name, value]) => (
                  <div
                    key={name}
                    style={{
                      border: `${tokens.size.border.width.thin} solid ${tokens.color.base['muted-mauve']}`,
                      borderRadius: tokens.size.border.radius.md,
                      overflow: 'hidden',
                      boxShadow: tokens.shadow.sm
                    }}
                  >
                    <div
                      style={{
                        height: '80px',
                        backgroundColor: value,
                        border: `1px solid rgba(0,0,0,0.1)`
                      }}
                    />
                    <div style={{ padding: tokens.spacing.md }}>
                      <div style={{
                        fontSize: tokens.font.size.sm,
                        fontWeight: tokens.font.weight.semibold,
                        marginBottom: tokens.spacing.xs,
                        color: tokens.color.base['text-dark']
                      }}>
                        {name}
                      </div>
                      <div style={{
                        fontSize: tokens.font.size.xs,
                        fontFamily: 'monospace',
                        color: tokens.color.base['sage-green']
                      }}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Typography */}
        <section style={{ marginBottom: tokens.spacing['5xl'] }}>
          <h2 style={{
            fontFamily: tokens.font.family.display,
            fontSize: tokens.font.size['3xl'],
            color: tokens.color.base['warm-walnut'],
            marginBottom: tokens.spacing.xl
          }}>
            Typography Scale
          </h2>

          <div style={{ marginBottom: tokens.spacing['3xl'] }}>
            <h3 style={{
              fontFamily: tokens.font.family.body,
              fontSize: tokens.font.size.xl,
              fontWeight: tokens.font.weight.semibold,
              marginBottom: tokens.spacing.lg
            }}>
              Font Sizes
            </h3>

            {fontSizes.map(([name, size]) => (
              <div
                key={name}
                style={{
                  padding: tokens.spacing.md,
                  marginBottom: tokens.spacing.sm,
                  borderBottom: `${tokens.size.border.width.thin} solid ${tokens.color.base['blush-pink']}`
                }}
              >
                <div style={{ fontSize: size, marginBottom: tokens.spacing.xs }}>
                  The quick brown fox jumps over the lazy dog
                </div>
                <div style={{
                  fontSize: tokens.font.size.xs,
                  color: tokens.color.base['sage-green']
                }}>
                  {name} - {size}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: tokens.spacing['3xl'] }}>
            <h3 style={{
              fontFamily: tokens.font.family.body,
              fontSize: tokens.font.size.xl,
              fontWeight: tokens.font.weight.semibold,
              marginBottom: tokens.spacing.lg
            }}>
              Font Families
            </h3>

            <div style={{
              fontFamily: tokens.font.family.display,
              fontSize: tokens.font.size['2xl'],
              marginBottom: tokens.spacing.md
            }}>
              Display Font (Playfair Display) - Elegant serif for headings
            </div>

            <div style={{
              fontFamily: tokens.font.family.body,
              fontSize: tokens.font.size.lg,
              marginBottom: tokens.spacing.md
            }}>
              Body Font (Montserrat) - Clean sans-serif for content
            </div>

            <div style={{
              fontFamily: tokens.font.family.script,
              fontSize: tokens.font.size['2xl'],
              marginBottom: tokens.spacing.md
            }}>
              Script Font (Dancing Script) - Romantic cursive for accents
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section style={{ marginBottom: tokens.spacing['5xl'] }}>
          <h2 style={{
            fontFamily: tokens.font.family.display,
            fontSize: tokens.font.size['3xl'],
            color: tokens.color.base['warm-walnut'],
            marginBottom: tokens.spacing.xl
          }}>
            Spacing Scale
          </h2>

          <div style={{
            display: 'grid',
            gap: tokens.spacing.lg
          }}>
            {spacingSizes.map(([name, size]) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: tokens.spacing.lg
                }}
              >
                <div style={{
                  minWidth: '100px',
                  fontSize: tokens.font.size.sm,
                  fontWeight: tokens.font.weight.semibold
                }}>
                  {name}
                </div>
                <div
                  style={{
                    height: '20px',
                    width: size,
                    backgroundColor: tokens.color.base['dusty-rose'],
                    borderRadius: tokens.size.border.radius.sm
                  }}
                />
                <div style={{
                  fontSize: tokens.font.size.xs,
                  color: tokens.color.base['sage-green']
                }}>
                  {size}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section style={{ marginBottom: tokens.spacing['5xl'] }}>
          <h2 style={{
            fontFamily: tokens.font.family.display,
            fontSize: tokens.font.size['3xl'],
            color: tokens.color.base['warm-walnut'],
            marginBottom: tokens.spacing.xl
          }}>
            Shadows
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: tokens.spacing.xl
          }}>
            {Object.entries(tokens.shadow).map(([name, shadow]) => (
              <div
                key={name}
                style={{
                  padding: tokens.spacing.xl,
                  backgroundColor: 'white',
                  boxShadow: shadow,
                  borderRadius: tokens.size.border.radius.lg,
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: tokens.font.size.lg,
                  fontWeight: tokens.font.weight.semibold,
                  marginBottom: tokens.spacing.xs
                }}>
                  {name}
                </div>
                <div style={{
                  fontSize: tokens.font.size.xs,
                  fontFamily: 'monospace',
                  color: tokens.color.base['sage-green']
                }}>
                  shadow-{name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation Link */}
        <section style={{
          padding: tokens.spacing.xl,
          backgroundColor: tokens.color.base['blush-pink'],
          borderRadius: tokens.size.border.radius.lg,
          borderLeft: `4px solid ${tokens.color.base['dusty-rose']}`
        }}>
          <h3 style={{
            fontFamily: tokens.font.family.display,
            fontSize: tokens.font.size.xl,
            marginBottom: tokens.spacing.md
          }}>
            💡 Using These Tokens
          </h3>
          <p style={{ marginBottom: tokens.spacing.md }}>
            All these tokens are available in multiple formats:
          </p>
          <ul style={{
            marginLeft: tokens.spacing.xl,
            lineHeight: tokens.font.lineHeight.relaxed
          }}>
            <li><strong>CSS:</strong> <code>var(--color-base-dusty-rose)</code></li>
            <li><strong>JavaScript:</strong> <code>tokens.color.base['dusty-rose']</code></li>
            <li><strong>SCSS:</strong> <code>$color-base-dusty-rose</code></li>
          </ul>
          <p style={{ marginTop: tokens.spacing.md }}>
            See <code>DESIGN_TOKENS.md</code> and <code>MIGRATION_GUIDE.md</code> for complete documentation.
          </p>
        </section>
      </div>
    </>
  )
}
