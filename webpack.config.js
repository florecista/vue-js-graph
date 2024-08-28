const path = require("path");
const webpack = require("webpack");

const BabiliPlugin = require("babili-webpack-plugin");


module.exports = {
    entry: "./source/main.js",

    output: {
        path: path.resolve(__dirname, "./public"),
        publicPath: "/public/",
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        "less": "vue-style-loader!css-loader!less-loader"
                    }
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|woff|ttf|woff2|eot)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },

    performance: {
        hints: false
    },

    devtool: "#eval-source-map",

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

if (process.env.NODE_ENV === "production") {
    module.exports.devtool = "#source-map";

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new BabiliPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}