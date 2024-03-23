import { createRouter, createWebHashHistory } from 'vue-router';

const Chars = () => import('../views/Chars.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    children: [{ path: '/chars', name: 'chars', component: Chars }],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
