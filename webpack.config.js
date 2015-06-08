// See http://webpack.github.io/docs/configuration.html for webpack configuration options.
module.exports = {
  context: __dirname + "/src/scripts",

  entry: "./app.jsx",

  output: {
    path: __dirname + "/dist",
    filename: "app.bundle.js"
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, include: __dirname + "/src/scripts", loader: "babel-loader" }
    ]
  },

  resolve: {
    root: __dirname + "./src/scripts",
    extensions: ["", ".js", ".jsx"]
  },

  devtool: "#eval-source-map"
};
