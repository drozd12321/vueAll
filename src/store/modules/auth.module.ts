import type { ActionContext } from "vuex";
import axios from "axios";
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
      try {
        const VITE_APP_FB_KEY = "AIzaSyCvBUx7V7uOoayQzhnveFjk4Z8sWEqitW8";
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${VITE_APP_FB_KEY}`;
        const { data } = await axios.post(url, {
          ...payload,
          returnSecureToken: true,
        });
        commit("setToken", data.idToken);
      } catch (error) {
        console.log("error:", error);
      }
    },
  },
};
