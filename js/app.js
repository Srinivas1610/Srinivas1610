/**
 * ===================================================================
 * BLEACH LANDING PAGE APP ENGINE
 * ===================================================================
 * Binds UI, renders configuration data, handles Bankai activation,
 * audio synthesizers, and user interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.BLEACH_CONFIG;
  if (!cfg) {
    console.error("BLEACH_CONFIG missing.");
    return;
  }

  // 1. Initialize Canvas and SFX
  const canvasEngine = new ReiatsuCanvas("reiatsu-canvas");
  const sfx = window.bleachSFX;

  // 2. Populate Identity & Hero
  populateIdentity(cfg.identity, cfg.links);

  // 3. Populate Stats
  populateStats(cfg.stats);

  // 4. Populate Arsenal (Repositories)
  populateArsenal(cfg.arsenal);

  // 5. Populate Shinigami Arts (Skills)
  populateArts(cfg.arts);

  // 6. Populate Chronicles (Timeline)
  populateChronicles(cfg.chronicles);

  // 7. Bind Bankai Mode Toggle
  const bankaiBtn = document.getElementById("bankai-toggle");
  const flashScreen = document.getElementById("bankai-flash");
  let isBankai = false;

  function toggleBankai() {
    isBankai = !isBankai;
    document.body.classList.toggle("bankai-mode", isBankai);

    // Audio SFX
    if (sfx) {
      if (isBankai) {
        sfx.playBankai();
      } else {
        sfx.playClash();
      }
    }

    // Trigger visual screen flash
    flashScreen.classList.remove("anim-bankai");
    void flashScreen.offsetWidth; // trigger reflow
    flashScreen.classList.add("anim-bankai");

    // Update canvas engine
    if (canvasEngine) {
      canvasEngine.setBankai(isBankai);
    }

    // Update button text
    if (bankaiBtn) {
      bankaiBtn.innerHTML = isBankai
        ? `<span>卍解 • ACTIVE</span>`
        : `<span>卍解 • BANKAI</span>`;
    }
  }

  if (bankaiBtn) {
    bankaiBtn.addEventListener("click", toggleBankai);
  }

  // 8. Bind Audio Mute Toggle
  const soundBtn = document.getElementById("sound-toggle");
  function updateSoundUI() {
    if (!soundBtn) return;
    const isMuted = sfx ? sfx.muted : true;
    soundBtn.innerHTML = isMuted
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> SFX: OFF`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> SFX: ON`;
  }
  updateSoundUI();

  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      if (sfx) {
        sfx.toggleMute();
        updateSoundUI();
        if (!sfx.muted) {
          sfx.playHover();
        }
      }
    });
  }

  // 9. Keyboard Shortcuts: 'B' for Bankai, 'M' for Mute
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "b" || e.key === "B") {
      toggleBankai();
    } else if (e.key === "m" || e.key === "M") {
      if (sfx) {
        sfx.toggleMute();
        updateSoundUI();
      }
    }
  });

  // 10. Sound effects on interactive hovers
  document.querySelectorAll("a, button, .project-card, .stat-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
      if (sfx) sfx.playHover();
    });
  });

  // 11. Transmission Form (Hell Butterfly)
  const transForm = document.getElementById("transmission-form");
  if (transForm) {
    transForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (sfx) sfx.playClash();
      const btn = transForm.querySelector("button[type='submit']");
      const originalText = btn.innerHTML;
      btn.innerHTML = "DISPATCHING JIGOKUCHO (地獄蝶)...";
      btn.disabled = true;

      setTimeout(() => {
        alert("Transmission sent across the Dangai corridor to the Soul Society.");
        transForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1000);
    });
  }
});

/* Helper Populate Functions */

