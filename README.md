> 使用webpack3.5.3搭建 处理react、es6、css、缓存、压缩代码的简单项目

* 启动项目  `npm start`
* 项目构建  `npm run build`
#### 处理css

`npm install --save-dev style-loader css-loader`
> webpack提供两个工具处理样式表，css-loader 和 style-loader，二者处理的任务不同，
  css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,
  style-loader将所有的计算后的样式加入页面中，
  二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。

`npm install --save-dev postcss-loader autoprefixer`

> 我们使用PostCSS来为CSS代码自动添加适应不同浏览器的CSS前缀


#### 处理jsx es6

`npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`
> Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，
  你都需要安装单独的包（用得最多的是解析Es6的babel-preset-es2015包和解析JSX的babel-preset-react包）。

#### Plugins插件

`HtmlWebpackPlugin` 安装  `npm install --save-dev html-webpack-plugin`

> 依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html。这在每次生成的js文件名称不同时非常有用（比如添加了hash值）

`Hot Module Replacement` 安装 `npm install --save-dev babel-plugin-react-transform react-transform-hmr`

> 是webpack里很有用的一个插件，它允许你在修改组件代码后，自动刷新实时预览修改后的效果
  Babel有一个叫做`react-transform-hrm`的插件，可以在不对React模块进行额外的配置的前提下让HMR正常工作；

1. 在webpack配置文件中添加HMR插件；
2. 在Webpack Dev Server中添加“hot”参数；

#### 优化插件

1. OccurenceOrderPlugin :为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
2. UglifyJsPlugin：压缩JS代码；
3. ExtractTextPlugin：分离CSS和JS文件

`npm install --save-dev extract-text-webpack-plugin` 安装费内置插件


#### 缓存

> 缓存无处不在，使用缓存的最好方法是保证你的文件名和文件内容是匹配的（内容改变，名称相应改变）
webpack可以把一个哈希值添加到打包的文件名中，使用方法如下,添加特殊的字符串混合体（[name], [id] and [hash]）到输出文件名前






