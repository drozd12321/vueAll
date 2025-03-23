import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AppHelp from "@/views/AppHelp.vue";
import AppMsg from "@/views/AppMsg.vue";
import Auth from "@/views/Auth.vue";
import AuthLayout from "@/layout/AuthLayout.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        layout: "Main",
      },
    },
    {
      path: "/help",
      name: "help",
      component: AppHelp,
      meta: {
        layout: "Main",
      },
    },
    {
      path: "/message",
      name: "message",
      component: AppMsg,
      meta: {
        layout: "Main",
      },
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
      meta: {
        layout: "Auth",
      },
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
