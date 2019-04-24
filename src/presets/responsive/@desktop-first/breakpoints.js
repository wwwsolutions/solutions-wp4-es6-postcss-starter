/* DOCUMENT INFORMATION

  > SET BREAKPOINTS @DESKTOP-FIRST-STRATEGY
  > CONVERTED FROM
    /src/presets/responsive/@desktop-first/breakpoints.yml

*//////////////////////////////////////////////////

const Model = {
  breakpoint: {
    instructions: {
      About: 'Breakpoints for @desktop-first strategy',
      'Set breakpoints': '/src/presets/responsive/@desktop-first/breakpoints.yml',
      'Select a strategy': '/build-utils/webpack/postcss/postcss.config.js | postcss-map@DESKTOP-FIRST STRATEGY',
    },

    standard: {
      atSmall: 'only screen and (max-width: 37.5em)',
      atMedium: 'only screen and (max-width: 56.25em)',
      atLarge: 'only screen and (max-width: 75em)',
      atXLarge: 'only screen and (min-width: 112.5em)',
    },

    image: {
      atHiDpi: 'only screen and (min-resolution: 1920dpi) and (min-width: 37.5em), only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em), only screen and (min-width: 125em)',
    },

  }
};

export { Model as breakpoints };
