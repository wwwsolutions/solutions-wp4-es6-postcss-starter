// HELPERS
import { resolveAbs } from '../helpers';

const devServer = ({ host, port } = {}) => ({

  devServer: {
    // contentBase: buildPath,
    contentBase: resolveAbs('./src'),
    // compress: true,
    // stats: "errors-only",
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: true,
    overlay: true,
    hot: true
  },
});

export default devServer;
