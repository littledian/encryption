const path = require('path');
const root = process.cwd();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const reactScriptsRoot = path.join(root, 'node_modules', 'react-scripts');
const webpackConfigPath = path.join(
  reactScriptsRoot,
  'config',
  'webpack.config.js'
);
const webConfigFactory = require(webpackConfigPath);
const webpackConfig = webConfigFactory('production');
webpackConfig.resolve.alias = {
  ...webpackConfig.resolve.alias,
  '@/utils': ['src/utils'],
  '@/components': ['src/components']
};
require.cache[webpackConfigPath].exports = () => webpackConfig;
require(path.join(reactScriptsRoot, 'scripts', 'build'));
