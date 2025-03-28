export default function useError(value: string) {
  if (value === "INVALID_LOGIN_CREDENTIALS") {
    return "Вы ввели неправильные данные";
  } else {
    return "Неизвестная ошибка";
  }
}
