/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        base: 'Roboto, sans-serif',
      },
      boxShadow: {
        1: ' rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
        2: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
        3: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
        4: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
        5: 'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
        6: 'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
        7: 'rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px',
        8: 'rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px',
        9: 'rgba(0, 0, 0, 0.2) 0px 7px 9px -4px, rgba(0, 0, 0, 0.14) 0px 14px 21px 2px, rgba(0, 0, 0, 0.12) 0px 5px 26px 4px',
        10: 'rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px',
        11: 'rgba(0, 0, 0, 0.2) 0px 9px 11px -5px, rgba(0, 0, 0, 0.14) 0px 18px 28px 2px, rgba(0, 0, 0, 0.12) 0px 7px 34px 6px',
        12: 'rgba(0, 0, 0, 0.2) 0px 15px 8px -6px, rgba(0, 0, 0, 0.14) 0px 20px 31px 3px, rgba(0, 0, 0, 0.12) 0px 20px 38px 7px',
        13: 'rgba(0, 0, 0, 0.2) 0px 10px 14px -6px, rgba(0, 0, 0, 0.14) 0px 22px 35px 3px, rgba(0, 0, 0, 0.12) 0px 8px 42px 7px',
        14: 'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
      },
      animation: {
        ripple: 'ripple 700ms cubic-bezier(0, 0, 0.2, 1) 1',
        grow: ' grow 200ms cubic-bezier(0, 0, 0.2, 1) 1 forwards',
        dwarf: ' dwarf 200ms cubic-bezier(0, 0, 0.2, 1) 1 forwards',
        height: ' height 200ms cubic-bezier(0, 0, 0.2, 1) 1 ',
        opacity: ' opacity 200ms cubic-bezier(0, 0, 0.2, 1) 1 ',
        opacity0: ' opacity0 200ms cubic-bezier(0, 0, 0.2, 1) 1 ',
      },
      keyframes: {
        grow: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        dwarf: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0)',
            opacity: '0',
          },
        },
        height: {
          '0%': {
            height: '0',
          },
          '100%': {
            height: '100%',
          },
        },
        ripple: {
          '0%': {
            width: '0',
            height: '0',
          },
          '80%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(4)' },
        },
        opacity: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        opacity0: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
        },
      },

      colors: {
        'primary-color': 'rgb(var(--primary-color) / <alpha-value>)',
        'secondary-color': 'rgb(var(--secondary-color) / <alpha-value>)',
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
