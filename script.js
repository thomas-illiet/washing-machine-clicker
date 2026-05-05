const UPGRADE_DEFINITIONS = [
  {
    id: "lessive_plus",
    name: "Detergent Plus",
    chapter: "Local Laundromat",
    description: "A brighter blend of soap gives every wash cycle a little more punch.",
    baseCost: 15,
    clickPower: 1,
    passivePower: 0,
  },
  {
    id: "essorage_rapide",
    name: "Fast Spin",
    chapter: "Local Laundromat",
    description: "A tighter spin setting keeps the drum working even when your hands are off it.",
    baseCost: 30,
    clickPower: 0,
    passivePower: 0.4,
  },
  {
    id: "seche_linge",
    name: "Turbo Dryer",
    chapter: "Local Laundromat",
    description: "A hotter drying lane clears each load before the next one even lands.",
    baseCost: 80,
    clickPower: 0,
    passivePower: 1.2,
  },
  {
    id: "employe_laverie",
    name: "Laundry Attendant",
    chapter: "Local Laundromat",
    description: "An extra attendant keeps baskets moving while the front room stays busy.",
    baseCost: 180,
    clickPower: 0,
    passivePower: 3.5,
  },
  {
    id: "chaine_industrielle",
    name: "Industrial Line",
    chapter: "Automation Lab",
    description: "A linked bank of washers turns one storefront into a dependable production line.",
    baseCost: 420,
    clickPower: 3,
    passivePower: 8,
  },
  {
    id: "canon_a_bulles",
    name: "Bubble Cannon",
    chapter: "Automation Lab",
    description: "Pressurized foam jets blast fresh loads through the drum at ridiculous speed.",
    baseCost: 900,
    clickPower: 6,
    passivePower: 18,
  },
  {
    id: "escouade_pliage",
    name: "Fold Bot Squad",
    chapter: "Automation Lab",
    description: "A robot folding crew keeps stacks moving so the washers never have to wait.",
    baseCost: 1900,
    clickPower: 10,
    passivePower: 34,
  },
  {
    id: "reacteur_mousse",
    name: "Foam Reactor",
    chapter: "Automation Lab",
    description: "A humming core floods the floor with supercharged suds and steadier output.",
    baseCost: 4200,
    clickPower: 18,
    passivePower: 62,
  },
  {
    id: "laverie_orbitale",
    name: "Orbital Laundromat",
    chapter: "Planetary Expansion",
    description: "A ring of zero-gravity machines keeps city demand handled from low orbit.",
    baseCost: 9500,
    clickPower: 32,
    passivePower: 120,
  },
  {
    id: "trou_noir_lavage",
    name: "Black Hole Washer",
    chapter: "Planetary Expansion",
    description: "A collapsed drum bends space around each cycle and multiplies the result.",
    baseCost: 22000,
    clickPower: 58,
    passivePower: 230,
  },
  {
    id: "boucle_temporelle",
    name: "Time Loop Laundry",
    chapter: "Planetary Expansion",
    description: "Short forecast loops send tomorrow's finished loads back into today's queue.",
    baseCost: 50000,
    clickPower: 105,
    passivePower: 430,
  },
  {
    id: "labo_rincage_quantique",
    name: "Quantum Rinse Lab",
    chapter: "Planetary Expansion",
    description: "A precision lab tunes every rinse, filter, and mineral balance for peak yield.",
    baseCost: 110000,
    clickPower: 190,
    passivePower: 820,
  },
  {
    id: "batterie_sechage_solaire",
    name: "Solar Dryer Array",
    chapter: "Planetary Expansion",
    description: "Sun-fed drying towers clear entire neighborhoods of laundry in a single sweep.",
    baseCost: 240000,
    clickPower: 340,
    passivePower: 1600,
  },
  {
    id: "usine_mousse_maree",
    name: "Tidal Foam Plant",
    chapter: "Planetary Expansion",
    description: "A tidal plant turns ocean-scale foam pressure into nonstop wash capacity.",
    baseCost: 520000,
    clickPower: 620,
    passivePower: 3200,
  },
  {
    id: "district_pliage_neon",
    name: "Neon Fold District",
    chapter: "Planetary Expansion",
    description: "A neon district of folding towers, conveyors, and depots never sleeps.",
    baseCost: 1150000,
    clickPower: 1100,
    passivePower: 6200,
  },
  {
    id: "colonie_lunaire_essorage",
    name: "Lunar Spin Colony",
    chapter: "Planetary Expansion",
    description: "A lunar colony keeps low-gravity spin chambers running across the dark side.",
    baseCost: 2600000,
    clickPower: 1900,
    passivePower: 12000,
  },
  {
    id: "reacteur_pression_gravite",
    name: "Gravity Press Reactor",
    chapter: "Reality Distortion",
    description: "Gravity-packed press chambers crush delay, wrinkles, and downtime into throughput.",
    baseCost: 6500000,
    clickPower: 3300,
    passivePower: 23500,
  },
  {
    id: "grille_laverie_multivers",
    name: "Multiverse Laundry Grid",
    chapter: "Reality Distortion",
    description: "Parallel laundromats across nearby realities sync their totals into one bill.",
    baseCost: 15000000,
    clickPower: 5600,
    passivePower: 47000,
  },
  {
    id: "moteur_lavage_realite",
    name: "Reality Wash Engine",
    chapter: "Reality Distortion",
    description: "A reality engine routes each stain into the cleanest possible timeline.",
    baseCost: 39000000,
    clickPower: 9300,
    passivePower: 93000,
  },
  {
    id: "coffre_lessive_cosmique",
    name: "Cosmic Detergent Vault",
    chapter: "Reality Distortion",
    description: "A cosmic detergent vault keeps every colony, grid, and reactor permanently overclocked.",
    baseCost: 105000000,
    clickPower: 15500,
    passivePower: 190000,
  },
  {
    id: "noyau_vortex_infini",
    name: "Infinity Whirlpool Core",
    chapter: "Reality Distortion",
    description: "An endless whirlpool core drags in whole freight waves and returns them spotless.",
    baseCost: 330000000,
    clickPower: 26000,
    passivePower: 390000,
  },
  {
    id: "singularite_savon_chrono",
    name: "Chrono Soap Singularity",
    chapter: "Reality Distortion",
    description: "A chrono-soap singularity washes entire eras of backlog before a second can pass.",
    baseCost: 1100000000,
    clickPower: 43000,
    passivePower: 800000,
  },
  {
    id: "relais_linge_stellaire",
    name: "Stellar Linen Relay",
    chapter: "Stellar Expansion",
    description: "A bright relay station beams clean freight between orbital laundries without a pause.",
    baseCost: 2200000000,
    clickPower: 70000,
    passivePower: 1600000,
  },
  {
    id: "flotte_vapeur_comete",
    name: "Comet Steam Fleet",
    chapter: "Stellar Expansion",
    description: "Comet-skimming service ships haul heat, water, and finished loads across the system.",
    baseCost: 3800000000,
    clickPower: 115000,
    passivePower: 3200000,
  },
  {
    id: "chantier_sechage_nebuleuse",
    name: "Nebula Dryer Yard",
    chapter: "Stellar Expansion",
    description: "A nebula-side drying yard bakes cargo mountains in clouds of charged vapor.",
    baseCost: 6600000000,
    clickPower: 190000,
    passivePower: 6400000,
  },
  {
    id: "batterie_pression_pulsar",
    name: "Pulsar Press Array",
    chapter: "Stellar Expansion",
    description: "Pulsar-timed presses compress every load into a faster, hotter production rhythm.",
    baseCost: 11500000000,
    clickPower: 315000,
    passivePower: 12500000,
  },
  {
    id: "anneau_quasar_tissu",
    name: "Quasar Fabric Ring",
    chapter: "Stellar Expansion",
    description: "A quasar-lit ring spins fabric streams around a core of impossible throughput.",
    baseCost: 20000000000,
    clickPower: 520000,
    passivePower: 24000000,
  },
  {
    id: "nexus_mousse_systeme",
    name: "System Suds Nexus",
    chapter: "Stellar Expansion",
    description: "A systemwide detergent nexus feeds every dock, depot, and washer from one radiant source.",
    baseCost: 35000000000,
    clickPower: 860000,
    passivePower: 46000000,
  },
  {
    id: "convoi_pliage_asteroide",
    name: "Asteroid Fold Convoy",
    chapter: "Interplanetary Logistics",
    description: "Armored folding barges ride asteroid belts to keep interplanetary shipments perfectly stacked.",
    baseCost: 61000000000,
    clickPower: 1400000,
    passivePower: 88000000,
  },
  {
    id: "ascenseur_fret_orbital",
    name: "Orbital Freight Elevator",
    chapter: "Interplanetary Logistics",
    description: "A freight elevator lifts entire city outputs into orbit without slowing the floor below.",
    baseCost: 106000000000,
    clickPower: 2250000,
    passivePower: 170000000,
  },
  {
    id: "port_linge_planetaire",
    name: "Planetary Linen Port",
    chapter: "Interplanetary Logistics",
    description: "A dedicated linen port coordinates dock traffic, sorters, and wash queues across whole worlds.",
    baseCost: 185000000000,
    clickPower: 3600000,
    passivePower: 330000000,
  },
  {
    id: "treillis_sechage_dyson",
    name: "Dyson Dryer Lattice",
    chapter: "Interplanetary Logistics",
    description: "A star-hugging dryer lattice turns captured sunlight into industrial-scale finishing power.",
    baseCost: 322000000000,
    clickPower: 5800000,
    passivePower: 630000000,
  },
  {
    id: "bassin_blanchisserie_terraforme",
    name: "Terraform Laundry Basin",
    chapter: "Interplanetary Logistics",
    description: "A terraformed basin channels weather, rivers, and steam fields into one colossal wash reserve.",
    baseCost: 560000000000,
    clickPower: 9300000,
    passivePower: 1200000000,
  },
  {
    id: "broche_tri_interplanetaire",
    name: "Interplanetary Sortation Spindle",
    chapter: "Interplanetary Logistics",
    description: "A kilometer-long spindle keeps a dozen planetary supply lines sorted, timed, and spotless.",
    baseCost: 970000000000,
    clickPower: 15000000,
    passivePower: 2300000000,
  },
  {
    id: "reseau_laverie_spirale",
    name: "Spiral Laundry Network",
    chapter: "Galactic Network",
    description: "A spiral-arm network links distant laundromats into one self-balancing service web.",
    baseCost: 1680000000000,
    clickPower: 24000000,
    passivePower: 4400000000,
  },
  {
    id: "fonderie_mousse_galactique",
    name: "Galactic Foam Foundry",
    chapter: "Galactic Network",
    description: "A galaxy-scale foundry refines detergent matter for fleets, ports, and orbital districts at once.",
    baseCost: 2910000000000,
    clickPower: 39000000,
    passivePower: 8400000000,
  },
  {
    id: "grille_service_amas",
    name: "Starcluster Service Grid",
    chapter: "Galactic Network",
    description: "A cluster-spanning grid dispatches crews, energy, and rinse cycles before delays can form.",
    baseCost: 5040000000000,
    clickPower: 63000000,
    passivePower: 16000000000,
  },
  {
    id: "accord_lavage_espace_profond",
    name: "Deep Space Wash Accord",
    chapter: "Galactic Network",
    description: "A deep-space accord standardizes cleaning across drifting colonies, freighters, and listening posts.",
    baseCost: 8720000000000,
    clickPower: 100000000,
    passivePower: 30000000000,
  },
  {
    id: "maillage_tri_voie_lactee",
    name: "Milky Way Sortation Mesh",
    chapter: "Galactic Network",
    description: "A luminous sortation mesh routes billions of loads through the galaxy without a single jam.",
    baseCost: 15000000000000,
    clickPower: 160000000,
    passivePower: 57000000000,
  },
  {
    id: "pipeline_proprete_extragalactique",
    name: "Extragalactic Clean Pipeline",
    chapter: "Galactic Network",
    description: "A clean pipeline jumps beyond the home galaxy and sends finished freight back already folded.",
    baseCost: 25800000000000,
    clickPower: 255000000,
    passivePower: 108000000000,
  },
  {
    id: "forge_essorage_dimensionnelle",
    name: "Dimensional Spin Forge",
    chapter: "Dimensional Engineering",
    description: "A dimensional forge tempers spin cycles in pocket worlds where friction and time obey new rules.",
    baseCost: 44300000000000,
    clickPower: 405000000,
    passivePower: 204000000000,
  },
  {
    id: "batterie_rincage_causalite",
    name: "Causality Rinse Array",
    chapter: "Dimensional Engineering",
    description: "A causality rinse array cleans the cause of stains before the stain can finish happening.",
    baseCost: 75900000000000,
    clickPower: 640000000,
    passivePower: 385000000000,
  },
  {
    id: "chantier_compression_temporelle",
    name: "Timeline Compression Yard",
    chapter: "Dimensional Engineering",
    description: "A compression yard packs entire production weeks into a single controllable instant.",
    baseCost: 129700000000000,
    clickPower: 1000000000,
    passivePower: 725000000000,
  },
  {
    id: "bureau_service_trou_ver",
    name: "Wormhole Service Bureau",
    chapter: "Dimensional Engineering",
    description: "A bureau of wormhole clerks reroutes each load through the nearest version of already-clean.",
    baseCost: 221000000000000,
    clickPower: 1580000000,
    passivePower: 1360000000000,
  },
  {
    id: "cathedrale_lavage_probabilite",
    name: "Probability Wash Cathedral",
    chapter: "Dimensional Engineering",
    description: "A cathedral of probability tilts chance so every cycle lands on its cleanest possible outcome.",
    baseCost: 376000000000000,
    clickPower: 2450000000,
    passivePower: 2550000000000,
  },
  {
    id: "metier_mousse_continuum",
    name: "Continuum Foam Loom",
    chapter: "Dimensional Engineering",
    description: "A continuum loom weaves detergent, history, and throughput into one seamless production fabric.",
    baseCost: 639000000000000,
    clickPower: 3800000000,
    passivePower: 4750000000000,
  },
  {
    id: "senat_blanchisserie_omniversel",
    name: "Omniverse Laundry Senate",
    chapter: "Omniversal Finale",
    description: "An impossible senate coordinates laundering policy across realities that should never have met.",
    baseCost: 1085000000000000,
    clickPower: 5900000000,
    passivePower: 8850000000000,
  },
  {
    id: "reservoir_placard_infini",
    name: "Infinite Closet Reservoir",
    chapter: "Omniversal Finale",
    description: "A bottomless reservoir stores every folded thing that can exist and still asks for more.",
    baseCost: 1840000000000000,
    clickPower: 9100000000,
    passivePower: 16400000000000,
  },
  {
    id: "tribunal_tache_eternelle",
    name: "Eternal Stain Tribunal",
    chapter: "Omniversal Finale",
    description: "A timeless tribunal judges every stain guilty and erases its appeal from every timeline.",
    baseCost: 3110000000000000,
    clickPower: 14000000000,
    passivePower: 30200000000000,
  },
  {
    id: "moteur_meta_lessive",
    name: "Meta Detergent Engine",
    chapter: "Omniversal Finale",
    description: "A meta-engine manufactures the very idea of soap faster than universes can spend it.",
    baseCost: 5250000000000000,
    clickPower: 21500000000,
    passivePower: 55500000000000,
  },
  {
    id: "couronne_tourbillon_sans_borne",
    name: "Boundless Whirlpool Crown",
    chapter: "Omniversal Finale",
    description: "A crowned whirlpool gathers every last backlog from creation and throws it back clean.",
    baseCost: 8840000000000000,
    clickPower: 33000000000,
    passivePower: 101000000000000,
  },
  {
    id: "protocole_proprete_absolue",
    name: "Absolute Clean Protocol",
    chapter: "Omniversal Finale",
    description: "The final protocol declares every possible load already finished, folded, and perfectly clean.",
    baseCost: 14800000000000000,
    clickPower: 50000000000,
    passivePower: 185000000000000,
  },
];

