import { defineConfig } from 'unocss'

export default () => defineConfig({
  theme: {
    colors: {
      primary: {
        DEFAULT: '#1C62ED',
        dark: '#1557D6',
      },
      accent: '#3B7EFF',
      tt: {
        text: '#1F2937',
        'text-light': '#6B7280',
        bg: '#FFFFFF',
        'bg-alt': '#F9FAFB',
        'bg-dark': '#1F2937',
        border: '#E5E7EB',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    borderRadius: {
      DEFAULT: '0.5rem',
      lg: '1rem',
    },
  },
  shortcuts: {
    'tt-card': 'bg-white rounded-lg shadow-lg p-8 hover:translate-y--1 transition-transform',
    'tt-btn': 'px-6 py-3 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors',
    'tt-btn-outline': 'px-6 py-3 border-2 border-primary text-primary rounded font-medium hover:bg-primary hover:text-white transition-colors',
  },
})
