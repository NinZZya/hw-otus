const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundel.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 1313,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
