import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    {
      pattern: /^bg-/
    }
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      rubik: "'Rubik', sans-serif",
      rosarivo: "'Rosarivo', cursive"
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
      easyblue: '#182754',
      easydark: '#212C4D',
      purple: '#2C1C74',
      lightPurple: '#583ED3',
      lime: '#00F519',

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
    keyframes: {
      shimmer: {
        '0%': { transform: 'translateX(-100%) translateY(-100%)' },
        '100%': { transform: 'translateX(100%) translateY(100%)' }
      },
      crawl: {
        '0%': { transform: 'translateZ(0) translateY(0) rotateX(0deg)' },
        '100%': { transform: 'translateZ(100px) translateY(150px) rotateX(35deg)' }
      },
      opacityOn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      }
    },
    animation: {
      crawl: 'crawl 1000ms 1 ease-in-out forwards',
      opacityOn: 'opacityOn 1000ms 1 ease-in-out forwards'
    },
    extend: {
      backgroundImage: {
        'gradient-hero': 'linear-gradient(-45deg, #080f25 0%, #212C4D 50%, #101935 100%)',
        'easy-brightness':
          'radial-gradient(50% 50% at 50% 50%, #101935 50%, rgba(119, 10, 82, 0) 100%)',
        bigBlockIcon:
          'linear-gradient(132.64deg, rgba(76, 41, 138, 0.25) 0%, rgba(31, 10, 71, 0.5) 100%)',
        mediumBlockIcon:
          'linear-gradient(130.05deg, rgba(82, 53, 133, 0.5) 4.49%, rgba(76, 41, 138, 0) 100%)',
        smallBlockIcon:
          'linear-gradient(130.05deg, rgba(129, 82, 210, 0.5) 4.49%, rgba(50, 10, 120, 0) 100%)'
      }
    }
  },
  plugins: []
};
export default config;
