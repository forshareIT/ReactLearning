'use strict';
const merge = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common,{
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    plugins:[
        new BundleAnalyzerPlugin({
            reportFilename:'report.html'
        })
    ]
});