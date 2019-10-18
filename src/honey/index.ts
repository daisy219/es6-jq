import Tpl from '@/template';

export default class Honey {
  public static tpl(config?: any) {
    return new Tpl(config);
  }
}