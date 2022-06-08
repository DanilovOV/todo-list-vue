import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/HomePage';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Todos.vue'),
    },
    {
      path: '/home',
      component: Home,
    },
  ],
});
