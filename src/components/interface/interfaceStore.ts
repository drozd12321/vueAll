export interface ItextCreate {
  fio?: string;
  tlf?: string;
  sum?: number;
  status?: string;
  isOpen?: boolean;
}
export interface RootModal {
  textCreate: ItextCreate;
  request: ItextCreate[];
}
export interface AuthState {
  token: string | null;
}
export interface Message {
  value: string;
  type: string;
}
export interface RootST {
  token: string | null;
  message: Message;
  textCreate: string;
  request: ItextCreate[];
}
