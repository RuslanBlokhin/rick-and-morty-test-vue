import { createRouter, createWebHashHistory } from 'vue-router';

const Chars = () => import('../views/Chars.vue');
const CharDetails = () => import('../components/char/CharDetails.vue');

const routes = [
  { 
    path: '/', 
    name: 'home',
    children: [
      { path: '/chars', name: 'chars', component: Chars },
      // { path: '/chars/:id', name: 'char', component: CharDetails },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
