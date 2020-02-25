
import { router } from '../index';
import { get_route_arr } from '../util';
import { RouteType } from '@/typing/router';


export default class KnifeRouter {

  private route_list: RouteType[] = router;  // 路由列表
  private hash: string[] = [];  // 当前路由
  private component: any = null;  // 模板
  constructor() {
    this.match();
  }

  /** 路由匹配模板 */
  public match() {
    this.hash = get_route_arr();

    /** 默认重定向到首页 */
    if (this.hash.length === 0 || this.hash[0] === '') {
      location.hash = '#/home';
      this.component = this.route_list[0].component;
      return;
    }
    this.route_list.forEach((item: RouteType) => {
      if (this.hash[0] === item.name) {
        this.component = item.component;
      }
    });
  }

  /** 跳转路由 */
  public push(name: string) {
    location.hash = '#/' + name;
    this.match();
  }

  /** 渲染模板 */
  public rander() {
    return this.component;
  }
}

// 后续优化可以用得到的一些方法：
// 我们可以通过 hashchange 事件，监听到 hash 值的变化，从而响应不同路径的逻辑处理
// window.history.pushState(null, null, "http://www.google.com"); （replaceState）
// 这两个 API 的相同之处是都会操作浏览器的历史记录，而不会引起页面的刷新。不同之处在于，pushState 会增加一条新的历史记录，而 replaceState 则会替换当前的历史记录