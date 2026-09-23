const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://Armx-Indecodex-backend-uwoa.onrender.com',
      changeOrigin: true,
      secure: false,
      logLevel: 'debug',
      onProxyRes: function (proxyRes, req, res) {
        // Log proxy response status
        console.log(`Proxied response: ${proxyRes.statusCode}`);
      }
    })
  );
}; 