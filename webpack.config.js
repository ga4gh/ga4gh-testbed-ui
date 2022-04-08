const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/lib/server/server.js',
    target: 'node',
    mode: 'development',
    externals: [nodeExternals()],
    output: {
        path: path.resolve('dist'),
        filename: 'ga4gh-testbed-ui.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules"
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true})
    ]
}