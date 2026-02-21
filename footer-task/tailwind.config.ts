import type { Config } from "tailwindcss";

const config: Config = {
        content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // work with all files in the app folder
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: { // to not override the default Tailwind styles, but to add to them
            colors: {
                daramis: {
                    green: "#3A4035",       // Green - Pozadí sekcí
                    darkest: "#1A1A1A",     // Darkest - Tlačítka
                    dark: "#2A2D27",        // Primary Dark - Pozadí a secondary invert button
                    yellow: "#E5B962",      // Accent Yellow
                    creamy: "#EBE6E0",      // Creamy - Pozadí sekcí
                    "creamy-2": "#C4BCB3",  // Creamy 2 - Deko texty a linky
                    white: "#FFFFFF",       // Primary White
                    error: "#D34B4B",       // Red - Chybové hlášky
                }
            },
            fontFamily: {
                nudista: ["Nudista", "sans-serif"],
                arial: ["Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;