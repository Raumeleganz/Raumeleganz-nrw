import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        craft: {
          50: '#FFF8F0',
          100: '#FFEFD9',
          200: '#FFD6A5',
          300: '#FFB86F',
          400: '#FF9642',
          500: '#E87823',
          600: '#C76015',
          700: '#A54E12',
          800: '#7D3A0E',
          900: '#5C2B0A',
        },
        warm: {
          50: '#FAF5F0',
          100: '#F5EBE0',
          200: '#E8D4BF',
          300: '#D4B896',
          400: '#C19A6B',
          500: '#A67C52',
          600: '#8B6543',
          700: '#6F5035',
          800: '#533C28',
          900: '#3A2A1D',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'warm-gradient': 'linear-gradient(135deg, #FFF8F0 0%, #FFEFD9 50%, #FFE4C4 100%)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'gradient': 'gradient-shift 8s ease infinite',
      }
    },
  },
  plugins: [],
};

export default config;

