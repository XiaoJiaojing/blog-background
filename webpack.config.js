const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/index.html')  ,//源文件
    filename:  'index.html'//生成的内存中首页的名称
})
var VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    //开发环境的代码是没有被压缩的，而生产环境的是被压缩的
    // 4.x 新增的`mode`选项，可选值为：`development`和`production` 必选项
    mode:'development',
// webpack 3.x在这里要指定打包的入口和出口文件
// 在webpack 4.x中有一个很大的特点，就是约定大于配置，默认的打包入口文件就是src下的index.js
    module: {

        rules: [
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(svg|ttf|eot|woff|woff2)$/,loader:'url-loader'}

        ]

    },
    plugins:[
        htmlPlugin,
        new VueLoaderPlugin()
    ],
    devServer: {
        proxy: {
            "/all": {
                target: 'http://localhost:3000'
            },
            "/upload": {
                target: 'http://localhost:3000'
            }
        }
    }

}