# My Singing Monsters Wiki

A comprehensive, fan-made wiki for My Singing Monsters featuring detailed monster information, breeding guides, and island data.

## 🎨 Design

Built with Nuxt 3 and styled with the **Catppuccin Mocha** color scheme for a beautiful, modern dark theme.

## 📁 Project Structure

```
app/
├── assets/css/         # Global styles with Catppuccin colors
├── components/         # Reusable Vue components (TopNav, Footer)
├── data/              # Data files for monsters, islands, etc.
│   ├── monsters.ts    # Monster data following the Monster type
│   └── islands.ts     # Island data
├── pages/             # Auto-routed pages
│   ├── index.vue      # Home page
│   ├── monsters.vue   # All monsters list
│   ├── monster/[name].vue  # Individual monster pages
│   ├── islands.vue    # All islands list
│   ├── island/[name].vue   # Individual island pages
│   ├── classes.vue    # Monster classes overview
│   ├── class/[name].vue    # Monsters filtered by class
│   ├── elements.vue   # Element overview
│   ├── element/[name].vue  # Monsters filtered by element
│   ├── guides.vue     # Guide hub
│   └── guide/         # Individual guide pages


public/
└── images/            # Static images
    ├── monsters/      # Full monster images
    │   └── icon/      # Monster icons
    └── decorations/   # Decoration images
```

## 🚀 Getting Started

### Install Dependencies

```bash
bun install
```

### Development Server

Start the development server at `http://localhost:3000`:

```bash
bun run dev
```

### Production Build

```bash
bun run build
bun run preview
```

## 📝 Adding Data

### Adding Monsters

Edit `/app/data/monsters.ts` and add a new monster following the `Monster` type from `/app/types/monster.ts`:

```typescript
{
    name: "Monster Name",
    localized_names: [{ language: "en", name: "Monster Name" }],
    beds_required: 1,
    rarity: "common",
    elements: ["Element"],
    class: "Natural",
    islands: ["Plant Island"],
    earnings: [...],
    island_costs: [...],
    breeding: [...],
    breeding_time: 0,
    island_likes: [...]
}
```

### Adding Islands

Edit `/app/data/islands.ts` and add new island data.

### Adding Images

Place images in the appropriate directory:
- Monster images: `/public/images/monsters/{monster-name}.webp`
- Monster icons: `/public/images/monsters/icon/{monster-name}.webp`
- Decorations: `/public/images/decorations/{decoration-name}.webp`

**Note:** Use lowercase names with hyphens instead of spaces (e.g., "toe-jammer.webp")

## 🎯 Features

- ✅ Browse all monsters with filtering by class, rarity, and search
- ✅ Detailed monster pages with breeding combos, earnings, and likes
- ✅ Island information with monster lists
- ✅ Filter by monster class and elements
- ✅ Comprehensive guides for breeding, earning, and likes
- ✅ Responsive design with Catppuccin Mocha theme
- ✅ TypeScript support with full type safety
- ✅ Auto-generated routes with Nuxt file-based routing

## 🎨 Color Scheme

This wiki uses the Catppuccin Mocha color palette:
- Background: `#1e1e2e` (base)
- Surface: `#313244` (surface0)
- Text: `#cdd6f4` (text)
- Accent: `#cba6f7` (mauve)
- Secondary: `#f5c2e7` (pink)

## ⚖️ Legal

Portions of the materials used are trademarks and/or copyrighted works of Big Blue Bubble. All rights reserved by Big Blue Bubble. This material is not official and is not endorsed by Big Blue Bubble.

Some information from this website obtained from MySingingMonsters Fandom, available from CC-BY-SA.

## 🛠️ Built With

- [Nuxt 3](https://nuxt.com/) - The Vue.js Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Catppuccin](https://github.com/catppuccin/catppuccin) - Color Scheme
- [Bun](https://bun.sh/) - JavaScript Runtime & Package Manager
