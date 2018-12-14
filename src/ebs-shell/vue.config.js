module.exports = {
  devServer: {
    proxy: {
      '/contacts-app': {
        target: 'http://127.0.0.1:3002/',
        ws: true,
        changeOrigin: true
      },
      '/settings-app': {
        target: 'http://127.0.0.1:3003/',
        ws: true,
        changeOrigin: true
      },
      '/tam-app': {
        target: 'http://127.0.0.1:3004/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}
