
import Honey from '@/honey/index';
import testTpl from './index.html';
import './index.styl';

export default class Login extends Honey {

  constructor() {
    super();
  }
  public static login_page() {
    return testTpl;
  }

}

$(function() {
})