let path = require('path');
// webpack 配置文件
module.exports = {
    // 模式、开发模式与生产模式 development production
    mode:'development',
    target:'node',
    //入口，需要被编译的根
    // 简写
    entry: './context.js',
    // 正式写法
    // entry: {
    //     main: './path/to/my/entry/file.js'
    // },
    // entry: {
    //     app: './src/app.js',
    //     vendors: './src/vendors.js'
    // }
    output: {
        // 输出路径
        path: path.resolve(__dirname, 'dist'),
        // 多个块、占位符 name / hash
        // path : '[name].js'
        filename: 'my-first-webpack.bundle.js'
    },
//     webpack只理解js，所以有了loader，用来转换其他类型的文件 test 属性（正则）、use 属性 （loader名称）
    module:{
        rules:[
            {
                test:/\.txt$/,
                use:'raw-loader'
            },
            {
                test:/\.css$/,
                use:[
                    {loader : 'style-loader'},
                    {
                        loader : 'css-loader',
                        options:{
                            modules : true
                        }
                    }
                ]
            }
        ]
    },
//插件：打包优化、压缩、重新定义环境变量
    plugins:[
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};

