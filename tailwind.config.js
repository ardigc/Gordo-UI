/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        ripple: 'ripple 1500ms cubic-bezier(0, 0, 0.2, 1) 1',
      },
      keyframes: {
        ripple: {
          '0%': {
            width: '0',
            height: '0',
          },
          '80%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(4)' },
        },
      },

      colors: {
        'primary-color': 'rgb(var(--primary-color) / <alpha-value>)',
        'secundary-color': 'rgb(var(--secundary-color) / <alpha-value>)',
        'error-color': 'rgb(var(--error-color) / <alpha-value>)',
        'warning-color': 'rgb(var(--warning-color) / <alpha-value>)',
        'info-color': 'rgb(var(--info-color) / <alpha-value>)',
        'success-color': 'rgb(var(--success-color) / <alpha-value>)',
      },
      maxWidth: {
        input: '205px',
      },
    },
  },
  plugins: [],
}
