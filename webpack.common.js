/**
 * webpack共通設定
 */
const path = require("path")

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
}