const GAME_CONFIG = {
  saveKey: "washing-machine-clicker-save-v1",
  autosaveIntervalMs: 5000,
  maxVisibleCursors: 18,
  maxVisibleDetergentTablets: 6,
  detergentTabletMinDelayMs: 700,
  detergentTabletMaxDelayMs: 1800,
  upgradeBaseCostMultiplier: 1.35,
  upgradeCostGrowthFactor: 1.18,
  upgradeUnlockRatio: 1.05,
  upgradeToastDurationMs: 3600,
  upgrades: UPGRADE_DEFINITIONS,
};

const DOM = {
  cleanCount: document.getElementById("clean-count"),
  clickPower: document.getElementById("click-power"),
  passiveRate: document.getElementById("passive-rate"),
  lifetimeTotal: document.getElementById("lifetime-total"),
  washerButton: document.getElementById("washer-button"),
  detergentFallLayer: document.getElementById("detergent-fall-layer"),
  cursorSwarm: document.getElementById("cursor-swarm"),
  floatingTextLayer: document.getElementById("floating-text-layer"),
  shopList: document.getElementById("shop-list"),
  soundToggle: document.getElementById("sound-toggle"),
  toastStack: document.getElementById("toast-stack"),
  upgradeModal: document.getElementById("upgrade-modal"),
  upgradeModalImage: document.getElementById("upgrade-modal-image"),
  upgradeModalTitle: document.getElementById("upgrade-modal-title"),
  upgradeModalEffect: document.getElementById("upgrade-modal-effect"),
  upgradeModalDescription: document.getElementById("upgrade-modal-description"),
};

