import { createLogger, createStore } from "vuex";
import authModule from "./modules/auth.module";
import type { ActionContext } from "vuex/types/index.js";
import modalCreate from "./modules/modalCreate";
import type { RootST } from "@/components/interface/interfaceStore";
import type { Message } from "@/components/interface/interfaceStore";
export const store = createStore({
  plugins: [createLogger()],
  modules: {
    auth: authModule,
    modal: modalCreate,
  },
  state(): RootST {
    return {
      token: null,
      message: { value: "", type: "" },
      textCreate: "",
      request: [],
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
    },
  },
  getters: {
    getMsg(state: RootST) {
      return state.message;
    },
  },
});

export default store;
