/**
 * ===================================================================
 * BLEACH DEVELOPER LANDING PAGE CONFIGURATION
 * ===================================================================
 * Configured for SRINIVAS (GitHub: @Srinivas1610)
 */

window.BLEACH_CONFIG = {
  // Shinigami Identity
  identity: {
    name: "SRINIVAS",
    subtitle: "黒崎・SRINIVAS // SUBSTITUTE SHINIGAMI",
    tagline: "FULL-STACK SOFTWARE ENGINEER & DISTRIBUTED SYSTEMS ARCHITECT",
    reiatsuClass: "SPECIAL WAR POTENTIAL // CLASS 1",
    squad: "GOTEI 13 // 11TH DIVISION (AUXILIARY)",
    zanpakuto: "ZANGETSU (斬月)",
    bankaiName: "TENSA ZANGETSU (天鎖斬月)",
    mangaChapterTitle: "THE BLADE IS ME // VOL. 74",
    location: "KARAKURA TOWN / SOUL SOCIETY",
    bio: "Forging high-performance distributed systems, resilient microservices, and surgical web architectures. Cutting through technical debt and legacy bottlenecks with the razor precision of a spiritual blade.",
    avatar: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    poetryQuote: "We fear that which we cannot see, and we respect that which cannot be explained.",
    poetryAuthor: "— Tite Kubo, BLEACH Vol. 1",
  },

  // Social & Spiritual Transmission Links
  links: {
    github: "https://github.com/Srinivas1610",
    linkedin: "https://linkedin.com/in/srinivas",
    twitter: "https://twitter.com",
    email: "mailto:srinivas.r1610@gmail.com",
    resume: "#"
  },

  // Reiatsu & Combat Stats
  stats: [
    { label: "REIATSU CLASS", value: "SPECIAL GRADE", kanji: "霊圧" },
    { label: "REPOSITORIES", value: "32+", kanji: "宝物庫" },
    { label: "PULL REQUESTS", value: "99.8%", kanji: "昇華率" },
    { label: "WARS WON (ISSUES)", value: "850+", kanji: "平定" }
  ],

  // Featured Repositories / Arsenal (Zanpakuto Releases)
  arsenal: [
    {
      title: "Getsuga-Core",
      releaseCommand: "PIERCE THE HEAVENS // 月牙天衝",
      description: "Ultra-low-latency distributed message broker engineered with Rust and Zero-Copy IO. Capable of streaming 10M+ events/sec with sub-microsecond p99 latency.",
      kanji: "月牙天衝",
      tags: ["Rust", "Distributed Systems", "Raft", "gRPC", "Zero-Copy"],
      stars: 480,
      forks: 58,
      repoUrl: "https://github.com/Srinivas1610/Getsuga-Core",
      demoUrl: "https://github.com/Srinivas1610",
      status: "STABLE",
      badge: "S-RANK",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Senbonzakura-UI",
      releaseCommand: "SCATTER // 散れ千本桜",
      description: "Cutting-edge design system and component library with atomic micro-interactions, hardware-accelerated shaders, and strict accessibility compliance.",
      kanji: "千本桜景厳",
      tags: ["TypeScript", "React 19", "WebGL", "TailwindCSS", "Framer"],
      stars: 920,
      forks: 114,
      repoUrl: "https://github.com/Srinivas1610/Senbonzakura-UI",
      demoUrl: "https://github.com/Srinivas1610",
      status: "PRODUCTION",
      badge: "FEATURED",
      image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kyoka-Proxy",
      releaseCommand: "SHATTER // 砕けろ鏡花水月",
      description: "Zero-trust reverse proxy and service mesh providing complete architectural decoupling, cryptographic obfuscation, and layer-7 traffic illusioning.",
      kanji: "鏡花水月",
      tags: ["Go", "eBPF", "Kubernetes", "TLS 1.3", "Envoy"],
      stars: 640,
      forks: 82,
      repoUrl: "https://github.com/Srinivas1610/Kyoka-Proxy",
      demoUrl: "https://github.com/Srinivas1610",
      status: "ACTIVE",
      badge: "SECURITY",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Daiguren-Hyorinmaru",
      releaseCommand: "SOAR IN THE FROZEN SKY // 霜天に坐せ",
      description: "In-memory predictive caching layer utilizing machine-learning eviction policies to freeze stale reads and keep database latencies sub-millisecond.",
      kanji: "大紅蓮氷輪丸",
      tags: ["C++23", "SIMD", "Memory Engine", "Python", "Redis"],
      stars: 395,
      forks: 47,
      repoUrl: "https://github.com/Srinivas1610/Daiguren-Hyorinmaru",
      demoUrl: "https://github.com/Srinivas1610",
      status: "STABLE",
      badge: "OPTIMIZED",
      image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kurohitsugi-RPC",
      releaseCommand: "HADŌ #90 // 隠滅せよ黒棺",
      description: "High-density serialization protocol and binary RPC runtime. Encases remote procedure payloads in encrypted micro-cells for total tamper resistance.",
      kanji: "黒棺",
      tags: ["Rust", "Protobuf", "Cryptography", "Network", "Async"],
      stars: 520,
      forks: 63,
      repoUrl: "https://github.com/Srinivas1610/Kurohitsugi-RPC",
      demoUrl: "https://github.com/Srinivas1610",
      status: "EXPERIMENTAL",
      badge: "KIDO #90",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Minazuki-Monitor",
      releaseCommand: "HEAL & RESTORE // 肉雫唼",
      description: "Distributed telemetry, synthetic health monitoring, and automated self-healing daemon for large-scale cluster resilience.",
      kanji: "肉雫唼",
      tags: ["Go", "OpenTelemetry", "Prometheus", "Grafana", "Chaos Eng"],
      stars: 310,
      forks: 38,
      repoUrl: "https://github.com/Srinivas1610/Minazuki-Monitor",
      demoUrl: "https://github.com/Srinivas1610",
      status: "ACTIVE",
      badge: "RELIABILITY",
      image: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Shinigami Arts / Tech Stack
  arts: [
    {
      category: "ZANJUTSU (斬術)",
      subtitle: "Swordsmanship // Core Languages & Systems",
      skills: [
        { name: "TypeScript / JavaScript", level: "98%", mastered: true },
        { name: "Rust", level: "92%", mastered: true },
        { name: "Go (Golang)", level: "90%", mastered: true },
        { name: "Python", level: "94%", mastered: true },
        { name: "C / C++", level: "82%", mastered: false }
      ]
    },
    {
      category: "HOHO (歩法)",
      subtitle: "Shunpo (Flash Step) // Frontend & Reactive UX",
      skills: [
        { name: "React 19 / Next.js", level: "96%", mastered: true },
        { name: "Vue 3 / Nuxt", level: "88%", mastered: true },
        { name: "Tailwind / CSS Art", level: "95%", mastered: true },
        { name: "Three.js / WebGL", level: "86%", mastered: false },
        { name: "WebAssembly (Wasm)", level: "84%", mastered: false }
      ]
    },
    {
      category: "KIDO: HADO (鬼道・破道)",
      subtitle: "Offensive Spells // Backend, APIs & Data",
      skills: [
        { name: "Node.js / Bun", level: "95%", mastered: true },
        { name: "GraphQL / gRPC", level: "92%", mastered: true },
        { name: "PostgreSQL / Redis", level: "94%", mastered: true },
        { name: "Kafka / RabbitMQ", level: "89%", mastered: false },
        { name: "Elasticsearch / Vector DB", level: "85%", mastered: false }
      ]
    },
    {
      category: "KIDO: BAKUDO (鬼道・縛道)",
      subtitle: "Barrier Spells // Cloud, DevOps & Security",
      skills: [
        { name: "Docker / Kubernetes", level: "92%", mastered: true },
        { name: "AWS / Cloudflare", level: "93%", mastered: true },
        { name: "CI / CD & GitHub Actions", level: "96%", mastered: true },
        { name: "Terraform & IaC", level: "86%", mastered: false },
        { name: "Zero-Trust & Cryptography", level: "90%", mastered: true }
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