const LESSIVE_PLUS_ID = "lessive_plus";
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
const audioEngine = {
  supported: Boolean(AudioContextClass),
  context: null,
  initialized: false,
  unlocked: false,
  masterGain: null,
  humPrimaryGain: null,
  humSecondaryGain: null,
  motorGain: null,
  waterGain: null,
  waterFilterCenter: null,
  waterFilterLfo: null,
};

function getInitialRevealedUpgradeIds() {
  return [GAME_CONFIG.upgrades[0].id];
}

function createInitialUpgrades() {
  return Object.fromEntries(GAME_CONFIG.upgrades.map((upgrade) => [upgrade.id, 0]));
}

function createInitialState() {
  return {
    lingePropre: 0,
    totalProduit: 0,
    parClic: 1,
    parSeconde: 0,
    soundEnabled: true,
    upgrades: createInitialUpgrades(),
    lastTick: Date.now(),
  };
}

let state = createInitialState();
const runtimeState = {
  revealedUpgradeIds: new Set(getInitialRevealedUpgradeIds()),
  unlockAnchorTotal: 0,
  detergentTabletTimeoutId: null,
  upgradeModalHideTimeoutId: null,
  activeUpgradeModalTrigger: null,
};

function formatNumber(value) {
  const safeValue = Math.max(0, value);
  const absoluteValue = Math.abs(safeValue);
  const compactUnits = [
    { value: 1e33, suffix: "Dc" },
    { value: 1e30, suffix: "No" },
    { value: 1e27, suffix: "Oc" },
    { value: 1e24, suffix: "Sp" },
    { value: 1e21, suffix: "Sx" },
    { value: 1e18, suffix: "Qi" },
    { value: 1e15, suffix: "Qa" },
    { value: 1e12, suffix: "T" },
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" },
  ];

  if (absoluteValue >= 1e36) {
    return safeValue.toExponential(2).replace("e+", "e");
  }

  const compactUnit = compactUnits.find((unit) => absoluteValue >= unit.value);

  if (compactUnit && absoluteValue >= 10000) {
    const scaledValue = safeValue / compactUnit.value;

    if (scaledValue >= 1000 && compactUnit.value === compactUnits[0].value) {
      return safeValue.toExponential(2).replace("e+", "e");
    }

    const maximumFractionDigits = scaledValue >= 100 ? 0 : scaledValue >= 10 ? 1 : 2;

    return `${new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(scaledValue)}${compactUnit.suffix}`;
  }

  const maximumFractionDigits = absoluteValue >= 100 ? 0 : absoluteValue >= 10 ? 1 : 2;

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(safeValue);
}

function getUpgradeById(id) {
  return GAME_CONFIG.upgrades.find((upgrade) => upgrade.id === id) || null;
}

function getUpgradeEffectLabel(upgrade) {
  if (upgrade.clickPower > 0 && upgrade.passivePower > 0) {
    return `+${formatNumber(upgrade.clickPower)} per click and +${formatNumber(upgrade.passivePower)} per second`;
  }

  if (upgrade.clickPower > 0) {
    return `+${formatNumber(upgrade.clickPower)} laundry per click`;
  }

  if (upgrade.passivePower > 0) {
    return `+${formatNumber(upgrade.passivePower)} laundry per second`;
  }

  return "No output bonus";
}

function getUpgradeScaleHint(upgrade) {
  const chapterNotes = {
    "Local Laundromat": "It smooths out the opening stretch and helps your first automation pieces come online faster.",
    "Automation Lab": "It carries the early midgame once one washer and a single helper are no longer enough.",
    "Planetary Expansion": "It keeps your growth steady while the shop shifts from a busy block to city and planetary scale.",
    "Reality Distortion": "It is tuned for the late game, where giant unlock jumps need stronger compounding from every purchase.",
    "Stellar Expansion": "It opens the stellar phase, where each upgrade has to feed freight, heat, and detergent across entire systems.",
    "Interplanetary Logistics": "It supports the logistics arc, where throughput depends on moving impossible amounts of laundry without bottlenecks.",
    "Galactic Network": "It is built for galaxy-spanning infrastructure, where scale matters more than any single machine ever could.",
    "Dimensional Engineering": "It belongs to the deep endgame, where time, causality, and routing tricks keep impossible unlocks within reach.",
    "Omniversal Finale": "It is part of the final absurd climb, where only universe-sized gains keep the last tiers moving.",
  };

  return chapterNotes[upgrade.chapter] || "It keeps your laundromat compounding faster as the shop escalates.";
}

