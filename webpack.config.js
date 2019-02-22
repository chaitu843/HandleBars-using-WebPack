const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  devtool: "cheap-eval-source-map",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: "/node_modules/" },
      { test: /\.hbs$/, use: 'handlebars-loader'},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: __dirname+ '/src/index.html'})
  ]
};