import { Tool } from "@/components/ToolCard";

// Stack 1: Core AI Development Tools (15 tools)
export const aiToolsStack1: Tool[] = [
  {
    id: "1",
    name: "Lovable",
    description: "Build full-stack web applications using AI. Create React apps with TypeScript, Tailwind CSS, and Supabase integration through natural language conversations.",
    category: "Full-stack",
    tags: ["react", "typescript", "ai-powered", "full-stack", "web-development"],
    pricing: "Freemium",
    url: "https://lovable.dev",
    features: [
      "AI-powered code generation",
      "React + TypeScript stack",
      "Real-time preview",
      "Supabase integration",
      "Component library",
      "Responsive design"
    ],
    limitations: [
      "Limited to React framework",
      "Requires internet connection",
      "Usage limits on free tier"
    ],
    rating: 4.8,
    userCount: "50k+"
  },
  {
    id: "2",
    name: "GitHub Copilot",
    description: "AI pair programmer offering real-time code completions and function suggestions trained on billions of lines of code.",
    category: "Developer",
    tags: ["code-completion", "ai", "productivity", "github", "pair-programming"],
    pricing: "Paid",
    url: "https://github.com/features/copilot",
    features: [
      "Real-time code suggestions",
      "Multi-language support",
      "IDE integration",
      "Context-aware completions",
      "Function generation",
      "Comment-to-code"
    ],
    limitations: [
      "Requires subscription",
      "Limited free usage",
      "IDE dependency"
    ],
    rating: 4.5,
    userCount: "5M+"
  },
  {
    id: "3",
    name: "ChatGPT",
    description: "Advanced AI language model that can assist with coding, writing, analysis, and creative tasks. Supports code generation and debugging.",
    category: "AI",
    tags: ["conversational-ai", "code-generation", "writing", "analysis"],
    pricing: "Freemium",
    url: "https://chat.openai.com",
    features: [
      "Natural language processing",
      "Code generation & review",
      "Multiple languages",
      "Context awareness",
      "Problem solving",
      "Creative writing"
    ],
    limitations: [
      "Knowledge cutoff date",
      "Cannot browse internet",
      "Rate limits on free tier"
    ],
    rating: 4.7,
    userCount: "100M+"
  },
  {
    id: "4",
    name: "Cursor IDE",
    description: "AI-enhanced code editor based on VS Code for full-stack developers with inline assistance and codebase understanding.",
    category: "Developer",
    tags: ["code-editor", "ai", "vscode", "autocomplete", "inline-assistance"],
    pricing: "Freemium",
    url: "https://cursor.sh",
    features: [
      "AI-powered autocomplete",
      "Integrated chat",
      "VS Code compatibility",
      "Codebase understanding",
      "Refactoring assistance",
      "Multi-file editing"
    ],
    limitations: [
      "Desktop only",
      "Limited free tier",
      "Learning curve"
    ],
    rating: 4.7,
    userCount: "500k+"
  },
  {
    id: "5",
    name: "Replit AI",
    description: "In-browser AI coding assistant for live collaboration and instant code generation across multiple programming languages.",
    category: "Developer",
    tags: ["coding-assistant", "ai", "collaboration", "cloud-ide", "browser-based"],
    pricing: "Freemium",
    url: "https://replit.com",
    features: [
      "Multi-language support",
      "Real-time collaboration",
      "Cloud-based IDE",
      "AI code completion",
      "Instant deployment",
      "Version control"
    ],
    limitations: [
      "Limited compute on free tier",
      "Internet dependency",
      "Resource constraints"
    ],
    rating: 4.6,
    userCount: "1M+"
  },
  {
    id: "6",
    name: "Codeium",
    description: "Free AI code completion tool with chat support for developers across 70+ programming languages.",
    category: "Developer",
    tags: ["code-completion", "free", "multi-language", "ai-assistant", "chat"],
    pricing: "Free",
    url: "https://codeium.com",
    features: [
      "70+ language support",
      "Intelligent autocomplete",
      "AI chat assistant",
      "Code search",
      "IDE integrations",
      "Team features"
    ],
    limitations: [
      "Newer platform",
      "Limited enterprise features",
      "Internet dependency"
    ],
    rating: 4.6,
    userCount: "400k+"
  },
  {
    id: "7",
    name: "Claude",
    description: "Advanced AI assistant by Anthropic that excels at code analysis, writing, and complex reasoning tasks with strong safety measures.",
    category: "AI",
    tags: ["ai-assistant", "code-analysis", "writing", "reasoning", "safety"],
    pricing: "Freemium",
    url: "https://claude.ai",
    features: [
      "Code analysis & generation",
      "Long context window",
      "Safety-focused",
      "Complex reasoning",
      "File uploads",
      "Conversation memory"
    ],
    limitations: [
      "Rate limits",
      "Geographic restrictions",
      "No internet access"
    ],
    rating: 4.5,
    userCount: "10M+"
  },
  {
    id: "8",
    name: "v0 by Vercel",
    description: "Prompt-to-code builder for high-quality frontend UI using Tailwind CSS and shadcn components.",
    category: "Full-stack",
    tags: ["ui-generation", "react", "components", "vercel", "tailwind"],
    pricing: "Freemium",
    url: "https://v0.dev",
    features: [
      "Component generation",
      "React/Next.js support",
      "Tailwind CSS",
      "Interactive preview",
      "Code export",
      "Design system integration"
    ],
    limitations: [
      "React framework only",
      "Limited customization",
      "Usage limits"
    ],
    rating: 4.4,
    userCount: "200k+"
  },
  {
    id: "9",
    name: "Amazon CodeWhisperer",
    description: "AWS-integrated AI coding assistant with built-in security scanning for secure code generation.",
    category: "Developer",
    tags: ["aws", "security-scanning", "code-completion", "enterprise", "security"],
    pricing: "Freemium",
    url: "https://aws.amazon.com/codewhisperer",
    features: [
      "AWS integration",
      "Security scanning",
      "Multi-language support",
      "Enterprise features",
      "Code suggestions",
      "Vulnerability detection"
    ],
    limitations: [
      "AWS ecosystem focus",
      "Limited free tier",
      "Setup complexity"
    ],
    rating: 4.3,
    userCount: "300k+"
  },
  {
    id: "10",
    name: "Cody by Sourcegraph",
    description: "Context-aware code search and coding assistant that works across entire codebases for better understanding.",
    category: "Developer",
    tags: ["code-search", "context-aware", "codebase-understanding", "enterprise"],
    pricing: "Freemium",
    url: "https://sourcegraph.com/cody",
    features: [
      "Codebase understanding",
      "Context-aware search",
      "Code explanations",
      "Multi-repository support",
      "Enterprise features",
      "IDE integrations"
    ],
    limitations: [
      "Complex setup",
      "Enterprise focused",
      "Learning curve"
    ],
    rating: 4.4,
    userCount: "250k+"
  },
  {
    id: "11",
    name: "Tabnine",
    description: "AI code assistant that provides intelligent code completions based on your codebase patterns and industry best practices.",
    category: "Developer",
    tags: ["code-completion", "privacy", "enterprise", "ai-assistant", "patterns"],
    pricing: "Freemium",
    url: "https://tabnine.com",
    features: [
      "Context-aware completions",
      "Privacy focused",
      "On-premises options",
      "Team learning",
      "Multiple IDEs",
      "Code patterns"
    ],
    limitations: [
      "Limited free tier",
      "Setup complexity",
      "Resource intensive"
    ],
    rating: 4.4,
    userCount: "1M+"
  },
  {
    id: "12",
    name: "CodeGeeX",
    description: "Open-source ML model for code generation across multiple programming languages with community support.",
    category: "Developer",
    tags: ["open-source", "multi-language", "code-generation", "community", "ml-model"],
    pricing: "Free",
    url: "https://codegeex.cn",
    features: [
      "Open source",
      "Multi-language support",
      "Local deployment",
      "Community driven",
      "Code generation",
      "Plugin support"
    ],
    limitations: [
      "Limited documentation",
      "Setup complexity",
      "Language barriers"
    ],
    rating: 4.1,
    userCount: "150k+"
  },
  {
    id: "13",
    name: "Warp AI",
    description: "Rust-based AI-powered terminal offering autocomplete and automation for enhanced command-line experience.",
    category: "Developer",
    tags: ["terminal", "rust", "autocomplete", "automation", "command-line"],
    pricing: "Freemium",
    url: "https://warp.dev",
    features: [
      "AI-powered terminal",
      "Command autocomplete",
      "Workflow automation",
      "Modern interface",
      "Team collaboration",
      "Performance optimized"
    ],
    limitations: [
      "macOS focused",
      "Learning curve",
      "Limited platforms"
    ],
    rating: 4.5,
    userCount: "200k+"
  },
  {
    id: "14",
    name: "Phind",
    description: "AI search engine optimized for developers solving technical problems with code examples and explanations.",
    category: "AI",
    tags: ["search-engine", "developer-focused", "technical-problems", "code-examples"],
    pricing: "Free",
    url: "https://phind.com",
    features: [
      "Developer-focused search",
      "Code examples",
      "Technical explanations",
      "Real-time answers",
      "Source citations",
      "Problem solving"
    ],
    limitations: [
      "Search only",
      "No code execution",
      "Limited customization"
    ],
    rating: 4.3,
    userCount: "500k+"
  },
  {
    id: "15",
    name: "Bolt AI",
    description: "Full-stack AI generator for building MVPs, landing pages, and agency websites with fast deployment capabilities.",
    category: "Full-stack",
    tags: ["mvp", "landing-pages", "fast-deployment", "agency-websites", "full-stack"],
    pricing: "Freemium",
    url: "https://bolt.new",
    features: [
      "MVP generation",
      "Fast deployment",
      "Agency templates",
      "Full-stack apps",
      "AI-powered design",
      "Instant preview"
    ],
    limitations: [
      "Limited customization",
      "Template dependency",
      "Learning curve"
    ],
    rating: 4.3,
    userCount: "100k+"
  }
];

