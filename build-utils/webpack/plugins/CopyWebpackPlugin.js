import _CopyWebpackPlugin from 'copy-webpack-plugin';

import paths from '../webpack.paths';

const CopyWebpackPlugin = new _CopyWebpackPlugin([
  { from: paths.images, to: paths.dist.images },
  { from: paths.sprites, to: paths.dist.sprites },
], { debug: 'info' });

export default CopyWebpackPlugin;
