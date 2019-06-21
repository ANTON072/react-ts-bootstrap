/**
 * 本番用 webpack 設定
 */
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const output = "build"

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, output),
  },
  module: {
    rules: [
      {
        test: /\.*(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.prod.json",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: "**/*", to: ".", context: "public", ignore: ["index.html"] },
    ]),
  ],
  performance: { hints: false },
})
