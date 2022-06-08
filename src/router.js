import { createRouter, createWebHashHistory } from 'vue-router';
import Deleted from '@/views/DeletedTodos';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Todos.vue'),
    },
    {
      path: '/deleted',
      component: Deleted,
    },
  ],
});
