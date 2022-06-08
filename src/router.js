import { createRouter, createWebHashHistory } from 'vue-router';
import Todos from '@/views/Todos';
import Deleted from '@/views/DeletedTodos';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Todos,
    },
    {
      path: '/deleted',
      component: Deleted,
    },
  ],
});
