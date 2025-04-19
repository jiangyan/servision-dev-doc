import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // Scan app, components, and Fumadocs UI/Core files for Tailwind classes
    './app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx}', // Scan our customized components
    './lib/**/*.{js,ts,jsx,tsx}', // Scan lib utils like cn
    './node_modules/fumadocs-ui/dist/**/*.js', 
    './node_modules/fumadocs-core/dist/**/*.js',
  ],
  theme: {
    extend: {
      // Add any custom theme extensions here if needed
    },
  },
  plugins: [], // Keep empty - rely on CSS presets and content scanning for now
};

export default config; 