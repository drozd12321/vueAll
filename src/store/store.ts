import { createStore } from "vuex/types/index.js";
import authModule from "./modules/auth.module";

interface RootSt {
  version: string;
}
export const store = createStore({
  modules: {
    auth: authModule,
  },
  state(): RootSt {
    return {
      version: "222",
    };
  },
  mutations: {},
  actions: {},
  getters: {},
});
