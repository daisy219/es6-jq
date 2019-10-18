
import Honey from '@/honey/index';
import testTpl from './index.html';
import './index.styl';

// export const str = 'test';
// // console.log(str);
// export const home_page = '<div>首页代办事项</div>';
export default class Work extends Honey {
  private static list: any[] = [
    {name: '作业1', content: 'aaaaaa'},
    {name: '作业2', content: 'bbbbbbbbb'},
    {name: '作业3', content: 'cccccccccc'},
    {name: '作业4', content: 'sdsssssssssss'},
    {name: '作业5', content: 'wwwwwwwwwww'},
  ]
  constructor() {
    super();
  }
  public static work_page() {
    return super.tpl().compile(testTpl, this.list);
  }
}

$(function() {
})