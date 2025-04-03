import type { ActionContext } from "vuex/types/index.d.ts";
import axios from "axios";
import useError from "@/utils/useError";
import type { AuthState } from "@/components/interface/interfaceStore";

export default {
  namespaced: true,
  state: (): AuthState => ({
    // token: "ss",
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
      { commit, dispatch }: ActionContext<AuthState, AuthState>,
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
        commit("deleteMessage", {}, { root: true });
      } catch (error) {
        const axiosErr = error as {
          response?: {
            data?: {
              error?: {
                message?: string;
              };
            };
          };
        };
        if (axiosErr?.response?.data?.error?.message) {
          console.log(
            "error:",
            useError(axiosErr.response?.data.error.message)
          );
          dispatch(
            "setMsg",
            {
              value: useError(axiosErr.response?.data.error.message),
              type: "danger",
            },
            { root: true }
          );
        } else {
          console.log("unknown");
        }
      }
    },
  },
};
