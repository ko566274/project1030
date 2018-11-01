

const proxy = require('http-proxy-middleware'); //模块 vue ,react 之所以支持反向代理

module.exports = function(app) {
  app.use(proxy('/v2', {
          target: 'https://m.wowdsgn.com',
          host: 'm.wowdsgn.com',
          changeOrigin:true
  }));
  
};
