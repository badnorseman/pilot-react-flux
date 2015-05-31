// See http://webpack.github.io/docs/configuration.html for webpack configuration options.
var webpack = require("webpack");

module.exports = {

  context: __dirname,

  entry: {
    app: [
      "webpack/hot/dev-server",
      "./src/scripts/test-app.jsx"
    ]
  },

  output: {
    path: "./dist",
    filename: "test-app.bundle.js"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

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

  devtool: "#eval-source-map",

  devServer: {
        contentBase: "./build",
        noInfo: true,
        hot: true,
        inline: true
    }
};
