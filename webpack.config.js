const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

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
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.css$/,
        loader: 'css-loader'
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