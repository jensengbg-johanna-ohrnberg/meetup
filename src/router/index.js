import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/event/:id',
    name: 'eventSingle',
    component: () => import('../views/EventSingle.vue'),
  },
  {
    path: '/addreview/:id',
    name: 'addreview',
    component: () => import('../views/AddReview.vue')
  },
  {
    path: '/joinevent/:id',
    name: 'joinevent',
    component: () => import('../views/JoinEvent.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;