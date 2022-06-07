import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/HomePage';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todos',
      component: () => import('./views/Todos.vue'),
    },
  ],
});
