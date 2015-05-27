// See http://webpack.github.io/docs/configuration.html for webpack configuration options.
module.exports = {

  context: __dirname,
  entry: "./src/scripts/app.jsx",

  output: {
    path: "./dist",
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
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },

  devtool: "#eval-source-map"
};
