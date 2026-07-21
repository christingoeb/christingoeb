import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Impressum from "../views/Impressum.vue";
import Home from "../views/App.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/impressum",
    name: "impressum",
    component: Impressum,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
