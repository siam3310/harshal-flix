import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      screens: {
        xs: '320px',
        xsm: '375px',
        sm: '475px',
        '2sm': '600px',
        md: '768px',
        '2md': '980px',
        lg: '1025px',
        '2lg': '1290px',
        '3lg': '1360px',
        xl: '1442px',
        '2xl': '1560px',
        '3xl': '1650px',
        '4xl': '1750px'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'pulse-slow': {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          },
          '100%': {
            opacity: '1'
          }
        },
        'pulse-fast': {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-slow': 'pulse-slow 3s infinite',
        'pulse-fast': 'pulse-fast 1s infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
