// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))',
      },
      colors: {
        'neutral-950': '#111827',
        'primary-dark': '#1f2937', // Primary background color for dark mode
        'secondary-dark': '#374151', // Secondary color for dark mode
        'accent-dark': '#3b82f6', // Accent color for dark mode
        'text-light': '#f9fafb', // Text color for dark mode
      },
      zIndex: {
        '-2': '-2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
