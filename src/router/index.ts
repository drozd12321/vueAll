import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import AppHelp from "@/components/AppHelp.vue";
import AppMsg from "@/components/AppMsg.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/help",
      name: "help",
      component: AppHelp,
    },
    {
      path: "/message",
      name: "message",
      component: AppMsg,
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
