export function get_route_arr() {
  return location.hash.substr(2).split('/');
}