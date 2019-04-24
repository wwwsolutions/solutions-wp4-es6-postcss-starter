import paths from '../webpack.paths';

const IMAGESLoader = mode => ({
  test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: mode === 'development' ? '[name].[ext]' : `${paths.dist.images}/[name].[hash:10].[ext]`,
      }
    }
  ]
});

export default IMAGESLoader;
