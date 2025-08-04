import { Tool, Category } from "@/components/ToolCard";

// --- Research Tools ---
export const researchTools: Tool[] = [
  {
    id: "1",
    name: "Lovable",
    description: "Build full-stack web applications using AI. Create React apps with TypeScript, Tailwind CSS, and Supabase integration through natural language conversations.",
    categories: ["Full-stack", "AI"],
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
    categories: ["Developer"],
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
    categories: ["Research"],
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
    categories: ["Research"],
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
    categories: ["Research"],
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
    categories: ["Research"],
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
    categories: ["Image"],
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
    categories: ["Image"],
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
    categories: ["Image"],
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
    categories: ["Image"],
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
    categories: ["Image"],
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
    categories: ["Image"],
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
    categories: ["Copywriting"],
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
    categories: ["Copywriting"],
    tags: ["copywriting", "content-optimization", "ai"],
    pricing: "Freemium",
    url: "https://jasper.ai",
    features: ["Content optimization", "Copywriting"],
    rating: 4.3,
    userCount: "50k+"
  },

  {
    id: "c4",
    name: "QuillBot",
    description: "AI-powered paraphrasing and content optimization.",
    categories: ["Copywriting"],
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
    categories: ["Copywriting"],
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
    categories: ["SEO"],
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
    categories: ["SEO"],
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
    categories: ["SEO"],
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
    categories: ["SEO"],
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
    categories: ["SEO"],
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
    description: "Powerful conversational AI for research, coding, writing, content creation, and creative tasks. Use conversational prompts for various applications including lyrics, storytelling, and technical assistance.",
    categories: ["Chatbot", "AI", "Writing", "Music"],
    tags: ["conversational-ai", "research", "writing", "code-generation", "content-creation", "lyrics-generation", "storytelling"],
    pricing: "Freemium",
    url: "https://chat.openai.com",
    features: ["Natural language processing", "Code generation", "Research assistance", "Content creation", "Lyrics generation", "Storytelling", "Creative writing"],
    rating: 4.7,
    userCount: "100M+"
  },
  {
    id: "ch2",
    name: "Claude AI",
    description: "AI assistant for research, writing, and analysis.",
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Presentation"],
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
    categories: ["Presentation"],
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
    categories: ["Presentation"],
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
    categories: ["Presentation"],
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
    categories: ["Presentation"],
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
    categories: ["Logo"],
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
    categories: ["Logo"],
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
    categories: ["Logo"],
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
    categories: ["Logo"],
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
    categories: ["Logo"],
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
    id: "a2",
    name: "Resemble AI",
    description: "AI-powered voice generation and audio editing.",
    categories: ["Audio"],
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://resemble.ai",
    features: ["Voice generation", "Audio editing"],
    rating: 4.3,
    userCount: "50k+"
  },

  {
    id: "a4",
    name: "Voicemod",
    description: "AI-powered voice modification and audio effects.",
    categories: ["Audio"],
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
    categories: ["Audio"],
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://synthesia.io",
    features: ["Voice generation", "Audio editing"],
    rating: 4.0,
    userCount: "5k+"
  },
  {
    id: "a6",
    name: "ElevenLabs",
    description: "State-of-the-art text-to-speech with emotional, natural inflection. Offers voice cloning, multilingual support, AI dubbing, audiobooks, and long‑form content tools.",
    categories: ["Audio", "Music"],
    tags: ["text-to-speech", "voice-cloning", "emotional-inflection", "multilingual", "ai-dubbing", "audiobooks"],
    pricing: "Freemium",
    url: "https://elevenlabs.io",
    features: ["Natural TTS", "Voice cloning", "Emotional inflection", "Multilingual support", "AI dubbing", "Audiobook creation"],
    rating: 4.8,
    userCount: "2M+"
  },
  {
    id: "a7",
    name: "Murf.ai",
    description: "Professional-grade voiceover tool with 120+ expressive voices, customization (pitch/emphasis), video sync support, and AI dubbing. Suited for ads, e‑learning, narration.",
    categories: ["Audio", "Music"],
    tags: ["voiceover", "expressive-voices", "pitch-customization", "video-sync", "ai-dubbing", "professional-grade"],
    pricing: "Freemium",
    url: "https://murf.ai",
    features: ["120+ voices", "Pitch customization", "Video sync", "AI dubbing", "Professional quality", "E-learning support"],
    rating: 4.6,
    userCount: "1M+"
  },
  {
    id: "a8",
    name: "PlayHT",
    description: "Text-to-speech platform with 900+ voices in 140+ languages. Offers voice cloning, pronunciation control, API access, and minimal editing need.",
    categories: ["Audio"],
    tags: ["text-to-speech", "900-voices", "140-languages", "voice-cloning", "pronunciation-control", "api-access"],
    pricing: "Freemium",
    url: "https://play.ht",
    features: ["900+ voices", "140+ languages", "Voice cloning", "Pronunciation control", "API access", "Minimal editing"],
    rating: 4.5,
    userCount: "500k+"
  },
  {
    id: "a9",
    name: "LOVO.ai",
    description: "Over 500 realistic voices across >100 languages. Supports brand voice cloning, emotional tones, video-scripting, AI writing, and art tools. Beginner-friendly and cost-effective.",
    categories: ["Audio"],
    tags: ["500-voices", "100-languages", "brand-voice-cloning", "emotional-tones", "video-scripting", "beginner-friendly"],
    pricing: "Freemium",
    url: "https://lovo.ai",
    features: ["500+ voices", "100+ languages", "Brand voice cloning", "Emotional tones", "Video scripting", "AI writing tools"],
    rating: 4.4,
    userCount: "300k+"
  },
  {
    id: "a10",
    name: "Descript (Overdub)",
    description: "Audio/video editor + AI voice tool. Offers transcription, editing by text, voice cloning ('Overdub'), and noise reduction. Perfect for podcast/video creators.",
    categories: ["Audio"],
    tags: ["audio-editor", "video-editor", "transcription", "voice-cloning", "noise-reduction", "podcast-creation"],
    pricing: "Freemium",
    url: "https://descript.com",
    features: ["Audio/video editing", "Transcription", "Text-based editing", "Voice cloning (Overdub)", "Noise reduction", "Podcast tools"],
    rating: 4.7,
    userCount: "1M+"
  },
  {
    id: "a11",
    name: "WellSaid Labs",
    description: "High-quality TTS focused on word‑by‑word control, emotion expression, and corporate use cases. Offers secure models for brand‑safe voice content.",
    categories: ["Audio"],
    tags: ["high-quality-tts", "word-control", "emotion-expression", "corporate-use", "brand-safe", "secure-models"],
    pricing: "Paid",
    url: "https://wellsaidlabs.com",
    features: ["Word-by-word control", "Emotion expression", "Corporate use cases", "Brand-safe content", "Secure models", "High quality"],
    rating: 4.5,
    userCount: "100k+"
  },
  {
    id: "a12",
    name: "Clipchamp (Microsoft)",
    description: "Integrated AI voiceover feature built into video editor—choose from 400+ voices across 80 languages and sync with visual timeline. Great for short-form content.",
    categories: ["Audio"],
    tags: ["video-editor", "400-voices", "80-languages", "timeline-sync", "short-form-content", "microsoft-integration"],
    pricing: "Freemium",
    url: "https://clipchamp.com",
    features: ["Video editor integration", "400+ voices", "80+ languages", "Timeline sync", "Short-form content", "Microsoft integration"],
    rating: 4.3,
    userCount: "2M+"
  },
  {
    id: "a13",
    name: "Listnr AI",
    description: "Voiceover platform with 1,000+ voices, multilingual support, video import, customization, and text-to-video creation. Ideal for podcast or YouTube creators.",
    categories: ["Audio"],
    tags: ["voiceover", "1000-voices", "multilingual", "video-import", "customization", "text-to-video"],
    pricing: "Freemium",
    url: "https://listnr.ai",
    features: ["1,000+ voices", "Multilingual support", "Video import", "Customization", "Text-to-video", "Podcast tools"],
    rating: 4.4,
    userCount: "200k+"
  }
];

