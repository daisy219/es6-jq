
import Honey from '@/honey/index';
import testTpl from './index.html';
import './index.styl';

export default class Login extends Honey {

  constructor() {
    super();
  }
  public static home_page() {
    return super.tpl().compile(testTpl, this.data);
  }

}

$(function() {
})