function getUpgradeModalDescription(upgrade) {
  const detailLines = [
    upgrade.description,
    `${upgrade.name} belongs to the ${upgrade.chapter} chapter of your laundromat expansion.`,
    `${upgrade.name} stays active permanently, so every copy stacks with the rest of your laundromat.`,
  ];

  if (upgrade.clickPower > 0 && upgrade.passivePower > 0) {
    detailLines.push(
      `Each purchase adds ${formatNumber(upgrade.clickPower)} clean laundry to every click and ${formatNumber(upgrade.passivePower)} clean laundry per second.`,
    );
  } else if (upgrade.clickPower > 0) {
    detailLines.push(
      `Each purchase adds ${formatNumber(upgrade.clickPower)} extra clean laundry to every click you make.`,
    );
  } else if (upgrade.passivePower > 0) {
    detailLines.push(
      `Each purchase keeps production running by generating ${formatNumber(upgrade.passivePower)} clean laundry per second on its own.`,
    );
  }

  detailLines.push(getUpgradeScaleHint(upgrade));

  return detailLines.join(" ");
}

function getUpgradeCost(upgrade, ownedCount) {
  return Math.round(
    upgrade.baseCost *
      GAME_CONFIG.upgradeBaseCostMultiplier *
      Math.pow(GAME_CONFIG.upgradeCostGrowthFactor, ownedCount),
  );
}

function getRandomNumber(minValue, maxValue) {
  return minValue + Math.random() * (maxValue - minValue);
}

function getUpgradeUnlockRequirement(upgradeIndex) {
  if (upgradeIndex === 0) {
    return 0;
  }

  const upgrade = GAME_CONFIG.upgrades[upgradeIndex];
  return Math.max(10, Math.round(getUpgradeCost(upgrade, 0) * GAME_CONFIG.upgradeUnlockRatio));
}

function getNextLockedUpgrade() {
  const nextLockedIndex = GAME_CONFIG.upgrades.findIndex(
    (upgrade) => !runtimeState.revealedUpgradeIds.has(upgrade.id),
  );

  if (nextLockedIndex === -1) {
    return null;
  }

  const upgrade = GAME_CONFIG.upgrades[nextLockedIndex];
  return {
    ...upgrade,
    index: nextLockedIndex,
    unlockRequirement: getUpgradeUnlockRequirement(nextLockedIndex),
    unlockThreshold: runtimeState.unlockAnchorTotal + getUpgradeUnlockRequirement(nextLockedIndex),
  };
}

function revealOwnedUpgradeIds(upgrades) {
  return GAME_CONFIG.upgrades
    .filter((upgrade) => upgrades[upgrade.id] > 0)
    .map((upgrade) => upgrade.id);
}

function resetRevealProgress() {
  runtimeState.revealedUpgradeIds = new Set(getInitialRevealedUpgradeIds());
  runtimeState.unlockAnchorTotal = 0;
}

function hydrateRevealProgressFromSave(parsedUpgrades, parsedRevealedUpgradeIds, parsedUnlockAnchorTotal, totalProduit) {
  const validSavedIds = Array.isArray(parsedRevealedUpgradeIds)
    ? parsedRevealedUpgradeIds.filter((upgradeId) =>
        GAME_CONFIG.upgrades.some((upgrade) => upgrade.id === upgradeId),
      )
    : [];

  const ownedUpgradeIds = revealOwnedUpgradeIds(parsedUpgrades);
  const revealedIds =
    validSavedIds.length > 0
      ? Array.from(new Set([...getInitialRevealedUpgradeIds(), ...ownedUpgradeIds, ...validSavedIds]))
      : Array.from(new Set([...getInitialRevealedUpgradeIds(), ...ownedUpgradeIds]));

  runtimeState.revealedUpgradeIds = new Set(revealedIds);
  runtimeState.unlockAnchorTotal =
    typeof parsedUnlockAnchorTotal === "number" && Number.isFinite(parsedUnlockAnchorTotal)
      ? Math.max(0, parsedUnlockAnchorTotal)
      : Math.max(0, totalProduit);
}

function dismissUnlockToast(toast) {
  if (!toast?.isConnected) {
    return;
  }

  toast.classList.remove("is-visible");

  window.setTimeout(() => {
    toast.remove();
  }, 220);
}

function showUnlockToast(upgrade) {
  if (!DOM.toastStack) {
    return;
  }

  const toast = document.createElement("article");
  toast.className = "unlock-toast";
  toast.innerHTML = `
    <div class="unlock-toast__media" aria-hidden="true">
      <img
        class="unlock-toast__image"
        src="assets/upgrades/${upgrade.id}.png"
        alt=""
        width="72"
        height="72"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="unlock-toast__content">
      <p class="unlock-toast__eyebrow">Upgrade unlocked</p>
      <strong class="unlock-toast__title">${upgrade.name}</strong>
      <p class="unlock-toast__effect">${getUpgradeEffectLabel(upgrade)}</p>
    </div>
  `;

  toast.addEventListener("click", () => {
    dismissUnlockToast(toast);
  });

  DOM.toastStack.appendChild(toast);

  window.requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  window.setTimeout(() => {
    dismissUnlockToast(toast);
  }, GAME_CONFIG.upgradeToastDurationMs);
}

function createFallingDetergentTablet() {
  if (!DOM.detergentFallLayer) {
    return;
  }

  if (DOM.detergentFallLayer.childElementCount >= GAME_CONFIG.maxVisibleDetergentTablets) {
    return;
  }

  const tablet = document.createElement("span");
  const size = getRandomNumber(22, 40);
  const startX = getRandomNumber(4, 92);
  const driftX = getRandomNumber(-88, 88);
  const duration = getRandomNumber(6.2, 9.4);
  const opacity = getRandomNumber(0.42, 0.72);
  const blur = getRandomNumber(0, 0.8);
  const scale = getRandomNumber(0.88, 1.18);
  const rotateStart = getRandomNumber(-32, 28);
  const rotateEnd = rotateStart + getRandomNumber(90, 220);
  const travelDistance =
    (DOM.detergentFallLayer?.offsetHeight || 420) + size * 3 + getRandomNumber(40, 120);

  tablet.className = "detergent-fall";
  tablet.style.left = `${startX}%`;
  tablet.style.setProperty("--tablet-size", `${size}px`);
  tablet.style.setProperty("--tablet-drift-x", `${driftX}px`);
  tablet.style.setProperty("--tablet-travel-y", `${Math.round(travelDistance)}px`);
  tablet.style.setProperty("--tablet-duration", `${duration}s`);
  tablet.style.setProperty("--tablet-opacity", opacity.toFixed(2));
  tablet.style.setProperty("--tablet-blur", `${blur.toFixed(2)}px`);
  tablet.style.setProperty("--tablet-scale", scale.toFixed(2));
  tablet.style.setProperty("--tablet-rotate-start", `${rotateStart.toFixed(1)}deg`);
  tablet.style.setProperty("--tablet-rotate-end", `${rotateEnd.toFixed(1)}deg`);

  DOM.detergentFallLayer.appendChild(tablet);
  tablet.addEventListener(
    "animationend",
    () => {
      tablet.remove();
    },
    { once: true },
  );
}

function primeDetergentTabletSnow() {
  const initialCount = 2;

  for (let index = 0; index < initialCount; index += 1) {
    window.setTimeout(() => {
      createFallingDetergentTablet();
    }, index * 140);
  }
}

function stopDetergentTabletSnow() {
  if (runtimeState.detergentTabletTimeoutId) {
    window.clearTimeout(runtimeState.detergentTabletTimeoutId);
    runtimeState.detergentTabletTimeoutId = null;
  }
}

