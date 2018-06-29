let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');  //打包html文件
let CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:'./src/index.js',       //入口
    output: {       //出口
        filename: 'build.[hash:8].js',
        path: path.resolve('./build')
    },
    devServer: {   //开发服务器
        contentBase:'/build', //配置server目录
        port: 3000,     //端口号 
        open: true,     //自动打开浏览器
        compress: true  //服务器压缩
    },    
    module: {},         //模块配置
    plugins: [          //插件的配置
        new CleanWebpackPlugin(['./build']),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            title:'自定义标题',
            hash:true,
            // minify:{
            //     removeAttributeQuotes:true,     //删除属性引号
            //     collapseWhitespace:true         //折叠空行
            // }
        })
    ],        
    resolve: {},        //配置解析
    mode: 'development'     //webpack4 新增的设置开发模式 默认是product模式
}