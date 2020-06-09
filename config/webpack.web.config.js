const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { aliases } = require("./webpack.aliases");

const APP_DIR = path.resolve(__dirname, "../src/main/resources");

module.exports = () => ({
    target: "web",
    entry: {
        polyfills: "@babel/polyfill",
        app: `${APP_DIR}/App.jsx`
    },
    output: {
        path: `${APP_DIR}/js`,
        filename: "[name].bundle.js",
        crossOriginLoading: "anonymous"
    },
    devtool: "source-map",
    devServer: {
        host: "localhost",
        historyApiFallback: true,
        open: false,
        hot: true,
        port: 3000,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: "css-loader"
                }
            },
            {
                test: /\.scss$|\.sass$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    {
                        loader: "sass-resources-loader",
                        options: {
                            resources: [
                                `${APP_DIR}/styles/variables.scss`,
                                `${APP_DIR}/styles/mixins.scss`,
                                `${APP_DIR}/styles/animations.scss`

                            ]
                        }
                    }
                ]
            },
            {
                test: /.(png|woff(2)?|eot|ttf|svg|gif)([?a-z0-9=.]+)?$/,
                use: [{
                    loader: "url-loader?limit=10000"
                }]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: { ...aliases }
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin()
    ]
});
