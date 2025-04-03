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
      request: [],
    };
  },
  mutations: {
    setTextCreate(state: RootModal, payload: ItextCreate) {
      state.textCreate = { ...payload };
    },
    deleteTextCreate(state: RootModal) {
      state.textCreate = useCreateRequst(initialState);
    },
    setRequst(state: RootModal, payload: ItextCreate) {
      state.request.push(useCreateRequst(payload));
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
  },
  getters: {
    getTextCreate(state: RootModal): ItextCreate {
      return state.textCreate;
    },
    getrequest(state: RootModal): Array<ItextCreate> {
      return state.request;
    },
  },
};
