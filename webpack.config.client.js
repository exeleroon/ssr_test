const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.tsx',
    output: {
        // publicPath: '/'
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    // target: 'web',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', // Inject CSS into the DOM
                    'css-loader',   // Translates CSS into CommonJS
                    'sass-loader'   // Compiles Sass to CSS
                ],
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use:  'ts-loader',
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: 'styles.css',
        // }),
        new HtmlWebpackPlugin({
            template: 'public/index.html', // Path to your HTML template
            filename: 'index.html', // Output filename in dist directory
            inject: true // Inject script tags automatically
        })
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    externals: {
        jquery: 'jquery',
    },
};