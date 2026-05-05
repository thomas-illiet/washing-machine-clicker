# Washing Machine

A playful idle clicker game built with vanilla HTML, CSS, and JavaScript. Click the washing machine to produce clean laundry, buy upgrades, unlock passive income, and grow your laundromat into a bubbly production empire.

![Washing Machine gameplay screenshot](./assets/washing-machine-screenshot.png)

## Features

- Click-to-earn core loop with animated washing machine feedback
- 52-upgrade shop with a full early, mid, late, and endgame progression arc
- Passive income system for idle growth
- Orbiting cursor hands inspired by classic clicker games
- Floating click feedback and ambient laundromat sound
- Large-number formatting for very deep endgame totals
- Auto-save with `localStorage`
- GitHub Pages deployment workflow

## Upgrades

The shop is now structured as a long-form escalation with 9 themed chapters:

- `Local Laundromat`: simple click and idle starters like `Detergent Plus`, `Fast Spin`, and `Turbo Dryer`
- `Automation Lab`: the jump into linked machines, fold bots, and foam reactors
- `Planetary Expansion`: orbital, tidal, solar, neon-district, and lunar-scale infrastructure
- `Reality Distortion`: black hole, multiverse, and chrono-soap tech that pushes the original late game further
- `Stellar Expansion`: relay stations, comet fleets, nebula yards, pulsar arrays, and systemwide detergent hubs
- `Interplanetary Logistics`: asteroid convoys, orbital freight elevators, Dyson dryer lattices, and planetary ports
- `Galactic Network`: spiral-arm service webs, foam foundries, sortation meshes, and extragalactic pipelines
- `Dimensional Engineering`: causality rinse arrays, timeline compression yards, wormhole bureaus, and probability cathedrals
- `Omniversal Finale`: the absurd last climb through senate-grade laundry policy, infinite reservoirs, and the `Absolute Clean Protocol`

Each upgrade keeps stacking permanently, and the effect text is generated from the actual upgrade values so the UI stays in sync with the balance table.

## Play locally

1. Clone the repository.
2. Open `index.html` in a browser.

No build step and no dependencies are required.

## Project structure

- `index.html`: game layout
- `styles.css`: art direction, layout, animation, responsive behavior
- `script.js`: game loop, upgrades, rendering, audio, persistence
