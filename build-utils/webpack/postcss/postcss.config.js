module.exports = {
  plugins: {

    'postcss-import': { // https://github.com/postcss/postcss-import
    },

    'postcss-assets': { // https://github.com/borodean/postcss-assets
      basePath: 'src/',
      loadPaths: ['assets/fonts/', 'assets/icons/', 'assets/images/', 'assets/sprites/', 'assets/videos/']
    },

    'postcss-map': { // https://www.npmjs.com/package/postcss-map
      basePath: 'src/presets',
      maps: [

        // SELECT ONE OF RESPONSIVE DESIGN STRATEGIES
        // COMMENT/UNCOMMENT DESIRED STRATEGY

        // @MOBILE-FIRST STRATEGY
        // 'responsive/@mobile-first/breakpoints.yml',
        // 'responsive/@mobile-first/font-size.yml',
        // 'responsive/@mobile-first/line-height.yml',

        // @DESKTOP-FIRST STRATEGY
        'responsive/@desktop-first/breakpoints.yml',
        'responsive/@desktop-first/font-size.yml',
        'responsive/@desktop-first/line-height.yml',

        // SET PROJECT'S FONTS [@font-face]
        'typography/font-family.yml',
      ],
    },

    'postcss-mixins': { // https://github.com/postcss/postcss-mixins
    },

    /* SIMPLE VARS */
    'postcss-simple-vars': { // https://github.com/postcss/postcss-simple-vars
    },

    /* CUSTOM PROPERTIES */
    'postcss-custom-properties': { // https://github.com/postcss/postcss-custom-properties

      // The preserve option determines whether Custom Properties and properties using custom properties
      // should be preserved in their original form. By default, both of these are preserved.
      preserve: true,

    },

    'postcss-nested': { // https://github.com/postcss/postcss-nested
    },

    'postcss-utilities': { // https://ismamz.github.io/postcss-utilities/docs
    },

    'postcss-jsmath': { // https://github.com/naaspati/postcss-jsmath
      isString(arg) {
        if (isNaN(arg)) {
          return 1;
        }
        return 0;
      },
      // HELPER FUNCTIONS
      sum(...numbers) {
        return numbers.reduce((x, y) => x + y);
      },
      pow(base, exponent) {
        return Math.pow(base, exponent);
      },

    },

    'postcss-calc': { // https://github.com/postcss/postcss-calc

      // Adds warnings when calc() are not reduced to a single value.
      warnWhenCannotResolve: false,

      // Allow you to preserve calc() usage in output so browsers
      // will handle decimal precision themselves.
      preserve: true,

      // Allows calc() usage as part of media query declarations.
      mediaQueries: true,

      // Allows calc() usage as part of selectors.
      selectors: true,

      // Allow you to define the precision for decimal numbers.
      precision: 5,

    },

    'postcss-atroot': { // https://www.npmjs.com/package/postcss-atroot
    },

    'postcss-selector-not': { // https://github.com/postcss/postcss-selector-not
    },

    'postcss-extend': { // https://github.com/travco/postcss-extend
    },

    'lost': { // http://lostgrid.org/docs
    },

    'postcss-preset-env': { // https://github.com/csstools/postcss-preset-env
      stage: 0,
    },

    'postcss-color-function': { // https://github.com/postcss/postcss-color-function
    },

    'postcss-media-fn': { // https://github.com/jonathantneal/postcss-media-fn
    },

    'postcss-flexbugs-fixes': { // https://www.npmjs.com/package/cssnano
    },

    'cssnano': { // https://www.npmjs.com/package/cssnano
    },

    'postcss-reporter': { // https://github.com/postcss/postcss-reporter
    },

  },
};
