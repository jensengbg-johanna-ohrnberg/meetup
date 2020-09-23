import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Reviews from "../views/Reviews.vue";
import Join from "../views/Join.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews
  },
  {
    path: "/join",
    name: "Join",
    component: Join
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;