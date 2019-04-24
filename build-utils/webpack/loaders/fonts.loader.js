import paths from '../webpack.paths';

const FONTSLoader = mode => ({
  test: /\.(woff|woff2|otf|ttf|svg|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: /node_modules/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: mode === 'development' ? '[name].[ext]' : `${paths.dist.fonts}/[name].[hash:10].[ext]`

    }
  }]
});

export default FONTSLoader;
