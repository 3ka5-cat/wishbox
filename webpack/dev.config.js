const webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  devServer: {
        host: "0.0.0.0",
        publicPath: "/dist",
        inline: true
    },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
      __DEVELOPMENT__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};