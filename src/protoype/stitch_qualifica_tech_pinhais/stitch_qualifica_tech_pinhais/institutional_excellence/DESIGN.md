---
name: Institutional Excellence
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#41493e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#717a6d'
  outline-variant: '#c0c9bb'
  surface-tint: '#2a6b2c'
  primary: '#00450d'
  on-primary: '#ffffff'
  primary-container: '#1b5e20'
  on-primary-container: '#90d689'
  inverse-primary: '#91d78a'
  secondary: '#005db7'
  on-secondary: '#ffffff'
  secondary-container: '#64a1ff'
  on-secondary-container: '#003670'
  tertiary: '#533400'
  on-tertiary: '#ffffff'
  tertiary-container: '#724900'
  on-tertiary-container: '#ffb751'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#acf4a4'
  primary-fixed-dim: '#91d78a'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#0c5216'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#a9c7ff'
  on-secondary-fixed: '#001b3d'
  on-secondary-fixed-variant: '#00468c'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin: 32px
  touch-target-min: 48px
  container-max-width: 1280px
---

## Brand & Style

This design system is built to reflect the prestige and reliability of a federal educational institution while maintaining a modern, student-centric digital experience. The brand personality is **Authoritative, Growth-oriented, and Inclusive**. 

The chosen style is **Corporate Modern**. It leverages a structured layout and high-quality typography to ensure information density remains readable. By combining the stability of institutional greens and blues with the warmth of amber accents, the interface evokes a sense of professional advancement. The focus is on high accessibility, ensuring that every interaction—from administrative tasks to active learning—is frictionless and clear.

## Colors

The palette is anchored by **Verde IFPR**, representing growth and the institutional identity. **Azul** provides a professional secondary layer often used for navigation and interaction cues. **Amber** is reserved strictly for high-priority call-to-actions and status indicators to ensure they stand out against the deeper primary tones.

To facilitate clear navigation within the curriculum, this design system utilizes a specific **Module Color Logic**:
- **M1 (Core Subjects):** Uses the Secondary Azul to denote foundational knowledge.
- **M2 (Technical/Specialized):** Uses the Primary Verde to link back to the institution's core identity.
- **M3 (Electives/Humanities):** Uses a distinct Purple to provide visual relief and categorization.

The background uses a soft neutral (#F5F5F5) to reduce eye strain during long study sessions.

## Typography

Typography in this design system prioritizes legibility and a modern academic aesthetic. 

**Space Grotesk** is utilized for headings. Its geometric, technical nature mirrors the "Pinhais" technological focus and provides a bold, modern contrast to institutional content. **Public Sans** is selected for body text and labels; as a font designed for government and institutional use, it offers exceptional clarity and accessibility across all device types.

Hierarchy is established through weight rather than just size. Headlines should always use the boldest weights to anchor the page, while body text remains regular for maximum readability during extended reading.

## Layout & Spacing

This design system employs a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid system with a maximum width of 1280px to ensure line lengths remain optimal for reading on large monitors. 

The spacing rhythm is built on an **8px linear scale**. This ensures vertical rhythm is maintained across all components. A key requirement for this educational platform is the **Large Touch Target** philosophy: every interactive element (buttons, inputs, menu items) must have a minimum hit area of 48x48px to accommodate diverse motor skills and mobile usage in a classroom environment.

## Elevation & Depth

Visual hierarchy is managed through **Ambient Shadows** and tonal layering. Rather than harsh black shadows, this design system uses soft, diffused shadows tinted with a hint of the Primary Verde (#1B5E20) at very low opacity (5-8%). This creates a "lifted" effect that feels integrated into the environment.

- **Level 0 (Base):** Neutral background.
- **Level 1 (Cards/Content):** Subtle 4px blur shadow to separate content from the background.
- **Level 2 (Dropdowns/Modals):** 16px blur shadow to indicate high-priority interaction.
- **Interactive State:** Elements should "lift" (increase shadow depth) on hover to provide tactile feedback.

## Shapes

The shape language is **Rounded (Level 2)**. A standard radius of 0.5rem (8px) is applied to all primary components such as input fields and buttons. 

Larger containers like cards or module panels use `rounded-lg` (1rem) to create a friendlier, more approachable aesthetic that softens the institutional tone. This consistency in roundedness helps unify disparate modules and makes the platform feel cohesive and modern.

## Components

### Buttons
Primary buttons use the Verde IFPR background with white text. They feature a minimum height of 48px. Secondary buttons use an outline of the Azul Secondary. Amber is used for "Action Buttons" such as "Submit Assignment" or "Start Quiz."

### Input Fields
Fields must have a clear 1px border in a mid-tone neutral, moving to a 2px Verde IFPR border on focus. Labels are always persistent above the field for accessibility; placeholder text should never replace a label.

### Cards
Cards are the primary container for courses and modules. They feature a top-border accent color corresponding to the Module Color Logic (M1, M2, or M3). This allows students to instantly identify subject areas at a glance.

### Progress Indicators
Educational progress is tracked using thick, rounded bars (8px height) using the Secondary Azul. Completion states are marked with the Primary Verde.

### Chips & Tags
Used for course categories or status (e.g., "In Progress," "Completed"). Chips use a low-saturation background of the category color with a high-saturation text color to ensure WCAG AA contrast compliance.