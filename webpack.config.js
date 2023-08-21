const path = require('path');

module.exports = {
  entry: './src/js/helpers.js',
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  mode: 'production',
  optimization: {
    usedExports: true,
  }
};