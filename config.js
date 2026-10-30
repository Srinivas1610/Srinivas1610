/**
 * ===================================================================
 * BLEACH DEVELOPER LANDING PAGE CONFIGURATION
 * ===================================================================
 * Customize your details here! All sections of the landing page will
 * automatically populate with this information.
 */

window.BLEACH_CONFIG = {
  // Shinigami Identity
  identity: {
    name: "KUROSAKI",
    subtitle: "黒崎 • SUBSTITUTE SHINIGAMI",
    tagline: "FULL-STACK SOFTWARE ENGINEER & ARCHITECT",
    reiatsuClass: "SPECIAL WAR POTENTIAL // CLASS 1",
    squad: "GOTEI 13 // 11TH DIVISION (AUXILIARY)",
    zanpakuto: "ZANGETSU (斬月)",
    bankaiName: "TENSA ZANGETSU (天鎖斬月)",
    mangaChapterTitle: "THE BLADE IS ME // VOL. 74",
    location: "KARAKURA TOWN / SOUL SOCIETY (REMOTE)",
    bio: "Forging high-performance distributed systems, resilient microservices, and surgical web interfaces. Cutting through technical debt with the precision of a spiritual blade.",
    avatar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80", // Replace with your GitHub avatar URL
    poetryQuote: "We fear that which we cannot see, and we respect that which cannot be explained.",
    poetryAuthor: "— Tite Kubo, BLEACH Vol. 1",
  },

  // Social & Spiritual Transmission Links
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:shinigami@soul-society.dev",
    resume: "#"
  },

  // Reiatsu & Combat Stats
  stats: [
    { label: "REIATSU CLASS", value: "GRADE 1", kanji: "霊圧" },
    { label: "REPOSITORIES", value: "48+", kanji: "宝物庫" },
    { label: "PULL REQUESTS", value: "99.8%", kanji: "昇華率" },
    { label: "WARS WON (ISSUES)", value: "1,240+", kanji: "平定" }
  ],

  // Featured Repositories / Arsenal (Zanpakuto Releases)
  arsenal: [
    {
      title: "Getsuga-Core",
      releaseCommand: "PIERCE THE HEAVENS // 月牙",
      description: "Ultra-low-latency distributed message broker engineered with Rust and Zero-Copy IO. Capable of processing 10M+ events/sec with microsecond p99 latency.",
      kanji: "月牙天衝",
      tags: ["Rust", "Distributed Systems", "Raft", "gRPC"],
      stars: 342,
      forks: 41,
      repoUrl: "https://github.com",
      demoUrl: "https://github.com",
      status: "STABLE",
      badge: "S-RANK"
    },
    {
      title: "Senbonzakura-UI",
      releaseCommand: "SCATTER // 散れ",
      description: "Next-gen design system and component library with atomic micro-interactions, hardware-accelerated shaders, and strict accessibility compliance.",
      kanji: "千本桜",
      tags: ["TypeScript", "React", "WebGL", "TailwindCSS"],
      stars: 820,
      forks: 94,
      repoUrl: "https://github.com",
      demoUrl: "https://github.com",
      status: "PRODUCTION",
      badge: "FEATURED"
    },
    {
      title: "Kyoka-Proxy",
      releaseCommand: "SHATTER // 砕けろ",
      description: "Zero-trust reverse proxy and identity mesh that delivers total architectural decoupling and dynamic layer-7 traffic illusioning.",
      kanji: "鏡花水月",
      tags: ["Go", "eBPF", "Kubernetes", "TLS 1.3"],
      stars: 512,
      forks: 67,
      repoUrl: "https://github.com",
      demoUrl: "https://github.com",
      status: "BETA",
      badge: "A-RANK"
    },
    {
      title: "Hyorinmaru-Cache",
      releaseCommand: "SOAR IN THE FROZEN SKY // 霜天に坐せ",
      description: "In-memory predictive caching layer utilizing machine-learning eviction policies to freeze stale reads and keep latencies sub-millisecond.",
      kanji: "氷輪丸",
      tags: ["C++20", "Memory Engine", "SIMD", "Python"],
      stars: 279,
      forks: 33,
      repoUrl: "https://github.com",
      demoUrl: "https://github.com",
      status: "ACTIVE",
      badge: "OPTIMIZED"
    }
  ],

  // Shinigami Arts / Tech Stack
  arts: [
    {
      category: "ZANJUTSU (斬術)",
      subtitle: "Swordsmanship // Core Languages & Systems",
      skills: [
        { name: "TypeScript", level: "98%", mastered: true },
        { name: "Rust", level: "92%", mastered: true },
        { name: "Go", level: "90%", mastered: true },
        { name: "Python", level: "94%", mastered: true },
        { name: "C / C++", level: "82%", mastered: false }
      ]
    },
    {
      category: "HOHO (歩法)",
      subtitle: "Shunpo (Flash Step) // Frontend & Reactive UX",
      skills: [
        { name: "React / Next.js", level: "96%", mastered: true },
        { name: "Vue / Nuxt", level: "88%", mastered: true },
        { name: "Tailwind / CSS Art", level: "95%", mastered: true },
        { name: "Three.js / WebGL", level: "85%", mastered: false },
        { name: "Wasm / Web Workers", level: "84%", mastered: false }
      ]
    },
    {
      category: "KIDO: HADO (鬼道・破道)",
      subtitle: "Offensive Spells // Backend, APIs & Data",
      skills: [
        { name: "Node.js / Bun", level: "95%", mastered: true },
        { name: "GraphQL / gRPC", level: "90%", mastered: true },
        { name: "PostgreSQL / Redis", level: "93%", mastered: true },
        { name: "Kafka / RabbitMQ", level: "88%", mastered: false },
        { name: "Elasticsearch", level: "84%", mastered: false }
      ]
    },
    {
      category: "KIDO: BAKUDO (鬼道・縛道)",
      subtitle: "Barrier Spells // Cloud, DevOps & Security",
      skills: [
        { name: "Docker / K8s", level: "91%", mastered: true },
        { name: "AWS / Cloudflare", level: "92%", mastered: true },
        { name: "CI / CD Pipelines", level: "96%", mastered: true },
        { name: "Terraform", level: "85%", mastered: false },
        { name: "OAuth & Zero-Trust", level: "90%", mastered: true }
      ]
    }
  ],

  // Chronicles of Battle (Timeline / Experience)
  chronicles: [
    {
      era: "THOUSAND-YEAR BLOOD WAR // 2024 - PRESENT",
      title: "Principal Staff Engineer // VoidTech Systems",
      kanji: "千年血戦",
      description: "Spearheaded the redesign of enterprise real-time event pipeline serving 50M+ concurrent users. Mentored 14 senior engineers and reduced cloud infrastructure overhead by 42%."
    },
    {
      era: "FAKE KARAKURA BATTLE // 2022 - 2024",
      title: "Senior Full-Stack Engineer // Seireitei Labs",
      kanji: "空座決戦",
      description: "Architected modern micro-frontend ecosystem, built custom WebGL analytics dashboard, and cut bundle sizes by 65% across primary web applications."
    },
    {
      era: "HUECO MUNDO INFILTRATION // 2020 - 2022",
      title: "Software Engineer // Espada Cloud Solutions",
      kanji: "虚圏潜入",
      description: "Delivered resilient API gateways, integrated high-throughput distributed transaction logging, and automated test coverage to 94%."
    },
    {
      era: "SOUL SOCIETY INVASION // 2018 - 2020",
      title: "Open Source Contributor & Junior Shinigami",
      kanji: "尸魂界篇",
      description: "Discovered the craft of code. Authored early developer tooling, contributed bug fixes to core open source web repositories, and learned the art of continuous deployment."
    }
  ]
};
