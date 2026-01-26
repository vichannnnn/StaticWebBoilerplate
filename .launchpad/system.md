# Design System — Cyberpunk Portfolio

## Brand Direction

**Personality:** Technical precision meets creative energy. A developer/creator who speaks in code but thinks in possibilities. Not corporate-slick, not hacker-chaotic—somewhere between a terminal window and a neon sign.

**Voice:** Confident but not arrogant. Technical but accessible. The kind of presence that makes complex things feel approachable.

**Mood:** Late-night coding session energy. The glow of multiple monitors. Progress bars and compile times. Achievement unlocked.

## Color Palette

```css
/* Core */
--color-void: #0D0D0D;           /* Deep black - primary background */
--color-charcoal: #1A1A1A;       /* Elevated surfaces, cards */

/* Accent - The Fire */
--color-tangerine: #FF6B35;      /* Primary accent - CTAs, highlights, hover states */
--color-glitch: #FFE66D;         /* Secondary warm - warnings, special highlights */

/* Accent - The Cool */
--color-mint: #4ECDC4;           /* Secondary accent - success, active states, contrast */

/* Neutrals */
--color-off-white: #FAFAFA;      /* Primary text */
--color-cool-gray: #A0A0A0;      /* Body text, descriptions */
--color-cool-gray-dark: #666666; /* Borders, muted elements */
```

**Usage Rules:**
- Tangerine for primary actions and hover states
- Mint for secondary accents and status indicators (never competing with tangerine)
- Glitch sparingly—for rare, special moments
- Never use tangerine and mint in equal amounts—one must dominate

## Typography

```css
--font-display: 'Space Grotesk', system-ui, sans-serif;  /* Headlines, buttons, navigation */
--font-body: 'Plus Jakarta Sans', system-ui, sans-serif; /* Body text, descriptions */
--font-mono: 'JetBrains Mono', ui-monospace, monospace;  /* Code, labels, technical elements */
```

**Hierarchy:**
- h1: 3rem/48px, font-display, 700 weight, -0.02em tracking
- h2: 2rem/32px, font-display, 600 weight, -0.01em tracking
- h3: 1.5rem/24px, font-display, 600 weight
- h4: 1.25rem/20px, font-display, 500 weight
- body: 1rem/16px, font-body, 400 weight, 1.7 line-height
- label: 0.75rem/12px, font-mono, 500 weight, uppercase, 0.1em tracking

## The Signature Element

**Dual-color crosshair SVG** — Vertical lines in tangerine, horizontal in mint. Creates visual tension and a targeting reticle aesthetic. Appears in hero section with parallax mouse movement.

**Glitch text effect** — Characters scramble with `!@#$%^&*()_+-=[]{}|;:,.<>?` then reveal from left to right. Used sparingly on key moments (404 page, hero titles).

## Component Patterns

### Buttons

**Primary (`.btn-primary`):**
- Background: tangerine
- Text: void (dark)
- Hover: glow shadow + slight scale
- Padding: 12px 24px
- Border-radius: 12px

**Secondary (`.btn-secondary`):**
- Background: charcoal
- Border: 1px cool-gray-dark
- Text: off-white
- Hover: border turns tangerine, text turns tangerine
- Same padding and radius as primary

**Ghost (MUI Button wrapper):**
- Same as secondary but used with MUI for form contexts

### Cards

**Standard (`.card`):**
- Background: charcoal
- Border: 1px rgba(cool-gray-dark, 0.3)
- Border-radius: 16px
- Padding: 24px
- Hover: border shifts toward tangerine, subtle glow shadow

**Achievement (`.card-achievement`):**
- Gradient background with shimmer sweep on hover
- Lift effect (translateY -4px)
- Used for portfolio items, skills, accomplishments

### Section Labels

**`.section-label`:**
- Font: mono
- Size: 12px
- Uppercase with wide tracking
- Color: tangerine
- Used above every section heading

### Skill Pills

**`.skill-pill`:**
- Pill shape (full rounded)
- Charcoal background
- Mono font
- Hover: border tangerine + slight scale

## Animation Patterns

```css
--animate-blink: blink 1s step-end infinite;        /* Cursor blink */
--animate-fade-up: fadeUp 0.6s ease-out;            /* Section entrance */
--animate-float: float 6s ease-in-out infinite;     /* Ambient movement */
--animate-pulse-slow: pulse 3s ease-in-out infinite; /* Subtle attention */
--animate-shimmer: shimmer 2s linear infinite;      /* Gradient sweep */
```

**Glitch keyframes:** Quick position jitter with colored text-shadow (tangerine/mint split)

## Interactive Components

### TypingAnimation
- Typewriter effect for headlines
- Configurable speed (default 100ms)
- Mint cursor that blinks after completion

### GlitchText
- Random character scramble
- Progressive reveal left-to-right
- Repeats on interval (default 4s)
- Used for 404, special moments

### AbstractSVG (Hero)
- Three concentric dashed circles (tangerine, mint, glitch)
- Counter-rotating animations
- Crosshair overlay (tangerine vertical, mint horizontal)
- Parallax response to mouse position

## Layout Principles

- Max content width: 6xl (1152px)
- Section padding: min-h-screen with vertical centering
- Grid: 5-column for hero (3 content / 2 visual), responsive collapse
- Consistent 80% width container (`w-4/5 mx-auto`)

## Shadows

```css
--shadow-glow-tangerine: 0 0 20px rgba(255, 107, 53, 0.3);
--shadow-glow-tangerine-lg: 0 0 30px rgba(255, 107, 53, 0.4), 0 0 60px rgba(255, 107, 53, 0.2);
--shadow-glow-mint: 0 0 20px rgba(78, 205, 196, 0.3);
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.3);
--shadow-card-hover: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 107, 53, 0.1);
```

## Stack

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS 4 with `@theme` directive
- **Components:** MUI (Material UI) for complex form elements
- **Fonts:** Google Fonts (Space Grotesk, Plus Jakarta Sans, JetBrains Mono)
- **i18n:** next-intl for internationalization

## What This System Rejects

- Purple-to-blue gradients (AI-generic)
- Floating blob backgrounds
- Generic icon grids
- Centered-everything layouts
- Multiple competing CTAs per section
- Stock illustrations
- Inter/Roboto for headlines
