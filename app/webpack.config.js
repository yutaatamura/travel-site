var path = require("path");

module.exports = {
  entry: {
    App: "./assets/scripts/app.js",
    Vendor: "./assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./temp/scripts"),
    filename: "[name].js"
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
