/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'deep-tech': '#0A1628',
                'deep-blue': '#1E3A5F',
                'accent-blue': '#2563EB',
                'accent-light': '#3B82F6',
                'brand-orange': '#F97316',
                'brand-orange-hover': '#EA580C',
                'brand-pink': '#FCE7F3',
                'surface': '#F8F9FA',
                'surface-alt': '#F1F3F5',
                'text-primary': '#0A1628',
                'text-secondary': '#4B5563',
                'text-muted': '#6B7280',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '800' }],
                'section': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '700' }],
                'sub': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.6', fontWeight: '400' }],
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
                'fade-in': 'fadeIn 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
};
