import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const POSTCSSLoader = mode => ({
  test: /\.(sa|sc|c)ss$/,
  exclude: /node_modules/,
  use: [
    mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: mode === 'development' ? true : false
      }
    },
    // POSTCSS
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: mode === 'development' ? true : false,
        config: {
          path: 'build-utils/webpack/postcss/postcss.config.js',
        },
      }
    },
    // SASS AS ALTERNATIVE TO POSTCSS
    // {
    //   loader: 'sass-loader',
    //   options: {
    //     sourceMap: mode === 'development' ? true : false,
    //     implementation: require('node-sass'),
    //   }
    // }
  ]
});

export default POSTCSSLoader;
