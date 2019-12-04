const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../src/main/resources");

module.exports = env => {
    const { ENVIRONMENT, VERSION } = env;
    return {
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
            port: 3000
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
                        "sass-loader"
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
            extensions: [".js", ".jsx"]
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env.VERSION": JSON.stringify(VERSION),
                "process.env.ENVIRONMENT": JSON.stringify(ENVIRONMENT)
            }),
            new webpack.LoaderOptionsPlugin({
                debug: true
            }),
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin()
        ]
    };
};
