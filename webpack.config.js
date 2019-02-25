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
      { test: /\.hbs$/, use: {
        loader: 'handlebars-loader',
        options: {
          helperDirs: [__dirname + "/src/hbs/helpers"],
          partialDirs: [__dirname + "/src/hbs/partials"]
      }}
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: __dirname+ '/src/index.html'})
  ]
};