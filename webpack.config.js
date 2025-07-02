const path = require('path');

module.exports = {
  entry: { 
    background: './src/background.js', 
    'mellowtel-content': './src/mellowtel-content.js',
    popup: './src/popup.js'
  },
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: '[name].js', 
    clean: true 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: { 
    extensions: ['.js'] 
  },
  optimization: { 
    minimize: false 
  }
};