# Washing Machine

A playful idle clicker game built with vanilla HTML, CSS, and JavaScript. Click the washing machine to produce clean laundry, buy upgrades, unlock passive income, and grow your laundromat into a bubbly production empire.

![Washing Machine gameplay screenshot](./assets/washing-machine-screenshot.png)

## Features

- Click-to-earn core loop with animated washing machine feedback
- Upgrade shop with scaling costs and late-game progression
- Passive income system for idle growth
- Orbiting cursor hands inspired by classic clicker games
- Floating click feedback and ambient laundromat sound
- Auto-save with `localStorage`
- GitHub Pages deployment workflow

## Upgrades

| Upgrade | Base cost | Per click | Per second | Description |
| --- | ---: | ---: | ---: | --- |
| Detergent Plus | 15 | +1 | +0 | A premium foam mix that boosts the efficiency of every cycle. |
| Fast Spin | 30 | +0 | +0.4 | The drum picks up speed even when you are not clicking. |
| Turbo Dryer | 80 | +0 | +1.2 | Fresh laundry comes out warm and ready to be folded. |
| Laundry Attendant | 180 | +0 | +3.5 | Someone watches the floor while production keeps climbing. |
| Industrial Line | 420 | +3 | +8 | A full line of machines turns the laundromat into a factory. |
| Bubble Cannon | 900 | +5 | +14 | A foam-blasting cannon that launches spotless loads at absurd speed. |
| Fold Bot Squad | 1,800 | +2 | +26 | A synchronized crew of folding robots keeps the clean stacks moving nonstop. |
| Foam Reactor | 4,200 | +12 | +55 | A glowing suds core supercharges every wash cycle like a tiny sci-fi sun. |
| Orbital Laundromat | 9,500 | +24 | +125 | A ring of zero-gravity washers spins above the city cleaning laundry in orbit. |
| Black Hole Washer | 22,000 | +55 | +280 | An impossible washer bends space, time, and detergent into pure output. |
| Time Loop Laundry | 50,000 | +120 | +620 | Tomorrow's clean laundry arrives today, again and again and again. |
| Quantum Rinse Lab | 100,000 | +190 | +900 | A clean-room lab tunes every rinse cycle with impossible precision. |
| Solar Dryer Array | 210,000 | +330 | +1,900 | Rows of sun-charged dryers bake through mountains of laundry at once. |
| Tidal Foam Plant | 470,000 | +550 | +3,900 | A coastal foam plant pumps endless detergent waves straight into the drums. |
| Neon Fold District | 1,100,000 | +900 | +7,600 | An entire glowing district folds, stacks, and ships laundry nonstop. |
| Lunar Spin Colony | 2,600,000 | +1,450 | +14,500 | Low-gravity wash towers on the moon keep the spin cycle permanently boosted. |
| Gravity Press Reactor | 6,500,000 | +2,400 | +28,500 | A reactor crushes wrinkles and time itself into pure throughput. |
| Multiverse Laundry Grid | 18,000,000 | +3,900 | +59,000 | Parallel laundromats across nearby realities all bill their output to you. |
| Reality Wash Engine | 52,000,000 | +6,300 | +120,000 | A reality engine resets dirty fabric into the cleanest possible timeline. |
| Cosmic Detergent Vault | 170,000,000 | +9,800 | +250,000 | A sealed vault of star-grade detergent keeps every machine overclocked forever. |
| Infinity Whirlpool Core | 620,000,000 | +15,000 | +500,000 | An infinite vortex drags in dirty laundry and spits it back spotless. |
| Chrono Soap Singularity | 2,600,000,000 | +23,000 | +980,000 | The final machine washes entire centuries of laundry in a single blink. |

## Play locally

1. Clone the repository.
2. Open `index.html` in a browser.

No build step and no dependencies are required.

## Project structure

- `index.html`: game layout
- `styles.css`: art direction, layout, animation, responsive behavior
- `script.js`: game loop, upgrades, rendering, audio, persistence
