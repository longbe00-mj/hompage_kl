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
        primary: '#1F2937',
        secondary: '#3B82F6',
        accent: '#F59E0B',
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        light: '#F3F4F6',
        dark: '#111827',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
};

export default config;
