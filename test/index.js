var test = require('ava');
var Vue = require('vue');
var ElSwitch = require('../dist/index.js');

test('el-switch', t => {
  t.truthy(ElSwitch.install);
});
