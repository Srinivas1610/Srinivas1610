/**
 * ===================================================================
 * REIATSU & INK CANVAS ENGINE
 * ===================================================================
 * High-performance particle engine handling spiritual aura,
 * drifting ink wisps, Bankai crimson flames, and sword slashes.
 */

class ReiatsuCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.slashes = [];
    this.isBankai = false;
    this.mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, speed: 0 };
    this.particleCount = window.innerWidth < 768 ? 35 : 75;

    this.resize();
    this.initParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  setBankai(active) {
    this.isBankai = active;
    // Explode particles on mode change
    this.particles.forEach(p => {
      p.vx = (Math.random() - 0.5) * 12;
      p.vy = (Math.random() - 0.5) * 12;
    });
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle(x, y) {
    return {
      x: x !== undefined ? x : Math.random() * this.width,
      y: y !== undefined ? y : Math.random() * this.height,
      size: Math.random() * 2.8 + 0.8,
      vx: (Math.random() - 0.5) * 0.7,
      vy: -(Math.random() * 1.2 + 0.3),
      alpha: Math.random() * 0.7 + 0.2,
      maxAlpha: Math.random() * 0.8 + 0.2,
      decay: Math.random() * 0.005 + 0.002,
      length: Math.random() * 25 + 5,
      angle: (Math.random() - 0.5) * 0.3,
      hue: Math.random() > 0.8 ? "accent" : "base"
    };
  }

  triggerSlash(startX, startY, endX, endY) {
    // Generate a dramatic calligraphic sword slash line
    const dx = endX - startX;
    const dy = endY - startY;
    const angle = Math.atan2(dy, dx);
    const length = Math.hypot(dx, dy);

    this.slashes.push({
      startX,
      startY,
      endX,
      endY,
      angle,
      length,
      life: 1.0,
      width: Math.random() * 6 + 4,
      isBankai: this.isBankai
    });

    // Spawn burst particles along the cut line
    for (let i = 0; i < 24; i++) {
      const prog = Math.random();
      const px = startX + dx * prog;
      const py = startY + dy * prog;
      const p = this.createParticle(px, py);
      p.vx = Math.cos(angle + (Math.random() - 0.5) * 1.5) * (Math.random() * 8 + 3);
      p.vy = Math.sin(angle + (Math.random() - 0.5) * 1.5) * (Math.random() * 8 + 3);
      p.alpha = 1.0;
      this.particles.push(p);
    }
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      this.resize();
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse.prevX = this.mouse.x;
      this.mouse.prevY = this.mouse.y;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      const dx = this.mouse.x - this.mouse.prevX;
      const dy = this.mouse.y - this.mouse.prevY;
      this.mouse.speed = Math.hypot(dx, dy);

      // Fast mouse movement produces faint sword cuts
      if (this.mouse.speed > 55 && Math.random() > 0.6) {
        this.triggerSlash(
          this.mouse.prevX,
          this.mouse.prevY,
          this.mouse.x + dx * 0.8,
          this.mouse.y + dy * 0.8
        );
      }
    });

    window.addEventListener("click", (e) => {
      // Don't trigger if clicked on an interactive input or link
      if (e.target.closest("a, button, input, textarea")) return;

      const angle = (Math.random() * Math.PI) - (Math.PI / 2);
      const dist = Math.random() * 160 + 120;
      const x1 = e.clientX - Math.cos(angle) * dist;
      const y1 = e.clientY - Math.sin(angle) * dist;
      const x2 = e.clientX + Math.cos(angle) * dist;
      const y2 = e.clientY + Math.sin(angle) * dist;

      this.triggerSlash(x1, y1, x2, y2);
      if (window.bleachSFX) {
        window.bleachSFX.playSlash();
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Render Reiatsu Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Bankai rising pressure mode
      if (this.isBankai) {
        p.vy -= 0.08; // upward acceleration
        p.vx += (Math.random() - 0.5) * 0.4;
      }

      // Mouse repulsion / disturbance
      const mdx = p.x - this.mouse.x;
      const mdy = p.y - this.mouse.y;
      const mdist = Math.hypot(mdx, mdy);
      if (mdist < 100) {
        const force = (100 - mdist) / 100;
        p.x += (mdx / mdist) * force * 5;
        p.y += (mdy / mdist) * force * 5;
      }

      // Render particle as spiritual streak
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.angle);

      if (this.isBankai) {
        // Bankai: Jet black with crimson/electric cyan core
        const isRed = p.hue === "accent";
        this.ctx.fillStyle = isRed
          ? `rgba(239, 35, 60, ${p.alpha * 0.85})`
          : `rgba(10, 10, 12, ${p.alpha * 0.9})`;
        this.ctx.shadowBlur = 12;
        this.ctx.shadowColor = isRed ? "#ff0033" : "#00f0ff";
      } else {
        // Shikai: stark ink black and soft spiritual blue
        const isBlue = p.hue === "accent";
        this.ctx.fillStyle = isBlue
          ? `rgba(0, 180, 255, ${p.alpha * 0.7})`
          : `rgba(220, 220, 230, ${p.alpha * 0.5})`;
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = isBlue ? "#00c8ff" : "#ffffff";
      }

      // Draw tapered streak
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, p.size, p.length, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      // Bounds wrapping or recycling
      if (p.y < -50 || p.x < -50 || p.x > this.width + 50 || p.y > this.height + 50) {
        if (this.particles.length > this.particleCount) {
          this.particles.splice(i, 1);
        } else {
          this.particles[i] = this.createParticle(
            Math.random() * this.width,
            this.height + 20
          );
        }
      }
    }

    // 2. Render Sword Slashes
    for (let i = this.slashes.length - 1; i >= 0; i--) {
      const s = this.slashes[i];
      s.life -= 0.045;

      if (s.life <= 0) {
        this.slashes.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.lineCap = "round";

      if (s.isBankai) {
        // Red / Black Getsuga slash
        this.ctx.strokeStyle = `rgba(255, 30, 60, ${s.life})`;
        this.ctx.lineWidth = s.width * s.life * 2.2;
        this.ctx.shadowBlur = 24;
        this.ctx.shadowColor = "#ff0044";
      } else {
        // Sharp white / cyan spiritual slash
        this.ctx.strokeStyle = `rgba(255, 255, 255, ${s.life})`;
        this.ctx.lineWidth = s.width * s.life * 1.8;
        this.ctx.shadowBlur = 18;
        this.ctx.shadowColor = "#00e1ff";
      }

      this.ctx.beginPath();
      this.ctx.moveTo(s.startX, s.startY);
      this.ctx.lineTo(s.endX, s.endY);
      this.ctx.stroke();

      // Sharp inner black core for high-contrast calligraphy
      this.ctx.strokeStyle = `rgba(0, 0, 0, ${s.life * 0.95})`;
      this.ctx.lineWidth = Math.max(1, s.width * s.life * 0.6);
      this.ctx.stroke();

      this.ctx.restore();
    }
  }
}

window.ReiatsuCanvas = ReiatsuCanvas;
