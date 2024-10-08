const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const Dotenv = require('dotenv-webpack');

const rootDir = path.resolve(__dirname, '../');
const baseConfig = {
    entry: path.resolve(rootDir, 'src/index.tsx'),
    //Where we put the production code
    output: {
        path: path.resolve(rootDir, 'build/'),
        filename: '[name].[chunkhash].bundle.js',
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(ts(x?)|js(x?))$/,
                exclude: /node_modules/, //don't test node_modules folder
                use: [
                    {
                        loader: "ts-loader",
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg)$/i,
                loader: "file-loader",
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(rootDir, "public/index.html"),
        }),
        new MiniCssExtractPlugin(),
        new Dotenv(),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            '@': path.resolve(rootDir, 'src/'),
        },
    },
};

module.exports = ({ analyze = false }, { mode = 'production' }) => {
    const isDev = mode === 'development';
    const isProd = mode === 'production';
    if (isDev) {
        baseConfig.devServer = {
            hot: true,
            compress: true,
            port: 'auto',
            historyApiFallback: true,
            open: true,
        };
        baseConfig.cache = true;
    }
    if (isProd) {
        if (analyze) baseConfig.plugins.push(new BundleAnalyzerPlugin());
        baseConfig.optimization = {
            splitChunks: {
                chunks: 'all',
                maxAsyncRequests: Infinity,
            },
        };
    }

    return { ...baseConfig,  mode };
};
