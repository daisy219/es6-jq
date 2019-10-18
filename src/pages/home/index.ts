
import Honey from '@/honey/index';
import testTpl from './index.html';
import './index.styl';

// export const str = 'test';
// // console.log(str);
// export const home_page = '<div>首页代办事项</div>';
export default class Home extends Honey {
  private static data = {
    con: 10,
      text: '啦啦啦啦啦',
      list: [1,2,3,4,5,76,87,8]
  }
  constructor() {
    super();
  }
  public static home_page() {
    return super.tpl().compile(testTpl, this.data);
  }
  public static test() {
    const data = {
      con: 10,
      text: '啦啦啦啦啦',
      list: [1,2,3,4,5,76,87,8]
    }
  }
}

$(function() {
})