const createProxyMiddleware = require("http-proxy-middleware");

// https://oopsys.tistory.com/227
module.exports = function(app) {
  app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
  ); 
};