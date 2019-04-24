import _TerserWebpackPlugin from 'terser-webpack-plugin';

const TerserWebpackPlugin = new _TerserWebpackPlugin({

  // Type: String|RegExp|Array<String|RegExp> Default: /\.m?js(\?.*)?$/i
  test: /\.js(\?.*)?$/i,

  // Enable file caching. Default path to cache directory: node_modules/.cache/terser-webpack-plugin.
  cache: false, // DEFAULT

  // Use multi-process parallel running to improve the build speed. Default number of concurrent runs: os.cpus().length - 1.
  parallel: 4,

  // Use source maps to map error message locations to modules (this slows down the compilation).
  sourceMap: true,

  // Terser minify options.
  terserOptions: {
    ecma: undefined,
    warnings: false,
    parse: {},
    compress: {},
    mangle: true, // Note `mangle.properties` is `false` by default.
    module: false,
    output: null,
    toplevel: false,
    nameCache: null,
    ie8: false,
    keep_classnames: undefined,
    keep_fnames: false,
    safari10: false,
  },
});

export default TerserWebpackPlugin;
