const merge = require("webpack-merge");
const common = require("./webpack.common");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    host: "localhost",
    port: 3000,
    open: true
  }
  // plugins: [new BundleAnalyzerPlugin()]
});
