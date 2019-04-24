import _CleanWebpackPlugin from 'clean-webpack-plugin';

import paths from '../webpack.paths';
paths.dist.root //?
paths.root //?

const CleanWebpackPlugin = new _CleanWebpackPlugin(paths.dist.root, {
  // Absolute path to your webpack root folder (paths appended to this)
  // Default: root of your package
  root: paths.root,

  // Write logs to console.
  verbose: true,

  // Use boolean "true" to test/emulate delete. (will not remove files).
  // Default: false - remove files
  dry: false,

  // If true, remove files on recompile.
  // Default: false
  watch: false,

  // Instead of removing whole path recursively,
  // remove all path's content with exclusion of provided immediate children.
  // Good for not removing shared files from build directories.
  exclude: ['files', 'to', 'ignore'],

  // allow the plugin to clean folders outside of the webpack root.
  // Default: false - don't allow clean folder outside of the webpack root
  allowExternal: false,

  // perform clean just before files are emitted to the output dir
  // Default: false
  beforeEmit: false
});

export default CleanWebpackPlugin;
