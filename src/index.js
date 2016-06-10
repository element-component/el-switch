const ElSwitch = require('./component');

module.exports = {
  ElSwitch,
  install(Vue) {
    Vue.component('el-switch', ElSwitch);
  }
};

