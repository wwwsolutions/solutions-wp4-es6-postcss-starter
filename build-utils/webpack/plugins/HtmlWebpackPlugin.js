import _HtmlWebpackPlugin from 'html-webpack-plugin';
import paths from '../webpack.paths';

// And any other config options from html-webpack-plugin:
// https://github.com/ampedandwired/html-webpack-plugin#configuration
const HtmlWebpackPlugin = new _HtmlWebpackPlugin({

  template: "./index.html",

  filename: "./index.html"

});

export default HtmlWebpackPlugin;
