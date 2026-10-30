# ⚔️ Bleach Shinigami Developer Landing Page

> *"We fear that which we cannot see, and we respect that which cannot be explained."*  
> — Tite Kubo, **BLEACH**

An ultra-stylish, editorial anime developer portfolio and GitHub Pages landing page inspired by Tite Kubo's legendary manga & anime aesthetics. Built with high-contrast typography, interactive **Reiatsu (Spiritual Pressure)** particle canvas, dynamic **Zanpakuto blade slashes**, **Synthesized Anime Audio SFX** (zero external MP3 dependencies!), and an interactive **Bankai Mode transformation**.

---

## ✨ Features

- **Tite Kubo Editorial Aesthetic**: Crisp manga title card layouts, Japanese calligraphy accents (Kanji/Katakana), chapter headers, and high-fashion editorial styling.
- **Interactive Reiatsu Canvas**:
  - Ambient floating spiritual particles and drifting ink wisps.
  - Interactive mouse cut physics: Swift cursor movements or clicks slice through space with calligraphy sword cuts and ink sparks.
- **卍解 (Bankai) Mode Transformation**:
  - Click the **BANKAI** button or press **`B`** on your keyboard.
  - Triggers a full-screen Getsuga flash, switching color palette to void black and burning Reiatsu crimson with energized particle physics and audio roar.
- **Synthesized Web Audio SFX**:
  - Metal sword clashes, unsheathing sweeps, and Bankai releases generated entirely in code using the Web Audio API (no broken audio files or external CDNs needed).
  - Can be toggled on/off at any time (or press **`M`** to mute).
- **Zanpakuto Release Cards**:
  - Showcase your GitHub repositories like Zanpakuto releases (`Scatter`, `Roar`, `Pierce`, `Shatter`).
  - Includes star badges, language tags, and direct links.
- **Four Shinigami Arts (Skills)**:
  - Categorized into *Zanjutsu* (Languages), *Hoho* (Frontend), *Kido Hado* (Backend), and *Kido Bakudo* (DevOps/Cloud).
- **Hell Butterfly (地獄蝶) Dispatch Terminal**:
  - Contact transmission console for direct inquiries.
- **Zero-Build Architecture**:
  - Pure HTML5, CSS3, and Vanilla JavaScript. Runs directly on GitHub Pages with no npm build or CI setup required.

---

## 🚀 Quick Setup & Customization

All your profile details, links, repositories, and skills can be configured in a single file: **`config.js`**!

### 1. Configure Your Details
Open [`config.js`](file:///c:/Users/srini/Documents/antigravity/delightful-hawking/config.js) and update:

```javascript
window.BLEACH_CONFIG = {
  identity: {
    name: "YOUR_NAME",
    subtitle: "黒崎 • SUBSTITUTE SHINIGAMI",
    tagline: "FULL-STACK SOFTWARE ENGINEER & ARCHITECT",
    squad: "GOTEI 13 // SQUAD 11",
    avatar: "https://your-avatar-image-url.jpg",
    bio: "Your developer mission statement...",
  },
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "mailto:your-email@example.com"
  },
  // Add your projects, skills, and timeline...
};
```

---

## 🌐 Deploy to GitHub Pages

### Method A: User GitHub Page (`<username>.github.io`)
1. Create a repository named `<your-username>.github.io` on GitHub.
2. Push this project to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: Bleach shinigami landing page"
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. Your portfolio will immediately be live at `https://<your-username>.github.io`!

### Method B: Project Page (`<username>.github.io/<repo-name>`)
1. Push this code to any GitHub repository.
2. Go to repository **Settings** -> **Pages**.
3. Under **Branch**, select `main` and root (`/`), then click **Save**.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| **`B`** | Activate / Deactivate **Bankai (卍解)** mode |
| **`M`** | Toggle Anime Sound Effects (Mute / Unmute) |
| **Click anywhere** | Strike with Zanpakuto slash |

---

*Forged with spiritual energy. Code cleanly and wield your blade with conviction.*
