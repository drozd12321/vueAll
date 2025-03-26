import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AppHelp from "@/views/AppHelp.vue";
import AppMsg from "@/views/AppMsg.vue";
import Auth from "@/views/Auth.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        layout: "Main",
        auth: true,
      },
    },
    {
      path: "/help",
      name: "help",
      component: AppHelp,
      meta: {
        layout: "Main",
        auth: true,
      },
    },
    {
      path: "/message",
      name: "message",
      component: AppMsg,
      meta: {
        layout: "Main",
        auth: true,
      },
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
      meta: {
        layout: "Auth",
        auth: false,
      },
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
router.beforeEach((to, from, next) => {
  const auth = to.meta.auth;
  if(auth )
});
export default router;
