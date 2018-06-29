## webpack4.0

### 使用webpack
- 初始化package.json
```
npm iniy -y
```
- 本地安装
```
npm install webpack webpack-cli -D
```

### 零配置
会执行node_modules下的bin下的webpack.cmd
```
npx webpack
```
### 单入口
```
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
```
### 多入口单出口
```
entry:['./src/index.js','./src/a.js']
```
### 多入口多出口
```
entry:{     //入口
    index: './src/index.js',
    a: './src/a.js'
},       
output: {       //出口
    filename: '[name].[hash:8].js',
    path: path.resolve('./build')
},
plugins: [          //插件的配置
    new CleanWebpackPlugin(['./build']),
    new HtmlWebpackPlugin({
        filename:'a.html',
        chunks:['a'],
        template:'./src/index.html',
        title:'自定义标题',
        hash:true
    }),
    new HtmlWebpackPlugin({
        filename:'index.html',
        chunks:['index'],
        template:'./src/index.html',
        title:'自定义标题',
        hash:true
    })
], 
```
### 热更新
webpack.config.js
```
+ let webpack = require('webpack');
plugins: [          //插件的配置
+   new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['./build']),
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        title:'自定义标题',
        hash:true
    })
],  
```
index.js
```
+if(module.hot){
+    module.hot.accept();
+    // module.hot.accept('./a.js',function(){
+    //     let str = require('./a.js');
+    //     document.getElementById('app').innerHTML = str;
+    // })
+}
```