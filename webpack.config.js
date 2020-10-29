const path = require("path");
const webpackRules = require("./webpackRules");

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
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
      ...webpackRules
    ],
  },
  devServer: {
    port: 1313,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
};
