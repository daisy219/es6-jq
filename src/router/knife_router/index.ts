
import { router } from '../index';
import { get_route_arr } from '../util';

export default class KnifeRouter {

  private route_list: COM.RouteType[] = router;  // 路由列表
  private hash: string[] = [];  // 当前路由
  private component: any = null;  // 模板
  constructor() {
    this.match();
  }


  /** 路由匹配模板 */
  private match() {
    this.hash = get_route_arr();

    /** 默认重定向到首页 */
    if (this.hash.length === 0 || this.hash[0] === '') {
      location.hash = '#/home';
      this.component = this.route_list[0].component;
      return;
    }
    this.route_list.forEach((item: COM.RouteType) => {
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