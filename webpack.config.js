const dotenv = require("dotenv");
const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const env = dotenv.config().parsed;

  // Retrieve environment variables and convert to single object
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/dist/",
      filename: "bundle.js",
    },
    mode: "development",
    resolve: {
      modules: [path.join(__dirname, "src"), "node_modules"],
      alias: {
        react: path.join(__dirname, "node_modules", "react"),
      },
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
            },
            {
              loader: "less-loader", // compiles Less to CSS
              options: {
                lessOptions: {
                  modifyVars: {
                    "@primary-color": "#6366F1",
                    "@text-color-secondary": "#4B5563",
                    "@text-color": "#1F2937",
                    "@heading-1-size": "ceil(@font-size-base * 3.4)",
                    "@typography-title-margin-bottom": "16px",
                    "@table-header-bg": "#F5F8FB",
                    "@table-header-color": "#ADC0D6",
                    "@table-selected-row-color": "#405693",
                    "@font-family": ["Karla", "sans-serif"],
                    "@font-size-base": "16px",
                    "@border-color-base": "#e2e8f0",
                    "@select-item-selected-bg": "#EEF2FF",
                    "@border-radius-base": "8px",
                    "@select-dropdown-height": "40px",
                    "@item-active-bg": "#EEF2FF",
                    "@input-padding-vertical-base": "8px",
                    "@select-dropdown-height": "40px",
                  },
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HtmlWebPackPlugin({
        template: "./index.html",
      }),
    ],
  };
};
