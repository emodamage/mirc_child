const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');

module.exports = defineConfig({
  transpileDependencies: true,
  // 下方是子应用内容
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 8090,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
