/**
 * ローカル開発用 webpack 設定
 */
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const output = "public"

module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  output: {
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[id].[hash].js",
    publicPath: "/",
    path: path.resolve(__dirname, output),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
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
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "../img/[hash].[ext]",
              outputPath: "img",
              publicPath: "./",
              fallback: "file-loader",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["./node_modules", "./src"],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  plugins: [
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
}
