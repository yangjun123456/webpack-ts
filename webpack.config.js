var path = require('path');

module.exports = {
    entry: {
        abc: './app/abc.ts', //编译总的ts文件，导入了其他模块
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"] //直接编译及打包一步完成需要resolve，执行webpack时执行
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['css-loader'] },
            {
                test: /\.ts$/,
                use: ['ts-loader'] //ts加载器，编译及打包一步完成时需要此加载器
            }
        ]
    }

}