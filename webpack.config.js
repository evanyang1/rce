const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: "/build/"
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/, // regex: supports .js files. $ means "ends with"
      exclude: /node_modules/
    },{
      test: /\.s?css$/, // support both .scss and .css files
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
