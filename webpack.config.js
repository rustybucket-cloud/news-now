const HTMLWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
require('dotenv').config()


const mode = process.env.ENVIRONMENT === "development" ? "development" : "production"

module.exports = {
    mode: mode,
    entry: "./src/scripts/index.ts",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node-modules/,
                include: [path.resolve(__dirname, 'src/scripts')]
            },
            {
                test: /\.svg$/i,
                use: {
                    loader: "svg-url-loader",
                    options: {
                        encoding: "base64"
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'News Now',
            template: 'src/html/index.ejs'
        })
    ]
}