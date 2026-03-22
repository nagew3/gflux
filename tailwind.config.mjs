/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'deep-tech': '#000000', // Pitch black
                'deep-blue': '#0A0A0A', // Darkest gray
                'deep-navy': '#101959',
                'tech-blue': '#1B7FF8',
                'soft-pink': '#F9C9CE',
                'mustard': '#D18202',
                'dark-red': '#8A1404',
                'cta': '#FFFFFF', // White text/buttons for high contrast
                'surface': '#0A0A0C', // Very dark surface
                'surface-alt': '#141417', // Slightly lighter surface
                'text-primary': '#FFFFFF',
                'text-secondary': '#A3A3A3', // neutral-400
                'text-muted': '#737373', // neutral-500
                'bento-border': 'rgba(255, 255, 255, 0.08)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '800' }],
                'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
                'sub': ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.6' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                'soft': '0 2px 24px -4px rgba(10, 22, 40, 0.08)',
                'card': '0 4px 32px -8px rgba(10, 22, 40, 0.12)',
                'glow': '0 0 40px -8px rgba(37, 99, 235, 0.3)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            },
        },
    },
    plugins: [],
};
