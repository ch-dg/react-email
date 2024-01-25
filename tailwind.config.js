/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: {
    container: false,
    aspectRatio: false,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '572px',
          },
          '@screen md': {
            maxWidth: '640px',
          },
          '@screen lg': {
            maxWidth: '896px',
          },
          '@screen xl': {
            maxWidth: '1152px',
          },
          '@screen 2xl': {
            maxWidth: '1312px',
          },
        },
      });
    },
  ],
  theme: {
    screens: {
      xs: { max: '375px' },
      // => @media (max-width: 375px) { ... }
      mobileLandscape: { raw: '(max-height: 440px)' },
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['museo-sans', 'sans serif'],
      body: ['Source Sans Pro', 'sans serif'],
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
      brand: '0.625rem',
    },
    extend: {
      colors: {
        primary: '#0675CD',

        'primary-100': '#F4FAFF',
        'primary-200': '#E5F3FF',
        'primary-300': '#C8E4FF',
        'primary-400': '#9BCFFF',
        'primary-500': '#2E9AFF',
        'primary-600': '#0D77DB',
        'primary-700': '#0265C1',
        'primary-800': '#0054A3',
        'primary-900': '#00417D',

        'secondary-200': '#F2F2F7',
        'secondary-300': '#D6C5ED',
        'secondary-400': '#A58CC9',
        'secondary-500': '#8A6AB9',
        'secondary-600': '#6F4CA2',
        'secondary-700': '#583C80',
        'secondary-800': '#4C346F',
        'secondary-900': '#3A2657',

        'success-200': '#DFFDD6',
        'success-300': '#C1F2B2',
        'success-400': '#92D17E',
        'success-500': '#4FBA2E',
        'success-600': '#3B8524',
        'success-700': '#32701E',
        'success-800': '#204814',
        'success-900': '#123109',

        'warning-200': '#FFF1D6',
        'warning-300': '#FFE7B8',
        'warning-400': '#FFDE9E',
        'warning-500': '#FFD585',
        'warning-600': '#FFC453',
        'warning-700': '#CE7E07',
        'warning-800': '#AA6804',

        'error-200': '#FFEBEB',
        'error-300': '#FDDCDC',
        'error-400': '#F9B6B6',
        'error-500': '#D55453',
        'error-600': '#AF2C2B',
        'error-700': '#A12221',
        'error-800': '#862120',

        'neutral-200': '#F6F6FB',
        'neutral-300': '#EEEEF9',
        'neutral-400': '#CDCED8',
        'neutral-500': '#898B9A',
        'neutral-600': '#6E6F79',
        'neutral-700': '#61626F',
        'neutral-800': '#4F5061',
        'neutral-900': '#0D0D0D',

        'accent-1-100': '#FBF9FD',
        'accent-1-200': '#F8F3FF',
        'accent-1-300': '#D9C3FF',
        'accent-1-400': '#B387FF',
        'accent-1-500': '#8B56E7',
        'accent-1-600': '#7546C5',
        'accent-1-700': '#5A28AD',
        'accent-1-800': '#3E0D97',
        'accent-1-900': '#32077E',

        'accent-2-100': '#FFF8FD',
        'accent-2-200': '#FAEFF7',
        'accent-2-300': '#F891DE',
        'accent-2-400': '#FC4CD0',
        'accent-2-500': '#E911B3',
        'accent-2-600': '#D60BA3',
        'accent-2-700': '#B7068A',
        'accent-2-800': '#9C0576',
        'accent-2-900': '#7B025D',

        'accent-3-100': '#F3FFEF',
        'accent-3-200': '#E3FFDB',
        'accent-3-300': '#A1F488',
        'accent-3-400': '#4AD820',
        'accent-3-500': '#2FB806',
        'accent-3-600': '#26A401',
        'accent-3-700': '#228305',
        'accent-3-800': '#1A6803',
        'accent-3-900': '#124E01',

        'accent-4-100': '#F5FEFF',
        'accent-4-200': '#DBFAFF',
        'accent-4-300': '#A3F3F9',
        'accent-4-400': '#0DB1CB',
        'accent-4-500': '#209FB6',
        'accent-4-600': '#1292A9',
        'accent-4-700': '#09788C',
        'accent-4-800': '#045968',
        'accent-4-900': '#044652',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'heroBg-Dg': 'linear-gradient(125deg, #0D77DB 0%, #0265C1 12%, #0265C0 53%, #0054A3 100%)',
        'productBg-Protect': 'linear-gradient(to right, #0D77DB, #0265C1, #0265C0, #0054A3)',
        'productBg-Renew': 'linear-gradient(107.97deg, #2FB806 -2.74%, #228305 45.46%, #124E01 96.14%)',
        'productBg-Repair': 'linear-gradient(107.31deg, #E911B3 1.16%, #B7068A 58.66%, #7B025D 91.74%)',
        'productBg-Claim': 'linear-gradient(106.8deg, #209FB6 -4.64%, #09788C 48.3%, #045968 96.07%)',
        'productBg-Register':
          'linear-gradient(106.51deg, #8B56E7 2.67%, #5A28AD 52.54%, #460FA2 92.88%, #3E0D97 92.88%, #3E0D97 92.88%)',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
};