// Stack 2: No-Code & Automation Tools (15 tools)
export const aiToolsStack2: Tool[] = [
  {
    id: "16",
    name: "Bubble",
    description: "Fullstack no-code platform with AI that builds frontend, backend, and workflows visually without coding.",
    category: "No-code",
    tags: ["no-code", "visual-development", "web-apps", "ai-assisted", "fullstack"],
    pricing: "Freemium",
    url: "https://bubble.io",
    features: [
      "Visual development",
      "Database included",
      "User authentication",
      "API integrations",
      "Responsive design",
      "AI assistance"
    ],
    limitations: [
      "Performance constraints",
      "Learning curve",
      "Vendor lock-in"
    ],
    rating: 4.2,
    userCount: "3M+"
  },
  {
    id: "17",
    name: "Zapier",
    description: "Workflow automation tool with AI enhancements for data handling and triggers between different applications.",
    category: "No-code",
    tags: ["automation", "integrations", "workflow", "ai-automation", "triggers"],
    pricing: "Freemium",
    url: "https://zapier.com",
    features: [
      "App integrations",
      "Workflow automation",
      "AI-powered zaps",
      "Multi-step workflows",
      "Data transformation",
      "Scheduling"
    ],
    limitations: [
      "Complex pricing",
      "Execution limits",
      "Learning curve for complex workflows"
    ],
    rating: 4.3,
    userCount: "5M+"
  },
  {
    id: "18",
    name: "Webflow",
    description: "Visual website builder combined with AI tools to design and publish responsive sites with clean code output.",
    category: "No-code",
    tags: ["web-design", "cms", "responsive", "visual-editor", "ai-tools"],
    pricing: "Freemium",
    url: "https://webflow.com",
    features: [
      "Visual web design",
      "CMS capabilities",
      "E-commerce support",
      "SEO optimization",
      "Custom interactions",
      "Team collaboration"
    ],
    limitations: [
      "Learning curve",
      "Export limitations",
      "Pricing for advanced features"
    ],
    rating: 4.4,
    userCount: "4M+"
  },
  {
    id: "19",
    name: "Framer",
    description: "Design and publishing tool that allows designers to create interactive websites and prototypes, now with AI-powered design generation.",
    category: "No-code",
    tags: ["design", "prototyping", "website-builder", "ai-design", "interactive"],
    pricing: "Freemium",
    url: "https://framer.com",
    features: [
      "AI site generation",
      "Interactive prototypes",
      "Design system",
      "CMS integration",
      "Analytics",
      "Custom code support"
    ],
    limitations: [
      "Design focus",
      "Limited backend",
      "Subscription required for advanced features"
    ],
    rating: 4.6,
    userCount: "1M+"
  },
  {
    id: "20",
    name: "Airtable",
    description: "Database-spreadsheet hybrid with AI-powered features for data organization, automation, and app building without coding.",
    category: "No-code",
    tags: ["database", "spreadsheet", "automation", "collaboration", "ai-insights"],
    pricing: "Freemium",
    url: "https://airtable.com",
    features: [
      "Flexible database",
      "Form generation",
      "Automation rules",
      "API access",
      "Team collaboration",
      "AI-powered insights"
    ],
    limitations: [
      "Performance with large data",
      "Pricing for advanced features",
      "Learning curve"
    ],
    rating: 4.5,
    userCount: "300k+"
  },
  {
    id: "21",
    name: "Make",
    description: "Visual automation platform automating workflows between apps with AI logic for complex integrations.",
    category: "No-code",
    tags: ["automation", "visual-workflows", "app-integration", "ai-logic", "complex"],
    pricing: "Freemium",
    url: "https://make.com",
    features: [
      "Visual workflow builder",
      "App integrations",
      "AI-powered logic",
      "Complex automations",
      "Real-time processing",
      "Error handling"
    ],
    limitations: [
      "Complex pricing",
      "Learning curve",
      "Execution limits"
    ],
    rating: 4.4,
    userCount: "500k+"
  },
  {
    id: "22",
    name: "Retool",
    description: "Visual internal tool builder with AI assistance to connect APIs and data quickly for business applications.",
    category: "No-code",
    tags: ["internal-tools", "api-connections", "business-apps", "visual-builder", "data"],
    pricing: "Freemium",
    url: "https://retool.com",
    features: [
      "Drag-and-drop builder",
      "API integrations",
      "Database connections",
      "Custom components",
      "Team collaboration",
      "Enterprise features"
    ],
    limitations: [
      "Learning curve",
      "Pricing for scale",
      "Complex setup"
    ],
    rating: 4.5,
    userCount: "100k+"
  },
  {
    id: "23",
    name: "Glide",
    description: "Build mobile apps from spreadsheets (Google Sheets) with AI assistance for rapid app development.",
    category: "No-code",
    tags: ["mobile-apps", "google-sheets", "rapid-development", "ai-assistance", "spreadsheet"],
    pricing: "Freemium",
    url: "https://glideapps.com",
    features: [
      "Spreadsheet to app",
      "Mobile optimization",
      "Real-time sync",
      "Custom actions",
      "User authentication",
      "App store deployment"
    ],
    limitations: [
      "Spreadsheet dependency",
      "Limited complexity",
      "Mobile focus"
    ],
    rating: 4.2,
    userCount: "200k+"
  },
  {
    id: "24",
    name: "Adalo",
    description: "No-code platform for building mobile and web apps via AI components with native app publishing.",
    category: "No-code",
    tags: ["mobile-apps", "web-apps", "ai-components", "native-publishing", "visual"],
    pricing: "Freemium",
    url: "https://adalo.com",
    features: [
      "Visual app builder",
      "Native app publishing",
      "Database included",
      "Component marketplace",
      "User authentication",
      "Push notifications"
    ],
    limitations: [
      "Performance limitations",
      "Publishing restrictions",
      "Template constraints"
    ],
    rating: 4.1,
    userCount: "150k+"
  },
  {
    id: "25",
    name: "Appsmith",
    description: "Open-source internal tool builder that connects to APIs and databases with low-code development approach.",
    category: "No-code",
    tags: ["open-source", "internal-tools", "api-connections", "databases", "low-code"],
    pricing: "Freemium",
    url: "https://appsmith.com",
    features: [
      "Open source",
      "API integrations",
      "Database connections",
      "Custom widgets",
      "Self-hosted option",
      "Git integration"
    ],
    limitations: [
      "Technical setup",
      "Limited templates",
      "Requires hosting"
    ],
    rating: 4.3,
    userCount: "80k+"
  },
  {
    id: "26",
    name: "Stacker",
    description: "Internal tools builder on Airtable or Sheets with AI automations for business process management.",
    category: "No-code",
    tags: ["internal-tools", "airtable", "google-sheets", "ai-automations", "business"],
    pricing: "Freemium",
    url: "https://stacker.app",
    features: [
      "Airtable integration",
      "Google Sheets sync",
      "Portal creation",
      "User permissions",
      "Custom branding",
      "Workflow automation"
    ],
    limitations: [
      "Data source dependency",
      "Limited customization",
      "Pricing for features"
    ],
    rating: 4.2,
    userCount: "50k+"
  },
  {
    id: "27",
    name: "Bravo Studio",
    description: "Turns Figma designs into native mobile and web apps without coding using AI-powered conversion.",
    category: "No-code",
    tags: ["figma-to-app", "native-mobile", "web-apps", "design-to-code", "ai-conversion"],
    pricing: "Freemium",
    url: "https://bravostudio.app",
    features: [
      "Figma integration",
      "Native app generation",
      "Real-time sync",
      "App store publishing",
      "Custom actions",
      "Data binding"
    ],
    limitations: [
      "Figma dependency",
      "Limited functionality",
      "Design constraints"
    ],
    rating: 4.1,
    userCount: "75k+"
  },
  {
    id: "28",
    name: "Mendix",
    description: "Low-code platform enhanced by AI to speed up app development and ensure quality with enterprise features.",
    category: "No-code",
    tags: ["low-code", "enterprise", "quality-assurance", "rapid-development", "ai-enhanced"],
    pricing: "Paid",
    url: "https://mendix.com",
    features: [
      "Low-code development",
      "AI assistance",
      "Enterprise features",
      "Quality assurance",
      "Team collaboration",
      "Deployment tools"
    ],
    limitations: [
      "Expensive pricing",
      "Complex setup",
      "Learning curve"
    ],
    rating: 4.3,
    userCount: "500k+"
  },
  {
    id: "29",
    name: "Superblocks",
    description: "Internal tools builder with AI to automate business applications, dashboards, and workflows efficiently.",
    category: "No-code",
    tags: ["internal-tools", "dashboards", "workflows", "business-automation", "ai-builder"],
    pricing: "Freemium",
    url: "https://superblocks.com",
    features: [
      "Internal tools",
      "Dashboard builder",
      "Workflow automation",
      "API integrations",
      "Team collaboration",
      "AI assistance"
    ],
    limitations: [
      "Limited public tools",
      "Learning curve",
      "Pricing for scale"
    ],
    rating: 4.4,
    userCount: "150k+"
  },
  {
    id: "30",
    name: "Feathery",
    description: "AI-powered form builder that integrates into web apps without code for enhanced user experience.",
    category: "No-code",
    tags: ["form-builder", "ai-powered", "web-integration", "user-experience", "no-code"],
    pricing: "Freemium",
    url: "https://feathery.io",
    features: [
      "Advanced form builder",
      "AI assistance",
      "Web app integration",
      "Conditional logic",
      "Payment processing",
      "Analytics"
    ],
    limitations: [
      "Form focus only",
      "Integration complexity",
      "Pricing for features"
    ],
    rating: 4.2,
    userCount: "60k+"
  }
];

