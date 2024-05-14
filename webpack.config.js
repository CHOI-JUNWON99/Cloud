'use strict'
const path = require('path');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            use: 'babel-loader'
        }]
    },
    plugins: [],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // 'contentBase'를 'static'으로 변경
        },
        host: 'localhost',
        port: 8080 // 'path'를 'port'로 변경
    }
}
