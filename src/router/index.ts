import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { RoutesEnum } from '@/router/types';
import HomeView from '@/views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutesEnum.Home,
    name: RoutesEnum.Home,
    component: HomeView,
  },
  {
    path: RoutesEnum.News,
    name: RoutesEnum.News,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
