// See http://webpack.github.io/docs/configuration.html for webpack configuration options.
var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack/hot/dev-server",
    "./src/scripts/app.js"
  ],

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: __dirname + "/src/scripts", loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|png)$/, loader: "url-loader?limit=8192" }
    ]
  },

  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
