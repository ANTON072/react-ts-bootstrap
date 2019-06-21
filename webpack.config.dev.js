/**
 * ローカル開発用 webpack 設定
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const output = 'public';

module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, output)
  },
  module: {
    rules: [
      {
        test: /\.*(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            // webpackをマルチスレッド化
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1,
              poolTimeout: Infinity
            }
          },
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              // 型を無視する
              happyPackMode: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '../img/[hash].[ext]',
              outputPath: 'img',
              publicPath: './',
              fallback: 'file-loader'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
