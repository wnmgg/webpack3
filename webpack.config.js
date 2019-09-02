let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'production',    //development production
    entry:{
        home:'./src/index.js',
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
        })
    ],
    //源码映射 会单独生成一个sourcemap文件
    /*
    * devtool:source-map
    * devtool:eval-source-map  不会产生单独的文件 但可以调试
    * */
    devtool:'source-map',
    watch:true, //实时监控
    watchOptions:{  //监控选项
        poll:1000, //每秒  问我 1000次
        aggregateTimeout:500, //防抖  500毫秒内 不打包，
        ignored:/node_modules/,       //不需要监控的文件
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}