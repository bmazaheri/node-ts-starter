const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
var TSLintPlugin = require("tslint-webpack-plugin");

module.exports = {
  entry: ["./src/main.ts"],
  // watch: true,
  target: "node",
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.ts$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new TSLintPlugin({
      files: ["./src/**/*.ts"]
    })
    // new webpack.HotModuleReplacementPlugin()
  ],
  externals: [
    nodeExternals()
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js"
  }
};
