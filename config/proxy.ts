export default{
    dev: {
        '/client/': {
          // target: 'http://101.132.106.146:8989',
          target: 'http://127.0.0.1:9898',
          changeOrigin: true,
          pathRewrite: { '^': '' },
        },
        '/order/': {
          // target: 'http://101.132.106.146:8989',
          target: 'http://127.0.0.1:9898',
          changeOrigin: true,
          pathRewrite: { '^': '' },
        },
        '/sku/': {
          // target: 'http://101.132.106.146:8989',
          target: 'http://127.0.0.1:9898',
          changeOrigin: true,
          pathRewrite: { '^': '' },
        },
      },
}