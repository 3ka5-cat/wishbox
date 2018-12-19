const path = require("path");
const merge = require("webpack-merge");

const development = require('./dev.config.js');
const production = require('./prod.config.js');

const TARGET = process.env.npm_lifecycle_event;

const BUILD_DIR = path.join(__dirname, "../dist");
const APP_DIR = path.join(__dirname, "..");

const common = {
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
    }
};


if (TARGET === 'start' || !TARGET) {
  module.exports = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(production, common);
}
