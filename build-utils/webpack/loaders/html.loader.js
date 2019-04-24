const HTMLLoader = mode => ({
  test: /\.html$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'html-loader',
      options: mode === 'development' ? { minimize: false } : { minimize: false },
    }
  ]
});

export default HTMLLoader;
