import Vue from "vue";
import VueRouter from "vue-router";
import { RouteName } from "../enums/RouteName";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: RouteName.HOME,
      name: "home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: RouteName.NOT_FOUND,
      name: "not found",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

export default router;
