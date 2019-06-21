/**
 * 本番用 webpack 設定
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const output = 'build';

module.exports = {
  mode: 'production',
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
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader'
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
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: '**/*', to: '.', context: 'public', ignore: ['index.html'] }
    ])
  ]
};
