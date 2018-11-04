const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["./src/main.ts"],
  // watch: true,
  target: "node",
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()],
  externals: [
    nodeExternals()
    // nodeExternals({
    //   whitelist: ['webpack/hot/poll?100'],
    // }),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js"
  }
};
