export interface Tool {
  name: string;
  path: string;
  icon: string;
  description: string;
  category: "dev" | "fun" | "creative" | "productivity" | "general";
  keywords?: string[];
}

export const tools: Tool[] = [
  // Developer Tools
  {
    name: "JSON to CSV",
    path: "/json-csv",
    icon: "🔁",
    description: "Convert JSON data to CSV format instantly.",
    category: "dev",
    keywords: ["json", "csv", "convert", "data", "table"],
  },
  {
    name: "UUID Generator",
    path: "/uuid-generator",
    icon: "🆔",
    description: "Generate unique v4 UUIDs.",
    category: "dev",
    keywords: ["uuid", "guid", "id", "generator"],
  },
  {
    name: "Base64 Tool",
    path: "/base64-tool",
    icon: "64",
    description: "Encode and decode Base64 strings.",
    category: "dev",
    keywords: ["base64", "encode", "decode", "string"],
  },
  {
    name: "Hash Generator",
    path: "/hash-generator",
    icon: "#️⃣",
    description: "Generate MD5, SHA-1, SHA-256 hashes.",
    category: "dev",
    keywords: ["hash", "crypto", "md5", "sha", "security"],
  },
  {
    name: "URL Encoder",
    path: "/url-encoder",
    icon: "🔗",
    description: "Encode and decode URLs safely.",
    category: "dev",
    keywords: ["url", "encode", "decode", "link"],
  },
  {
    name: "Measurement Converter",
    path: "/measurement-converter",
    icon: "📏",
    description: "Convert basic storage and length units.",
    category: "dev",
    keywords: ["unit", "convert", "length", "storage", "bytes"],
  },

  // Generators & Security
  {
    name: "Password Generator",
    path: "/password-generator",
    icon: "🔐",
    description: "Create strong, secure passwords.",
    category: "general",
    keywords: ["password", "security", "generator", "random"],
  },
  {
    name: "Username Generator",
    path: "/username-generator",
    icon: "👤",
    description: "Generate unique usernames for apps.",
    category: "general",
    keywords: ["username", "name", "profile", "identity"],
  },
  {
    name: "Lottery Generator",
    path: "/lottery-generator",
    icon: "🎰",
    description: "Generate lucky lottery numbers.",
    category: "fun",
    keywords: ["lottery", "lotto", "numbers", "luck", "random"],
  },

  // Productivity & Fun
  {
    name: "Habit Tracker",
    path: "/habit-tracker",
    icon: "📈",
    description: "Track your daily habits and streaks.",
    category: "productivity",
    keywords: ["habit", "track", "goals", "streak"],
  },
  {
    name: "Food Picker",
    path: "/food-picker",
    icon: "🍔",
    description: "Randomly decide what to eat.",
    category: "fun",
    keywords: ["food", "eat", "random", "picker", "lunch"],
  },
  {
    name: "Meme Generator",
    path: "/meme-generator",
    icon: "🐸",
    description: "Create funny memes instantly.",
    category: "fun",
    keywords: ["meme", "image", "funny", "caption"],
  },
  {
    name: "Currency Converter",
    path: "/currency-converter",
    icon: "💱",
    description: "Convert currencies (demo rates).",
    category: "productivity",
    keywords: ["currency", "money", "exchange", "rate"],
  },
];
