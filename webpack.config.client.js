const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/client/index.tsx',
    output: {
        // publicPath: '/'
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    target: 'node',
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
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    externals: {
        jquery: 'jquery',
    },
};