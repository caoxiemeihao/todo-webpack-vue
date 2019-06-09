const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: isDev ? 'development' : 'production',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-asd.[ext]'
            }
          }
        ]
      }
    ]
  },
  /**
   * 报错解决 [https://www.imooc.com/notepad/224b3f]
   */
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLWebpackPlugin()
  ]
}

if (isDev) {
  config.module.rules.push({
    test: /\.styl/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  })
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',            // IP、localhost、127.0.0.1 均能访问
    overlay: {
      errors: true              // 报错信息丢屏幕上
    },
    // open: true,              // 自动打开浏览器
    // historyApiFallback: {},  // 将所有找不到的路由统一重定向回入口
    hot: true,                  // 局部刷新
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vender: ['vue', 'vue-router', 'vuex'],
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.styl/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          },
        },
        'stylus-loader'
      ]
    })
  })
  config.optimization.splitChunks
  config.plugins.push(
    // webpack中的hash、chunkhash、contenthash
    // new ExtractPlugin('styles.[contenthash:8].css') // 报错
    // new ExtractPlugin('styles.[chunkhash:8].css')
    new ExtractPlugin('styles.[hash:8].css'),

    // Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vender'
    // })
  )
}

module.exports = config