// Stack 3: WordPress & CMS Tools (15 tools)
export const aiToolsStack3: Tool[] = [
  {
    id: "31",
    name: "ZipWP",
    description: "AI-powered WordPress site generator that builds and designs full websites in under 60 seconds.",
    category: "WordPress",
    tags: ["wordpress", "fast-generation", "complete-websites", "60-seconds", "design"],
    pricing: "Freemium",
    url: "https://zipwp.com",
    features: [
      "60-second sites",
      "Complete websites",
      "WordPress optimized",
      "AI design",
      "Content generation",
      "Theme integration"
    ],
    limitations: [
      "WordPress only",
      "Template based",
      "Limited customization"
    ],
    rating: 4.2,
    userCount: "200k+"
  },
  {
    id: "32",
    name: "WPTurbo AI",
    description: "AI for WordPress developers to create plugins, themes, and code snippets with best practices.",
    category: "WordPress",
    tags: ["wordpress", "plugins", "themes", "code-snippets", "best-practices"],
    pricing: "Freemium",
    url: "https://wpturbo.dev",
    features: [
      "Plugin generation",
      "Theme creation",
      "Code snippets",
      "WordPress standards",
      "Best practices",
      "Developer tools"
    ],
    limitations: [
      "WordPress only",
      "Requires WP knowledge",
      "Limited complexity"
    ],
    rating: 4.3,
    userCount: "75k+"
  },
  {
    id: "33",
    name: "CodeWP",
    description: "AI for writing optimized WordPress code, including PHP snippets, hooks, and shortcodes.",
    category: "WordPress",
    tags: ["wordpress", "php", "hooks", "shortcodes", "code-optimization"],
    pricing: "Freemium",
    url: "https://codewp.ai",
    features: [
      "PHP code generation",
      "WordPress hooks",
      "Shortcode creation",
      "Code optimization",
      "Best practices",
      "Security focused"
    ],
    limitations: [
      "WordPress specific",
      "PHP knowledge helpful",
      "Limited scope"
    ],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "34",
    name: "Elementor AI",
    description: "WordPress page builder with integrated AI to write, design, and translate content.",
    category: "WordPress",
    tags: ["wordpress", "page-builder", "drag-drop", "content-ai", "translation"],
    pricing: "Freemium",
    url: "https://elementor.com",
    features: [
      "Drag-and-drop builder",
      "AI content writing",
      "Design assistance",
      "Translation tools",
      "Template library",
      "Responsive design"
    ],
    limitations: [
      "WordPress only",
      "Plugin dependency",
      "Performance impact"
    ],
    rating: 4.5,
    userCount: "5M+"
  },
  {
    id: "35",
    name: "10Web AI Builder",
    description: "AI-powered builder that clones websites and builds pages with AI-generated content.",
    category: "WordPress",
    tags: ["wordpress", "website-cloning", "ai-content", "optimization", "builder"],
    pricing: "Freemium",
    url: "https://10web.io",
    features: [
      "Website cloning",
      "AI page builder",
      "Content generation",
      "Performance optimization",
      "SEO tools",
      "Hosting included"
    ],
    limitations: [
      "WordPress focused",
      "Subscription required",
      "Limited flexibility"
    ],
    rating: 4.3,
    userCount: "400k+"
  },
  {
    id: "36",
    name: "SeedProd AI",
    description: "AI landing page builder for WordPress that uses AI to auto-fill and optimize content.",
    category: "WordPress",
    tags: ["wordpress", "landing-pages", "auto-fill", "content-optimization", "ai-builder"],
    pricing: "Freemium",
    url: "https://seedprod.com",
    features: [
      "AI landing pages",
      "Content auto-fill",
      "Drag-and-drop builder",
      "Coming soon pages",
      "Email integration",
      "Analytics"
    ],
    limitations: [
      "WordPress only",
      "Landing page focus",
      "Template limitations"
    ],
    rating: 4.2,
    userCount: "1M+"
  },
  {
    id: "37",
    name: "WordPress.com AI Builder",
    description: "AI block editor that suggests and structures content for pages with intelligent recommendations.",
    category: "WordPress",
    tags: ["wordpress", "block-editor", "content-suggestions", "ai-recommendations", "structure"],
    pricing: "Freemium",
    url: "https://wordpress.com",
    features: [
      "AI block editor",
      "Content suggestions",
      "Page structure",
      "SEO optimization",
      "Template library",
      "Hosting included"
    ],
    limitations: [
      "WordPress.com only",
      "Limited customization",
      "Subscription tiers"
    ],
    rating: 4.1,
    userCount: "3M+"
  },
  {
    id: "38",
    name: "WP Autopilugin",
    description: "AI WordPress plugin that auto-generates plugins and snippets from natural language.",
    category: "WordPress",
    tags: ["wordpress", "plugin-generation", "natural-language", "auto-generation", "snippets"],
    pricing: "Freemium",
    url: "https://wpautopilugin.com",
    features: [
      "Plugin auto-generation",
      "Natural language input",
      "Code snippets",
      "WordPress standards",
      "Easy installation",
      "Custom functionality"
    ],
    limitations: [
      "WordPress only",
      "Basic functionality",
      "Quality variance"
    ],
    rating: 4.0,
    userCount: "30k+"
  },
  {
    id: "39",
    name: "Builder.io",
    description: "Visual CMS with AI assistance that converts Figma and prompts into clean code.",
    category: "No-code",
    tags: ["visual-cms", "figma-import", "clean-code", "cms", "design-to-code"],
    pricing: "Freemium",
    url: "https://builder.io",
    features: [
      "Figma integration",
      "Visual CMS",
      "Clean code output",
      "AI assistance",
      "A/B testing",
      "Performance optimization"
    ],
    limitations: [
      "Complex pricing",
      "Learning curve",
      "Setup complexity"
    ],
    rating: 4.5,
    userCount: "300k+"
  },
  {
    id: "40",
    name: "Locofy.ai",
    description: "AI-to-code builder that outputs production-ready code from designs or prompts.",
    category: "No-code",
    tags: ["design-to-code", "production-ready", "high-fidelity", "ai-conversion"],
    pricing: "Freemium",
    url: "https://locofy.ai",
    features: [
      "Design to code",
      "Production ready",
      "High fidelity",
      "Multiple frameworks",
      "Responsive output",
      "Component library"
    ],
    limitations: [
      "Design dependency",
      "Limited customization",
      "Framework constraints"
    ],
    rating: 4.2,
    userCount: "150k+"
  },
  {
    id: "41",
    name: "TeleportHQ",
    description: "Visual builder that transforms prompts into React/Vue UI, exports code instantly.",
    category: "No-code",
    tags: ["react", "vue", "ui-components", "visual-builder", "code-export"],
    pricing: "Freemium",
    url: "https://teleporthq.io",
    features: [
      "React/Vue support",
      "Visual builder",
      "Code export",
      "UI components",
      "Real-time preview",
      "Team collaboration"
    ],
    limitations: [
      "Framework specific",
      "Learning curve",
      "Limited backend"
    ],
    rating: 4.3,
    userCount: "200k+"
  },
  {
    id: "42",
    name: "LandingSite.ai",
    description: "AI landing page generator focused on fast site creation with minimal setup.",
    category: "No-code",
    tags: ["landing-pages", "fast-creation", "conversion", "minimal-setup"],
    pricing: "Freemium",
    url: "https://landingsite.ai",
    features: [
      "Fast generation",
      "Landing page focus",
      "Conversion optimization",
      "Minimal setup",
      "AI copywriting",
      "Template library"
    ],
    limitations: [
      "Landing pages only",
      "Limited customization",
      "Template dependency"
    ],
    rating: 4.1,
    userCount: "120k+"
  },
  {
    id: "43",
    name: "CodeDesign.AI",
    description: "No-code/low-code platform that turns text prompts into responsive HTML, CSS, and JS sites.",
    category: "No-code",
    tags: ["text-to-code", "responsive", "html-css-js", "prompt-based"],
    pricing: "Freemium",
    url: "https://codedesign.ai",
    features: [
      "Text to code",
      "Responsive design",
      "HTML/CSS/JS output",
      "Prompt-based",
      "Live preview",
      "Code export"
    ],
    limitations: [
      "Limited complexity",
      "Basic functionality",
      "Template constraints"
    ],
    rating: 4.0,
    userCount: "80k+"
  },
  {
    id: "44",
    name: "Lindo AI",
    description: "AI site and marketing page builder with SEO and content personalization.",
    category: "No-code",
    tags: ["marketing-pages", "seo", "content-personalization", "ai-builder"],
    pricing: "Freemium",
    url: "https://lindo.ai",
    features: [
      "Marketing pages",
      "SEO optimization",
      "Content personalization",
      "A/B testing",
      "Analytics integration",
      "Lead generation"
    ],
    limitations: [
      "Marketing focus",
      "Limited functionality",
      "Template based"
    ],
    rating: 4.1,
    userCount: "90k+"
  },
  {
    id: "45",
    name: "Supabase",
    description: "Open-source Firebase alternative with PostgreSQL database, authentication, real-time subscriptions, and AI integration capabilities.",
    category: "Full-stack",
    tags: ["database", "backend", "postgresql", "authentication", "real-time"],
    pricing: "Freemium",
    url: "https://supabase.com",
    features: [
      "PostgreSQL database",
      "Real-time subscriptions",
      "Authentication",
      "File storage",
      "Edge functions",
      "AI/ML integrations"
    ],
    limitations: [
      "Learning curve",
      "Limited free tier",
      "PostgreSQL only"
    ],
    rating: 4.7,
    userCount: "500k+"
  }
];

