import { useField, useForm } from "vee-validate";
import { useStore } from "vuex";
import * as yup from "yup";
export default function useModalForm() {
  const store = useStore();
  const validationSchema = yup.object({
    fio: yup.string().trim().required("Введите ФИО").min(3, "Введите ФИО"),
    tlf: yup
      .string()
      .trim()
      .required("Введите номер телефона")
      .min(11, "Введите корректный номер")
      .max(12, "Введите корректный номер")
      .matches(/^[0-9]+$/),
    sum: yup.number().required("Введите суммы заявки"),
    status: yup
      .string()
      .trim()
      .oneOf(
        ["Оплачено", "Ожидание", "Неизвестно"],
        "Выберите один из статусов"
      ),
  });
  const { handleSubmit, isSubmitting, resetForm } = useForm({
    validationSchema: validationSchema,
    initialValues: { fio: "", tlf: "", sum: 0, status: "" },
  });
  const {
    value: fio,
    errorMessage: fError,
    handleBlur: fBlur,
  } = useField<string>("fio");
  const {
    value: tlf,
    errorMessage: tError,
    handleBlur: tBlur,
  } = useField<string>("tlf");
  const {
    value: sum,
    errorMessage: sError,
    handleBlur: sBlur,
  } = useField<number>("sum");
  const { value: status, errorMessage: stError } = useField<number>("status");
  const onSubmit = () => {
    console.log("Форма отправлена");
    store.dispatch("modal/actionTextCreated", {
      fio: fio,
      status: status,
      sum: sum,
      tlf: tlf,
      isOpen: false,
    });
    resetForm();
  };
  return {
    fio,
    fError,
    fBlur,
    tlf,
    tBlur,
    tError,
    sum,
    sBlur,
    sError,
    status,
    stError,
    onSubmit,
    isSubmitting,
  };
}
