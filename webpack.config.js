let path = require('path')
module.exports = {
    entry:'./src/index.js',       //入口
    output: {       //出口
        filename: 'build.js',
        path: path.resolve('./build')
    },
    devServer: {},    //开发服务器
    module: {},         //模块配置
    plugins: [],        //插件的配置
    resolve: {},        //配置解析
    mode: 'development'     //webpack4 新增的设置开发模式 默认是product模式
}