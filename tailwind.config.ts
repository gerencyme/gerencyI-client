import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      rubik: "font-family: 'Rubik', sans-serif"
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',

      primary: '#1D0B70',
      secondary: '#BD1B56',
      tertiary: '#37A18F',

      success: '#37A18F',
      error: '#FF0000',

      private: '#080f25',
      darkblue: '#101935',
      easydark: '#212C4D',
      purple: '#2C1C74',
      lightPurple: '#583ED3',

      gray: {
        50: '#ededee',
        100: '#c7c7c9',
        200: '#acacaf',
        300: '#86868b',
        400: '#6e6e75',
        500: '#4a4a52',
        600: '#43434b',
        700: '#35353a',
        800: '#29292d',
        900: '#1f1f22'
      },

      green: {
        50: '#ebf6f4',
        100: '#c1e2dc',
        200: '#a3d4cb',
        300: '#79c0b4',
        400: '#5fb4a5',
        500: '#37a18f',
        600: '#329382',
        700: '#277266',
        800: '#1e594f',
        900: '#17443c'
      },

      violet: {
        50: '#e8e7f1',
        100: '#b9b3d3',
        200: '#978fbd',
        300: '#685c9f',
        400: '#4a3c8d',
        500: '#1d0b70',
        600: '#1a0a66',
        700: '#150850',
        800: '#10063e',
        900: '#0c052f'
      },

      pink: {
        50: '#f8e8ee',
        100: '#ebb8cb',
        200: '#e196b1',
        300: '#d3668e',
        400: '#ca4978',
        500: '#bd1b56',
        600: '#ac194e',
        700: '#86133d',
        800: '#680f2f',
        900: '#4f0b24'
      }
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      black: '900'
    },
    fontSize: {
      '2xl': '64px',
      xl: '32px',
      lg: '24px',
      md: '16px',
      sm: '14px',
      xs: '12px',
      xxs: '8px'
    },
    extend: {
      backgroundImage: {
        'gradient-hero': 'linear-gradient(-45deg, rgba(73,15,68,1) 0%,#4f0b24 50%, #1D0B70 100%)',
        'easy-brightness':
          'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.46) 0%, rgba(119, 10, 82, 0) 80%)'
      }
    }
  },
  plugins: []
};
export default config;
