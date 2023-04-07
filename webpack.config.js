const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = process.env.NODE_ENV === "production"? "production" : "development";
module.exports = {

  mode: mode,

  module: {
    rules: [
        {
            test: /\.s?css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",

  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    liveReload: true,
  },

  target: "web"
};