function scheduleDetergentTabletSnow() {
  stopDetergentTabletSnow();

  if (!DOM.detergentFallLayer || document.visibilityState === "hidden") {
    return;
  }

  const delay = getRandomNumber(
    GAME_CONFIG.detergentTabletMinDelayMs,
    GAME_CONFIG.detergentTabletMaxDelayMs,
  );

  runtimeState.detergentTabletTimeoutId = window.setTimeout(() => {
    createFallingDetergentTablet();

    if (Math.random() < 0.12) {
      window.setTimeout(() => {
        createFallingDetergentTablet();
      }, getRandomNumber(240, 520));
    }

    scheduleDetergentTabletSnow();
  }, delay);
}

function syncUnlockedUpgrades({ silent = false } = {}) {
  const nextUpgrade = getNextLockedUpgrade();
  if (!nextUpgrade || state.totalProduit < nextUpgrade.unlockThreshold) {
    return;
  }

  runtimeState.revealedUpgradeIds.add(nextUpgrade.id);
  runtimeState.unlockAnchorTotal = state.totalProduit;

  if (!silent) {
    showUnlockToast(nextUpgrade);
  }
}

function createNoiseBuffer(context) {
  const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const channel = buffer.getChannelData(0);
  let previous = 0;

  for (let index = 0; index < channel.length; index += 1) {
    const whiteNoise = Math.random() * 2 - 1;
    previous = (previous + 0.025 * whiteNoise) / 1.025;
    channel[index] = previous * 3.8;
  }

  return buffer;
}

function ensureAmbientSoundGraph() {
  if (!audioEngine.supported || audioEngine.initialized) {
    return;
  }

  const context = new AudioContextClass();
  const masterGain = context.createGain();
  const compressor = context.createDynamicsCompressor();
  const humPrimary = context.createOscillator();
  const humSecondary = context.createOscillator();
  const motorOscillator = context.createOscillator();
  const humPrimaryGain = context.createGain();
  const humSecondaryGain = context.createGain();
  const motorGain = context.createGain();
  const waterSource = context.createBufferSource();
  const waterLowPass = context.createBiquadFilter();
  const waterBandPass = context.createBiquadFilter();
  const waterGain = context.createGain();
  const waterPulse = context.createGain();
  const waterPulseLfo = context.createOscillator();
  const waterPulseDepth = context.createGain();
  const waterFilterCenter = context.createConstantSource();
  const waterFilterLfo = context.createOscillator();
  const waterFilterDepth = context.createGain();
  const rumbleLfo = context.createOscillator();
  const rumbleDepth = context.createGain();

  masterGain.gain.value = 0.0001;

  compressor.threshold.value = -28;
  compressor.knee.value = 18;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.01;
  compressor.release.value = 0.3;

  humPrimary.type = "triangle";
  humPrimary.frequency.value = 54;
  humSecondary.type = "sine";
  humSecondary.frequency.value = 108;
  motorOscillator.type = "sawtooth";
  motorOscillator.frequency.value = 165;

  humPrimaryGain.gain.value = 0.02;
  humSecondaryGain.gain.value = 0.012;
  motorGain.gain.value = 0.0045;

  waterSource.buffer = createNoiseBuffer(context);
  waterSource.loop = true;

  waterLowPass.type = "lowpass";
  waterLowPass.frequency.value = 1100;
  waterBandPass.type = "bandpass";
  waterBandPass.frequency.value = 380;
  waterBandPass.Q.value = 0.7;

  waterGain.gain.value = 0.018;
  waterPulse.gain.value = 0.9;
  waterPulseLfo.type = "sine";
  waterPulseLfo.frequency.value = 0.23;
  waterPulseDepth.gain.value = 0.14;

  waterFilterCenter.offset.value = 380;
  waterFilterLfo.type = "sine";
  waterFilterLfo.frequency.value = 0.12;
  waterFilterDepth.gain.value = 70;

  rumbleLfo.type = "sine";
  rumbleLfo.frequency.value = 0.08;
  rumbleDepth.gain.value = 2.5;

  humPrimary.connect(humPrimaryGain).connect(masterGain);
  humSecondary.connect(humSecondaryGain).connect(masterGain);
  motorOscillator.connect(motorGain).connect(masterGain);

  waterSource.connect(waterLowPass).connect(waterBandPass).connect(waterPulse).connect(waterGain).connect(masterGain);
  waterPulseLfo.connect(waterPulseDepth).connect(waterPulse.gain);
  waterFilterCenter.connect(waterBandPass.frequency);
  waterFilterLfo.connect(waterFilterDepth).connect(waterBandPass.frequency);
  rumbleLfo.connect(rumbleDepth).connect(humPrimary.frequency);

  masterGain.connect(compressor).connect(context.destination);

  humPrimary.start();
  humSecondary.start();
  motorOscillator.start();
  waterSource.start();
  waterPulseLfo.start();
  waterFilterCenter.start();
  waterFilterLfo.start();
  rumbleLfo.start();

  audioEngine.context = context;
  audioEngine.initialized = true;
  audioEngine.masterGain = masterGain;
  audioEngine.humPrimaryGain = humPrimaryGain;
  audioEngine.humSecondaryGain = humSecondaryGain;
  audioEngine.motorGain = motorGain;
  audioEngine.waterGain = waterGain;
  audioEngine.waterFilterCenter = waterFilterCenter;
  audioEngine.waterFilterLfo = waterFilterLfo;
}

function getAmbientTargetGain() {
  if (!state.soundEnabled || document.visibilityState === "hidden") {
    return 0.0001;
  }

  const passiveBoost = Math.min(0.022, state.parSeconde * 0.0015);
  return 0.048 + passiveBoost;
}

function updateAmbientMix() {
  if (!audioEngine.initialized) {
    return;
  }

  const intensity = Math.min(1.85, 0.85 + state.parSeconde / 14 + (state.upgrades[LESSIVE_PLUS_ID] || 0) * 0.035);
  const now = audioEngine.context.currentTime;

  audioEngine.humPrimaryGain.gain.setTargetAtTime(0.016 * intensity, now, 0.45);
  audioEngine.humSecondaryGain.gain.setTargetAtTime(0.009 * intensity, now, 0.45);
  audioEngine.motorGain.gain.setTargetAtTime(0.0038 + intensity * 0.0012, now, 0.45);
  audioEngine.waterGain.gain.setTargetAtTime(0.012 + intensity * 0.004, now, 0.45);
  audioEngine.waterFilterCenter.offset.setTargetAtTime(340 + intensity * 55, now, 0.6);
  audioEngine.waterFilterLfo.frequency.setTargetAtTime(0.1 + Math.min(0.18, state.parSeconde / 200), now, 0.6);
  audioEngine.masterGain.gain.setTargetAtTime(getAmbientTargetGain(), now, 0.8);
}

async function unlockAmbientSound() {
  if (!audioEngine.supported || !state.soundEnabled) {
    return;
  }

  ensureAmbientSoundGraph();

  try {
    await audioEngine.context.resume();
    audioEngine.unlocked = audioEngine.context.state === "running";

    if (audioEngine.unlocked) {
      updateAmbientMix();
    }
  } catch (error) {
    console.warn("Could not enable ambient sound.", error);
  }
}

function primeAmbientSoundFromGesture() {
  unlockAmbientSound();
}

function muteAmbientSound() {
  if (!audioEngine.initialized) {
    return;
  }

  audioEngine.masterGain.gain.setTargetAtTime(0.0001, audioEngine.context.currentTime, 0.3);
}

