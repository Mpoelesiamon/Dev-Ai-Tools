import { Tool } from "@/components/ToolCard";

// --- Research Tools ---
export const researchTools: Tool[] = [
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
    userCount: "10M+"
  },
  {
    id: "r3",
    name: "Bing Chat",
    description: "Microsoft's AI-powered search and chat assistant.",
    category: "Research",
    tags: ["search", "ai-chat", "research"],
    pricing: "Free",
    url: "https://bing.com/chat",
    features: ["Web search", "AI chat", "Research"],
    rating: 4.2,
    userCount: "50M+"
  },
  {
    id: "r4",
    name: "Clearscope",
    description: "SEO and content research platform powered by AI.",
    category: "Research",
    tags: ["seo", "content-research", "ai"],
    pricing: "Paid",
    url: "https://clearscope.io",
    features: ["SEO research", "Content optimization"],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "r5",
    name: "MarketMuse",
    description: "AI-driven content research and optimization.",
    category: "Research",
    tags: ["content", "research", "optimization"],
    pricing: "Paid",
    url: "https://marketmuse.com",
    features: ["Content research", "Optimization"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "r6",
    name: "Perplexity",
    description: "AI-powered answer engine for research and Q&A.",
    category: "Research",
    tags: ["q-and-a", "research", "ai"],
    pricing: "Freemium",
    url: "https://perplexity.ai",
    features: ["Q&A", "Research", "AI answers"],
    rating: 4.4,
    userCount: "5M+"
  }
];

// --- Image Tools ---
export const imageTools: Tool[] = [
  {
    id: "i1",
    name: "Segmind",
    description: "AI image generation and editing platform.",
    category: "Image",
    tags: ["image-generation", "editing", "ai"],
    pricing: "Freemium",
    url: "https://segmind.com",
    features: ["Image generation", "Editing"],
    rating: 4.2,
    userCount: "200k+"
  },
  {
    id: "i2",
    name: "Zapier",
    description: "Workflow automation with image and data handling.",
    category: "Image",
    tags: ["automation", "image", "workflow"],
    pricing: "Freemium",
    url: "https://zapier.com",
    features: ["Workflow automation", "Image handling"],
    rating: 4.3,
    userCount: "5M+"
  },
  {
    id: "i3",
    name: "Leap",
    description: "AI image generation and enhancement.",
    category: "Image",
    tags: ["image-generation", "enhancement", "ai"],
    pricing: "Freemium",
    url: "https://tryleap.ai",
    features: ["Image generation", "Enhancement"],
    rating: 4.1,
    userCount: "100k+"
  },
  {
    id: "i4",
    name: "Clarif AI",
    description: "AI for image recognition and tagging.",
    category: "Image",
    tags: ["image-recognition", "tagging", "ai"],
    pricing: "Freemium",
    url: "https://clarifai.com",
    features: ["Image recognition", "Tagging"],
    rating: 4.2,
    userCount: "150k+"
  },
  {
    id: "i5",
    name: "Gencraft",
    description: "AI-powered image and art generation.",
    category: "Image",
    tags: ["art-generation", "image", "ai"],
    pricing: "Freemium",
    url: "https://gencraft.com",
    features: ["Art generation", "Image creation"],
    rating: 4.3,
    userCount: "80k+"
  },
  {
    id: "i6",
    name: "Midjourney",
    description: "AI image generation for artistic and visual content.",
    category: "Image",
    tags: ["image-generation", "artistic", "visual-content"],
    pricing: "Paid",
    url: "https://midjourney.com",
    features: ["High-quality images", "Artistic styles"],
    rating: 4.7,
    userCount: "15M+"
  }
];

