# Design Token System

## Overview

The Rum River Wedding Barn website now uses a **formal design token system** powered by [Style Dictionary](https://amzn.github.io/style-dictionary/). This ensures consistency across all components and makes theming/customization easier.

## 📁 Token Structure

All design tokens are defined in JSON files under `/tokens/`:

```
tokens/
├── color.json        # Color palette (base + semantic colors)
├── typography.json   # Font families, sizes, weights, line heights
├── spacing.json      # Spacing scale, sizes, border radii
├── animation.json    # Transitions, easing, shadows
└── README.md         # Token documentation
```

## 🎨 Token Categories

### 1. Color Tokens
- **Base colors**: Raw color values (`romantic-ivory`, `dusty-rose`, etc.)
- **Semantic colors**: Meaning-based (`background.primary`, `text.primary`, `accent.primary`)
- **Component colors**: Specific uses (`button.primary-bg`, `button.outline-border`)

### 2. Typography Tokens
- **Font families**: `display`, `body`, `script`
- **Font sizes**: `xs` through `6xl`, plus responsive `hero`
- **Font weights**: `light`, `normal`, `medium`, `semibold`, `bold`
- **Line heights**: `tight`, `snug`, `normal`, `relaxed`, `loose`
- **Letter spacing**: `tight`, `normal`, `wide`

### 3. Spacing Tokens
- **Spacing scale**: `xs` (8px) through `6xl` (128px)
- **Container sizes**: `max-width`
- **Border radii**: `sm`, `md`, `lg`, `pill`, `circle`
- **Border widths**: `thin`, `medium`, `thick`

### 4. Animation Tokens
- **Durations**: `fast`, `normal`, `slow`
- **Easing functions**: `standard`, `smooth`, `elegant`
- **Preset transitions**: Complete transition values
- **Shadows**: `sm`, `md`, `lg`, `xl`

## 🔨 Building Tokens

### Build Once
```bash
npm run tokens:build
```

### Auto-rebuild on Changes (requires nodemon)
```bash
npm run tokens:watch
```

### Automatic Build
Tokens are automatically built before production builds:
```bash
npm run build  # Runs tokens:build first
```

## 📤 Output Formats

Style Dictionary generates multiple formats in `src/generated/`:

| File | Format | Usage |
|------|--------|-------|
| `tokens.css` | CSS Variables | Import in CSS files |
| `tokens.json` | JSON Object | Import in JavaScript/TypeScript |
| `tokens.js` | ES6 Module | Import with named exports |
| `tokens.scss` | SCSS Variables | Use with SCSS preprocessor |

## 💻 Usage Examples

### In CSS Files
```css
@import '../generated/tokens.css';

.my-component {
  color: var(--color-semantic-text-primary);
  font-family: var(--font-family-display);
  padding: var(--spacing-lg);
  border-radius: var(--size-border-radius-lg);
  transition: var(--transition-preset-smooth);
  box-shadow: var(--shadow-md);
}
```

### In React Components
```jsx
import tokens from '../generated/tokens.js'

function MyComponent() {
  return (
    <div style={{
      backgroundColor: tokens.color.semantic.background.primary,
      padding: tokens.spacing.lg,
      borderRadius: tokens.size.border.radius.lg
    }}>
      Content
    </div>
  )
}
```

### In JavaScript/TypeScript
```javascript
import tokens from './generated/tokens.json'

const primaryColor = tokens.color.semantic.accent.primary // "#9D6B7B"
const heroSize = tokens.font.size.hero // "clamp(3rem, 8vw, 5.5rem)"
```

## 🔗 Token References

Tokens can reference other tokens using curly brace syntax in the JSON files:

```json
{
  "color": {
    "semantic": {
      "button": {
        "primary-bg": { "value": "{color.base.dusty-rose.value}" }
      }
    }
  }
}
```

This creates a relationship where changing `color.base.dusty-rose` automatically updates `color.semantic.button.primary-bg`.

## 🎯 Naming Convention

Tokens use **kebab-case** and follow this pattern:

```
--{category}-{type}-{item}-{variant}
```

Examples:
- `--color-base-dusty-rose`
- `--color-semantic-button-primary-bg`
- `--font-size-hero`
- `--spacing-xl`
- `--transition-preset-smooth`

## 🚀 Benefits

1. **Single Source of Truth**: All design values in one place
2. **Consistency**: Guaranteed consistency across all components
3. **Type Safety**: JSON output enables TypeScript types
4. **Multi-Platform**: Export to CSS, SCSS, JS, JSON, and more
5. **Easy Updates**: Change a token value once, updates everywhere
6. **Documentation**: Self-documenting design system
7. **Theming**: Easy to create theme variations

## 📝 Adding New Tokens

1. Edit the appropriate JSON file in `/tokens/`
2. Run `npm run tokens:build`
3. Use the new token in your code

Example - adding a new color:

```json
// tokens/color.json
{
  "color": {
    "base": {
      "new-color": { "value": "#FF5733", "comment": "A new color" }
    }
  }
}
```

Then rebuild:
```bash
npm run tokens:build
```

Use it:
```css
.my-element {
  color: var(--color-base-new-color);
}
```

## 🔄 Migration from Old CSS Variables

The old `:root` CSS variables in `CohesiveDesign.css` can gradually be replaced with generated tokens. The naming is similar:

| Old Variable | New Token Variable |
|--------------|-------------------|
| `--dusty-rose` | `--color-base-dusty-rose` |
| `--font-display` | `--font-family-display` |
| `--space-lg` | `--spacing-lg` |
| `--transition` | `--transition-preset-default` |

## 📚 Resources

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Design Tokens W3C Community Group](https://www.w3.org/community/design-tokens/)
- [Token Directory README](tokens/README.md)

---

**Last Updated**: October 2025
