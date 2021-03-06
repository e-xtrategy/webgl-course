const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin(
        [{
          from: 'assets/**/*'
        }])
    ]
  }
  