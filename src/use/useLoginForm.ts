import { watch } from "vue";
import { useField, useForm } from "vee-validate";
import { computed } from "vue";
import * as yup from "yup";
import { useStore } from "vuex/types/index.js";

export default function useLoginForm() {
  const store = useStore();
  const validationSchema = yup.object({
    email: yup
      .string()
      .trim()
      .required("Введите email")
      .email("Введите корректный email"),
    password: yup
      .string()
      .trim()
      .required("Введите пароль")
      .min(6, "Минимум 6 "),
  });
  const { handleSubmit, isSubmitting, submitCount, resetForm } = useForm({
    validationSchema,
    initialValues: { email: "", password: "" },
  });
  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur,
  } = useField<string>("email");
  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField<string>("password");

  const onSubmit = handleSubmit((val) => {
    console.log(val);
    store.dispatch("");
    resetForm();
  });
  const istomanyAttemots = computed<boolean>(() => submitCount.value >= 3);
  watch(istomanyAttemots, (val) => {
    if (val) {
      setTimeout(() => {
        submitCount.value = 0;
      }, 4000);
    }
  });
  return {
    email,
    eError,
    eBlur,
    password,
    pBlur,
    pError,
    onSubmit,
    isSubmitting,
    istomanyAttemots,
  };
}
