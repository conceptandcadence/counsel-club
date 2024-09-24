/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    borderRadius: {
      DEFAULT: '8px',
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '15px',
      xl: '20px',
      full: '9999px',
    },
    boxShadow: {
      DEFAULT: '0px 0px 4px rgba(0, 0, 0, 0.1)',
    },
		colors: {
			transparent: 'transparent',
			white: '#FFF',
			black: '#000',
			offwhite: '#FFFFF3',
			charcoal: '#393631',
			darkgreen: '#22392A',
			mediumgreen: '#10592A',
			brightgreen: '#28A066',
			darkblue: '#152C48',
			pink: '#EED3F2'
		},
    fontFamily: {
      sans: '"Futura ND", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      serif: '"TEST Signifier", ui-serif',
      headline: '"EditorialNew", ui-serif',
    },
    fontSize: {
      // 12px
      xxs: [
        '0.625rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '1.25',
        },
      ],
      // 12px
      '2xs': [
        '0.5rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '1.25',
        },
      ],
			xs: [
        '0.75rem',
        {
          letterSpacing: '-0.01em',
          lineHeight: '1.2',
        },
      ],
      // 14px
      sm: [
        '0.875rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.15',
        },
      ],
      // 16px
      md: [
        '1rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
      ],
      //18px
      lg: [
        '1.125rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
      ],
      // 24px
      'big': [
        '1.35rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.15',
        },
      ],
      xl: [
        '1.75rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.15',
        },
      ],
      // 36px
      '2xl': [
        '2rem',
        {
          letterSpacing: '-0.0175em',
          lineHeight: '1.15',
        },
      ],
      // 54px
      '3xl': [
        '2.25rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1.2',
        },
      ],
      // 74px
      '4xl': [
        '2.5rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1',
        },
      ],
      // 110px
      '5xl': [
        '3rem',
        {
          letterSpacing: '-0.03em',
          lineHeight: '1',
        },
      ],
			h6: [
        '0.5rem',
        {
          letterSpacing: '0.1em',
          lineHeight: '1.25',
        },
      ],
			cite: [
        '0.625rem',
        {
					fontFamily: "TEST Signifier",
          letterSpacing: '0',
          lineHeight: '1.25',
					fontStyle: 'italic',
					textDecoration: 'none',
        },
      ],
			input: [
        '0.875rem',
      ],
    },
    fontWeight: {
			regular: 400,
			medium: 500,
      demibold: 600,
			bold: 700,
    },
    letterSpacing: {
      normal: '-0.03em',
    },
    lineHeight: {
      none: '1',
      field: '1.25',
      caption: '1.25',
      paragraph: '1.6',
    },
		rounded: {
			'sm': '6px',
		},
    extend: {
      colors: {
        darkGray: '#757575',
        gray: '#E7E7E7',
        lightGray: '#F3F3F3',
        offBlack: '#2B2E2E',
        peach: '#FFE1D1',
        shopPay: '#5A31F4',
      },
      height: {
        'header-sm': '4.5rem',
        'header-lg': '6.875rem',
      },
			width: {
				'cc-inside': 'calc(100% - 130px)',
				'cc-inner': 'calc(100% - 64px)',
				'cc-outer': 'calc(100% + 64px)',
			},
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px',
        16: '64px',
        17: '68px',
        18: '72px',
        19: '76px',
        20: '80px',
        21: '84px',
        22: '88px',
        23: '92px',
        24: '96px',
        25: '100px',
        26: '104px',
        27: '108px',
        28: '112px',
        29: '116px',
        30: '120px',
        31: '124px',
        32: '128px',
        33: '132px',
        34: '136px',
        35: '140px',
        36: '144px',
        37: '148px',
        38: '152px',
        39: '156px',
        40: '160px',
        overlap: '20px',
      },
    },
  },
	plugins: [
		require('@tailwindcss/forms'),
	],
};