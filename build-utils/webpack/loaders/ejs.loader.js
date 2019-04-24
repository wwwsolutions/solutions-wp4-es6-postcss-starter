const EJSLoader = {
  test: /\.ejs$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ejs-loader',
    }
  ]
};

export default EJSLoader;