function playUpgradePurchaseSound() {
  if (!audioEngine.supported || !state.soundEnabled) {
    return;
  }

  ensureAmbientSoundGraph();

  if (!audioEngine.initialized || !audioEngine.unlocked || audioEngine.context.state !== "running") {
    return;
  }

  const context = audioEngine.context;
  const now = context.currentTime;
  const toneA = context.createOscillator();
  const toneB = context.createOscillator();
  const toneGain = context.createGain();
  const toneFilter = context.createBiquadFilter();

  toneA.type = "triangle";
  toneA.frequency.setValueAtTime(720, now);
  toneA.frequency.exponentialRampToValueAtTime(1020, now + 0.08);
  toneA.frequency.exponentialRampToValueAtTime(820, now + 0.2);

  toneB.type = "sine";
  toneB.frequency.setValueAtTime(1080, now);
  toneB.frequency.exponentialRampToValueAtTime(1450, now + 0.08);
  toneB.frequency.exponentialRampToValueAtTime(1180, now + 0.18);

  toneFilter.type = "lowpass";
  toneFilter.frequency.setValueAtTime(2200, now);
  toneFilter.Q.value = 0.3;

  toneGain.gain.setValueAtTime(0.0001, now);
  toneGain.gain.exponentialRampToValueAtTime(0.038, now + 0.012);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);

  toneA.connect(toneFilter);
  toneB.connect(toneFilter);
  toneFilter.connect(toneGain).connect(context.destination);

  toneA.start(now);
  toneB.start(now);
  toneA.stop(now + 0.25);
  toneB.stop(now + 0.25);
}

async function playWashClickSound() {
  if (!audioEngine.supported || !state.soundEnabled) {
    return;
  }

  if (!audioEngine.unlocked || !audioEngine.initialized || audioEngine.context?.state !== "running") {
    await unlockAmbientSound();
  }

  if (!audioEngine.initialized || !audioEngine.unlocked || audioEngine.context.state !== "running") {
    return;
  }

  const context = audioEngine.context;
  const now = context.currentTime;
  const popTone = context.createOscillator();
  const popGain = context.createGain();
  const popFilter = context.createBiquadFilter();

  popTone.type = "sine";
  popTone.frequency.setValueAtTime(420, now);
  popTone.frequency.exponentialRampToValueAtTime(680, now + 0.035);
  popTone.frequency.exponentialRampToValueAtTime(300, now + 0.12);

  popFilter.type = "lowpass";
  popFilter.frequency.setValueAtTime(1700, now);
  popFilter.Q.value = 0.9;

  popGain.gain.setValueAtTime(0.0001, now);
  popGain.gain.exponentialRampToValueAtTime(0.018, now + 0.01);
  popGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

  popTone.connect(popFilter);
  popFilter.connect(popGain).connect(context.destination);

  popTone.start(now);
  popTone.stop(now + 0.15);
}

function recalculateRates() {
  let clickTotal = 1;
  let passiveTotal = 0;

  GAME_CONFIG.upgrades.forEach((upgrade) => {
    const ownedCount = state.upgrades[upgrade.id] || 0;
    clickTotal += upgrade.clickPower * ownedCount;
    passiveTotal += upgrade.passivePower * ownedCount;
  });

  state.parClic = clickTotal;
  state.parSeconde = passiveTotal;
  updateAmbientMix();
}

function renderShop() {
  GAME_CONFIG.upgrades.forEach((upgrade) => {
    const card = DOM.shopList.querySelector(`[data-card-id="${upgrade.id}"]`);
    if (!card) {
      return;
    }

    const isRevealed = runtimeState.revealedUpgradeIds.has(upgrade.id);
    card.hidden = !isRevealed;

    if (!isRevealed) {
      return;
    }

    const ownedCount = state.upgrades[upgrade.id] || 0;
    const cost = getUpgradeCost(upgrade, ownedCount);
    const canAfford = state.lingePropre >= cost;
    const button = card.querySelector(".shop-buy");

    card.classList.toggle("is-affordable", canAfford);
    card.querySelector('[data-role="owned"]').textContent = formatNumber(ownedCount);
    card.querySelector('[data-role="button-cost"]').textContent = formatNumber(cost);
    button.disabled = !canAfford;
  });

  renderNextUnlockCard();
}

function renderNextUnlockCard() {
  if (!DOM.nextUnlockCard) {
    return;
  }

  if (state.totalProduit <= 0) {
    DOM.nextUnlockCard.hidden = true;
    return;
  }

  const nextUpgrade = getNextLockedUpgrade();

  if (!nextUpgrade) {
    DOM.nextUnlockCard.hidden = true;
    return;
  }

  const progressSinceLastUnlock = Math.max(0, state.totalProduit - runtimeState.unlockAnchorTotal);
  const progressValue = Math.min(progressSinceLastUnlock, nextUpgrade.unlockRequirement);
  const progressRatio =
    nextUpgrade.unlockRequirement > 0 ? Math.min(1, progressValue / nextUpgrade.unlockRequirement) : 1;

  DOM.nextUnlockCard.hidden = false;
  DOM.nextUnlockCard.querySelector('[data-role="next-name"]').textContent = nextUpgrade.name;
  DOM.nextUnlockCard.querySelector('[data-role="next-description"]').textContent = nextUpgrade.description;
  DOM.nextUnlockCard.querySelector('[data-role="next-effect"]').textContent = getUpgradeEffectLabel(nextUpgrade);
  DOM.nextUnlockCard.querySelector('[data-role="next-threshold"]').textContent = formatNumber(nextUpgrade.unlockRequirement);
  DOM.nextUnlockCard.querySelector('[data-role="next-cost"]').textContent = formatNumber(getUpgradeCost(nextUpgrade, 0));
  DOM.nextUnlockCard.querySelector('[data-role="next-progress-fill"]').style.width = `${progressRatio * 100}%`;
  DOM.nextUnlockCard.querySelector('[data-role="next-progress-label"]').textContent =
    `${formatNumber(progressValue)} / ${formatNumber(nextUpgrade.unlockRequirement)} washed since last unlock`;
}

