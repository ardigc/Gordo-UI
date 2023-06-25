/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        ripple: 'ripple 1s cubic-bezier(0, 0, 0.2, 1) 1',
      },
      keyframes: {
        ripple: {
          '0%': {
            width: '0',
            height: '0',
          },
          '80%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(2)' },
        },
      },

      colors: {
        'primary-color': 'rgb(var(--primary-color) / <alpha-value>)',
        'secundary-color': 'rgb(var(--secundary-color) / <alpha-value>)',
        'error-color': 'rgb(var(--error-color) / <alpha-value>)',
        'warning-color': 'rgb(var(--warning-color) / <alpha-value>)',
        'info-color': 'rgb(var(--info-color) / <alpha-value>)',
        'success-color': 'rgb(var(--success-color) / <alpha-value>)',
        // 'primary-color': {
        //   DEFAULT: 'var(--primary-color)',
        //   10: 'var(--primary-color-10)', // 10% opacity
        //   20: 'var(--primary-color-20)', // 20% opacity
        //   30: 'var(--primary-color-30)', // 30% opacity
        //   40: 'var(--primary-color-40)', // 40% opacity
        //   50: 'var(--primary-color-50)', // 50% opacity
        //   60: 'var(--primary-color-60)', // 60% opacity
        //   70: 'var(--primary-color-70)', // 70% opacity
        //   80: 'var(--primary-color-80)', // 80% opacity
        //   90: 'var(--primary-color-90)', // 90% opacity
        //   100: 'var(--primary-color-100)', // 100% opacity
        // },
        // 'secondary-color': {
        //   DEFAULT: 'var(--secondary-color)',
        //   10: 'var(--secondary-color-10)', // 10% opacity
        //   20: 'var(--secondary-color-20)', // 20% opacity
        //   30: 'var(--secondary-color-30)', // 30% opacity
        //   40: 'var(--secondary-color-40)', // 40% opacity
        //   50: 'var(--secondary-color-50)', // 50% opacity
        //   60: 'var(--secondary-color-60)', // 60% opacity
        //   70: 'var(--secondary-color-70)', // 70% opacity
        //   80: 'var(--secondary-color-80)', // 80% opacity
        //   90: 'var(--secondary-color-90)', // 90% opacity
        //   100: 'var(--secondary-color-100)', // 100% opacity
        // },
        // 'error-color': {
        //   DEFAULT: 'var(--error-color)',
        //   10: 'var(--error-color-10)', // 10% opacity
        //   20: 'var(--error-color-20)', // 20% opacity
        //   30: 'var(--error-color-30)', // 30% opacity
        //   40: 'var(--error-color-40)', // 40% opacity
        //   50: 'var(--error-color-50)', // 50% opacity
        //   60: 'var(--error-color-60)', // 60% opacity
        //   70: 'var(--error-color-70)', // 70% opacity
        //   80: 'var(--error-color-80)', // 80% opacity
        //   90: 'var(--error-color-90)', // 90% opacity
        //   100: 'var(--error-color-100)', // 100% opacity
        // },
        // 'warning-color': {
        //   DEFAULT: 'var(--warning-color)',
        //   10: 'var(--warning-color-10)', // 10% opacity
        //   20: 'var(--warning-color-20)', // 20% opacity
        //   30: 'var(--warning-color-30)', // 30% opacity
        //   40: 'var(--warning-color-40)', // 40% opacity
        //   50: 'var(--warning-color-50)', // 50% opacity
        //   60: 'var(--warning-color-60)', // 60% opacity
        //   70: 'var(--warning-color-70)', // 70% opacity
        //   80: 'var(--warning-color-80)', // 80% opacity
        //   90: 'var(--warning-color-90)', // 90% opacity
        //   100: 'var(--warning-color-100)', // 100% opacity
        // },
        // 'info-color': {
        //   DEFAULT: 'var(--info-color)',
        //   10: 'var(--info-color-10)', // 10% opacity
        //   20: 'var(--info-color-20)', // 20% opacity
        //   30: 'var(--info-color-30)', // 30% opacity
        //   40: 'var(--info-color-40)', // 40% opacity
        //   50: 'var(--info-color-50)', // 50% opacity
        //   60: 'var(--info-color-60)', // 60% opacity
        //   70: 'var(--info-color-70)', // 70% opacity
        //   80: 'var(--info-color-80)', // 80% opacity
        //   90: 'var(--info-color-90)', // 90% opacity
        //   100: 'var(--info-color-100)', // 100% opacity
        // },
        // 'success-color': {
        //   DEFAULT: 'var(--success-color)',
        //   10: 'var(--success-color-10)', // 10% opacity
        //   20: 'var(--success-color-20)', // 20% opacity
        //   30: 'var(--success-color-30)', // 30% opacity
        //   40: 'var(--success-color-40)', // 40% opacity
        //   50: 'var(--success-color-50)', // 50% opacity
        //   60: 'var(--success-color-60)', // 60% opacity
        //   70: 'var(--success-color-70)', // 70% opacity
        //   80: 'var(--success-color-80)', // 80% opacity
        //   90: 'var(--success-color-90)', // 90% opacity
        //   100: 'var(--success-color-100)', // 100% opacity
        // },
      },
      maxWidth: {
        input: '205px',
      },
    },
  },
  plugins: [],
}
