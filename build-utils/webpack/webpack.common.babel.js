// PATHS
import paths from './webpack.paths';

// WEBPACK
import webpackMerge from 'webpack-merge';

// WEBPACK LOADERS
import JSLoader from './loaders/eslint.loader';
import ESLintLoader from './loaders/eslint.loader';
import POSTCSSLoader from './loaders/postcss.loader';
// import EJSLoader from './loaders/ejs.loader';
import HTMLLoader from './loaders/html.loader';
import IMAGESLoader from './loaders/images.loader';
import FONTSLoader from './loaders/fonts.loader';

// WEBPACK PLUGINS
import HtmlWebpackPlugin from './plugins/HtmlWebpackPlugin';
import MiniCssExtractPlugin from './plugins/MiniCssExtractPlugin';
import StyleLintPlugin from './plugins/StyleLintPlugin';
import ProgressPlugin from './plugins/ProgressPlugin';


// WEBPACK CONFIGS
const modeConfig = env => require(`./webpack.${env}.babel`)(env);
import presetConfig from './webpack.load-presets';


module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {

  return webpackMerge([
    {
      mode,
      context: paths.src,

      entry: {
        modernizr: [ paths.head.modernizr ],
        vendor: [ paths.vendors.lazyloading, paths.vendors.picturefill, /* paths.vendors.ionicons */ ],
        app: [ paths.entry.app ],
      },

      // LOADERS
      // Loaders are evaluated/executed from right to left.
      module: {
        rules: [
          JSLoader,
          ESLintLoader,
          POSTCSSLoader(mode),
          HTMLLoader(mode),
          //EJSLoader, // IF OMMITED WILL FALLDOWN TO WEBPACK DEFAULT TEMPLATE ENGINE WHICH IS LODASH. THIS LOADER ISNT REQUIRED
          IMAGESLoader(mode),
          FONTSLoader(mode),
        ]
      },

      // PLUGINS <> COMMON FOR ALL MODES
      plugins: [
        HtmlWebpackPlugin,
        ProgressPlugin,
        MiniCssExtractPlugin,
        StyleLintPlugin,
      ],

    },

    modeConfig(mode),

    presetConfig({ mode, presets })

  ]);

};
