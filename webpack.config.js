const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },

  mode: 'development',

  plugins: [new HtmlWebpackPlugin()],

  output: {
    filename: '[name].bundle.js', path: path.resolve(__dirname, 'dist'),
  },
};
