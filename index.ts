// ------------------------------------------------------------ 兼容ie8 -----------------------------------------------//
require('core-js/features/object/define-property')
require('core-js/features/object/create')
require('core-js/features/object/assign')
require('core-js/features/array/for-each')
require('core-js/features/array/index-of')
require('core-js/features/function/bind')
require('core-js/features/promise')

// ------------------------------------------------------------ 引入模块 -----------------------------------------------//
import { home_page } from './src/pages/home';
import { work_page } from './src/pages/work';
import KnifeRouter from './src/router/knife_router';
// ------------------------------------------------------------ 样式文件 -----------------------------------------------//

import './src/assets/stylus/reset.styl';
import './src/assets/stylus/var.styl';
import './src/assets/stylus/index.styl';

$('.home').click(function() {
  $('.main').html(home_page);
  KnifeRouter.push('home');
});

$('.work').click(function() {
  $('.main').html(work_page);
  KnifeRouter.push('work');
});

function get_href() {
  return location.hash.substr(2).split('/');
}
$(function(){
  let init_route = get_href();
  console.log(init_route);
})