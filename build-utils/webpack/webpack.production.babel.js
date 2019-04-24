import paths from './webpack.paths';
import webpackMerge from 'webpack-merge';

// WEBPACK PLUGINS
import WebpackAssetsManifestPlugin from './plugins/WebpackAssetsManifestPlugin';
import CopyWebpackPlugin from './plugins/CopyWebpackPlugin';
import CleanWebpackPlugin from './plugins/CleanWebpackPlugin';
import TerserWebpackPlugin from './plugins/TerserWebpackPlugin';
import OptimizeCSSAssetsPlugin from './plugins/OptimizeCSSAssetsPlugin';

module.exports = () => {

  return webpackMerge([
    {

      output: {
        path: paths.dist.root,
        filename: `${paths.dist.scripts}/[name].[hash:10].js`,
        chunkFilename: `${paths.dist.scripts}/[name].js`
      },

      optimization: {
        minimizer: [
          TerserWebpackPlugin,
          OptimizeCSSAssetsPlugin
        ]
      },

      // PLUGINS <> PRODUCTION MODE
      plugins: [
        WebpackAssetsManifestPlugin,
        CopyWebpackPlugin,
        CleanWebpackPlugin,
      ]

    }

  ])

};
