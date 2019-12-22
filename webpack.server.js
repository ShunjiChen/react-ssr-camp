/*
 * @Author: ShunjiChen
 * @Email: 1023870153@qq.com
 * @Date: 2019-12-10 22:05:44
 * @Description: file content
 */
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
      },{
        test: /\.css$/,
        use: ['isomorphic-style-loader',{
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
      },
    ]
  }
}