/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'bg-primary': 'var(--color-bg-primary)',
                'bg-secondary': 'var(--color-bg-secondary)',
                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'accent': 'var(--color-accent)',
                'accent-dark': 'var(--color-accent-dark)',
                'accent-light': 'var(--color-accent-light)',
                'border-subtle': 'var(--color-border)',
                'ink': 'var(--color-ink)',
                'ink-hover': 'var(--color-ink-hover)',
                'ink-light': 'var(--color-ink-light)',
            },
            fontFamily: {
                sans: ['var(--font-sans)'],
                serif: ['var(--font-serif)'],
            },
            fontSize: {
                'hero': ['clamp(2.25rem, 4.2vw, 3.75rem)', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.03em' }],
                'section': ['clamp(1.625rem, 2.6vw, 2.375rem)', { lineHeight: '1.18', fontWeight: '700', letterSpacing: '-0.025em' }],
            },
            maxWidth: {
                'content': '1240px',
                'measure': '65ch',
            },
            borderRadius: {
                'md-soft': '0.75rem',
                'lg-soft': '1.25rem',
                'xl-soft': '1.75rem',
            },
            boxShadow: {
                'subtle': '0 1px 2px rgba(15, 26, 43, 0.04), 0 4px 20px -6px rgba(15, 26, 43, 0.07)',
                'lifted': '0 12px 32px -12px rgba(15, 26, 43, 0.16)',
            },
            transitionDuration: {
                '250': '250ms',
                '450': '450ms',
                '600': '600ms',
            },
        },
    },
    plugins: [],
};
