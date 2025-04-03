import { useStore } from "vuex";

export default function getZavkaId(id: string) {
  const store = useStore();
  console.log("id", id);
  const getrequestById = store.getters["modal/getrequestById"];
  console.log(getrequestById(id));

  return getrequestById(id);
}
