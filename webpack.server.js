const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: "node",
  mode: "development",
  entry: "./server/index.js",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react',['@babel/preset-env']]
        }
      }
    ]
  }
}