// --- Marketing Tools ---
export const marketingTools: Tool[] = [
  {
    id: "m1",
    name: "HubSpot",
    description: "Marketing automation and analytics platform.",
    categories: ["Marketing"],
    tags: ["marketing", "automation", "analytics", "no-code"],
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
    categories: ["Marketing"],
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
    categories: ["Marketing"],
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
    categories: ["Marketing"],
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
    categories: ["Marketing"],
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
    categories: ["Content Creation"],
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
    categories: ["Content Creation"],
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
    categories: ["Content Creation"],
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
    categories: ["Content Creation"],
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
    categories: ["Content Creation"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
    tags: ["copywriting", "content-optimization", "ai"],
    pricing: "Freemium",
    url: "https://jasper.ai",
    features: ["Content optimization", "Copywriting"],
    rating: 4.3,
    userCount: "50k+"
  },

  {
    id: "w4",
    name: "QuillBot",
    description: "AI-powered paraphrasing and content optimization.",
    categories: ["Writing"],
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
    categories: ["Writing"],
    tags: ["copywriting", "content-generation", "ai"],
    pricing: "Freemium",
    url: "https://co-pilot.ai",
    features: ["Content generation", "Copywriting"],
    rating: 4.0,
    userCount: "20k+"
  },
  {
    id: "w6",
    name: "Grammarly",
    description: "AI-powered writing assistant offering grammar checks, tone suggestions, paraphrasing, plagiarism detection, and even full-text generation. Handy for refining scripts, blog drafts, or lyrics.",
    categories: ["Writing"],
    tags: ["grammar-check", "writing-assistant", "tone-suggestions", "paraphrasing", "plagiarism-detection", "content-generation"],
    pricing: "Freemium",
    url: "https://grammarly.com",
    features: ["Grammar checking", "Tone suggestions", "Paraphrasing", "Plagiarism detection", "Content generation", "Real-time editing"],
    rating: 4.7,
    userCount: "30M+"
  },
  {
    id: "w7",
    name: "Wordtune",
    description: "Context-aware writing companion from AI21 Labs that paraphrases, rewrites tone, and expands or shortens text directly in email, docs, or browser. Great for content polishing.",
    categories: ["Writing"],
    tags: ["paraphrasing", "tone-rewriting", "content-polishing", "browser-extension", "writing-assistant"],
    pricing: "Freemium",
    url: "https://wordtune.com",
    features: ["Context-aware paraphrasing", "Tone rewriting", "Text expansion/shortening", "Browser extension", "Email integration", "Document editing"],
    rating: 4.5,
    userCount: "5M+"
  }
];

// --- Website Tools ---
export const websiteTools: Tool[] = [

  {
    id: "web2",
    name: "Zapier",
    description: "Workflow automation with image and data handling.",
    categories: ["Website"],
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
    categories: ["Website"],
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
    categories: ["Website"],
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
    categories: ["Website"],
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
    categories: ["Website"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
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
    categories: ["Coding"],
    tags: ["workflow", "automation", "internal-tools", "open-source", "data-pipelines"],
    pricing: "Freemium",
    url: "https://windmill.dev",
    features: ["Workflow automation", "Script to UI conversion", "Multi-language support", "API integrations", "Self-hosted option", "Team collaboration"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "code19",
    name: "Mistral AI",
    description: "Open-source large language models for developers and researchers.",
    categories: ["Coding"],
    tags: ["llm", "open-source", "developer", "research"],
    pricing: "Free",
    url: "https://mistral.ai/",
    features: ["Open-source LLMs", "Developer tools", "Research"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "code20",
    name: "Microsoft Copilot",
    description: "Microsoft's AI coding assistant integrated with Visual Studio and GitHub.",
    categories: ["Coding"],
    tags: ["microsoft", "code-assistant", "visual-studio", "github", "ai"],
    pricing: "Freemium",
    url: "https://github.com/features/copilot",
    features: ["Code completion", "Visual Studio integration", "GitHub integration", "Multi-language support"],
    rating: 4.4,
    userCount: "3M+"
  },
  {
    id: "code21",
    name: "Bolt AI",
    description: "AI-powered development platform for building applications with natural language.",
    categories: ["Coding"],
    tags: ["ai-development", "natural-language", "code-generation", "platform"],
    pricing: "Freemium",
    url: "https://boltai.com",
    features: ["Natural language to code", "AI-powered development", "Application building", "Code generation"],
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
    categories: ["Sales"],
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
    categories: ["Sales"],
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
    categories: ["Sales"],
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
    categories: ["Sales"],
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
    categories: ["Sales"],
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
    categories: ["Art Generators"],
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
    categories: ["Art Generators"],
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
    categories: ["Art Generators"],
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
    categories: ["Art Generators"],
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
    categories: ["Art Generators"],
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
    categories: ["Art Generators"],
    tags: ["image-generation", "artistic", "visual-content"],
    pricing: "Paid",
    url: "https://midjourney.com",
    features: ["High-quality images", "Artistic styles"],
    rating: 4.7,
    userCount: "15M+"
  },
  {
    id: "art20",
    name: "Leonardo AI",
    description: "AI-powered art and image generation platform for creatives.",
    categories: ["Art Generators"],
    tags: ["art-generation", "image", "ai", "creative"],
    pricing: "Freemium",
    url: "https://leonardo.ai/",
    features: ["Art generation", "Image creation", "Creative tools"],
    rating: 4.5,
    userCount: "100k+"
  },
  {
    id: "art21",
    name: "DALL-E",
    description: "OpenAI's AI system that creates realistic images and art from natural language descriptions.",
    categories: ["Art Generators"],
    tags: ["openai", "image-generation", "art", "natural-language", "ai"],
    pricing: "Paid",
    url: "https://openai.com/dall-e-2",
    features: ["Image generation", "Art creation", "Natural language input", "High quality"],
    rating: 4.6,
    userCount: "10M+"
  },
  {
    id: "art22",
    name: "Stable Diffusion",
    description: "Open-source AI image generation model for creating high-quality images from text prompts.",
    categories: ["Art Generators"],
    tags: ["open-source", "image-generation", "text-to-image", "ai", "community"],
    pricing: "Free",
    url: "https://stability.ai",
    features: ["Open source", "Text-to-image", "High quality", "Community models"],
    rating: 4.4,
    userCount: "5M+"
  }
];

// --- Productivity Tools ---
export const productivityTools: Tool[] = [

  {
    id: "prod2",
    name: "Trello",
    description: "Visual collaboration tool for your projects.",
    categories: ["Productivity"],
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
    categories: ["Productivity"],
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
    categories: ["Productivity"],
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
    categories: ["Productivity"],
    tags: ["communication", "collaboration", "platform"],
    pricing: "Freemium",
    url: "https://slack.com",
    features: ["Communication", "Collaboration", "Platform"],
    rating: 4.2,
    userCount: "300M+"
  },
  {
    id: "prod6",
    name: "Databutton",
    description: "No-code AI app builder for data workflows and automation.",
    categories: ["Productivity"],
    tags: ["no-code", "ai", "automation", "data-workflows"],
    pricing: "Freemium",
    url: "https://databutton.com/",
    features: ["No-code app builder", "AI automation", "Data workflows"],
    rating: 4.2,
    userCount: "20k+"
  },
  {
    id: "prod7",
    name: "Perplexity Pages",
    description: "AI-powered research and report generation platform.",
    categories: ["Productivity"],
    tags: ["ai", "research", "report-generation"],
    pricing: "Freemium",
    url: "https://www.perplexity.ai/pages",
    features: ["Research", "Report generation", "AI"],
    rating: 4.3,
    userCount: "100k+"
  },
  {
    id: "prod8",
    name: "ClickUp",
    description: "All-in-one productivity platform for teams with AI-powered features for project management, docs, and collaboration.",
    categories: ["Productivity"],
    tags: ["productivity", "project-management", "collaboration", "ai", "all-in-one"],
    pricing: "Freemium",
    url: "https://clickup.com",
    features: ["Project management", "Documentation", "Team collaboration", "AI assistance", "Time tracking", "Goal setting"],
    rating: 4.6,
    userCount: "8M+"
  },
  {
    id: "prod9",
    name: "Calendly",
    description: "Scheduling automation platform with AI-powered meeting coordination.",
    categories: ["Productivity"],
    tags: ["scheduling", "automation", "meetings", "ai"],
    pricing: "Freemium",
    url: "https://calendly.com",
    features: ["Scheduling automation", "Meeting coordination", "Calendar integration", "AI assistance"],
    rating: 4.5,
    userCount: "10M+"
  },
  {
    id: "prod10",
    name: "Zoom",
    description: "Video conferencing platform with AI-powered features for meetings and collaboration.",
    categories: ["Productivity"],
    tags: ["video-conferencing", "meetings", "collaboration", "ai"],
    pricing: "Freemium",
    url: "https://zoom.us",
    features: ["Video conferencing", "Meeting recording", "AI features", "Collaboration tools"],
    rating: 4.3,
    userCount: "300M+"
  },
  {
    id: "prod11",
    name: "Google Workspace",
    description: "Google's productivity suite with AI-powered features for business collaboration.",
    categories: ["Productivity"],
    tags: ["google", "productivity", "collaboration", "business", "ai"],
    pricing: "Freemium",
    url: "https://workspace.google.com",
    features: ["Document collaboration", "Email", "Calendar", "AI assistance", "Cloud storage"],
    rating: 4.6,
    userCount: "3B+"
  },
  {
    id: "prod12",
    name: "Microsoft 365",
    description: "Microsoft's productivity suite with AI-powered features for business and personal use.",
    categories: ["Productivity"],
    tags: ["microsoft", "productivity", "office", "business", "ai"],
    pricing: "Paid",
    url: "https://www.microsoft.com/microsoft-365",
    features: ["Office applications", "Cloud storage", "AI assistance", "Collaboration tools"],
    rating: 4.5,
    userCount: "1B+"
  },
  {
    id: "prod13",
    name: "Monday.com",
    description: "Work operating system with AI-powered project management and team collaboration.",
    categories: ["Productivity"],
    tags: ["project-management", "team-collaboration", "workflow", "ai"],
    pricing: "Freemium",
    url: "https://monday.com",
    features: ["Project management", "Team collaboration", "Workflow automation", "AI insights"],
    rating: 4.4,
    userCount: "2M+"
  },
  {
    id: "prod14",
    name: "Airtable",
    description: "No-code database and workflow automation platform for teams and productivity.",
    categories: ["Productivity", "No-code"],
    tags: ["database", "workflow", "automation", "no-code", "productivity"],
    pricing: "Freemium",
    url: "https://airtable.com",
    features: ["Database management", "Workflow automation", "Team collaboration", "No-code interface"],
    rating: 4.5,
    userCount: "1M+"
  },
  {
    id: "prod15",
    name: "Linear",
    description: "AI-enhanced issue tracker and product roadmap manager for development teams.",
    categories: ["Productivity", "Coding"],
    tags: ["issue-tracking", "product-roadmap", "team-management", "ai-enhanced"],
    pricing: "Freemium",
    url: "https://linear.app",
    features: ["Issue tracking", "Product roadmaps", "Team management", "AI enhancements"],
    rating: 4.6,
    userCount: "300k+"
  }
];

// --- Video Tools ---
export const videoTools: Tool[] = [
  {
    id: "vid1",
    name: "Canva",
    description: "Design and publish visual content easily.",
    categories: ["Video"],
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
    categories: ["Video"],
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
    categories: ["Video"],
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
    categories: ["Video"],
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
    categories: ["Video"],
    tags: ["design", "prototyping", "presentations"],
    pricing: "Freemium",
    url: "https://figma.com",
    features: ["Design", "Prototyping"],
    rating: 4.1,
    userCount: "1M+"
  },
  {
    id: "vid6",
    name: "Loom",
    description: "Video messaging platform for async communication with AI-powered features.",
    categories: ["Video"],
    tags: ["video-messaging", "async-communication", "screen-recording", "ai"],
    pricing: "Freemium",
    url: "https://loom.com",
    features: ["Screen recording", "Video messaging", "Async communication", "AI features"],
    rating: 4.4,
    userCount: "14M+"
  },
  {
    id: "vid7",
    name: "Zoom",
    description: "Video conferencing platform with AI-powered features for meetings and collaboration.",
    categories: ["Video"],
    tags: ["video-conferencing", "meetings", "collaboration", "ai"],
    pricing: "Freemium",
    url: "https://zoom.us",
    features: ["Video conferencing", "Meeting recording", "AI features", "Collaboration tools"],
    rating: 4.3,
    userCount: "300M+"
  }
];

// --- Music Tools ---
export const musicTools: Tool[] = [

  {
    id: "music2",
    name: "Resemble AI",
    description: "AI-powered voice generation and audio editing.",
    categories: ["Music"],
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://resemble.ai",
    features: ["Voice generation", "Audio editing"],
    rating: 4.3,
    userCount: "50k+"
  },

  {
    id: "music4",
    name: "Voicemod",
    description: "AI-powered voice modification and audio effects.",
    categories: ["Music"],
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
    categories: ["Music"],
    tags: ["voice-generation", "audio-editing", "ai"],
    pricing: "Freemium",
    url: "https://synthesia.io",
    features: ["Voice generation", "Audio editing"],
    rating: 4.0,
    userCount: "5k+"
  },
  {
    id: "music6",
    name: "Rytr",
    description: "Versatile AI writing tool with built-in lyrics generator and copywriting capabilities. Supports prompts by genre, mood, or theme—multilingual with tonality control and plenty of templates for both content creation and music writing.",
    categories: ["Music", "Writing", "Copywriting"],
    tags: ["lyrics-generation", "ai-writing", "copywriting", "content-generation", "multilingual", "genre-customization", "mood-control", "templates"],
    pricing: "Freemium",
    url: "https://rytr.me",
    features: ["Lyrics generation", "Content generation", "Copywriting", "Genre customization", "Mood control", "Multilingual support", "Templates", "AI writing"],
    rating: 4.3,
    userCount: "500k+"
  },
  {
    id: "music7",
    name: "LyricStudio",
    description: "Focused songwriting assistant that generates and refines lyrics line‑by‑line. Supports genre customization, rhyme suggestions, and real-time feedback.",
    categories: ["Music"],
    tags: ["songwriting", "lyrics-generation", "line-by-line", "genre-customization", "rhyme-suggestions", "real-time-feedback"],
    pricing: "Freemium",
    url: "https://lyricstudio.ai",
    features: ["Line-by-line lyrics", "Genre customization", "Rhyme suggestions", "Real-time feedback", "Songwriting assistance"],
    rating: 4.2,
    userCount: "100k+"
  },
  {
    id: "music8",
    name: "Beatopia",
    description: "AI lyric generator that matches lyrics to music mood and genre. Multilingual, includes rhyme/rhythm control and built-in refinement tools.",
    categories: ["Music"],
    tags: ["lyrics-generation", "mood-matching", "genre-customization", "multilingual", "rhyme-control", "rhythm-control"],
    pricing: "Freemium",
    url: "https://beatopia.ai",
    features: ["Mood matching", "Genre customization", "Multilingual support", "Rhyme control", "Rhythm control", "Refinement tools"],
    rating: 4.1,
    userCount: "50k+"
  },
  {
    id: "music9",
    name: "LyricalLabs.io",
    description: "Simple, fast, free lyric generator with real-time suggestions for chorus, verses, and metaphors; no signup required.",
    categories: ["Music"],
    tags: ["lyrics-generation", "real-time-suggestions", "free", "no-signup", "chorus-verses", "metaphors"],
    pricing: "Free",
    url: "https://lyricallabs.io",
    features: ["Real-time suggestions", "Chorus generation", "Verse generation", "Metaphor suggestions", "No signup required", "Fast generation"],
    rating: 4.0,
    userCount: "25k+"
  },

  {
    id: "music11",
    name: "TopMediai",
    description: "End‑to‑end AI music creation platform: generate lyrics, backing tracks, melody, and synthetic vocals in one workflow. Great for demos or quick compositions.",
    categories: ["Music"],
    tags: ["music-creation", "lyrics-generation", "backing-tracks", "melody-generation", "synthetic-vocals", "end-to-end"],
    pricing: "Freemium",
    url: "https://topmediai.com",
    features: ["Lyrics generation", "Backing tracks", "Melody generation", "Synthetic vocals", "End-to-end workflow", "Demo creation"],
    rating: 4.4,
    userCount: "75k+"
  }
];

// --- No-Code Tools ---
export const noCodeTools: Tool[] = [
  {
    id: "nc1",
    name: "Bubble",
    description: "Fullstack no-code platform with AI that builds frontend, backend, and workflows visually without coding.",
    categories: ["No-code"],
    tags: ["no-code", "visual-development", "web-apps", "ai-assisted", "fullstack"],
    pricing: "Freemium",
    url: "https://bubble.io",
    features: ["Visual development", "Database included", "User authentication", "API integrations", "Responsive design", "AI assistance"],
    rating: 4.2,
    userCount: "3M+"
  },
  {
    id: "nc2",
    name: "Webflow",
    description: "Visual website builder for designers and developers with no-code capabilities.",
    categories: ["No-code"],
    tags: ["website-builder", "visual", "designer", "developer", "no-code"],
    pricing: "Freemium",
    url: "https://webflow.com",
    features: ["Visual builder", "Designer tools", "Developer tools", "CMS", "E-commerce"],
    rating: 4.6,
    userCount: "3M+"
  },
  {
    id: "nc3",
    name: "Wix",
    description: "Website builder with drag-and-drop and AI features for no-code development.",
    categories: ["No-code"],
    tags: ["website-builder", "drag-and-drop", "ai", "no-code"],
    pricing: "Freemium",
    url: "https://wix.com",
    features: ["Drag-and-drop", "AI features", "Website builder", "E-commerce", "Blogging"],
    rating: 4.5,
    userCount: "10M+"
  },
  {
    id: "nc4",
    name: "Squarespace",
    description: "Website builder with design templates and e-commerce for no-code development.",
    categories: ["No-code"],
    tags: ["website-builder", "templates", "e-commerce", "no-code"],
    pricing: "Freemium",
    url: "https://squarespace.com",
    features: ["Design templates", "E-commerce", "Website builder", "Blogging", "Analytics"],
    rating: 4.4,
    userCount: "5M+"
  },
  {
    id: "nc5",
    name: "Weebly",
    description: "Website builder for small businesses and e-commerce with no-code approach.",
    categories: ["No-code"],
    tags: ["website-builder", "small-business", "e-commerce", "no-code"],
    pricing: "Freemium",
    url: "https://weebly.com",
    features: ["Small business", "E-commerce", "Website builder", "App Center", "SEO tools"],
    rating: 4.3,
    userCount: "2M+"
  },
  {
    id: "nc6",
    name: "Notion",
    description: "All-in-one workspace for your notes, tasks, wikis, and databases with no-code capabilities.",
    categories: ["No-code"],
    tags: ["notes", "tasks", "wikis", "databases", "no-code"],
    pricing: "Freemium",
    url: "https://notion.so",
    features: ["Notes", "Tasks", "Wikis", "Databases", "Templates", "Collaboration"],
    rating: 4.6,
    userCount: "10M+"
  },
  {
    id: "nc7",
    name: "Airtable",
    description: "No-code database and workflow automation platform for teams.",
    categories: ["No-code"],
    tags: ["database", "workflow", "automation", "no-code", "teams"],
    pricing: "Freemium",
    url: "https://airtable.com",
    features: ["Database", "Workflow automation", "Team collaboration", "Integrations", "Templates"],
    rating: 4.5,
    userCount: "1M+"
  },
  {
    id: "nc8",
    name: "Zapier",
    description: "No-code automation platform that connects your apps and services.",
    categories: ["No-code"],
    tags: ["automation", "integrations", "workflow", "no-code"],
    pricing: "Freemium",
    url: "https://zapier.com",
    features: ["App integrations", "Workflow automation", "Triggers", "Actions", "Templates"],
    rating: 4.3,
    userCount: "5M+"
  },
  {
    id: "nc9",
    name: "DataButton",
    description: "No-code AI app builder for data workflows and automation.",
    categories: ["No-code"],
    tags: ["no-code", "ai", "automation", "data-workflows"],
    pricing: "Freemium",
    url: "https://databutton.com/",
    features: ["No-code app builder", "AI automation", "Data workflows", "Visual editor"],
    rating: 4.2,
    userCount: "20k+"
  },
  {
    id: "nc10",
    name: "Softr",
    description: "No-code platform to build web apps from Airtable databases.",
    categories: ["No-code"],
    tags: ["no-code", "web-apps", "airtable", "database"],
    pricing: "Freemium",
    url: "https://softr.io",
    features: ["Web app builder", "Airtable integration", "Templates", "Custom domains"],
    rating: 4.1,
    userCount: "50k+"
  },
  {
    id: "nc11",
    name: "Glide",
    description: "No-code platform to create apps from Google Sheets.",
    categories: ["No-code"],
    tags: ["no-code", "apps", "google-sheets", "mobile"],
    pricing: "Freemium",
    url: "https://glideapps.com",
    features: ["App builder", "Google Sheets integration", "Mobile apps", "Templates"],
    rating: 4.0,
    userCount: "100k+"
  },
  {
    id: "nc12",
    name: "Adalo",
    description: "No-code platform to build custom apps without coding.",
    categories: ["No-code"],
    tags: ["no-code", "app-builder", "custom-apps", "mobile"],
    pricing: "Freemium",
    url: "https://adalo.com",
    features: ["Custom app builder", "Mobile apps", "Templates", "Integrations"],
    rating: 4.1,
    userCount: "30k+"
  },
  {
    id: "nc13",
    name: "Langflow",
    description: "Open-source platform for building AI applications with visual workflows.",
    categories: ["No-code"],
    tags: ["no-code", "ai", "visual-workflows", "open-source"],
    pricing: "Free",
    url: "https://langflow.org",
    features: ["Visual AI workflows", "Open source", "LLM integration", "Custom components"],
    rating: 4.3,
    userCount: "50k+"
  },
  {
    id: "nc14",
    name: "Flowise",
    description: "No-code platform for building AI chatbots and workflows.",
    categories: ["No-code"],
    tags: ["no-code", "ai", "chatbots", "workflows"],
    pricing: "Freemium",
    url: "https://flowise.ai",
    features: ["AI chatbots", "Visual workflows", "LLM integration", "Custom nodes"],
    rating: 4.2,
    userCount: "25k+"
  },
  {
    id: "nc15",
    name: "Voiceflow",
    description: "Conversational AI platform for building chatbots and voice assistants.",
    categories: ["No-code"],
    tags: ["no-code", "conversational-ai", "chatbots", "voice-assistants"],
    pricing: "Freemium",
    url: "https://voiceflow.com",
    features: ["Conversational AI", "Voice assistants", "Chatbots", "Multi-platform"],
    rating: 4.4,
    userCount: "100k+"
  },
  {
    id: "nc16",
    name: "Botpress",
    description: "Open-source conversational AI platform for building chatbots.",
    categories: ["No-code"],
    tags: ["no-code", "conversational-ai", "chatbots", "open-source"],
    pricing: "Freemium",
    url: "https://botpress.com",
    features: ["Conversational AI", "Open source", "Visual builder", "Multi-channel"],
    rating: 4.3,
    userCount: "75k+"
  },
  {
    id: "nc17",
    name: "Orchids",
    description: "AI-powered app development platform for creating mobile applications.",
    categories: ["No-code"],
    tags: ["no-code", "mobile-apps", "ai", "app-development"],
    pricing: "Freemium",
    url: "https://orchids.app",
    features: ["Mobile app development", "AI assistance", "Visual builder", "Cross-platform"],
    rating: 4.1,
    userCount: "15k+"
  },
  {
    id: "nc18",
    name: "Wegic",
    description: "No-code platform for building web applications and workflows.",
    categories: ["No-code"],
    tags: ["no-code", "web-apps", "workflows", "automation"],
    pricing: "Freemium",
    url: "https://wegic.com",
    features: ["Web app builder", "Workflow automation", "Visual editor", "Integrations"],
    rating: 4.0,
    userCount: "10k+"
  },
  {
    id: "nc19",
    name: "Kilocode",
    description: "AI-powered code generation and development platform.",
    categories: ["Coding"],
    tags: ["ai", "code-generation", "development", "productivity"],
    pricing: "Freemium",
    url: "https://kilocode.com",
    features: ["AI code generation", "Development tools", "Productivity", "Multi-language"],
    rating: 4.2,
    userCount: "20k+"
  },
  {
    id: "nc20",
    name: "Copycoder",
    description: "AI-powered code copying and generation tool for developers.",
    categories: ["Coding"],
    tags: ["ai", "code-copying", "generation", "productivity"],
    pricing: "Freemium",
    url: "https://copycoder.com",
    features: ["Code copying", "AI generation", "Developer tools", "Productivity"],
    rating: 4.1,
    userCount: "15k+"
  },
  {
    id: "nc21",
    name: "Biela",
    description: "AI-powered development platform for building applications.",
    categories: ["Coding"],
    tags: ["ai", "development", "applications", "productivity"],
    pricing: "Freemium",
    url: "https://biela.dev",
    features: ["AI development", "Application building", "Productivity tools", "Multi-platform"],
    rating: 4.0,
    userCount: "8k+"
  }
];

// --- Additions from user images ---

// Chatbot (add Drift, Intercom, ManyChat, MobileMonkey)
chatbotTools.push(
  {
    id: "ch7",
    name: "Drift",
    description: "Conversational marketing and sales platform with AI chatbots.",
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
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
    id: "web11",
    name: "BigCommerce",
    description: "E-commerce platform for growing businesses.",
    categories: ["Website"],
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
    categories: ["Logo"],
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
    categories: ["Logo"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Chatbot"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
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
    categories: ["Writing"],
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
  categories: ["Writing"],
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
  categories: ["Productivity"],
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
  categories: ["Chatbot"],
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
  categories: ["Productivity"],
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
  categories: ["Coding"],
  tags: ["llm", "open-source", "developer", "research"],
  pricing: "Free",
  url: "https://mistral.ai/",
  features: ["Open-source LLMs", "Developer tools", "Research"],
  rating: 4.3,
  userCount: "50k+"
});

// Add Leonardo AI to Art Generators
artGenerators.push({
  id: "art20",
  name: "Leonardo AI",
  description: "AI-powered art and image generation platform for creatives.",
  categories: ["Art Generators"],
  tags: ["art-generation", "image", "ai", "creative"],
  pricing: "Freemium",
  url: "https://leonardo.ai/",
  features: ["Art generation", "Image creation", "Creative tools"],
  rating: 4.5,
  userCount: "100k+"
});

// --- Add Missing Tools Requested by User ---

// Add ClickUp to Productivity
productivityTools.push({
  id: "prod8",
  name: "ClickUp",
  description: "All-in-one productivity platform for teams with AI-powered features for project management, docs, and collaboration.",
  categories: ["Productivity"],
  tags: ["productivity", "project-management", "collaboration", "ai", "all-in-one"],
  pricing: "Freemium",
  url: "https://clickup.com",
  features: ["Project management", "Documentation", "Team collaboration", "AI assistance", "Time tracking", "Goal setting"],
  rating: 4.6,
  userCount: "8M+"
});

// Add Meta.ai to Chatbot
chatbotTools.push({
  id: "ch20",
  name: "Meta.ai",
  description: "Meta's AI assistant powered by Llama models for conversation, creativity, and productivity.",
  categories: ["Chatbot"],
  tags: ["meta", "llama", "conversation", "ai-assistant", "creativity"],
  pricing: "Free",
  url: "https://meta.ai",
  features: ["Conversational AI", "Creative assistance", "Productivity tools", "Meta integration"],
  rating: 4.3,
  userCount: "5M+"
});

// Add Grock to Chatbot
chatbotTools.push({
  id: "ch21",
  name: "Grock",
  description: "xAI's conversational AI assistant with real-time knowledge and humor.",
  categories: ["Chatbot"],
  tags: ["xai", "conversational-ai", "real-time", "humor", "elon-musk"],
  pricing: "Freemium",
  url: "https://grok.x.ai",
  features: ["Real-time knowledge", "Conversational AI", "Humor", "xAI integration"],
  rating: 4.2,
  userCount: "2M+"
});

// Add Siri to Chatbot
chatbotTools.push({
  id: "ch22",
  name: "Siri",
  description: "Apple's intelligent voice assistant for iOS, macOS, and Apple devices.",
  categories: ["Chatbot"],
  tags: ["apple", "voice-assistant", "ios", "macos", "intelligent"],
  pricing: "Free",
  url: "https://www.apple.com/siri/",
  features: ["Voice commands", "Device control", "Information lookup", "Apple ecosystem integration"],
  rating: 4.1,
  userCount: "1B+"
});

// --- Add Additional Popular Tools ---

// Add Microsoft Copilot to Coding
codingTools.push({
  id: "code20",
  name: "Microsoft Copilot",
  description: "Microsoft's AI coding assistant integrated with Visual Studio and GitHub.",
  categories: ["Coding"],
  tags: ["microsoft", "code-assistant", "visual-studio", "github", "ai"],
  pricing: "Freemium",
  url: "https://github.com/features/copilot",
  features: ["Code completion", "Visual Studio integration", "GitHub integration", "Multi-language support"],
  rating: 4.4,
  userCount: "3M+"
});

// Add Claude Desktop to Chatbot
chatbotTools.push({
  id: "ch23",
  name: "Claude Desktop",
  description: "Anthropic's Claude AI assistant for desktop with file analysis and conversation.",
  categories: ["Chatbot"],
  tags: ["anthropic", "desktop", "file-analysis", "conversation", "ai"],
  pricing: "Freemium",
  url: "https://claude.ai",
  features: ["File analysis", "Conversation", "Desktop app", "Document understanding"],
  rating: 4.5,
  userCount: "1M+"
});

// Add DALL-E to Art Generators
artGenerators.push({
  id: "art21",
  name: "DALL-E",
  description: "OpenAI's AI system that creates realistic images and art from natural language descriptions.",
  categories: ["Art Generators"],
  tags: ["openai", "image-generation", "art", "natural-language", "ai"],
  pricing: "Paid",
  url: "https://openai.com/dall-e-2",
  features: ["Image generation", "Art creation", "Natural language input", "High quality"],
  rating: 4.6,
  userCount: "10M+"
});

// Add Stable Diffusion to Art Generators
artGenerators.push({
  id: "art22",
  name: "Stable Diffusion",
  description: "Open-source AI image generation model for creating high-quality images from text prompts.",
  categories: ["Art Generators"],
  tags: ["open-source", "image-generation", "text-to-image", "ai", "community"],
  pricing: "Free",
  url: "https://stability.ai",
  features: ["Open source", "Text-to-image", "High quality", "Community models"],
  rating: 4.4,
  userCount: "5M+"
});

// Add Notion AI to Writing (already exists, but let's ensure it's properly categorized)
writingTools.push({
  id: "w17",
  name: "Notion AI",
  description: "AI-powered writing and productivity assistant integrated within Notion workspace.",
  categories: ["Writing", "Productivity"],
  tags: ["notion", "ai", "writing", "productivity", "workspace"],
  pricing: "Freemium",
  url: "https://notion.so/product/ai",
  features: ["Writing assistance", "Productivity tools", "Notion integration", "Content generation"],
  rating: 4.5,
  userCount: "1M+"
});

// Add Loom to Video
videoTools.push({
  id: "vid6",
  name: "Loom",
  description: "Video messaging platform for async communication with AI-powered features.",
  categories: ["Video"],
  tags: ["video-messaging", "async-communication", "screen-recording", "ai"],
  pricing: "Freemium",
  url: "https://loom.com",
  features: ["Screen recording", "Video messaging", "Async communication", "AI features"],
  rating: 4.4,
  userCount: "14M+"
});

// Add Calendly to Productivity
productivityTools.push({
  id: "prod9",
  name: "Calendly",
  description: "Scheduling automation platform with AI-powered meeting coordination.",
  categories: ["Productivity"],
  tags: ["scheduling", "automation", "meetings", "ai"],
  pricing: "Freemium",
  url: "https://calendly.com",
  features: ["Scheduling automation", "Meeting coordination", "Calendar integration", "AI assistance"],
  rating: 4.5,
  userCount: "10M+"
});

// Add Zoom to Video
videoTools.push({
  id: "vid7",
  name: "Zoom",
  description: "Video conferencing platform with AI-powered features for meetings and collaboration.",
  categories: ["Video"],
  tags: ["video-conferencing", "meetings", "collaboration", "ai"],
  pricing: "Freemium",
  url: "https://zoom.us",
  features: ["Video conferencing", "Meeting recording", "AI features", "Collaboration tools"],
  rating: 4.3,
  userCount: "300M+"
});

// Add Slack to Productivity (already exists, but ensuring it's in the right place)
productivityTools.push({
  id: "prod10",
  name: "Slack",
  description: "Team communication platform with AI-powered features for workplace collaboration.",
  categories: ["Productivity"],
  tags: ["communication", "collaboration", "team", "ai", "workplace"],
  pricing: "Freemium",
  url: "https://slack.com",
  features: ["Team communication", "Channel organization", "AI assistance", "Integration support"],
  rating: 4.2,
  userCount: "300M+"
});

// Add Discord to Chatbot
chatbotTools.push({
  id: "ch24",
  name: "Discord",
  description: "Communication platform with AI-powered features for communities and gaming.",
  categories: ["Chatbot"],
  tags: ["communication", "communities", "gaming", "ai", "voice-chat"],
  pricing: "Freemium",
  url: "https://discord.com",
  features: ["Voice chat", "Text channels", "Community building", "AI features"],
  rating: 4.4,
  userCount: "150M+"
});

// Add Google Workspace to Productivity
productivityTools.push({
  id: "prod11",
  name: "Google Workspace",
  description: "Google's productivity suite with AI-powered features for business collaboration.",
  categories: ["Productivity"],
  tags: ["google", "productivity", "collaboration", "business", "ai"],
  pricing: "Freemium",
  url: "https://workspace.google.com",
  features: ["Document collaboration", "Email", "Calendar", "AI assistance", "Cloud storage"],
  rating: 4.6,
  userCount: "3B+"
});

// Add Microsoft 365 to Productivity
productivityTools.push({
  id: "prod12",
  name: "Microsoft 365",
  description: "Microsoft's productivity suite with AI-powered features for business and personal use.",
  categories: ["Productivity"],
  tags: ["microsoft", "productivity", "office", "business", "ai"],
  pricing: "Paid",
  url: "https://www.microsoft.com/microsoft-365",
  features: ["Office applications", "Cloud storage", "AI assistance", "Collaboration tools"],
  rating: 4.5,
  userCount: "1B+"
});

// Add Monday.com to Productivity
productivityTools.push({
  id: "prod13",
  name: "Monday.com",
  description: "Work operating system with AI-powered project management and team collaboration.",
  categories: ["Productivity"],
  tags: ["project-management", "team-collaboration", "workflow", "ai"],
  pricing: "Freemium",
  url: "https://monday.com",
  features: ["Project management", "Team collaboration", "Workflow automation", "AI insights"],
  rating: 4.4,
  userCount: "2M+"
});

// Add Airtable to Productivity (already exists in No-code, but also belongs in Productivity)
productivityTools.push({
  id: "prod14",
  name: "Airtable",
  description: "No-code database and workflow automation platform for teams and productivity.",
  categories: ["Productivity", "No-code"],
  tags: ["database", "workflow", "automation", "no-code", "productivity"],
  pricing: "Freemium",
  url: "https://airtable.com",
  features: ["Database management", "Workflow automation", "Team collaboration", "No-code interface"],
  rating: 4.5,
  userCount: "1M+"
});

// Add Linear to Productivity (already exists in Coding, but also belongs in Productivity)
productivityTools.push({
  id: "prod15",
  name: "Linear",
  description: "AI-enhanced issue tracker and product roadmap manager for development teams.",
  categories: ["Productivity", "Coding"],
  tags: ["issue-tracking", "product-roadmap", "team-management", "ai-enhanced"],
  pricing: "Freemium",
  url: "https://linear.app",
  features: ["Issue tracking", "Product roadmaps", "Team management", "AI enhancements"],
  rating: 4.6,
  userCount: "300k+"
});

// Add Bolt AI to Coding
codingTools.push({
  id: "code21",
  name: "Bolt AI",
  description: "AI-powered development platform for building applications with natural language.",
  categories: ["Coding"],
  tags: ["ai-development", "natural-language", "code-generation", "platform"],
  pricing: "Freemium",
  url: "https://boltai.com",
  features: ["Natural language to code", "AI-powered development", "Application building", "Code generation"],
  rating: 4.3,
  userCount: "50k+"
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
  ...musicTools,
  ...noCodeTools
]);

// Utility functions
export const getUniqueCategories = (): Category[] => {
  const allCategories = aiTools.flatMap(tool => tool.categories);
  return Array.from(new Set(allCategories)) as Category[];
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
  { name: "Music", tools: musicTools },
  { name: "No-code", tools: noCodeTools }
];

