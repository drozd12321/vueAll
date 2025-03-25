import type { ActionContext } from "vuex/types/index.js";

interface State {
  token: null | string;
}

export default {
  namespaced: true,
  state(): State {
    return {
      token: null,
    };
  },
  mutations: {
    setToken(state: State, token: string) {
      state.token = token;
      localStorage.setItem("jwtToken", token);
    },
    removeToken(state: State) {
      state.token = null;
      localStorage.removeItem("jwtToken");
    },
  },
  getters: {
    getToken(state: State) {
      return state.token;
    },
    isAuth(state: State) {
      return !!state.token;
    },
  },
  actions: {
    async login({ commit }: ActionContext<State, State>) {
      commit("setToken", "Test Token");
    },
  },
};
