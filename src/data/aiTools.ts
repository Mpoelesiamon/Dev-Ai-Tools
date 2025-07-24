import { Tool } from "@/components/ToolCard";

export const aiTools: Tool[] = [
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
    name: "Replit AI",
    description: "An AI-powered coding assistant that helps you write, debug, and explain code across multiple programming languages directly in your browser.",
    category: "Developer",
    tags: ["coding-assistant", "ai", "collaboration", "cloud-ide"],
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
    name: "GitHub Copilot",
    description: "AI-powered code completion tool that suggests whole functions and lines of code as you type, trained on billions of lines of code.",
    category: "Developer",
    tags: ["code-completion", "ai", "productivity", "github"],
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
    id: "5",
    name: "Cursor",
    description: "AI-first code editor built on VS Code that integrates AI directly into your coding workflow with advanced autocomplete and chat features.",
    category: "Developer",
    tags: ["code-editor", "ai", "vscode", "autocomplete"],
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
    id: "6",
    name: "v0 by Vercel",
    description: "AI-powered tool that generates React components and UI code from text descriptions, perfect for rapid prototyping and UI development.",
    category: "Full-stack",
    tags: ["ui-generation", "react", "components", "vercel"],
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
    id: "7",
    name: "Windmill",
    description: "Open-source platform to build internal tools, workflows, and data pipelines with AI assistance. Transform scripts into UIs instantly.",
    category: "No-code",
    tags: ["workflow", "automation", "internal-tools", "open-source"],
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
  },
  {
    id: "8",
    name: "Bubble",
    description: "No-code platform that enables users to build web applications visually without writing code. Now with AI-powered features for faster development.",
    category: "No-code",
    tags: ["no-code", "visual-development", "web-apps", "ai-assisted"],
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
    id: "9",
    name: "Framer",
    description: "Design and publishing tool that allows designers to create interactive websites and prototypes, now with AI-powered design generation.",
    category: "No-code",
    tags: ["design", "prototyping", "website-builder", "ai-design"],
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
    id: "10",
    name: "Claude",
    description: "Advanced AI assistant by Anthropic that excels at code analysis, writing, and complex reasoning tasks with strong safety measures.",
    category: "AI",
    tags: ["ai-assistant", "code-analysis", "writing", "reasoning"],
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
    id: "11",
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
  },
  {
    id: "12",
    name: "Webflow",
    description: "Visual web design platform that generates clean, semantic code. Build responsive websites without coding, with AI-powered design assistance.",
    category: "No-code",
    tags: ["web-design", "cms", "responsive", "visual-editor"],
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
    id: "13",
    name: "Zapier",
    description: "Automation platform that connects different apps and services to create workflows, now enhanced with AI for intelligent automation.",
    category: "No-code",
    tags: ["automation", "integrations", "workflow", "ai-automation"],
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
    id: "14",
    name: "Codeium",
    description: "Free AI-powered code acceleration toolkit offering intelligent autocomplete, chat, and search across 70+ programming languages.",
    category: "Developer",
    tags: ["code-completion", "free", "multi-language", "ai-assistant"],
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
    id: "15",
    name: "Tabnine",
    description: "AI code assistant that provides intelligent code completions based on your codebase patterns and industry best practices.",
    category: "Developer",
    tags: ["code-completion", "privacy", "enterprise", "ai-assistant"],
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
    id: "16",
    name: "Airtable",
    description: "Database-spreadsheet hybrid with AI-powered features for data organization, automation, and app building without coding.",
    category: "No-code",
    tags: ["database", "spreadsheet", "automation", "collaboration"],
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
  }
];

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