// Stack 4: Advanced AI & Specialized Tools (15 tools)
export const aiToolsStack4: Tool[] = [
  {
    id: "46",
    name: "Qodo (CodiumAI)",
    description: "AI tool for code integrity, testing, and generation workflows with quality assurance.",
    category: "Developer",
    tags: ["code-integrity", "testing", "quality-assurance", "workflows", "ai-testing"],
    pricing: "Freemium",
    url: "https://qodo.ai",
    features: [
      "Code integrity",
      "Test generation",
      "Quality assurance",
      "Workflow automation",
      "Code review",
      "Bug detection"
    ],
    limitations: [
      "Complex setup",
      "Learning curve",
      "Limited free features"
    ],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "47",
    name: "AutoGPT",
    description: "Autonomous GPT agent that breaks goals into tasks and executes them iteratively.",
    category: "AI",
    tags: ["autonomous", "task-automation", "goal-oriented", "iterative", "agent"],
    pricing: "Free",
    url: "https://github.com/Significant-Gravitas/AutoGPT",
    features: [
      "Autonomous operation",
      "Goal decomposition",
      "Task execution",
      "Iterative improvement",
      "Web browsing",
      "File operations"
    ],
    limitations: [
      "Experimental",
      "Setup complexity",
      "Resource intensive"
    ],
    rating: 4.2,
    userCount: "300k+"
  },
  {
    id: "48",
    name: "AskCodi",
    description: "AI dev assistant that creates logic, SQL, tests, and docs from English prompts.",
    category: "Developer",
    tags: ["logic-creation", "sql", "testing", "documentation", "english-prompts"],
    pricing: "Freemium",
    url: "https://askcodi.com",
    features: [
      "Logic generation",
      "SQL queries",
      "Test creation",
      "Documentation",
      "Multiple languages",
      "IDE integration"
    ],
    limitations: [
      "Quality variance",
      "Limited complexity",
      "Subscription required"
    ],
    rating: 4.1,
    userCount: "80k+"
  },
  {
    id: "49",
    name: "Sourcegraph",
    description: "Platform offering universal code search and AI assistance via Cody for large codebases.",
    category: "Developer",
    tags: ["code-search", "universal", "large-codebases", "enterprise", "ai-assistance"],
    pricing: "Freemium",
    url: "https://sourcegraph.com",
    features: [
      "Universal code search",
      "Large codebase support",
      "AI assistance",
      "Enterprise features",
      "Code intelligence",
      "Team collaboration"
    ],
    limitations: [
      "Enterprise focus",
      "Complex setup",
      "Expensive for teams"
    ],
    rating: 4.5,
    userCount: "200k+"
  },
  {
    id: "50",
    name: "Eclipse Theia",
    description: "Open-source IDE framework with AI support built-in for extensible development environments.",
    category: "Developer",
    tags: ["open-source", "ide-framework", "extensible", "ai-support", "development"],
    pricing: "Free",
    url: "https://theia-ide.org",
    features: [
      "Open source",
      "Extensible framework",
      "AI support",
      "Cloud native",
      "VS Code compatibility",
      "Custom IDE creation"
    ],
    limitations: [
      "Technical setup",
      "Development focus",
      "Limited documentation"
    ],
    rating: 4.2,
    userCount: "50k+"
  },
  {
    id: "51",
    name: "Linear",
    description: "AI-enhanced issue tracker and product roadmap manager for development teams.",
    category: "Developer",
    tags: ["issue-tracking", "product-roadmap", "team-management", "ai-enhanced"],
    pricing: "Freemium",
    url: "https://linear.app",
    features: [
      "Issue tracking",
      "Product roadmaps",
      "Team management",
      "AI enhancements",
      "Project planning",
      "Integration support"
    ],
    limitations: [
      "Team focus",
      "Learning curve",
      "Subscription required"
    ],
    rating: 4.6,
    userCount: "300k+"
  },
  {
    id: "52",
    name: "Midjourney",
    description: "AI image generation tool for artistic and visual content creation with high-quality outputs.",
    category: "AI",
    tags: ["image-generation", "artistic", "visual-content", "high-quality", "creative"],
    pricing: "Paid",
    url: "https://midjourney.com",
    features: [
      "High-quality images",
      "Artistic styles",
      "Prompt engineering",
      "Style variations",
      "Community features",
      "Commercial use"
    ],
    limitations: [
      "Discord-based",
      "Subscription required",
      "Learning curve"
    ],
    rating: 4.7,
    userCount: "15M+"
  },
  {
    id: "53",
    name: "OpenAI API",
    description: "Versatile LLM API supporting text, image, audio and code generation integration.",
    category: "AI",
    tags: ["llm-api", "text-generation", "image", "audio", "code-generation"],
    pricing: "Paid",
    url: "https://openai.com/api",
    features: [
      "Multiple models",
      "Text generation",
      "Image processing",
      "Audio support",
      "Code generation",
      "Fine-tuning"
    ],
    limitations: [
      "Usage costs",
      "Rate limits",
      "API complexity"
    ],
    rating: 4.6,
    userCount: "2M+"
  },
  {
    id: "54",
    name: "Lightning AI",
    description: "Platform for training and deploying AI using PyTorch with development efficiency.",
    category: "AI",
    tags: ["pytorch", "ai-training", "deployment", "machine-learning", "efficiency"],
    pricing: "Freemium",
    url: "https://lightning.ai",
    features: [
      "PyTorch integration",
      "Model training",
      "Easy deployment",
      "Cloud infrastructure",
      "Collaboration tools",
      "Experiment tracking"
    ],
    limitations: [
      "PyTorch focus",
      "Complex setup",
      "Learning curve"
    ],
    rating: 4.4,
    userCount: "200k+"
  },
  {
    id: "55",
    name: "Deci",
    description: "AI platform to optimize and deploy computer vision/NLP models efficiently.",
    category: "AI",
    tags: ["model-optimization", "computer-vision", "nlp", "deployment", "efficiency"],
    pricing: "Freemium",
    url: "https://deci.ai",
    features: [
      "Model optimization",
      "Computer vision",
      "NLP support",
      "Efficient deployment",
      "Performance tuning",
      "Hardware optimization"
    ],
    limitations: [
      "Enterprise focus",
      "Technical complexity",
      "Limited free tier"
    ],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "56",
    name: "Geekbot",
    description: "Automates team standups and surveys in Slack/MS Teams via AI logic.",
    category: "AI",
    tags: ["team-automation", "standups", "slack", "surveys", "ai-logic"],
    pricing: "Freemium",
    url: "https://geekbot.com",
    features: [
      "Standup automation",
      "Survey creation",
      "Slack integration",
      "Teams support",
      "AI insights",
      "Reporting"
    ],
    limitations: [
      "Platform dependency",
      "Limited features",
      "Team size limits"
    ],
    rating: 4.2,
    userCount: "100k+"
  },
  {
    id: "57",
    name: "Akkio",
    description: "No-code AI platform for data transformation, forecasting, and embedding ML workflows.",
    category: "AI",
    tags: ["no-code-ai", "data-transformation", "forecasting", "ml-workflows", "business"],
    pricing: "Freemium",
    url: "https://akkio.com",
    features: [
      "No-code AI",
      "Data transformation",
      "Forecasting",
      "ML workflows",
      "Business intelligence",
      "Easy integration"
    ],
    limitations: [
      "Data science focus",
      "Limited complexity",
      "Subscription required"
    ],
    rating: 4.1,
    userCount: "75k+"
  },
  {
    id: "58",
    name: "Dify.AI",
    description: "GenAI platform enabling visual app creation and orchestration for development teams.",
    category: "AI",
    tags: ["genai-platform", "visual-app-creation", "orchestration", "development-teams"],
    pricing: "Freemium",
    url: "https://dify.ai",
    features: [
      "Visual app creation",
      "AI orchestration",
      "Team collaboration",
      "Workflow automation",
      "Model integration",
      "Deployment tools"
    ],
    limitations: [
      "Complex setup",
      "Learning curve",
      "Limited documentation"
    ],
    rating: 4.2,
    userCount: "60k+"
  },
  {
    id: "59",
    name: "Aihouse.com",
    description: "AI-powered 3D interior design and floor plan generator for homes.",
    category: "AI",
    tags: ["3d-design", "interior-design", "floor-plans", "home-design", "visualization"],
    pricing: "Freemium",
    url: "https://aihouse.com",
    features: [
      "3D interior design",
      "Floor plan generation",
      "Home visualization",
      "Style variations",
      "Virtual staging",
      "Export options"
    ],
    limitations: [
      "Design focus only",
      "Limited customization",
      "Subscription for advanced"
    ],
    rating: 4.0,
    userCount: "100k+"
  },
  {
    id: "60",
    name: "Windmill",
    description: "Open-source platform to build internal tools, workflows, and data pipelines with AI assistance.",
    category: "Full-stack",
    tags: ["workflow", "automation", "internal-tools", "open-source", "data-pipelines"],
    pricing: "Freemium",
    url: "https://windmill.dev",
    features: [
      "Workflow automation",
      "Script to UI conversion",
      "Multi-language support",
      "API integrations",
      "Self-hosted option",
      "Team collaboration"
    ],
    limitations: [
      "Complex setup",
      "Learning curve",
      "Limited templates"
    ],
    rating: 4.3,
    userCount: "50k+"
  }
];

// Combine all stacks into one array for compatibility
export const aiTools: Tool[] = [
  ...aiToolsStack1,
  ...aiToolsStack2,
  ...aiToolsStack3,
  ...aiToolsStack4
];

// Utility functions
export const getUniqueCategories = (): string[] => {
  return Array.from(new Set(aiTools.map(tool => tool.category)));
};

export const getUniquePricing = (): string[] => {
  return Array.from(new Set(aiTools.map(tool => tool.pricing)));
};

export const getUniqueTags = (): string[] => {
  const allTags = aiTools.flatMap(tool => tool.tags);
  return Array.from(new Set(allTags)).sort();
};

// Export individual stacks for pagination
export const toolStacks = [
  { name: "Core AI Development Tools", tools: aiToolsStack1 },
  { name: "No-Code & Automation Tools", tools: aiToolsStack2 },
  { name: "WordPress & CMS Tools", tools: aiToolsStack3 },
  { name: "Advanced AI & Specialized Tools", tools: aiToolsStack4 }
];