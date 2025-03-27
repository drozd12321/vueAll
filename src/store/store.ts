import { createLogger, createStore } from "vuex";
import authModule from "./modules/auth.module";
import type { ActionContext } from "vuex/types/index.js";
interface RootST {
  token: string | null;
  message: string | null;
}
export const store = createStore({
  plugins: [createLogger()],
  modules: {
    auth: authModule,
  },
  state(): RootST {
    return {
      token: null,
      message: "dfbdfbdkjsbddsjfb",
    };
  },
  mutations: {
    setMessage(state: RootST, msg: string) {
      state.message = msg;
    },
    deleteMessage(state: RootST) {
      state.message = null;
    },
  },
  actions: {
    setMsg({ commit }: ActionContext<RootST, RootST>, msg: string) {
      commit("setMessage", msg);
      setTimeout(() => {
        commit("deleteMessage");
      }, 5000);
    },
  },
  getters: {
    getMsg(state: RootST) {
      return state.message;
    },
  },
});

export default store;
