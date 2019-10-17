
import { home_page } from '../../../src/pages/home';
import { work_page } from '../../../src/pages/work';


export default class KnifeRouter {
  // private props: any = {
  //   route_name: window.location.href,
  // }
  // private props: any = null;
  // private route_name: string = window.location.href;
  // constructor(props: any) {
  //   this.props = props;
    // this.route_name = route_name;
  // }
  public static push(name: string) {
    location.hash = '#/' + name;
  }
}