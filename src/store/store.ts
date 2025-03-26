import { createLogger, createStore } from "vuex";
import authModule from "./modules/auth.module";

export const store = createStore({
  plugins: [createLogger()],
  modules: {
    auth: authModule,
  },
  state() {
    return {
      token: null,
    };
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
