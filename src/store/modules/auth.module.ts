import type { ActionContext } from "vuex";

interface AuthState {
  token: string | null;
}

export default {
  namespaced: true,
  state: (): AuthState => ({
    token: localStorage.getItem("jwtToken"),
  }),
  mutations: {
    setToken(state: AuthState, token: string) {
      state.token = token;
      localStorage.setItem("jwtToken", token);
    },
    removeToken(state: AuthState) {
      state.token = null;
      localStorage.removeItem("jwtToken");
    },
  },
  getters: {
    getToken(state: AuthState) {
      return state.token;
    },
    isAuth(state: AuthState) {
      return !!state.token;
    },
  },
  actions: {
    async login(
      { commit }: ActionContext<AuthState, AuthState>,
      payload: { email: string; password: string }
    ) {
      console.log(payload);
      commit("setToken", "fake-token1232");
    },
  },
};
