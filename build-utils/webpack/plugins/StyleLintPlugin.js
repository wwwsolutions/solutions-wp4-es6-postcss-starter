import _StyleLintPlugin from 'stylelint-webpack-plugin';

const MiniCssExtractPlugin = new _StyleLintPlugin({
  configFile: '.stylelintrc',
  context: 'src/styles/',
  files: ['**/*.css'],
  // syntax: 'css',
  failOnError: false,
  quiet: false
});

export default MiniCssExtractPlugin;
