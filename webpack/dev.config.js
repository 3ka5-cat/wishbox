const webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  devServer: {
        host: "127.0.0.1",
        publicPath: "/dist",
        historyApiFallback: true,
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