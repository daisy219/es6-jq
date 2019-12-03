
import Home from '@/pages/home';
import Work from '@/pages/work';
import Login from '@/pages/login';
import { RouteType } from '@/typing/router';



export const router: RouteType[] = [
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
  {
    name: 'login',
    path: '/login',
    component: Login.login_page(),
  },
]