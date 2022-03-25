const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: "node",
    mode: "development",
    entry: {'ga4gh-testbed-ui': './src/lib/server/server.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
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