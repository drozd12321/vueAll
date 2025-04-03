import type { ItextCreate } from "@/components/interface/interfaceStore";
import { v4 as uuidv4 } from "uuid";
export default function useCreateRequst(val: ItextCreate) {
  return { ...val, id: uuidv4() };
}
