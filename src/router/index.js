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
    component: () => import('../views/EventSingle.vue')
  },
  {
    path: '/participants',
    name: 'participants',
    component: () => import('../views/Participants.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('../views/Reviews.vue')
  },
  {
    path: '/seereviews',
    name: 'seereviews',
    component: () => import('../views/SeeReviews.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;