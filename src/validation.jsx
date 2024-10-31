import * as yup from "yup";
export const validationSchema = yup.object({
  email: yup
    .string()
    .email("Email Formatinda Olmalidir")
    .required("Emaili Bos Buraxmaq Olmaz"),
  name: yup
    .string()
    .min(2, "En az iki herf olmalidir")
    .required("Adinizi Bos Buraxmaq Olmaz"),
  number: yup
    .string()
    .matches(/^\d{9}$/, "Telefon nömrəsi 9 rəqəm olmalıdır")
    .required("Telefon nömrəsini boş buraxmaq olmaz"),
  age: yup
    .number()
    .min(15, "Yaşınız minimum 15 olmalıdır")
    .required("Yaş boş buraxıla bilməz"),
  terms: yup
    .boolean()
    .oneOf([true], "Şərtləri qəbul etməlisiniz")
    .required("Şərtləri qəbul etməlisiniz"),
});
