/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--font-manrope)', 'sans-serif']
    },
    extend: {
      colors: {
        'pfm-neutral-100': 'hsla(0, 0%, 10%, 1.0)',
        'pfm-neutral-200': 'hsla(0, 0%, 20%, 1.0)',
        'pfm-neutral-300': 'hsla(0, 0%, 30%, 1.0)',
        'pfm-neutral-400': 'hsla(0, 0%, 40%, 1.0)',
        'pfm-neutral-500': 'hsla(0, 0%, 50%, 1.0)',
        'pfm-neutral-600': 'hsla(0, 0%, 60%, 1.0)',
        'pfm-neutral-700': 'hsla(0, 0%, 70%, 1.0)',
        'pfm-neutral-800': 'hsla(0, 0%, 80%, 1.0)',
        'pfm-neutral-900': 'hsla(0, 0%, 90%, 1.0)',
        'pfm-purple-100': 'hsla(268, 22%, 10%, 1.0)',
        'pfm-purple-200': 'hsla(268, 22%, 20%, 1.0)',
        'pfm-purple-300': 'hsla(268, 22%, 30%, 1.0)',
        'pfm-purple-400': 'hsla(268, 22%, 40%, 1.0)',
        'pfm-purple-500': 'hsla(268, 22%, 50%, 1.0)',
        'pfm-purple-600': 'hsla(268, 22%, 60%, 1.0)',
        'pfm-purple-700': 'hsla(268, 22%, 70%, 1.0)',
        'pfm-purple-800': 'hsla(268, 22%, 80%, 1.0)',
        'pfm-purple-900': 'hsla(268, 22%, 90%, 1.0)',
        'pfm-orange-100': 'hsla(35, 100%, 10%, 1.0)',
        'pfm-orange-200': 'hsla(35, 100%, 20%, 1.0)',
        'pfm-orange-300': 'hsla(35, 100%, 30%, 1.0)',
        'pfm-orange-400': 'hsla(35, 100%, 40%, 1.0)',
        'pfm-orange-500': 'hsla(35, 100%, 50%, 1.0)',
        'pfm-orange-600': 'hsla(35, 100%, 60%, 1.0)',
        'pfm-orange-700': 'hsla(35, 100%, 70%, 1.0)',
        'pfm-orange-800': 'hsla(35, 100%, 80%, 1.0)',
        'pfm-orange-900': 'hsla(35, 100%, 90%, 1.0)',
      },
      dropShadow: {
        'glow-white': '0 0 10px hsla(0, 0%, 100%, 0.75)',
        'glow-orange': '0 0 10px hsla(35, 100%, 80%, 0.75)'
      }
    },
  },
  plugins: [],
}
