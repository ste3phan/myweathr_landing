/** @type {import('tailwindcss').Config} */
const v = (name) => `var(--${name})`

module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: v('bg'),
        'bg-alt': v('bg-alt'),
        surface: v('surface'),
        'surface-2': v('surface-2'),
        line: v('border'),
        fg: v('fg'),
        'fg-2': v('fg-2'),
        muted: v('muted'),
        brand: v('brand'),
        'brand-strong': v('brand-strong'),
        link: v('link'),
        tail: v('tail'),
        cross: v('cross'),
        head: v('head'),
        premium: v('premium'),
        'premium-soft': v('premium-soft'),
        'premium-fg': v('premium-fg'),
        screen: v('screen'),
        map: v('map'),
        navy: '#0b2540',
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'Menlo', 'monospace'],
      },
      maxWidth: { wrap: '1200px' },
      boxShadow: { card: v('shadow') },
    },
  },
  plugins: [],
}
