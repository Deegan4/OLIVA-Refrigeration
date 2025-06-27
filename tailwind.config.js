/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                'xs': '475px',
                'iphone': { 'max': '767px' },
                'ipad': { 'min': '768px', 'max': '1024px' },
                'ipad-portrait': { 'min': '768px', 'max': '1024px', 'orientation': 'portrait' },
                'ipad-landscape': { 'min': '768px', 'max': '1024px', 'orientation': 'landscape' },
                'touch': { 'raw': '(hover: none)' },
                'hover': { 'raw': '(hover: hover)' },
            },
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                ice: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                frost: {
                    50: '#f0fdff',
                    100: '#ccfbff',
                    200: '#99f6ff',
                    300: '#4ceeff',
                    400: '#06d9f4',
                    500: '#00bcd4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                }
            },
            spacing: {
                'safe-top': 'env(safe-area-inset-top)',
                'safe-bottom': 'env(safe-area-inset-bottom)',
                'safe-left': 'env(safe-area-inset-left)',
                'safe-right': 'env(safe-area-inset-right)',
            },
            minHeight: {
                'screen-ios': ['100vh', '-webkit-fill-available'],
                'touch-target': '44px',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'touch-feedback': 'touchFeedback 0.1s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInLeft: {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    '0%': { transform: 'translateX(20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                touchFeedback: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(0.95)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'ice-pattern': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
                'frost-pattern': 'linear-gradient(45deg, #f0fdff 0%, #ccfbff 50%, #99f6ff 100%)',
            },
            backdropBlur: {
                'ios': '20px',
            },
            fontSize: {
                'touch-friendly': ['16px', '1.5'],
            },
        },
    },
    plugins: [
        // Custom plugin for iOS-specific utilities
        function({ addUtilities }) {
            const newUtilities = {
                '.touch-manipulation': {
                    'touch-action': 'manipulation',
                },
                '.webkit-appearance-none': {
                    '-webkit-appearance': 'none',
                },
                '.webkit-tap-highlight-none': {
                    '-webkit-tap-highlight-color': 'transparent',
                },
                '.webkit-scrolling-touch': {
                    '-webkit-overflow-scrolling': 'touch',
                },
                '.prevent-zoom': {
                    'font-size': '16px',
                },
                '.safe-area-inset': {
                    'padding-top': 'env(safe-area-inset-top)',
                    'padding-right': 'env(safe-area-inset-right)',
                    'padding-bottom': 'env(safe-area-inset-bottom)',
                    'padding-left': 'env(safe-area-inset-left)',
                },
                '.safe-area-inset-x': {
                    'padding-left': 'env(safe-area-inset-left)',
                    'padding-right': 'env(safe-area-inset-right)',
                },
                '.safe-area-inset-y': {
                    'padding-top': 'env(safe-area-inset-top)',
                    'padding-bottom': 'env(safe-area-inset-bottom)',
                },
            }
            addUtilities(newUtilities)
        }
    ],
}