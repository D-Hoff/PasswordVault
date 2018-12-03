const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
module.exports = {
    entry: [
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
        "@babel/polyfill",
        "./src/entry-js.js",
    ],
    mode: 'development',
    output: {
        publicPath: "/public/",
        filename: "bundle.js",
        path: path.join(__dirname, "/public/"),
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: "/public/",
        hot: true,
        historyApiFallBack: true
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                options: {
                    presets: [ "@babel/preset-env","@babel/preset-react"],
                    plugins: ["react-html-attrs", "transform-class-properties"],
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" },
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        sourceMap: true
                    }
                }
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                exclude: [
                    path.join(__dirname, "node_modules/"),
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        limit: 500,
                        name: "images/[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        limit: 500,
                        name: "fonts/[name].[ext]"
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [
            "bower_components",
            "node_modules",
        ],
        extensions: [
            "*",
            ".js",
            ".jsx",
            ".style"
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["public"]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: "./src/meta", to: "./meta" },
        ])
    ]
};