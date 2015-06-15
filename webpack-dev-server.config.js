// See http://webpack.github.io/docs/configuration.html for webpack configuration options.
var webpack = require("webpack");

module.exports = {
  colors : true,
  progress : true,

  entry: [
    "webpack/hot/dev-server",
    "./src/scripts/app.jsx"
  ],

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: ""
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: __dirname + "/src/scripts", loader: "babel-loader" },
      { test: /\.jsx$/, include: __dirname + "/src/scripts", loader: "react-hot-loader" }
    ]
  },

  resolve: {
    root: __dirname + "./src/scripts",
    extensions: ["", ".js", ".jsx"]
  },

  devtool: "#eval-source-map"
};
