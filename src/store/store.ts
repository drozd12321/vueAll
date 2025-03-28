import { createLogger, createStore } from "vuex";
import authModule from "./modules/auth.module";
import type { ActionContext } from "vuex/types/index.js";
interface Message {
  value: string;
  type: string;
}
interface RootST {
  token: string | null;
  message: Message;
}
export const store = createStore({
  plugins: [createLogger()],
  modules: {
    auth: authModule,
  },
  state(): RootST {
    return {
      token: null,
      message: { value: "", type: "" },
    };
  },
  mutations: {
    setMessage(state: RootST, msg: Message) {
      state.message.value = msg.value;
      state.message.type = msg.type;
    },
    deleteMessage(state: RootST) {
      state.message.type = "";
      state.message.value = "";
    },
  },
  actions: {
    setMsg({ commit }: ActionContext<RootST, RootST>, msg: Message) {
      commit("setMessage", msg);
      // setTimeout(() => {
      //   commit("deleteMessage");
      // }, 5000);
    },
  },
  getters: {
    getMsg(state: RootST) {
      return state.message;
    },
  },
});

export default store;
