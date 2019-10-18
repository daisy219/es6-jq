// ------------------------------------------------------------ 兼容ie8 ---------------------------------------------------//
require('core-js/features/object/define-property')
require('core-js/features/object/create')
require('core-js/features/object/assign')
require('core-js/features/array/for-each')
require('core-js/features/array/index-of')
require('core-js/features/function/bind')
require('core-js/features/promise')

// ------------------------------------------------------------ 引入路由 ---------------------------------------------------//
import KnifeRouter from './src/router/knife_router';
// ------------------------------------------------------------ 样式文件 ---------------------------------------------------//

import './src/assets/stylus/reset.styl';
import './src/assets/stylus/var.styl';
import './src/assets/stylus/common.styl';
import './src/assets/stylus/index.styl';
// ------------------------------------------------------------ 实例 ------------------------------------------------------//

const router = new KnifeRouter();
// ------------------------------------------------------------ 获取dom ----------------------------------------------------------//

const dom = {
  home: $('.home'),
  main: $('.main'),
  menu_item: $('.menu_item'),
  work: $('.work'),
}
// ------------------------------------------------------------ 事件 ----------------------------------------------------------//
dom.home.click(function() {
    router.push('home');
    dom.main.html(router.rander());
    dom.menu_item.toggleClass('active', false);
    dom.home.toggleClass('active', true);
  });
  
  dom.work.click(function() {
    router.push('work');
    dom.main.html(router.rander());
    dom.menu_item.toggleClass('active', false);
    dom.work.toggleClass('active', true);
  });

// ------------------------------------------------------------ 启动 ----------------------------------------------------------//

$(function(){
  dom.main.html(router.rander());
  dom.home.toggleClass('active', true);
  const cur_route_name = router.hash[0];
  dom.menu_item.toggleClass('active', false);
  if (cur_route_name === '' || cur_route_name === 'home') {
    dom.home.toggleClass('active', true);
  } else if(cur_route_name === 'work') {
    dom.work.toggleClass('active', true);
  }
})

