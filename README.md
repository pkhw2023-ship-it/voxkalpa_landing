# Voxkalpa AI Labs

A high-fidelity cinematic landing page for Voxkalpa AI Labs, built as a digital instrument with intentional scroll mechanics, magnetic interactions, and weighted professional animations.

## Aesthetic Direction
Designed utilizing **Preset D — "Vapor Clinic" (Neon Biotech)**.
- **Palette**: Deep Void (`#0A0A14`), Plasma (`#7B61FF`), Ghost (`#F0EFF4`), Graphite (`#18181B`).
- **Typography:** `Sora` (Headings), `Instrument Serif` (Italic Drama), `Fira Code` (Data/Telemetry).
- **Vibe:** A genome sequencing lab inside a Tokyo nightclub featuring dark water bioluminescence, neon reflections, and 3D voxel matrices. Includes a global 0.05 opacity SVG `<feTurbulence>` noise filter to eliminate flat digital gradients.

## Core Value Propositions
The interface translates core features into interactive functional artifacts rather than static cards:
1. **Intelligent Asset Organization** -> "Diagnostic Shuffler": A self-cycling array of diagnostic task cards with spring-bounce transitions.
2. **Accelerated Scene Generation** -> "Telemetry Typewriter": A live-feed terminal simulating voxel cloud generation output.
3. **Dynamic Scene Interaction** -> "Cursor Protocol Scheduler": An automated SVG sequence mimicking timeline/scheduling interactions within 3D environments.

## Tech Stack
- **Framework:** React 19 + Vite 4 (Configured for Node 16+ compatibility)
- **Styling:** Tailwind CSS v3.4.17
- **Animations:** GSAP 3 + ScrollTrigger Plugin
- **Icons:** Lucide React

## Component Architecture
- `Navbar.jsx` - Floating Island dynamic morphing navigation.
- `Hero.jsx` - Primary 100dvh entrance with staggered GSAP reveals.
- `Features.jsx` - Functional interactive artifacts.
- `Philosophy.jsx` - ScrollTriggered parallax and typographic masking.
- `Protocol.jsx` - Sticky, stacking cards featuring pinned layout logic, blurring background elements, and continuous SVG path animations.
- `GetStarted.jsx` - Primary conversion section.
- `Footer.jsx` - Functional footer with an animated system-operational beacon.

## Local Setup

Ensure you are running Node.js 16 or 18+.

1. **Install dependencies:**
    ```bash
    npm install
    ```
2. **Run the development server:**
    ```bash
    npm run dev
    ```
3. **Build the production static files:**
    ```bash
    npm run build
    ```

## Engineering Philosophy
Every component relies strictly on `gsap.context()` bounded inside `useLayoutEffect` to prevent memory leaks and ensure perfect unmounting. Tailwind arbitrary values are leveraged to achieve perfectly tuned spring physics and fluid text scaling without external dependencies.