function renderCursorSwarm() {
  const ownedCount = state.upgrades[LESSIVE_PLUS_ID] || 0;
  const washerSize = Math.round(DOM.washerButton.offsetWidth);
  const previousCount = Number(DOM.cursorSwarm.dataset.renderedCount || -1);
  const previousSize = Number(DOM.cursorSwarm.dataset.renderedSize || -1);

  if (previousCount === ownedCount && previousSize === washerSize) {
    return;
  }

  DOM.cursorSwarm.dataset.renderedCount = String(ownedCount);
  DOM.cursorSwarm.dataset.renderedSize = String(washerSize);
  DOM.cursorSwarm.innerHTML = "";

  if (ownedCount <= 0) {
    return;
  }

  const visibleCount = Math.min(ownedCount, GAME_CONFIG.maxVisibleCursors);
  const fragment = document.createDocumentFragment();
  const ringCount = visibleCount <= 10 ? 1 : 2;
  const itemsPerRing = ringCount === 1 ? visibleCount : Math.ceil(visibleCount / 2);

  for (let index = 0; index < visibleCount; index += 1) {
    const cursor = document.createElement("span");
    const ringIndex = ringCount === 1 ? 0 : index % 2;
    const positionIndex = ringCount === 1 ? index : Math.floor(index / 2);
    const angleStep = 360 / itemsPerRing;
    const angleOffset = ringIndex === 0 ? 0 : angleStep / 2;
    const angle = -90 + angleStep * positionIndex + angleOffset;
    const radius = Math.round(washerSize * (ringIndex === 0 ? 0.52 : 0.63));
    const scale = ringIndex === 0 ? 1 : 0.9;
    const orbitDuration = ringIndex === 0 ? 32 : 46;
    const tapDuration = 2.2 + (index % 3) * 0.18;
    const tapDelay = (index % 7) * 0.19;

    cursor.className = "cursor-swarm__item";
    cursor.style.setProperty("--angle", `${angle}deg`);
    cursor.style.setProperty("--radius", `${radius}px`);
    cursor.style.setProperty("--scale", String(scale));
    cursor.style.setProperty("--orbit-duration", `${orbitDuration}s`);
    cursor.style.setProperty("--tap-duration", `${tapDuration}s`);
    cursor.style.setProperty("--tap-delay", `${tapDelay}s`);
    cursor.innerHTML = `
      <span class="cursor-swarm__hand">
        <svg
          class="cursor-swarm__icon"
          viewBox="0 0 88 88"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M44 10c-5 0-9 4-9 9v26l-6-6c-4-4-10-4-14 0s-4 10 0 14l18 18c4 4 8 6 14 6h11c10 0 18-8 18-18V36c0-5-4-9-9-9-3 0-5 1-7 3-2-4-5-6-9-6-3 0-6 1-8 3V19c0-5-4-9-9-9z"
              fill="#e2f3ff"
              opacity="0.55"
            />
            <path
              d="M42 8c-5 0-9 4-9 9v29l-7-8c-4-4-10-4-14 0s-4 10 0 14l20 21c3 3 8 5 13 5h11c11 0 20-9 20-20V34c0-5-4-9-9-9-3 0-5 1-7 3-2-4-5-6-9-6-3 0-6 1-8 3V17c0-5-4-9-9-9z"
              fill="#ffffff"
              stroke="#244f78"
              stroke-width="4"
            />
            <path
              d="M42 14v23M51 28V19M60 30V22M68 35v-7"
              fill="none"
              stroke="#8eb9dd"
              stroke-width="3"
            />
            <path
              d="M34 47v10c0 6 5 11 11 11h9c6 0 11-5 11-11"
              fill="none"
              stroke="#8eb9dd"
              stroke-width="2.8"
              opacity="0.9"
            />
            <path
              d="M48 77h16c4 0 7 3 7 7H41c0-4 3-7 7-7z"
              fill="#7fb4e3"
              stroke="#244f78"
              stroke-width="4"
            />
          </g>
        </svg>
        <span class="cursor-swarm__tap"></span>
      </span>
    `;
    fragment.appendChild(cursor);
  }

  if (ownedCount > visibleCount) {
    const overflow = document.createElement("span");
    overflow.className = "cursor-swarm__overflow";
    overflow.textContent = `+${formatNumber(ownedCount - visibleCount)}`;
    fragment.appendChild(overflow);
  }

  DOM.cursorSwarm.appendChild(fragment);
}

function openUpgradeModal(upgradeId, triggerElement) {
  if (!DOM.upgradeModal) {
    return;
  }

  const upgrade = getUpgradeById(upgradeId);
  if (!upgrade) {
    return;
  }

  if (runtimeState.upgradeModalHideTimeoutId) {
    window.clearTimeout(runtimeState.upgradeModalHideTimeoutId);
    runtimeState.upgradeModalHideTimeoutId = null;
  }

  runtimeState.activeUpgradeModalTrigger =
    triggerElement instanceof HTMLElement ? triggerElement : document.activeElement;

  DOM.upgradeModalTitle.textContent = upgrade.name;
  DOM.upgradeModalEffect.textContent = getUpgradeEffectLabel(upgrade);
  DOM.upgradeModalDescription.textContent = getUpgradeModalDescription(upgrade);
  DOM.upgradeModalImage.src = `assets/upgrades/${upgrade.id}.png`;
  DOM.upgradeModalImage.alt = upgrade.name;
  DOM.upgradeModal.hidden = false;
  document.body.classList.add("has-modal-open");

  window.requestAnimationFrame(() => {
    DOM.upgradeModal.classList.add("is-visible");
    DOM.upgradeModal.querySelector(".upgrade-modal__close")?.focus();
  });
}

function closeUpgradeModal() {
  if (!DOM.upgradeModal || DOM.upgradeModal.hidden) {
    return;
  }

  const triggerToRefocus = runtimeState.activeUpgradeModalTrigger;

  DOM.upgradeModal.classList.remove("is-visible");
  document.body.classList.remove("has-modal-open");
  runtimeState.activeUpgradeModalTrigger = null;

  runtimeState.upgradeModalHideTimeoutId = window.setTimeout(() => {
    DOM.upgradeModal.hidden = true;
    runtimeState.upgradeModalHideTimeoutId = null;

    if (triggerToRefocus instanceof HTMLElement && document.contains(triggerToRefocus)) {
      triggerToRefocus.focus();
    }
  }, 180);
}

function render() {
  DOM.cleanCount.textContent = formatNumber(state.lingePropre);
  DOM.clickPower.textContent = formatNumber(state.parClic);
  DOM.passiveRate.textContent = formatNumber(state.parSeconde);
  DOM.lifetimeTotal.textContent = formatNumber(state.totalProduit);
  DOM.soundToggle.disabled = !audioEngine.supported;

  if (!audioEngine.supported) {
    DOM.soundToggle.textContent = "Ambience unavailable";
    DOM.soundToggle.classList.remove("is-active");
    DOM.soundToggle.setAttribute("aria-pressed", "false");
  } else if (!state.soundEnabled) {
    DOM.soundToggle.textContent = "Ambience: muted";
    DOM.soundToggle.classList.remove("is-active");
    DOM.soundToggle.setAttribute("aria-pressed", "false");
  } else if (!audioEngine.unlocked) {
    DOM.soundToggle.textContent = "Ambience: enable";
    DOM.soundToggle.classList.remove("is-active");
    DOM.soundToggle.setAttribute("aria-pressed", "true");
  } else {
    DOM.soundToggle.textContent = "Ambience: on";
    DOM.soundToggle.classList.add("is-active");
    DOM.soundToggle.setAttribute("aria-pressed", "true");
  }

  renderCursorSwarm();
  renderShop();
}

function createFloatingText(amount) {
  const washerBounds = DOM.washerButton.getBoundingClientRect();
  const layerBounds = DOM.floatingTextLayer.getBoundingClientRect();
  const text = document.createElement("span");

  text.className = "floating-text";
  text.textContent = `+${formatNumber(amount)}`;
  text.style.left = `${washerBounds.left - layerBounds.left + washerBounds.width / 2 + (Math.random() * 50 - 25)}px`;
  text.style.top = `${washerBounds.top - layerBounds.top + washerBounds.height * 0.35 + (Math.random() * 30 - 15)}px`;

  DOM.floatingTextLayer.appendChild(text);

  window.setTimeout(() => {
    text.remove();
  }, 900);
}

function pulseWasher() {
  DOM.washerButton.classList.remove("is-active");
  void DOM.washerButton.offsetWidth;
  DOM.washerButton.classList.add("is-active");

  window.setTimeout(() => {
    DOM.washerButton.classList.remove("is-active");
  }, 220);
}

function handleWashClick() {
  state.lingePropre += state.parClic;
  state.totalProduit += state.parClic;

  unlockAmbientSound();
  pulseWasher();
  createFloatingText(state.parClic);
  syncUnlockedUpgrades();
  render();
  void playWashClickSound();
}

