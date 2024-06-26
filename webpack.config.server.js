const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    // entry: {
    //     server: './src/server/index.js',
    //     jquery: './src/jquery-script.js'
    // },
    entry: './src/server/index.js',
    output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].bundle.js',
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
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
        alias: {
            jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    },
    // externals: {
    //     jquery: 'jquery',
    // },
};