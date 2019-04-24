const JSLoader = () => ({
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  }
});

export default JSLoader;
