module.exports = {
  publicPath: '/',
  devServer: {
    port: 8888,
    host: 'localhost',
    proxy: {
      /* '/api': {
         target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro', //mock API接口系统
         ws: false,
         changeOrigin: true,
         secure: false,//采用https
         pathRewrite: {
           '/jeecg-boot': ''
         }
       },*/
      '/proxyApi': {
        target: 'http://103.126.126.119:8002/phjr', //源地址 
        ws: false,
        changeOrigin: true,//改变源
        pathRewrite: {
          '^/proxyApi': ''//路径重写 
        }
      },
      '/api': {
        target: 'http://zzx.jiandaopay.com/api/', //换成你朋友的地址
        ws: false,
        changeOrigin: true, //改变源
        pathRewrite: {
          '^/api': ''  
        }
      }
    }
  },
}