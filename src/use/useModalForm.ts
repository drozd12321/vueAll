import { useField, useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import * as yup from "yup";
export default function useModalForm() {
  const router = useRouter();
  const store = useStore();
  const validationSchema = yup.object({
    fio: yup.string().trim().required("Введите ФИО"),
    tlf: yup
      .string()
      .trim()
      .required("Введите номер телефона")
      .min(11, "Введите корректный номер"),
    sum: yup
      .number()
      .required("Введите суммы заявки")
      .max(6, "Максимум 6 значное значение"),
    status: yup.string().trim().required("Выберите один из статусов"),
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
  const {
    value: status,
    errorMessage: stError,
    handleBlur: stBlur,
  } = useField<number>("status");
  const onSubmit = () => {
    console.log("Форма отправлена");
    console.log(sum);
    console.log(fio);
    console.log(tlf);
    console.log(status);
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
    stBlur,
    stError,
    onSubmit,
    isSubmitting,
  };
}
