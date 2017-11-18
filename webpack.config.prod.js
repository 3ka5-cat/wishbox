var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.join(__dirname, "dist");
var APP_DIR = __dirname;

var config = {
    entry:  {
        index: APP_DIR + "/index.js"
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test : /\.js?$/,
            exclude: /node_modules/,
            use: {loader: "babel-loader"}
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;
