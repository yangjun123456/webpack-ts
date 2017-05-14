var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({path: path.join(__dirname, 'dist', 'views')});

// var webpack = require("webpack");
// var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
// var WebpackChunkHash = require("webpack-chunk-hash");
// var InlineManifestWebpackPlugin=require("inline-manifest-webpack-plugin");
// var HtmlWebpackPlugin=require("html-webpack-plugin");


module.exports = {
    entry: {
        abc: './app/abc.ts', //编译总的ts文件，导入了其他模块
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
        chunkFilename: "bundle.[chunkhash].js",
        publicPath: "dist/",       //实现修改更新至缓存，启动webpack-dev-server后直接编译文件至缓存
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"] //直接编译及打包一步完成需要resolve，执行webpack时执行
    },
    devServer:{
        historyApiFallback:true,
        inline:true,
        port:9090 //端口你可以自定义
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['css-loader'] },
            {
                test: /\.ts$/,
                use: ['ts-loader'] //ts加载器，编译及打包一步完成时需要此加载器
            }
        ]
    },
    plugins: [assetsPluginInstance,
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['abc', 'manifest']
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest',
        //     chunks: ['...']
        // }),
        // new HtmlWebpackPlugin(), // Generates default index.html
        // new HtmlWebpackPlugin({  // Also generate a test.html
        //     filename: 'test.html',
        //     template: './index.html'
        // }),
        // new InlineManifestWebpackPlugin({
        //     name: 'webpackManifest'
        // })
    
    
    ]
    

}