// --- Copywriting Tools ---
export const copywritingTools: Tool[] = [
  {
    id: "c1",
    name: "CopyAI",
    description: "AI-powered copywriting and content generation.",
    category: "Copywriting",
    tags: ["copywriting", "content-generation", "ai"],
    pricing: "Freemium",
    url: "https://copy.ai",
    features: ["Content generation", "Copywriting"],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "c2",
    name: "Jasper",
    description: "AI-powered copywriting and content optimization.",
    category: "Copywriting",
    tags: ["copywriting", "content-optimization", "ai"],
    pricing: "Freemium",
    url: "https://jasper.ai",
    features: ["Content optimization", "Copywriting"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "c3",
    name: "Rytr",
    description: "AI-powered copywriting and content generation.",
    category: "Copywriting",
    tags: ["copywriting", "content-generation", "ai"],
    pricing: "Freemium",
    url: "https://rytr.me",
    features: ["Content generation", "Copywriting"],
    rating: 4.2,
    userCount: "100k+"
  },
  {
    id: "c4",
    name: "QuillBot",
    description: "AI-powered paraphrasing and content optimization.",
    category: "Copywriting",
    tags: ["paraphrasing", "content-optimization", "ai"],
    pricing: "Freemium",
    url: "https://quillbot.com",
    features: ["Paraphrasing", "Content optimization"],
    rating: 4.1,
    userCount: "50k+"
  },
  {
    id: "c5",
    name: "Co-pilot",
    description: "AI-powered copywriting and content generation.",
    category: "Copywriting",
    tags: ["copywriting", "content-generation", "ai"],
    pricing: "Freemium",
    url: "https://co-pilot.ai",
    features: ["Content generation", "Copywriting"],
    rating: 4.0,
    userCount: "20k+"
  }
];

// --- SEO Tools ---
export const seoTools: Tool[] = [
  {
    id: "s1",
    name: "Ahrefs",
    description: "SEO research and analysis platform.",
    category: "SEO",
    tags: ["seo", "research", "analysis"],
    pricing: "Paid",
    url: "https://ahrefs.com",
    features: ["SEO research", "Keyword analysis", "Backlink analysis"],
    rating: 4.6,
    userCount: "1M+"
  },
  {
    id: "s2",
    name: "SEMrush",
    description: "SEO and digital marketing research platform.",
    category: "SEO",
    tags: ["seo", "marketing", "research"],
    pricing: "Paid",
    url: "https://semrush.com",
    features: ["Keyword research", "Competitor analysis", "Content analysis"],
    rating: 4.5,
    userCount: "500k+"
  },
  {
    id: "s3",
    name: "Moz",
    description: "SEO research and analytics platform.",
    category: "SEO",
    tags: ["seo", "research", "analytics"],
    pricing: "Paid",
    url: "https://moz.com",
    features: ["Keyword research", "SEO metrics", "Content analysis"],
    rating: 4.4,
    userCount: "200k+"
  },
  {
    id: "s4",
    name: "Google Search Console",
    description: "Free tool for monitoring, optimizing, and maintaining your site's presence in Google Search results.",
    category: "SEO",
    tags: ["seo", "google", "search-console"],
    pricing: "Free",
    url: "https://search.google.com/search-console",
    features: ["Site monitoring", "Keyword tracking", "Performance insights"],
    rating: 4.3,
    userCount: "1M+"
  },
  {
    id: "s5",
    name: "Screaming Frog SEO Spider",
    description: "SEO audit and link analysis tool.",
    category: "SEO",
    tags: ["seo", "audit", "link-analysis"],
    pricing: "Paid",
    url: "https://screamingfrog.co.uk/seo-spider/",
    features: ["Site audit", "Link analysis", "Crawl errors"],
    rating: 4.2,
    userCount: "100k+"
  }
];

// --- Chatbot Tools ---
export const chatbotTools: Tool[] = [
  {
    id: "ch1",
    name: "ChatGPT",
    description: "Conversational AI for research, coding, and more.",
    category: "Chatbot",
    tags: ["conversational-ai", "research", "writing", "code-generation"],
    pricing: "Freemium",
    url: "https://chat.openai.com",
    features: ["Natural language processing", "Code generation", "Research assistance"],
    rating: 4.7,
    userCount: "100M+"
  },
  {
    id: "ch2",
    name: "Claude AI",
    description: "AI assistant for research, writing, and analysis.",
    category: "Chatbot",
    tags: ["ai-assistant", "research", "writing"],
    pricing: "Freemium",
    url: "https://claude.ai",
    features: ["Research support", "Writing help", "Analysis"],
    rating: 4.5,
    userCount: "10M+"
  },
  {
    id: "ch3",
    name: "Bing Chat",
    description: "Microsoft's AI-powered search and chat assistant.",
    category: "Chatbot",
    tags: ["search", "ai-chat", "research"],
    pricing: "Free",
    url: "https://bing.com/chat",
    features: ["Web search", "AI chat", "Research"],
    rating: 4.2,
    userCount: "50M+"
  },
  {
    id: "ch4",
    name: "Clearscope",
    description: "SEO and content research platform powered by AI.",
    category: "Chatbot",
    tags: ["seo", "content-research", "ai"],
    pricing: "Paid",
    url: "https://clearscope.io",
    features: ["SEO research", "Content optimization"],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "ch5",
    name: "MarketMuse",
    description: "AI-driven content research and optimization.",
    category: "Chatbot",
    tags: ["content", "research", "optimization"],
    pricing: "Paid",
    url: "https://marketmuse.com",
    features: ["Content research", "Optimization"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "ch6",
    name: "Perplexity",
    description: "AI-powered answer engine for research and Q&A.",
    category: "Chatbot",
    tags: ["q-and-a", "research", "ai"],
    pricing: "Freemium",
    url: "https://perplexity.ai",
    features: ["Q&A", "Research", "AI answers"],
    rating: 4.4,
    userCount: "5M+"
  }
];

// --- Presentation Tools ---
export const presentationTools: Tool[] = [
  {
    id: "p1",
    name: "Canva",
    description: "Design and publish visual content easily.",
    category: "Presentation",
    tags: ["design", "visual-content", "publishing"],
    pricing: "Freemium",
    url: "https://canva.com",
    features: ["Design", "Publishing"],
    rating: 4.5,
    userCount: "100M+"
  },
  {
    id: "p2",
    name: "Slidesgo",
    description: "Free and premium templates for presentations.",
    category: "Presentation",
    tags: ["templates", "presentations"],
    pricing: "Free",
    url: "https://slidesgo.com",
    features: ["Templates", "Presentations"],
    rating: 4.2,
    userCount: "500k+"
  },
  {
    id: "p3",
    name: "Prezi",
    description: "Interactive presentations with a focus on storytelling.",
    category: "Presentation",
    tags: ["interactive", "presentations", "storytelling"],
    pricing: "Freemium",
    url: "https://prezi.com",
    features: ["Interactive presentations", "Storytelling"],
    rating: 4.3,
    userCount: "1M+"
  },
  {
    id: "p4",
    name: "Miro",
    description: "Collaborative whiteboard for visual thinking and team collaboration.",
    category: "Presentation",
    tags: ["collaborative", "whiteboard", "visual-thinking"],
    pricing: "Freemium",
    url: "https://miro.com",
    features: ["Collaborative whiteboard", "Visual thinking"],
    rating: 4.4,
    userCount: "1M+"
  },
  {
    id: "p5",
    name: "Figma",
    description: "Design and prototyping tool for presentations.",
    category: "Presentation",
    tags: ["design", "prototyping", "presentations"],
    pricing: "Freemium",
    url: "https://figma.com",
    features: ["Design", "Prototyping"],
    rating: 4.1,
    userCount: "1M+"
  }
];

// --- Logo Tools ---
export const logoTools: Tool[] = [
  {
    id: "l1",
    name: "LogoMaker",
    description: "Free and premium logo design platform.",
    category: "Logo",
    tags: ["logo-design", "free", "premium"],
    pricing: "Free",
    url: "https://logomaker.com",
    features: ["Free logo design", "Premium options"],
    rating: 4.3,
    userCount: "1M+"
  },
  {
    id: "l2",
    name: "Looka",
    description: "AI-powered logo design and brand identity.",
    category: "Logo",
    tags: ["logo-design", "ai", "brand-identity"],
    pricing: "Freemium",
    url: "https://looka.com",
    features: ["Logo design", "Brand identity"],
    rating: 4.2,
    userCount: "100k+"
  },
  {
    id: "l3",
    name: "Tailwind",
    description: "Open-source logo design tool.",
    category: "Logo",
    tags: ["logo-design", "open-source"],
    pricing: "Free",
    url: "https://tailwindcss.com/logo",
    features: ["Logo design"],
    rating: 4.1,
    userCount: "50k+"
  },
  {
    id: "l4",
    name: "Logo.com",
    description: "AI-powered logo design and brand identity.",
    category: "Logo",
    tags: ["logo-design", "ai", "brand-identity"],
    pricing: "Freemium",
    url: "https://logo.com",
    features: ["Logo design", "Brand identity"],
    rating: 4.0,
    userCount: "50k+"
  },
  {
    id: "l5",
    name: "Squarespace",
    description: "Logo design tool within Squarespace.",
    category: "Logo",
    tags: ["logo-design", "squarespace"],
    pricing: "Freemium",
    url: "https://squarespace.com/logo",
    features: ["Logo design"],
    rating: 4.2,
    userCount: "100k+"
  }
];

// --- Audio Tools ---
export const audioTools: Tool[] = [
  {
    id: "a1",
    name: "ElevenLabs",
    description: "AI-powered voice generation and audio editing.",
    category: "Audio",
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://elevenlabs.io",
    features: ["Voice generation", "Audio editing"],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "a2",
    name: "Resemble AI",
    description: "AI-powered voice generation and audio editing.",
    category: "Audio",
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://resemble.ai",
    features: ["Voice generation", "Audio editing"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "a3",
    name: "Murf AI",
    description: "AI-powered voice generation and audio editing.",
    category: "Audio",
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://murf.ai",
    features: ["Voice generation", "Audio editing"],
    rating: 4.2,
    userCount: "20k+"
  },
  {
    id: "a4",
    name: "Voicemod",
    description: "AI-powered voice modification and audio effects.",
    category: "Audio",
    tags: ["voice-modification", "audio-effects", "ai"],
    pricing: "Freemium",
    url: "https://voicemod.com",
    features: ["Voice modification", "Audio effects"],
    rating: 4.1,
    userCount: "10k+"
  },
  {
    id: "a5",
    name: "Synthesia",
    description: "AI-powered voice generation and audio editing.",
    category: "Audio",
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://synthesia.io",
    features: ["Voice generation", "Audio editing"],
    rating: 4.0,
    userCount: "5k+"
  }
];

// --- Marketing Tools ---
export const marketingTools: Tool[] = [
  {
    id: "m1",
    name: "HubSpot",
    description: "Marketing automation and analytics platform.",
    category: "Marketing",
    tags: ["marketing", "automation", "analytics"],
    pricing: "Freemium",
    url: "https://hubspot.com",
    features: ["Marketing automation", "Analytics"],
    rating: 4.6,
    userCount: "1M+"
  },
  {
    id: "m2",
    name: "Buffer",
    description: "Social media management and analytics.",
    category: "Marketing",
    tags: ["social-media", "management", "analytics"],
    pricing: "Freemium",
    url: "https://buffer.com",
    features: ["Social media management", "Analytics"],
    rating: 4.5,
    userCount: "500k+"
  },
  {
    id: "m3",
    name: "Hootsuite",
    description: "Social media management and analytics.",
    category: "Marketing",
    tags: ["social-media", "management", "analytics"],
    pricing: "Freemium",
    url: "https://hootsuite.com",
    features: ["Social media management", "Analytics"],
    rating: 4.4,
    userCount: "300k+"
  },
  {
    id: "m4",
    name: "Sprout Social",
    description: "Social media management and analytics.",
    category: "Marketing",
    tags: ["social-media", "management", "analytics"],
    pricing: "Freemium",
    url: "https://sproutsocial.com",
    features: ["Social media management", "Analytics"],
    rating: 4.3,
    userCount: "200k+"
  },
  {
    id: "m5",
    name: "Mint",
    description: "Marketing analytics and insights platform.",
    category: "Marketing",
    tags: ["marketing", "analytics", "insights"],
    pricing: "Freemium",
    url: "https://mint.com",
    features: ["Marketing analytics", "Insights"],
    rating: 4.2,
    userCount: "100k+"
  }
];

// --- Content Creation Tools ---
export const contentCreationTools: Tool[] = [
  {
    id: "cc1",
    name: "Canva",
    description: "Design and publish visual content easily.",
    category: "Content Creation",
    tags: ["design", "visual-content", "publishing"],
    pricing: "Freemium",
    url: "https://canva.com",
    features: ["Design", "Publishing"],
    rating: 4.5,
    userCount: "100M+"
  },
  {
    id: "cc2",
    name: "Slidesgo",
    description: "Free and premium templates for presentations.",
    category: "Content Creation",
    tags: ["templates", "presentations"],
    pricing: "Free",
    url: "https://slidesgo.com",
    features: ["Templates", "Presentations"],
    rating: 4.2,
    userCount: "500k+"
  },
  {
    id: "cc3",
    name: "Prezi",
    description: "Interactive presentations with a focus on storytelling.",
    category: "Content Creation",
    tags: ["interactive", "presentations", "storytelling"],
    pricing: "Freemium",
    url: "https://prezi.com",
    features: ["Interactive presentations", "Storytelling"],
    rating: 4.3,
    userCount: "1M+"
  },
  {
    id: "cc4",
    name: "Miro",
    description: "Collaborative whiteboard for visual thinking and team collaboration.",
    category: "Content Creation",
    tags: ["collaborative", "whiteboard", "visual-thinking"],
    pricing: "Freemium",
    url: "https://miro.com",
    features: ["Collaborative whiteboard", "Visual thinking"],
    rating: 4.4,
    userCount: "1M+"
  },
  {
    id: "cc5",
    name: "Figma",
    description: "Design and prototyping tool for presentations.",
    category: "Content Creation",
    tags: ["design", "prototyping", "presentations"],
    pricing: "Freemium",
    url: "https://figma.com",
    features: ["Design", "Prototyping"],
    rating: 4.1,
    userCount: "1M+"
  }
];

// --- Writing Tools ---
export const writingTools: Tool[] = [
  {
    id: "w1",
    name: "CopyAI",
    description: "AI-powered copywriting and content generation.",
    category: "Writing",
    tags: ["copywriting", "content-generation", "ai"],
    pricing: "Freemium",
    url: "https://copy.ai",
    features: ["Content generation", "Copywriting"],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "w2",
    name: "Jasper",
    description: "AI-powered copywriting and content optimization.",
    category: "Writing",
    tags: ["copywriting", "content-optimization", "ai"],
    pricing: "Freemium",
    url: "https://jasper.ai",
    features: ["Content optimization", "Copywriting"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "w3",
    name: "Rytr",
    description: "AI-powered copywriting and content generation.",
    category: "Writing",
    tags: ["copywriting", "content-generation", "ai"],
    pricing: "Freemium",
    url: "https://rytr.me",
    features: ["Content generation", "Copywriting"],
    rating: 4.2,
    userCount: "100k+"
  },
  {
    id: "w4",
    name: "QuillBot",
    description: "AI-powered paraphrasing and content optimization.",
    category: "Writing",
    tags: ["paraphrasing", "content-optimization", "ai"],
    pricing: "Freemium",
    url: "https://quillbot.com",
    features: ["Paraphrasing", "Content optimization"],
    rating: 4.1,
    userCount: "50k+"
  },
  {
    id: "w5",
    name: "Co-pilot",
    description: "AI-powered copywriting and content generation.",
    category: "Writing",
    tags: ["copywriting", "content-generation", "ai"],
    pricing: "Freemium",
    url: "https://co-pilot.ai",
    features: ["Content generation", "Copywriting"],
    rating: 4.0,
    userCount: "20k+"
  }
];

// --- Website Tools ---
export const websiteTools: Tool[] = [
  {
    id: "web1",
    name: "Bubble",
    description: "Fullstack no-code platform with AI that builds frontend, backend, and workflows visually without coding.",
    category: "Website",
    tags: ["no-code", "visual-development", "web-apps", "ai-assisted", "fullstack"],
    pricing: "Freemium",
    url: "https://bubble.io",
    features: ["Visual development", "Database included", "User authentication", "API integrations", "Responsive design", "AI assistance"],
    rating: 4.2,
    userCount: "3M+"
  },
  {
    id: "web2",
    name: "Zapier",
    description: "Workflow automation with image and data handling.",
    category: "Website",
    tags: ["automation", "image", "workflow"],
    pricing: "Freemium",
    url: "https://zapier.com",
    features: ["Workflow automation", "Image handling"],
    rating: 4.3,
    userCount: "5M+"
  },
  {
    id: "web3",
    name: "Leap",
    description: "AI image generation and enhancement.",
    category: "Website",
    tags: ["image-generation", "enhancement", "ai"],
    pricing: "Freemium",
    url: "https://tryleap.ai",
    features: ["Image generation", "Enhancement"],
    rating: 4.1,
    userCount: "100k+"
  },
  {
    id: "web4",
    name: "Clarif AI",
    description: "AI for image recognition and tagging.",
    category: "Website",
    tags: ["image-recognition", "tagging", "ai"],
    pricing: "Freemium",
    url: "https://clarifai.com",
    features: ["Image recognition", "Tagging"],
    rating: 4.2,
    userCount: "150k+"
  },
  {
    id: "web5",
    name: "Gencraft",
    description: "AI-powered image and art generation.",
    category: "Website",
    tags: ["art-generation", "image", "ai"],
    pricing: "Freemium",
    url: "https://gencraft.com",
    features: ["Art generation", "Image creation"],
    rating: 4.3,
    userCount: "80k+"
  },
  {
    id: "web6",
    name: "Midjourney",
    description: "AI image generation for artistic and visual content.",
    category: "Website",
    tags: ["image-generation", "artistic", "visual-content"],
    pricing: "Paid",
    url: "https://midjourney.com",
    features: ["High-quality images", "Artistic styles"],
    rating: 4.7,
    userCount: "15M+"
  }
];

// --- Coding Tools ---
export const codingTools: Tool[] = [
  {
    id: "code1",
    name: "Codeium",
    description: "Free AI code completion tool with chat support for developers across 70+ programming languages.",
    category: "Coding",
    tags: ["code-completion", "free", "multi-language", "ai-assistant", "chat"],
    pricing: "Free",
    url: "https://codeium.com",
    features: ["70+ language support", "Intelligent autocomplete", "AI chat assistant", "Code search", "IDE integrations", "Team features"],
    rating: 4.6,
    userCount: "400k+"
  },
  {
    id: "code2",
    name: "GitHub Copilot",
    description: "AI pair programmer offering real-time code completions and function suggestions trained on billions of lines of code.",
    category: "Coding",
    tags: ["code-completion", "ai", "productivity", "github", "pair-programming"],
    pricing: "Paid",
    url: "https://github.com/features/copilot",
    features: ["Real-time code suggestions", "Multi-language support", "IDE integration", "Context-aware completions", "Function generation", "Comment-to-code"],
    rating: 4.5,
    userCount: "5M+"
  },
  {
    id: "code3",
    name: "Cursor IDE",
    description: "AI-enhanced code editor based on VS Code for full-stack developers with inline assistance and codebase understanding.",
    category: "Coding",
    tags: ["code-editor", "ai", "vscode", "autocomplete", "inline-assistance"],
    pricing: "Freemium",
    url: "https://cursor.sh",
    features: ["AI-powered autocomplete", "Integrated chat", "VS Code compatibility", "Codebase understanding", "Refactoring assistance", "Multi-file editing"],
    rating: 4.7,
    userCount: "500k+"
  },
  {
    id: "code4",
    name: "Replit AI",
    description: "In-browser AI coding assistant for live collaboration and instant code generation across multiple programming languages.",
    category: "Coding",
    tags: ["coding-assistant", "ai", "collaboration", "cloud-ide", "browser-based"],
    pricing: "Freemium",
    url: "https://replit.com",
    features: ["Multi-language support", "Real-time collaboration", "Cloud-based IDE", "AI code completion", "Instant deployment", "Version control"],
    rating: 4.6,
    userCount: "1M+"
  },
  {
    id: "code5",
    name: "Warp AI",
    description: "Rust-based AI-powered terminal offering autocomplete and automation for enhanced command-line experience.",
    category: "Coding",
    tags: ["terminal", "rust", "autocomplete", "automation", "command-line"],
    pricing: "Freemium",
    url: "https://warp.dev",
    features: ["AI-powered terminal", "Command autocomplete", "Workflow automation", "Modern interface", "Team collaboration", "Performance optimized"],
    rating: 4.5,
    userCount: "200k+"
  },
  {
    id: "code6",
    name: "Qodo (CodiumAI)",
    description: "AI tool for code integrity, testing, and generation workflows with quality assurance.",
    category: "Coding",
    tags: ["code-integrity", "testing", "quality-assurance", "workflows", "ai-testing"],
    pricing: "Freemium",
    url: "https://qodo.ai",
    features: ["Code integrity", "Test generation", "Quality assurance", "Workflow automation", "Code review", "Bug detection"],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "code7",
    name: "AutoGPT",
    description: "Autonomous GPT agent that breaks goals into tasks and executes them iteratively.",
    category: "Coding",
    tags: ["autonomous", "task-automation", "goal-oriented", "iterative", "agent"],
    pricing: "Free",
    url: "https://github.com/Significant-Gravitas/AutoGPT",
    features: ["Autonomous operation", "Goal decomposition", "Task execution", "Iterative improvement", "Web browsing", "File operations"],
    rating: 4.2,
    userCount: "300k+"
  },
  {
    id: "code8",
    name: "AskCodi",
    description: "AI dev assistant that creates logic, SQL, tests, and docs from English prompts.",
    category: "Coding",
    tags: ["logic-creation", "sql", "testing", "documentation", "english-prompts"],
    pricing: "Freemium",
    url: "https://askcodi.com",
    features: ["Logic generation", "SQL queries", "Test creation", "Documentation", "Multiple languages", "IDE integration"],
    rating: 4.1,
    userCount: "80k+"
  },
  {
    id: "code9",
    name: "Sourcegraph",
    description: "Platform offering universal code search and AI assistance via Cody for large codebases.",
    category: "Coding",
    tags: ["code-search", "universal", "large-codebases", "enterprise", "ai-assistance"],
    pricing: "Freemium",
    url: "https://sourcegraph.com",
    features: ["Universal code search", "Large codebase support", "AI assistance", "Enterprise features", "Code intelligence", "Team collaboration"],
    rating: 4.5,
    userCount: "200k+"
  },
  {
    id: "code10",
    name: "Eclipse Theia",
    description: "Open-source IDE framework with AI support built-in for extensible development environments.",
    category: "Coding",
    tags: ["open-source", "ide-framework", "extensible", "ai-support", "development"],
    pricing: "Free",
    url: "https://theia-ide.org",
    features: ["Open source", "Extensible framework", "AI support", "Cloud native", "VS Code compatibility", "Custom IDE creation"],
    rating: 4.2,
    userCount: "50k+"
  },
  {
    id: "code11",
    name: "Linear",
    description: "AI-enhanced issue tracker and product roadmap manager for development teams.",
    category: "Coding",
    tags: ["issue-tracking", "product-roadmap", "team-management", "ai-enhanced"],
    pricing: "Freemium",
    url: "https://linear.app",
    features: ["Issue tracking", "Product roadmaps", "Team management", "AI enhancements", "Project planning", "Integration support"],
    rating: 4.6,
    userCount: "300k+"
  },
  {
    id: "code12",
    name: "Lightning AI",
    description: "Platform for training and deploying AI using PyTorch with development efficiency.",
    category: "Coding",
    tags: ["pytorch", "ai-training", "deployment", "machine-learning", "efficiency"],
    pricing: "Freemium",
    url: "https://lightning.ai",
    features: ["PyTorch integration", "Model training", "Easy deployment", "Cloud infrastructure", "Collaboration tools", "Experiment tracking"],
    rating: 4.4,
    userCount: "200k+"
  },
  {
    id: "code13",
    name: "Deci",
    description: "AI platform to optimize and deploy computer vision/NLP models efficiently.",
    category: "Coding",
    tags: ["model-optimization", "computer-vision", "nlp", "deployment", "efficiency"],
    pricing: "Freemium",
    url: "https://deci.ai",
    features: ["Model optimization", "Computer vision", "NLP support", "Efficient deployment", "Performance tuning", "Hardware optimization"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "code14",
    name: "Geekbot",
    description: "Automates team standups and surveys in Slack/MS Teams via AI logic.",
    category: "Coding",
    tags: ["team-automation", "standups", "slack", "surveys", "ai-logic"],
    pricing: "Freemium",
    url: "https://geekbot.com",
    features: ["Standup automation", "Survey creation", "Slack integration", "Teams support", "AI insights", "Reporting"],
    rating: 4.2,
    userCount: "100k+"
  },
  {
    id: "code15",
    name: "Akkio",
    description: "No-code AI platform for data transformation, forecasting, and embedding ML workflows.",
    category: "Coding",
    tags: ["no-code-ai", "data-transformation", "forecasting", "ml-workflows", "business"],
    pricing: "Freemium",
    url: "https://akkio.com",
    features: ["No-code AI", "Data transformation", "Forecasting", "ML workflows", "Business intelligence", "Easy integration"],
    rating: 4.1,
    userCount: "75k+"
  },
  {
    id: "code16",
    name: "Dify.AI",
    description: "GenAI platform enabling visual app creation and orchestration for development teams.",
    category: "Coding",
    tags: ["genai-platform", "visual-app-creation", "orchestration", "development-teams"],
    pricing: "Freemium",
    url: "https://dify.ai",
    features: ["Visual app creation", "AI orchestration", "Team collaboration", "Workflow automation", "Model integration", "Deployment tools"],
    rating: 4.2,
    userCount: "60k+"
  },
  {
    id: "code17",
    name: "Aihouse.com",
    description: "AI-powered 3D interior design and floor plan generator for homes.",
    category: "Coding",
    tags: ["3d-design", "interior-design", "floor-plans", "home-design", "visualization"],
    pricing: "Freemium",
    url: "https://aihouse.com",
    features: ["3D interior design", "Floor plan generation", "Home visualization", "Style variations", "Virtual staging", "Export options"],
    rating: 4.0,
    userCount: "100k+"
  },
  {
    id: "code18",
    name: "Windmill",
    description: "Open-source platform to build internal tools, workflows, and data pipelines with AI assistance.",
    category: "Coding",
    tags: ["workflow", "automation", "internal-tools", "open-source", "data-pipelines"],
    pricing: "Freemium",
    url: "https://windmill.dev",
    features: ["Workflow automation", "Script to UI conversion", "Multi-language support", "API integrations", "Self-hosted option", "Team collaboration"],
    rating: 4.3,
    userCount: "50k+"
  }
];

// --- Sales Tools ---
export const salesTools: Tool[] = [
  {
    id: "s1",
    name: "HubSpot",
    description: "Marketing automation and analytics platform.",
    category: "Sales",
    tags: ["marketing", "automation", "analytics"],
    pricing: "Freemium",
    url: "https://hubspot.com",
    features: ["Marketing automation", "Analytics"],
    rating: 4.6,
    userCount: "1M+"
  },
  {
    id: "s2",
    name: "Buffer",
    description: "Social media management and analytics.",
    category: "Sales",
    tags: ["social-media", "management", "analytics"],
    pricing: "Freemium",
    url: "https://buffer.com",
    features: ["Social media management", "Analytics"],
    rating: 4.5,
    userCount: "500k+"
  },
  {
    id: "s3",
    name: "Hootsuite",
    description: "Social media management and analytics.",
    category: "Sales",
    tags: ["social-media", "management", "analytics"],
    pricing: "Freemium",
    url: "https://hootsuite.com",
    features: ["Social media management", "Analytics"],
    rating: 4.4,
    userCount: "300k+"
  },
  {
    id: "s4",
    name: "Sprout Social",
    description: "Social media management and analytics.",
    category: "Sales",
    tags: ["social-media", "management", "analytics"],
    pricing: "Freemium",
    url: "https://sproutsocial.com",
    features: ["Social media management", "Analytics"],
    rating: 4.3,
    userCount: "200k+"
  },
  {
    id: "s5",
    name: "Mint",
    description: "Marketing analytics and insights platform.",
    category: "Sales",
    tags: ["marketing", "analytics", "insights"],
    pricing: "Freemium",
    url: "https://mint.com",
    features: ["Marketing analytics", "Insights"],
    rating: 4.2,
    userCount: "100k+"
  }
];

// --- Art Generators ---
export const artGenerators: Tool[] = [
  {
    id: "art1",
    name: "Segmind",
    description: "AI image generation and editing platform.",
    category: "Art Generators",
    tags: ["image-generation", "editing", "ai"],
    pricing: "Freemium",
    url: "https://segmind.com",
    features: ["Image generation", "Editing"],
    rating: 4.2,
    userCount: "200k+"
  },
  {
    id: "art2",
    name: "Zapier",
    description: "Workflow automation with image and data handling.",
    category: "Art Generators",
    tags: ["automation", "image", "workflow"],
    pricing: "Freemium",
    url: "https://zapier.com",
    features: ["Workflow automation", "Image handling"],
    rating: 4.3,
    userCount: "5M+"
  },
  {
    id: "art3",
    name: "Leap",
    description: "AI image generation and enhancement.",
    category: "Art Generators",
    tags: ["image-generation", "enhancement", "ai"],
    pricing: "Freemium",
    url: "https://tryleap.ai",
    features: ["Image generation", "Enhancement"],
    rating: 4.1,
    userCount: "100k+"
  },
  {
    id: "art4",
    name: "Clarif AI",
    description: "AI for image recognition and tagging.",
    category: "Art Generators",
    tags: ["image-recognition", "tagging", "ai"],
    pricing: "Freemium",
    url: "https://clarifai.com",
    features: ["Image recognition", "Tagging"],
    rating: 4.2,
    userCount: "150k+"
  },
  {
    id: "art5",
    name: "Gencraft",
    description: "AI-powered image and art generation.",
    category: "Art Generators",
    tags: ["art-generation", "image", "ai"],
    pricing: "Freemium",
    url: "https://gencraft.com",
    features: ["Art generation", "Image creation"],
    rating: 4.3,
    userCount: "80k+"
  },
  {
    id: "art6",
    name: "Midjourney",
    description: "AI image generation for artistic and visual content.",
    category: "Art Generators",
    tags: ["image-generation", "artistic", "visual-content"],
    pricing: "Paid",
    url: "https://midjourney.com",
    features: ["High-quality images", "Artistic styles"],
    rating: 4.7,
    userCount: "15M+"
  }
];

// --- Productivity Tools ---
export const productivityTools: Tool[] = [
  {
    id: "prod1",
    name: "Notion",
    description: "All-in-one workspace for your notes, tasks, wikis, and databases.",
    category: "Productivity",
    tags: ["notes", "tasks", "wikis", "databases"],
    pricing: "Freemium",
    url: "https://notion.so",
    features: ["Notes", "Tasks", "Wikis", "Databases"],
    rating: 4.6,
    userCount: "10M+"
  },
  {
    id: "prod2",
    name: "Trello",
    description: "Visual collaboration tool for your projects.",
    category: "Productivity",
    tags: ["collaboration", "projects", "visual"],
    pricing: "Freemium",
    url: "https://trello.com",
    features: ["Collaboration", "Projects", "Visual"],
    rating: 4.5,
    userCount: "500k+"
  },
  {
    id: "prod3",
    name: "Asana",
    description: "Project management and collaboration platform.",
    category: "Productivity",
    tags: ["project-management", "collaboration", "tasks"],
    pricing: "Freemium",
    url: "https://asana.com",
    features: ["Project management", "Collaboration", "Tasks"],
    rating: 4.4,
    userCount: "1M+"
  },
  {
    id: "prod4",
    name: "Jira",
    description: "Issue tracking and project management software.",
    category: "Productivity",
    tags: ["issue-tracking", "project-management", "software"],
    pricing: "Freemium",
    url: "https://jira.com",
    features: ["Issue tracking", "Project management", "Software"],
    rating: 4.3,
    userCount: "500k+"
  },
  {
    id: "prod5",
    name: "Slack",
    description: "Team communication and collaboration platform.",
    category: "Productivity",
    tags: ["communication", "collaboration", "platform"],
    pricing: "Freemium",
    url: "https://slack.com",
    features: ["Communication", "Collaboration", "Platform"],
    rating: 4.2,
    userCount: "300M+"
  }
];

// --- Video Tools ---
export const videoTools: Tool[] = [
  {
    id: "vid1",
    name: "Canva",
    description: "Design and publish visual content easily.",
    category: "Video",
    tags: ["design", "visual-content", "publishing"],
    pricing: "Freemium",
    url: "https://canva.com",
    features: ["Design", "Publishing"],
    rating: 4.5,
    userCount: "100M+"
  },
  {
    id: "vid2",
    name: "Slidesgo",
    description: "Free and premium templates for presentations.",
    category: "Video",
    tags: ["templates", "presentations"],
    pricing: "Free",
    url: "https://slidesgo.com",
    features: ["Templates", "Presentations"],
    rating: 4.2,
    userCount: "500k+"
  },
  {
    id: "vid3",
    name: "Prezi",
    description: "Interactive presentations with a focus on storytelling.",
    category: "Video",
    tags: ["interactive", "presentations", "storytelling"],
    pricing: "Freemium",
    url: "https://prezi.com",
    features: ["Interactive presentations", "Storytelling"],
    rating: 4.3,
    userCount: "1M+"
  },
  {
    id: "vid4",
    name: "Miro",
    description: "Collaborative whiteboard for visual thinking and team collaboration.",
    category: "Video",
    tags: ["collaborative", "whiteboard", "visual-thinking"],
    pricing: "Freemium",
    url: "https://miro.com",
    features: ["Collaborative whiteboard", "Visual thinking"],
    rating: 4.4,
    userCount: "1M+"
  },
  {
    id: "vid5",
    name: "Figma",
    description: "Design and prototyping tool for presentations.",
    category: "Video",
    tags: ["design", "prototyping", "presentations"],
    pricing: "Freemium",
    url: "https://figma.com",
    features: ["Design", "Prototyping"],
    rating: 4.1,
    userCount: "1M+"
  }
];

// --- Music Tools ---
export const musicTools: Tool[] = [
  {
    id: "music1",
    name: "ElevenLabs",
    description: "AI-powered voice generation and audio editing.",
    category: "Music",
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://elevenlabs.io",
    features: ["Voice generation", "Audio editing"],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "music2",
    name: "Resemble AI",
    description: "AI-powered voice generation and audio editing.",
    category: "Music",
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://resemble.ai",
    features: ["Voice generation", "Audio editing"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "music3",
    name: "Murf AI",
    description: "AI-powered voice generation and audio editing.",
    category: "Music",
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://murf.ai",
    features: ["Voice generation", "Audio editing"],
    rating: 4.2,
    userCount: "20k+"
  },
  {
    id: "music4",
    name: "Voicemod",
    description: "AI-powered voice modification and audio effects.",
    category: "Music",
    tags: ["voice-modification", "audio-effects", "ai"],
    pricing: "Freemium",
    url: "https://voicemod.com",
    features: ["Voice modification", "Audio effects"],
    rating: 4.1,
    userCount: "10k+"
  },
  {
    id: "music5",
    name: "Synthesia",
    description: "AI-powered voice generation and audio editing.",
    category: "Music",
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://synthesia.io",
    features: ["Voice generation", "Audio editing"],
    rating: 4.0,
    userCount: "5k+"
  }
];

// --- Additions from user images ---

// Chatbot (add Drift, Intercom, ManyChat, MobileMonkey)
chatbotTools.push(
  {
    id: "ch7",
    name: "Drift",
    description: "Conversational marketing and sales platform with AI chatbots.",
    category: "Chatbot",
    tags: ["chatbot", "marketing", "sales", "ai"],
    pricing: "Freemium",
    url: "https://drift.com",
    features: ["Conversational marketing", "AI chatbots", "Sales automation"],
    rating: 4.3,
    userCount: "100k+"
  },
  {
    id: "ch8",
    name: "Intercom",
    description: "Customer messaging platform with AI-powered chatbots.",
    category: "Chatbot",
    tags: ["chatbot", "customer-messaging", "ai"],
    pricing: "Freemium",
    url: "https://intercom.com",
    features: ["Customer messaging", "AI chatbots", "Support automation"],
    rating: 4.4,
    userCount: "200k+"
  },
  {
    id: "ch9",
    name: "ManyChat",
    description: "Chat marketing platform for Facebook Messenger and Instagram.",
    category: "Chatbot",
    tags: ["chatbot", "marketing", "facebook", "instagram"],
    pricing: "Freemium",
    url: "https://manychat.com",
    features: ["Chat marketing", "Messenger automation", "Instagram automation"],
    rating: 4.2,
    userCount: "300k+"
  },
  {
    id: "ch10",
    name: "MobileMonkey",
    description: "OmniChat platform for chat marketing automation.",
    category: "Chatbot",
    tags: ["chatbot", "marketing", "automation"],
    pricing: "Freemium",
    url: "https://mobilemonkey.com",
    features: ["OmniChat automation", "Marketing", "Chatbot"],
    rating: 4.1,
    userCount: "150k+"
  }
);

// Writing (add Grammarly, ProWriting Aid, Hemingway Editor, Ginger Software, Slick Write)
writingTools.push(
  {
    id: "w6",
    name: "Grammarly",
    description: "AI-powered writing assistant for grammar, clarity, and tone.",
    category: "Writing",
    tags: ["writing", "grammar", "clarity", "ai"],
    pricing: "Freemium",
    url: "https://grammarly.com",
    features: ["Grammar check", "Clarity suggestions", "Tone detection"],
    rating: 4.7,
    userCount: "30M+"
  },
  {
    id: "w7",
    name: "ProWriting Aid",
    description: "Style, grammar, and spell checker for writing improvement.",
    category: "Writing",
    tags: ["writing", "grammar", "style", "ai"],
    pricing: "Freemium",
    url: "https://prowritingaid.com",
    features: ["Style check", "Grammar check", "Writing improvement"],
    rating: 4.5,
    userCount: "1M+"
  },
  {
    id: "w8",
    name: "Hemingway Editor",
    description: "Writing tool for clarity and readability.",
    category: "Writing",
    tags: ["writing", "clarity", "readability"],
    pricing: "Freemium",
    url: "https://hemingwayapp.com",
    features: ["Clarity", "Readability", "Writing improvement"],
    rating: 4.3,
    userCount: "500k+"
  },
  {
    id: "w9",
    name: "Ginger Software",
    description: "Grammar and spell checker for writing assistance.",
    category: "Writing",
    tags: ["writing", "grammar", "spell-check"],
    pricing: "Freemium",
    url: "https://gingersoftware.com",
    features: ["Grammar check", "Spell check", "Writing assistance"],
    rating: 4.2,
    userCount: "300k+"
  },
  {
    id: "w10",
    name: "Slick Write",
    description: "Online tool for grammar checking and writing improvement.",
    category: "Writing",
    tags: ["writing", "grammar", "online-tool"],
    pricing: "Free",
    url: "https://slickwrite.com",
    features: ["Grammar check", "Writing improvement"],
    rating: 4.1,
    userCount: "200k+"
  }
);

// Website (add Wix, Squarespace, Weebly, Webflow, BigCommerce)
websiteTools.push(
  {
    id: "web7",
    name: "Wix",
    description: "Website builder with drag-and-drop and AI features.",
    category: "Website",
    tags: ["website-builder", "drag-and-drop", "ai"],
    pricing: "Freemium",
    url: "https://wix.com",
    features: ["Drag-and-drop", "AI features", "Website builder"],
    rating: 4.5,
    userCount: "10M+"
  },
  {
    id: "web8",
    name: "Squarespace",
    description: "Website builder with design templates and e-commerce.",
    category: "Website",
    tags: ["website-builder", "templates", "e-commerce"],
    pricing: "Freemium",
    url: "https://squarespace.com",
    features: ["Design templates", "E-commerce", "Website builder"],
    rating: 4.4,
    userCount: "5M+"
  },
  {
    id: "web9",
    name: "Weebly",
    description: "Website builder for small businesses and e-commerce.",
    category: "Website",
    tags: ["website-builder", "small-business", "e-commerce"],
    pricing: "Freemium",
    url: "https://weebly.com",
    features: ["Small business", "E-commerce", "Website builder"],
    rating: 4.3,
    userCount: "2M+"
  },
  {
    id: "web10",
    name: "Webflow",
    description: "Visual website builder for designers and developers.",
    category: "Website",
    tags: ["website-builder", "visual", "designer", "developer"],
    pricing: "Freemium",
    url: "https://webflow.com",
    features: ["Visual builder", "Designer tools", "Developer tools"],
    rating: 4.6,
    userCount: "3M+"
  },
  {
    id: "web11",
    name: "BigCommerce",
    description: "E-commerce platform for growing businesses.",
    category: "Website",
    tags: ["e-commerce", "platform", "business"],
    pricing: "Freemium",
    url: "https://bigcommerce.com",
    features: ["E-commerce", "Business platform"],
    rating: 4.2,
    userCount: "1M+"
  }
);

// Logo (add Brandmark, Logaster)
logoTools.push(
  {
    id: "l6",
    name: "Brandmark",
    description: "AI-powered logo design and branding platform.",
    category: "Logo",
    tags: ["logo-design", "branding", "ai"],
    pricing: "Freemium",
    url: "https://brandmark.io",
    features: ["Logo design", "Branding", "AI"],
    rating: 4.2,
    userCount: "80k+"
  },
  {
    id: "l7",
    name: "Logaster",
    description: "Online logo maker and branding tool.",
    category: "Logo",
    tags: ["logo-design", "branding", "online-tool"],
    pricing: "Freemium",
    url: "https://logaster.com",
    features: ["Logo design", "Branding"],
    rating: 4.1,
    userCount: "60k+"
  }
);

// --- More Additions from new user image ---

// Chatbot (add Chatbase, POPAI, Gleap, COZE, GitMind, Dialogflow, Chatfuel, Bright Eye, Chatsimple, Chatbot, ChatSimple, Chatbase, Taskade, Mindgrasp, Word Stream, Respell, Dubbely, Botpress, Botsonic, Safurai, Monica, JenniAI)
chatbotTools.push(
  {
    id: "ch11",
    name: "Chatbase",
    description: "Custom AI chatbot builder for your data.",
    category: "Chatbot",
    tags: ["chatbot", "custom", "ai", "data"],
    pricing: "Freemium",
    url: "https://www.chatbase.co/",
    features: ["Custom chatbot", "Data integration", "AI"],
    rating: 4.2,
    userCount: "50k+"
  },
  {
    id: "ch12",
    name: "POPAI",
    description: "AI chatbot and automation platform.",
    category: "Chatbot",
    tags: ["chatbot", "automation", "ai"],
    pricing: "Freemium",
    url: "https://popai.pro/",
    features: ["AI chatbot", "Automation"],
    rating: 4.1,
    userCount: "20k+"
  },
  {
    id: "ch13",
    name: "Gleap",
    description: "AI-powered customer support chatbot.",
    category: "Chatbot",
    tags: ["chatbot", "customer-support", "ai"],
    pricing: "Freemium",
    url: "https://gleap.io/",
    features: ["Customer support", "AI chatbot"],
    rating: 4.0,
    userCount: "10k+"
  },
  {
    id: "ch14",
    name: "COZE",
    description: "AI chatbot platform for business automation.",
    category: "Chatbot",
    tags: ["chatbot", "business", "automation", "ai"],
    pricing: "Freemium",
    url: "https://www.coze.com/",
    features: ["Business automation", "AI chatbot"],
    rating: 4.0,
    userCount: "10k+"
  },
  {
    id: "ch15",
    name: "GitMind",
    description: "Mind mapping and AI chatbot tool.",
    category: "Chatbot",
    tags: ["mind-mapping", "chatbot", "ai"],
    pricing: "Freemium",
    url: "https://gitmind.com/",
    features: ["Mind mapping", "AI chatbot"],
    rating: 4.1,
    userCount: "30k+"
  },
  {
    id: "ch16",
    name: "Dialogflow",
    description: "Google's conversational AI platform for chatbots.",
    category: "Chatbot",
    tags: ["chatbot", "conversational-ai", "google"],
    pricing: "Freemium",
    url: "https://dialogflow.cloud.google.com/",
    features: ["Conversational AI", "Google integration"],
    rating: 4.3,
    userCount: "100k+"
  },
  {
    id: "ch17",
    name: "Bright Eye",
    description: "AI chatbot for business insights and analytics.",
    category: "Chatbot",
    tags: ["chatbot", "business", "analytics", "ai"],
    pricing: "Freemium",
    url: "https://brighteye.ai/",
    features: ["Business insights", "Analytics", "AI chatbot"],
    rating: 4.0,
    userCount: "5k+"
  },
  {
    id: "ch18",
    name: "Chatsimple",
    description: "Simple AI chatbot for websites.",
    category: "Chatbot",
    tags: ["chatbot", "website", "ai"],
    pricing: "Freemium",
    url: "https://chatsimple.ai/",
    features: ["Website chatbot", "AI"],
    rating: 4.0,
    userCount: "5k+"
  }
);

// Writing (add HyperWrite, Notefolio, Jenni, Hix, Monica, JenniAI, Notion AI)
writingTools.push(
  {
    id: "w11",
    name: "HyperWrite",
    description: "AI writing assistant for productivity and creativity.",
    category: "Writing",
    tags: ["writing", "assistant", "ai"],
    pricing: "Freemium",
    url: "https://hyperwriteai.com/",
    features: ["Writing assistant", "Productivity", "Creativity"],
    rating: 4.2,
    userCount: "20k+"
  },
  {
    id: "w12",
    name: "Notefolio",
    description: "AI-powered note-taking and writing tool.",
    category: "Writing",
    tags: ["note-taking", "writing", "ai"],
    pricing: "Freemium",
    url: "https://notefolio.com/",
    features: ["Note-taking", "Writing", "AI"],
    rating: 4.1,
    userCount: "10k+"
  },
  {
    id: "w13",
    name: "Jenni",
    description: "AI writing assistant for academic and creative writing.",
    category: "Writing",
    tags: ["writing", "assistant", "ai", "academic", "creative"],
    pricing: "Freemium",
    url: "https://jenni.ai/",
    features: ["Academic writing", "Creative writing", "AI assistant"],
    rating: 4.3,
    userCount: "15k+"
  },
  {
    id: "w14",
    name: "Hix",
    description: "AI writing and content generation platform.",
    category: "Writing",
    tags: ["writing", "content-generation", "ai"],
    pricing: "Freemium",
    url: "https://hix.ai/",
    features: ["Content generation", "Writing", "AI"],
    rating: 4.1,
    userCount: "10k+"
  },
  {
    id: "w15",
    name: "Notion AI",
    description: "AI-powered writing and productivity assistant in Notion.",
    category: "Writing",
    tags: ["writing", "productivity", "ai", "notion"],
    pricing: "Freemium",
    url: "https://notion.so/product/ai",
    features: ["Writing assistant", "Productivity", "Notion integration"],
    rating: 4.5,
    userCount: "1M+"
  }
);

// --- More Additions: Gemini, Databutton, and other well-known tools ---

// Add Gemini (Google Bard rebranded)
writingTools.push({
  id: "w16",
  name: "Gemini (Google Bard)",
  description: "Google's advanced conversational AI for research, writing, and productivity.",
  category: "Writing",
  tags: ["conversational-ai", "writing", "research", "google"],
  pricing: "Free",
  url: "https://gemini.google.com/",
  features: ["Conversational AI", "Research", "Writing assistant"],
  rating: 4.5,
  userCount: "10M+"
});

// Add Databutton
productivityTools.push({
  id: "prod6",
  name: "Databutton",
  description: "No-code AI app builder for data workflows and automation.",
  category: "Productivity",
  tags: ["no-code", "ai", "automation", "data-workflows"],
  pricing: "Freemium",
  url: "https://databutton.com/",
  features: ["No-code app builder", "AI automation", "Data workflows"],
  rating: 4.2,
  userCount: "20k+"
});

// Add Poe (Quora)
chatbotTools.push({
  id: "ch19",
  name: "Poe by Quora",
  description: "Multi-bot AI chat platform by Quora, supporting GPT-4, Claude, and more.",
  category: "Chatbot",
  tags: ["multi-bot", "ai-chat", "quora"],
  pricing: "Freemium",
  url: "https://poe.com/",
  features: ["Multi-bot chat", "GPT-4", "Claude", "Quora integration"],
  rating: 4.4,
  userCount: "1M+"
});

// Add Perplexity Pages (distinct from Perplexity Q&A)
productivityTools.push({
  id: "prod7",
  name: "Perplexity Pages",
  description: "AI-powered research and report generation platform.",
  category: "Productivity",
  tags: ["ai", "research", "report-generation"],
  pricing: "Freemium",
  url: "https://www.perplexity.ai/pages",
  features: ["Research", "Report generation", "AI"],
  rating: 4.3,
  userCount: "100k+"
});

// Add Mistral AI (open-source LLMs)
codingTools.push({
  id: "code19",
  name: "Mistral AI",
  description: "Open-source large language models for developers and researchers.",
  category: "Coding",
  tags: ["llm", "open-source", "developer", "research"],
  pricing: "Free",
  url: "https://mistral.ai/",
  features: ["Open-source LLMs", "Developer tools", "Research"],
  rating: 4.3,
  userCount: "50k+"
});

// Add DataButton to Full-stack (create fullStackTools if needed)
export const fullStackTools: Tool[] = [
  {
    id: "fs1",
    name: "DataButton",
    description: "No-code AI app builder for data workflows and automation.",
    category: "Full-stack",
    tags: ["no-code", "ai", "automation", "data-workflows"],
    pricing: "Freemium",
    url: "https://databutton.com/",
    features: ["No-code app builder", "AI automation", "Data workflows"],
    rating: 4.2,
    userCount: "20k+"
  }
];

// Add Leonardo AI to Art Generators
artGenerators.push({
  id: "art20",
  name: "Leonardo AI",
  description: "AI-powered art and image generation platform for creatives.",
  category: "Art Generators",
  tags: ["art-generation", "image", "ai", "creative"],
  pricing: "Freemium",
  url: "https://leonardo.ai/",
  features: ["Art generation", "Image creation", "Creative tools"],
  rating: 4.5,
  userCount: "100k+"
});

// Remove duplicates by name (keep the first occurrence)
function dedupeTools(tools: Tool[]): Tool[] {
  const seen = new Set();
  return tools.filter(tool => {
    if (seen.has(tool.name.toLowerCase())) return false;
    seen.add(tool.name.toLowerCase());
    return true;
  });
}

// Combine all tools for export (after all pushes)
export const aiTools: Tool[] = dedupeTools([
  ...fullStackTools,
  ...researchTools,
  ...imageTools,
  ...copywritingTools,
  ...seoTools,
  ...chatbotTools,
  ...presentationTools,
  ...logoTools,
  ...audioTools,
  ...marketingTools,
  ...contentCreationTools,
  ...writingTools,
  ...websiteTools,
  ...codingTools,
  ...salesTools,
  ...artGenerators,
  ...productivityTools,
  ...videoTools,
  ...musicTools
]);

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
  { name: "Research", tools: researchTools },
  { name: "Image", tools: imageTools },
  { name: "Copywriting", tools: copywritingTools },
  { name: "SEO", tools: seoTools },
  { name: "Chatbot", tools: chatbotTools },
  { name: "Presentation", tools: presentationTools },
  { name: "Logo", tools: logoTools },
  { name: "Audio", tools: audioTools },
  { name: "Marketing", tools: marketingTools },
  { name: "Content Creation", tools: contentCreationTools },
  { name: "Writing", tools: writingTools },
  { name: "Website", tools: websiteTools },
  { name: "Coding", tools: codingTools },
  { name: "Sales", tools: salesTools },
  { name: "Art Generators", tools: artGenerators },
  { name: "Productivity", tools: productivityTools },
  { name: "Video", tools: videoTools },
  { name: "Music", tools: musicTools }
];

