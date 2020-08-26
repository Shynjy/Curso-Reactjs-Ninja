'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
    devtool: 'source-map',
    //entrada do arquivo
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ],
    //saída e local que o webpack usa para pré-build
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    //módulos e compiladores
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel'
        }]
    }
})