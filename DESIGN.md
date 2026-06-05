---
name: Alabaster & Flora
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#444748'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747878'
  outline-variant: '#c4c7c8'
  surface-tint: '#5d5f5f'
  primary: '#5d5f5f'
  on-primary: '#ffffff'
  primary-container: '#ffffff'
  on-primary-container: '#747676'
  inverse-primary: '#c6c6c7'
  secondary: '#016e21'
  on-secondary: '#ffffff'
  secondary-container: '#99f899'
  on-secondary-container: '#0f7427'
  tertiary: '#2d694c'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffffff'
  on-tertiary-container: '#458262'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#99f899'
  secondary-fixed-dim: '#7edb7f'
  on-secondary-fixed: '#002105'
  on-secondary-fixed-variant: '#005316'
  tertiary-fixed: '#b1f1cb'
  tertiary-fixed-dim: '#95d4b0'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#0f5136'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style
The design system reflects the purity of white cement integrated with sustainable, modern architecture. It targets architects, large-scale developers, and interior designers who value precision and ecological responsibility. 

The visual style is **Minimalist** with a focus on high-end editorial aesthetics. It utilizes expansive white space to mirror the product's primary attribute, while incorporating **Glassmorphism** and subtle **Corporate Modern** elements to ground the experience in professional reliability. The emotional response should be one of "Architectural Serenity"—calm, structured, and premium.

## Colors
The palette is dominated by **Absolute White (#FFFFFF)**, used as the primary structural surface to represent the purity of the cement. **Light Green (#90EE90)** serves as the secondary action color, symbolizing growth and sustainability. 

**Forest Green (#084D32)** provides essential contrast for deep accents and high-hierarchy text, while **Mint (#F0FFF0)** is used for soft background washes and subtle UI sectioning. Grays are kept to a minimum, preferring cool-toned off-whites to maintain a "bleached" architectural feel.

## Typography
**Inter** is utilized across all levels to maintain a systematic, utilitarian, yet modern appearance. Headlines use tight letter-spacing and semi-bold weights to mimic architectural blueprints and signage. 

Body text is set with generous line-height to ensure readability against bright white backgrounds. Labels and small metadata utilize uppercase styling with increased tracking to create a sense of professional categorization.

## Layout & Spacing
The system employs a **Fixed Grid** model on desktop (12 columns) and a fluid 4-column grid on mobile. The spacing philosophy is "Luxurious Density," meaning large vertical gaps (`stack-lg`) between major sections to allow the high-quality imagery of cement textures and architecture to breathe.

Internal component spacing (padding) is generous, ensuring that no element feels cramped. Content is often centered or offset to create a dynamic, editorial rhythm rather than a strictly symmetrical layout.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Ambient Shadows**. Surfaces do not use heavy black shadows; instead, they use very soft, high-diffusion shadows tinted with the Secondary color (e.g., a shadow with a 2% #084D32 tint) to maintain a clean aesthetic.

Glassmorphism is applied to navigation bars and floating labels over product images, using a 12px backdrop blur and a thin 1px white border with 20% opacity. This creates a "frosted glass" effect that feels as premium as the manufactured stone.

## Shapes
In alignment with the "2xl" requirement, the design system utilizes a **Rounded** philosophy. Base components like buttons start at 0.5rem, but primary containers—specifically product cards and imagery—utilize `rounded-xl` (1.5rem) or even custom 24px corners to soften the industrial nature of the product. 

This juxtaposition of soft corners with hard industrial materials (cement) creates a sophisticated, modern tension.

## Components

### Card Designs
Product cards should feature a 1:1 aspect ratio image at the top with a subtle "Mint" background for the text area below. Client/Testimonial cards use a "Glass" surface (backdrop-blur) when placed over project photography. All cards must feature the `rounded-xl` corner radius.

### Form Inputs
Inputs are "Ghost Style": a light gray bottom border (2px) that transforms into a Forest Green border on focus. No heavy boxes are used. The label floats above the line in the `label-md` typography style.

### Carousel Indicators
Instead of simple dots, indicators are horizontal "Pills." The active state is an elongated Light Green bar, while inactive states are small, circular Mint dots. This reinforces the linear, architectural nature of the design.

### Buttons
Primary buttons are solid Light Green with Forest Green text. Secondary buttons are White with a 1px Forest Green border. All buttons use the `label-md` uppercase font style for a professional, "spec-sheet" appearance.