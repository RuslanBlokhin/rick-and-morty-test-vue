import { createRouter, createWebHashHistory } from 'vue-router';

// import Home from '../views/Home.vue';
// import Chars from '../views/Chars.vue';

const Home = () => import('../views/Home.vue');
const Chars = () => import('../views/Chars.vue');
const CharDetails = () => import('../components/char/CharDetails.vue');

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/chars', name: 'chars', component: Chars },
  { path: '/chars/:id', name: 'char', component: CharDetails },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
