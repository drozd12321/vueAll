import { createStore } from "vuex/types/index.js";
import authModule from "./modules/auth.module";

export const store = createStore({
  modules: {
    auth: authModule,
  },
  mutations: {},
  actions: {},
  getters: {},
});
