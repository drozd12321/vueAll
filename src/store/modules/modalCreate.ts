import { createStore } from "vuex";
import type { ActionContext } from "vuex/types/index.js";
interface ItextCreate {
  fio?: string;
  tlf?: string;
  sum?: number;
  status?: string;
  isOpen?: boolean;
}
interface RootModal {
  textCreate: ItextCreate;
  request: Array<string>;
}
export default {
  namespaced: true,
  state(): RootModal {
    return {
      textCreate: { fio: "", status: "", sum: 0, tlf: "", isOpen: false },
      request: [],
    };
  },
  mutations: {
    setTextCreate(state: RootModal, payload: ItextCreate) {
      state.textCreate = { ...payload };
      console.log(state.textCreate);
    },
    deleteTextCreate(state: RootModal) {
      state.textCreate = {
        fio: "",
        status: "",
        sum: 0,
        tlf: "",
        isOpen: false,
      };
    },
  },
  actions: {
    actionTextCreated(
      { commit }: ActionContext<RootModal, RootModal>,
      payload: ItextCreate
    ) {
      commit("setTextCreate", payload);
    },
  },
  getters: {
    getTextCreate(state: RootModal): ItextCreate {
      return state.textCreate;
    },
    getrequest(state: RootModal): Array<string> {
      return state.request;
    },
  },
};
