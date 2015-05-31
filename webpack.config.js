// See http://webpack.github.io/docs/configuration.html for webpack configuration options.
module.exports = {
  context: __dirname + "/src/scripts",

  entry: "./app.jsx",

  output: {
    path: __dirname + "/dist",
    filename: "app.bundle.js"
  },

  externals: {
    jquery: "var jQuery"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: __dirname + /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: __dirname + /node_modules/, loader: "babel-loader" },
      { test: require.resolve("jquery"), loader: "expose?jQuery" },
      { test: require.resolve("jquery"), loader: "expose?$" }
    ]
  },

  resolve: {
    root: __dirname + "./src/scripts",
    extensions: ["", ".js", ".jsx"]
  },

  devtool: "#eval-source-map"
};
