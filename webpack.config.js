const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
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
    new VueLoaderPlugin()
  ]
}