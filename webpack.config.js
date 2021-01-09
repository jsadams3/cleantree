const dotenv = require('dotenv')
const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = () => {
    const env = dotenv.config().parsed

    // Retrieve environment variables and convert to single object
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next])
        return prev
    }, {})
    return {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        mode: 'development',
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            alias: {
                react: path.join(__dirname, 'node_modules', 'react')
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        }
                    ]
                }
            ]
        },
        devServer: {},
        plugins: [
            new webpack.DefinePlugin(envKeys),
            new HtmlWebPackPlugin({
                template: './src/index.html'
            })
        ]
    }
}
