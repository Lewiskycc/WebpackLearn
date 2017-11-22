const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + '/app/main.js', //唯一的入口文件
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    contentBase: './public',   //本地服务器所在页面目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: 9999
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true, //模块化css 类名引入js 只对当前组件有效
            }
          },{
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                }),
                pxtorem({ rootValue: 100, propWhiteList: [] })
              ],
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
  ],
}