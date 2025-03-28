const ERROR_CODE = {
  INVALID_LOGIN_CREDENTIALS: "Вы ввели неправильные данные",
  messageAuth: "Войдите в систему",
};

export default function useError(value: string) {
  return ERROR_CODE[value as keyof typeof ERROR_CODE]
    ? ERROR_CODE[value as keyof typeof ERROR_CODE]
    : "Неизвестная ошибка";
}
