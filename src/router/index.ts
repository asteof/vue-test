import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RoutesEnum } from '@/router/types';
import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutesEnum.Home,
    name: RoutesEnum.Home,
    component: HomePage,
  },
  {
    path: RoutesEnum.Login,
    name: RoutesEnum.Login,
    component: LoginPage,
  },
  {
    path: RoutesEnum.Profile,
    name: RoutesEnum.Profile,
    component: ProfilePage,
  },
  {
    path: RoutesEnum.News,
    name: RoutesEnum.News,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/NewsPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
