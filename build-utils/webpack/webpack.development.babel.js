// import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import devServer from './server/dev-server';

// WEBPACK PLUGINS
import HotModuleReplacementPlugin from './plugins/HotModuleReplacementPlugin';


module.exports = () => {

  return webpackMerge([
    {

      output: {
        filename: '[name].js',
      },

      devtool: 'source-map',

      // PLUGINS <> DEVELOPMENT
      plugins: [
        HotModuleReplacementPlugin,
      ]

    },

    devServer({
      // IF NEEDED CUSTOMIZE HOST/PORT:
      // host: process.env.HOST,
      // port: process.env.PORT,
      // port: 3001
    }),

  ])

};
