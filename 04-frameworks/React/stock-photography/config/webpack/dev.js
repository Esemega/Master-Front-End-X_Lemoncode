const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const base = require('./base');
const helpers = require('./helpers');

const hotReloadingEntries = ['react-hot-loader/patch'];

module.exports = merge.strategy({
  entry: 'prepend',
})(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'errors-only',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      core: helpers.resolveFromRootPath('src/core'),
      scenes: helpers.resolveFromRootPath('src/scenes'),
      pods: helpers.resolveFromRootPath('src/pods'),
      layouts: helpers.resolveFromRootPath('src/layouts'),
      common: helpers.resolveFromRootPath('src/common'),
      'common-app': helpers.resolveFromRootPath('src/common-app'),
      router: helpers.resolveFromRootPath('src/router'),
    },
  },
  entry: {
    app: hotReloadingEntries,
  },
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: '[name].js',
  },
  devServer: {
    port: 8080,
    hot: true,
  },
  plugins: [
    new Dotenv({
      path: 'dev.env',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
