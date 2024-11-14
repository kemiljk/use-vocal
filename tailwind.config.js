import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            "neutral-0": "#FAF9FC",
            "purple-0": "#E5D3F7",
            "purple-10": "#D4B5F2",
            "purple-20": "#BE90EC",
            "purple-30": "#A86BE6",
            "purple-40": "#9346DF",
            "purple-50": "#7D21D9",
            "purple-60": "#681CB5",
            "purple-70": "#531691",
            "purple-80": "#3F116D",
            "purple-90": "#2A0B48",
            "purple-100": "#19072B",
            primary: {
              50: "#E5D3F7",
              100: "#D4B5F2",
              200: "#BE90EC",
              300: "#A86BE6",
              400: "#9346DF",
              500: "#7D21D9",
              600: "#681CB5",
              700: "#531691",
              800: "#3F116D",
              900: "#2A0B48",
              1000: "#19072B",
              foreground: "#FAF9FC",
              DEFAULT: "#7D21D9",
            },
            focus: "#D92161",
          },
        },
        dark: {
          colors: {
            "neutral-0": "#FAF9FC",
            "purple-0": "#E5D3F7",
            "purple-10": "#D4B5F2",
            "purple-20": "#BE90EC",
            "purple-30": "#A86BE6",
            "purple-40": "#9346DF",
            "purple-50": "#7D21D9",
            "purple-60": "#681CB5",
            "purple-70": "#531691",
            "purple-80": "#3F116D",
            "purple-90": "#2A0B48",
            "purple-100": "#19072B",
            primary: {
              50: "#E5D3F7",
              100: "#D4B5F2",
              200: "#BE90EC",
              300: "#A86BE6",
              400: "#9346DF",
              500: "#7D21D9",
              600: "#681CB5",
              700: "#531691",
              800: "#3F116D",
              900: "#2A0B48",
              1000: "#19072B",
              foreground: "#FAF9FC",
              DEFAULT: "#7D21D9",
            },
            focus: "#D92161",
          },
        },
      },
    }),
  ],
};
