module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'Cambria'],
      mono: ['SFMono-Regular', 'Menlo'],
      headings: ['Dosis', 'sans-serif'],
    },
    inset: {
      0: 0,
      auto: 'auto',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-8': '-2rem',
    },
    extend: {
      transitionDuration: {
        0: '0ms',
        125: '125ms',
        250: '250ms',
        500: '500ms',
      },
      boxShadow: {
        lg:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        vignette: 'inset 0 0 5rem rgba(0,0,0,.5)',
        none: 'none',
      },
      backgroundSize: {
        50: '50%',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    boxShadow: ['group-hover', 'responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
