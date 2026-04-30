# Raumeleganz Spanndecken

Modernes Next.js-Projekt für einen Handwerksbetrieb mit kreativem, professionellem Header.

## Features

- ✨ Animierter Gradient-Header mit subtiler Textur
- 🎨 Warme Farbpalette (Orange/Braun-Töne)
- 🛠️ Kreatives Handwerks-Logo (Hexagon mit Tool-Icon)
- 📱 Responsive Design (Desktop + Mobile Navigation)
- ⚡ Smooth Animations mit Framer Motion
- 🎯 Call-to-Action Button "Kostenloses Angebot"

## Tech-Stack

- **Framework:** Next.js 15.1
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11.15
- **TypeScript:** 5.7
- **React:** 19.0

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Farbpalette

- **craft-500:** #E87823 (Primär Orange)
- **craft-600:** #C76015 (Sekundär Orange)
- **warm-50:** #FFF8F0 (Heller Hintergrund)
- **warm-900:** #3A2A1D (Dunkler Text)

## Komponenten

- `Header.tsx` - Moderner Header mit Logo, Navigation und CTA
- `globals.css` - Farbvariablen und Custom Animations

## Performance-Optimierungen

- GPU-beschleunigte Animationen (transform, opacity)
- Transition Duration: 200ms (schnell, aber smooth)
- Subtile Hover-Effekte (scale-[1.02])
- will-change-transform für hover-intensive Elemente

