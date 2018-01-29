const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');

module.exports = {
  entry: {
    'app': ['./js/app.js', './css/app.scss'],
    'vendor': [
      'phoenix'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../priv/static/js'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: /css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {loader: "sass-loader"},
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
  ],
};