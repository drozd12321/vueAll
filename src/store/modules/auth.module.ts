interface State {
  token: null | String;
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
  },
  getters: {
    getToken(state: State) {
      return state.token;
    },
  },
  actions: {
    async login({ commit }) {
      commit("setToken", "Test Token");
    },
  },
};
