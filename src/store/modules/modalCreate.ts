import type {
  ItextCreate,
  RootModal,
} from "@/components/interface/interfaceStore";
import useCreateRequst from "@/utils/useCreateRequst";
import type { ActionContext } from "vuex/types/index.js";

const initialState = { fio: "", status: "", sum: 0, tlf: "", isOpen: false };
export default {
  namespaced: true,
  state(): RootModal {
    return {
      textCreate: useCreateRequst(initialState),
      request: JSON.parse(localStorage.getItem("request") || "[]"),
    };
  },
  mutations: {
    setTextCreate(state: RootModal, payload: ItextCreate) {
      state.textCreate = { ...payload };
    },
    deleteTextCreate(state: RootModal) {
      state.textCreate = useCreateRequst(initialState);
    },
    deleteZavkaById(state: RootModal, payload: string) {
      state.request = state.request.filter((req) => req.id !== payload);
      localStorage.setItem("request", JSON.stringify(state.request));
    },
    setRequst(state: RootModal, payload: ItextCreate) {
      state.request.push(useCreateRequst(payload));
      localStorage.setItem("request", JSON.stringify(state.request));
    },
  },
  actions: {
    actionTextCreated(
      { commit }: ActionContext<RootModal, RootModal>,
      payload: ItextCreate
    ) {
      commit("setTextCreate", payload);
    },
    actionSetRequest(
      { commit }: ActionContext<RootModal, RootModal>,
      payload: ItextCreate
    ) {
      commit("setRequst", payload);
    },
    actiondeletZavka(
      { commit }: ActionContext<RootModal, RootModal>,
      payload: string
    ) {
      try {
        commit("deleteZavkaById", payload);
      } catch (error) {
        console.error("Ош");
      }
    },
  },
  getters: {
    getTextCreate(state: RootModal): ItextCreate {
      return state.textCreate;
    },
    getrequest(state: RootModal): Array<ItextCreate> {
      return state.request;
    },
    getrequestById:
      (state: RootModal) =>
      (id: string): ItextCreate | undefined => {
        console.log(id);
        console.log(state.request);
        return state.request.find((req) => req.id === id);
      },
  },
};
