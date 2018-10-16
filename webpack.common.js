const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve("./src/index.js"),
  output: {
    path: path.resolve("./dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve("./src/index.html")
    }),
    new CleanWebPackPlugin(["dist"])
  ]
};