function populateIdentity(id, links) {
  // Brand
  const brandName = document.getElementById("nav-brand-name");
  if (brandName) brandName.textContent = id.name;

  // Chapter & Tag
  const chapterTag = document.getElementById("hero-chapter");
  if (chapterTag) chapterTag.textContent = id.mangaChapterTitle;

  // Hero Name
  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = id.name;

  const heroNameKanji = document.getElementById("hero-name-kanji");
  if (heroNameKanji) heroNameKanji.textContent = id.subtitle;

  // Subtitle / Title
  const heroSub = document.getElementById("hero-subtitle");
  if (heroSub) heroSub.textContent = id.tagline;

  // Bio
  const heroBio = document.getElementById("hero-bio");
  if (heroBio) heroBio.textContent = id.bio;

  // Visual card
  const heroAvatar = document.getElementById("hero-avatar");
  if (heroAvatar && id.avatar) {
    heroAvatar.src = id.avatar;
  }
  const squadTag = document.getElementById("card-squad-tag");
  if (squadTag) squadTag.textContent = id.squad;

  const zanpakutoTag = document.getElementById("card-zanpakuto-tag");
  if (zanpakutoTag) zanpakutoTag.textContent = id.zanpakuto;

  // Quote
  const quoteText = document.getElementById("quote-text");
  if (quoteText) quoteText.textContent = `"${id.poetryQuote}"`;

  const quoteAuthor = document.getElementById("quote-author");
  if (quoteAuthor) quoteAuthor.textContent = id.poetryAuthor;

  // Links
  const githubLink = document.getElementById("link-github");
  if (githubLink && links.github) githubLink.href = links.github;

  const contactLink = document.getElementById("hero-cta-contact");
  if (contactLink && links.email) contactLink.href = links.email;
}

function populateStats(stats) {
  const container = document.getElementById("stats-grid");
  if (!container || !stats) return;

  container.innerHTML = stats.map(s => `
    <div class="stat-card">
      <div class="stat-card-kanji">${s.kanji}</div>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

function populateArsenal(arsenal) {
  const container = document.getElementById("arsenal-grid");
  if (!container || !arsenal) return;

  container.innerHTML = arsenal.map(item => `
    <div class="project-card">
      <div>
        <div class="card-top-row">
          <div class="release-command">${item.releaseCommand}</div>
          <div class="project-badge">${item.badge}</div>
        </div>
        <div class="project-title">${item.title}</div>
        <div class="project-kanji">${item.kanji}</div>
        <div class="project-desc">${item.description}</div>
        <div class="project-tags">
          ${item.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="project-footer">
        <div class="project-stats">
          <span>★ ${item.stars}</span>
          <span>⑂ ${item.forks}</span>
        </div>
        <div class="project-links">
          <a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer">REPOSITORY ↗</a>
          <a href="${item.demoUrl}" target="_blank" rel="noopener noreferrer">DEPLOY ↗</a>
        </div>
      </div>
    </div>
  `).join("");
}

function populateArts(arts) {
  const container = document.getElementById("arts-grid");
  if (!container || !arts) return;

  container.innerHTML = arts.map(art => `
    <div class="art-category-card">
      <div class="art-category-title">${art.category}</div>
      <div class="art-category-subtitle">${art.subtitle}</div>
      <ul class="skill-list">
        ${art.skills.map(s => `
          <li class="skill-item">
            <div class="skill-info">
              <span>${s.name}</span>
              <span>${s.level}</span>
            </div>
            <div class="skill-bar-wrap">
              <div class="skill-bar-fill" style="width: ${s.level};"></div>
            </div>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

function populateChronicles(chronicles) {
  const container = document.getElementById("timeline-wrap");
  if (!container || !chronicles) return;

  container.innerHTML = chronicles.map(c => `
    <div class="timeline-item">
      <div class="timeline-era">${c.era}</div>
      <div class="timeline-title-row">
        <div class="timeline-title">${c.title}</div>
        <div class="timeline-kanji">${c.kanji}</div>
      </div>
      <div class="timeline-desc">${c.description}</div>
    </div>
  `).join("");
}
