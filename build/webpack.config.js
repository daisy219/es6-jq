const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 虚拟的html文件名 index.html
  filename: 'index.html',
  // 虚拟html的模板为 src下的index.html
  template: path.resolve(__dirname, '../src/index.html')
})

module.exports = {
  mode: 'development',
  entry: "./index.ts",
  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

    // publicPath: "/", // string    // 输出解析文件的目录，url 相对于 HTML 页面


    // libraryTarget: "umd", // 通用模块定义    // 导出库(exported library)的类型

    /* 高级输出配置（点击显示） */  
  },    
  devServer: {
    // 根目录下dist为基本目录
    contentBase: path.join(__dirname, 'dist'),
    // 自动压缩代码
    compress: true,
    // 服务端口为1208
    port: 1208,
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3000'
    // },
    // 自动打开浏览器
    open: false
  },
  resolve: {
    extensions: ['.js', '.ts', '.styl'],
    alias: {
      '@': path.join(__dirname, '..', 'src'),
    }
  },
  module: {
    rules: [
      { // 解析图片如果需要引入本地图片的话此处的配置是必须的，同时要npm install url-loader以及npm install file-loader
        test: /\.(jpg|png)$/,
        use: 'url-loader'
      },
      {
　　     test: /\.html$/,
　　     use: 'raw-loader',
      },
      { // 配置js/jsx语法解析
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,  // 只进行编译
            }
          },
        ]
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "stylus-loader" // compiles stylus to CSS
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ie8: true,
        }
      })
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
}