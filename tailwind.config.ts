import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { brand: { DEFAULT: '#0ea5e9', dark: '#0284c7', light: '#7dd3fc' } }, borderRadius: { '2xl': '1rem' } } }, plugins: [] };
export default config;
