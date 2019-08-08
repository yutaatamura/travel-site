var path = require("path");

module.exports = {
  entry: "./assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "./temp/scripts"),
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
