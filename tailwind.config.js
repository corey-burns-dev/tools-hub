/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s infinite",
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
};