async function buyUpgrade(id) {
  if (audioEngine.supported && state.soundEnabled) {
    await unlockAmbientSound();
  }

  const upgrade = getUpgradeById(id);
  if (!upgrade) {
    return;
  }

  const ownedCount = state.upgrades[id] || 0;
  const cost = getUpgradeCost(upgrade, ownedCount);

  if (state.lingePropre < cost) {
    return;
  }

  state.lingePropre -= cost;
  state.upgrades[id] = ownedCount + 1;

  recalculateRates();
  playUpgradePurchaseSound();
  render();
}

function saveGame() {
  const payload = {
    lingePropre: Number(state.lingePropre.toFixed(4)),
    totalProduit: Number(state.totalProduit.toFixed(4)),
    soundEnabled: state.soundEnabled,
    upgrades: state.upgrades,
    revealedUpgradeIds: Array.from(runtimeState.revealedUpgradeIds),
    unlockAnchorTotal: Number(runtimeState.unlockAnchorTotal.toFixed(4)),
  };

  localStorage.setItem(GAME_CONFIG.saveKey, JSON.stringify(payload));
}

function loadGame() {
  const savedState = localStorage.getItem(GAME_CONFIG.saveKey);

  if (!savedState) {
    state = createInitialState();
    resetRevealProgress();
    recalculateRates();
    syncUnlockedUpgrades({ silent: true });
    render();
    return;
  }

  try {
    const parsed = JSON.parse(savedState);
    const freshState = createInitialState();

    freshState.lingePropre = Number(parsed.lingePropre) || 0;
    freshState.totalProduit = Number(parsed.totalProduit) || 0;
    freshState.soundEnabled = parsed.soundEnabled !== false;

    if (parsed.upgrades && typeof parsed.upgrades === "object") {
      GAME_CONFIG.upgrades.forEach((upgrade) => {
        const savedAmount = Number(parsed.upgrades[upgrade.id]) || 0;
        freshState.upgrades[upgrade.id] = Math.max(0, Math.floor(savedAmount));
      });
    }

    freshState.lastTick = Date.now();
    state = freshState;
    hydrateRevealProgressFromSave(
      freshState.upgrades,
      parsed.revealedUpgradeIds,
      Number(parsed.unlockAnchorTotal),
      freshState.totalProduit,
    );
  } catch (error) {
    console.warn("Could not load the save file.", error);
    state = createInitialState();
    resetRevealProgress();
  }

  recalculateRates();
  syncUnlockedUpgrades({ silent: true });
  render();
}

async function toggleAmbientSound() {
  if (!audioEngine.supported) {
    return;
  }

  state.soundEnabled = !state.soundEnabled;

  if (state.soundEnabled) {
    await unlockAmbientSound();
  } else {
    muteAmbientSound();
  }

  saveGame();
  render();
}

function gameLoop(timestamp) {
  const elapsedMs = timestamp - state.lastTick;
  state.lastTick = timestamp;

  if (state.parSeconde > 0 && elapsedMs > 0) {
    const generatedAmount = (elapsedMs / 1000) * state.parSeconde;
    state.lingePropre += generatedAmount;
    state.totalProduit += generatedAmount;
    syncUnlockedUpgrades();
  }

  render();
  window.requestAnimationFrame(gameLoop);
}

function buildShop() {
  DOM.shopList.innerHTML =
    GAME_CONFIG.upgrades
      .map((upgrade) => {
        return `
          <article class="shop-card" data-card-id="${upgrade.id}">
            <button
              class="shop-card__media shop-card__media-button"
              type="button"
              data-upgrade-preview-id="${upgrade.id}"
              aria-label="Open details for ${upgrade.name}"
            >
              <img
                class="shop-card__image"
                src="assets/upgrades/${upgrade.id}.png"
                alt=""
                width="320"
                height="320"
                loading="lazy"
                decoding="async"
              />
            </button>
            <div class="shop-card__content">
              <div class="shop-card__top">
                <div class="shop-card__copy">
                  <h3>
                    <button
                      class="shop-card__title-button"
                      type="button"
                      data-upgrade-preview-id="${upgrade.id}"
                    >
                      ${upgrade.name}
                    </button>
                  </h3>
                  <p class="shop-description">${upgrade.description}</p>
                </div>
                <span class="shop-owned">Owned: <span data-role="owned">0</span></span>
              </div>
              <div class="shop-card__bottom">
                <p class="shop-effect">${getUpgradeEffectLabel(upgrade)}</p>
                <button class="shop-buy" type="button" data-upgrade-id="${upgrade.id}">
                  <span>Buy</span>
                  <strong data-role="button-cost">${formatNumber(upgrade.baseCost)}</strong>
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join("") +
    `
      <article id="next-unlock-card" class="shop-card shop-card--locked" hidden>
        <div class="shop-card__media shop-card__media--locked" aria-hidden="true">
          <span class="shop-card__lock-badge">Soon</span>
        </div>
        <div class="shop-card__content">
          <div class="shop-card__top">
            <div class="shop-card__copy">
              <p class="shop-soon">Next unlock</p>
              <h3 data-role="next-name"></h3>
              <p class="shop-description" data-role="next-description"></p>
            </div>
            <span class="shop-owned shop-owned--locked">Locked</span>
          </div>
          <div class="shop-card__bottom shop-card__bottom--locked">
            <div class="shop-progress">
              <div class="shop-progress__track" aria-hidden="true">
                <span class="shop-progress__fill" data-role="next-progress-fill"></span>
              </div>
              <p class="shop-progress__label" data-role="next-progress-label"></p>
            </div>
            <div class="shop-next-meta">
              <p class="shop-effect" data-role="next-effect"></p>
              <p class="shop-next-meta__details">
                Unlocks at <strong data-role="next-threshold"></strong> / Costs
                <strong data-role="next-cost"></strong>
              </p>
            </div>
          </div>
        </div>
      </article>
    `;

  DOM.nextUnlockCard = document.getElementById("next-unlock-card");

  DOM.shopList.querySelectorAll("[data-upgrade-id]").forEach((button) => {
    button.addEventListener("click", () => {
      buyUpgrade(button.dataset.upgradeId);
    });
  });

  DOM.shopList.querySelectorAll("[data-upgrade-preview-id]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      openUpgradeModal(trigger.dataset.upgradePreviewId, trigger);
    });
  });
}

function setupEvents() {
  DOM.washerButton.addEventListener("click", handleWashClick);
  DOM.soundToggle.addEventListener("click", toggleAmbientSound);
  DOM.upgradeModal?.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("[data-modal-close]")) {
      closeUpgradeModal();
    }
  });
  window.addEventListener("pointerdown", primeAmbientSoundFromGesture, { once: true });
  window.addEventListener("keydown", primeAmbientSoundFromGesture, { once: true });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeUpgradeModal();
    }
  });

  window.addEventListener("beforeunload", saveGame);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      saveGame();
      muteAmbientSound();
      stopDetergentTabletSnow();
    } else if (state.soundEnabled && audioEngine.unlocked) {
      unlockAmbientSound();
      primeDetergentTabletSnow();
      scheduleDetergentTabletSnow();
    } else {
      primeDetergentTabletSnow();
      scheduleDetergentTabletSnow();
    }
  });
}

function init() {
  buildShop();
  loadGame();
  setupEvents();
  primeDetergentTabletSnow();
  scheduleDetergentTabletSnow();
  window.setInterval(saveGame, GAME_CONFIG.autosaveIntervalMs);
  window.requestAnimationFrame((timestamp) => {
    state.lastTick = timestamp;
    window.requestAnimationFrame(gameLoop);
  });
}

init();
