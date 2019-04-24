import _MiniCssExtractPlugin from 'mini-css-extract-plugin';

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.[hash:10].css',
  chunkFilename: '[id].css'
});

export default MiniCssExtractPlugin;
