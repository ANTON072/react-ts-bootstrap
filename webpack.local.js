/**
 * ローカル開発用 webpack 設定
 */
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

const output = "public"

module.exports = merge(common, {
  mode: "development",
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
            // webpackをマルチスレッド化
            loader: "thread-loader",
            options: {
              workers: require("os").cpus().length - 1,
              poolTimeout: Infinity,
            },
          },
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              // 型を無視する
              happyPackMode: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.APP_DEBUG": JSON.stringify(process.env.APP_DEBUG),
      "process.env.API_URL": JSON.stringify(process.env.API_URL),
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    hot: true,
  },
})
