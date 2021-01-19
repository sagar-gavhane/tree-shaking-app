const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ESBuildPlugin, ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = {
  entry: {
    index: "/src/index.js",
    sum: "/src/sum.js",
    subtract: "/src/subtract.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "my-first-webpack.bundle.js",
    filename: "[name].js",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESBuildPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      minSize: 1000 * 600,
    },
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015",
      }),
    ],
  },
};
