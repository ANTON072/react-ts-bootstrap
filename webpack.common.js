/**
 * webpack共通設定
 */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[id].[hash].js",
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "img/[hash].[ext]",
              publicPath: "/",
              fallback: "file-loader",
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
      publicUrl: process.env.PUBLIC_URL,
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: "**/*", to: ".", context: "public", ignore: ["index.html"] },
    ]),
  ],
  resolve: {
    modules: ["./node_modules", "./src"],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
}
