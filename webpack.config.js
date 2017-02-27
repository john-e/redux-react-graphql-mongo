let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: './src/Base.jsx',
    output: { path: path.resolve(__dirname, 'assets'), filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    plugins: []
}