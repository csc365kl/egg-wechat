'use strict';

module.exports = app => {
  app.get('/', function*() {
    // console.log(app.wechat);
    this.body = 'hi, ' + app.plugins['wechat'].name;
  });
};
