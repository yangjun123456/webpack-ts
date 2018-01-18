var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin'); //生成json文件
var assetsPluginInstance = new AssetsPlugin({
    path: path.join(__dirname, 'dist'),
    filename: 'webpack-assets.json',
    prettyPrint: true
});
var webpack = require("webpack");

// var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
// var WebpackChunkHash = require("webpack-chunk-hash");
// var InlineManifestWebpackPlugin=require("inline-manifest-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin"); //编译前先删除dist文件夹下的目录

module.exports = {
    entry: {
        abc: './app/app.ts', //编译总的ts文件，导入了其他模块
    },
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        // publicPath: "", //实现修改更新至缓存，启动webpack-dev-server后直接编译文件至缓存
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"] //直接编译及打包一步完成需要resolve，执行webpack时执行
    },
    devServer: {
        port: 9090,
        host: 'localhost',
        historyApiFallback: true,
        inline: true,
        // watchOptions: {
        //     aggregateTimeout: 300,
        //     poll: 1000
        // }
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }), // Generates default index.html
        // new HtmlWebpackPlugin({  // Also generate a test.html
        //     filename: 'test.html',
        //     template: './index.html'
        // }),
        // new InlineManifestWebpackPlugin({
        //     name: 'webpackManifest'
        // })
        new CleanWebpackPlugin(
            ['dist/*'], 　 //匹配删除的文件
            {
                root: __dirname, //根目录
                verbose: true, //开启在控制台输出信息
                dry: false　　　　　 //启用删除文件
            }
        )
    ]
}