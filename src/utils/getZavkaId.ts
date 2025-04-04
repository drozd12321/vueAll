export default function getZavkaId(store: any, id: string) {
  const getrequestById = store.getters["modal/getrequestById"];
  console.log(getrequestById(id));

  return getrequestById(id);
}
