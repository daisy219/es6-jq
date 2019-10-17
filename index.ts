// ------------------------------------------------------------ 兼容ie8 -----------------------------------------------//
require('core-js/features/object/define-property')
require('core-js/features/object/create')
require('core-js/features/object/assign')
require('core-js/features/array/for-each')
require('core-js/features/array/index-of')
require('core-js/features/function/bind')
require('core-js/features/promise')


import { wait_time } from './src/util/index';
import { str } from './src/pages/home';

// ------------------------------------------------------------ 样式文件 -----------------------------------------------//

import './src/assets/stylus/reset.styl';
import './src/assets/stylus/var.styl';
import './src/assets/stylus/index.styl';

const a = '123';
async function test() {
  await wait_time(3000);
  $('#app').text('jquery');
}
test();
// console.log(str);