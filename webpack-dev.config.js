const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  watch: true,
  mode: "development",
  performance: { hints: false },
  devtool: "inline-cheap-module-source-map"
});
