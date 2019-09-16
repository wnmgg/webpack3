let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    mode:'production',    //development production
    entry:{
        home:'./src/index.js',
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },

    //clean-webpack-plugin 如：每次打包到dist文件夹里，先清空dist文件夹
    //copy-webpack-plugin  copy一个文件夹里的文件，到指定打包路径里
    //bannerPlugin  内置 版权声明插件
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from:'./doc',to:'./'}
        ]),
        new webpack.BannerPlugin('do by wangqiang'),  //js前面加上注释声明
    ],
    //源码映射 会单独生成一个sourcemap文件
    /*
    * devtool:source-map
    * devtool:eval-source-map  不会产生单独的文件 但可以调试
    * */
    devtool:'source-map',
    watch:true, //实时监控
    watchOptions:{  //监控选项
        poll:1000,  //每秒  问我 1000次
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