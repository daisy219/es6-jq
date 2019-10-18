
import Home from '../pages/home';
import Work from '../pages/work';


export const router: COM.RouteType[] = [
  {
    name: 'home',
    path: '/home',
    component: Home.home_page(),
  },
  {
    name: 'work',
    path: '/work',
    component: Work.work_page(),
  },
]