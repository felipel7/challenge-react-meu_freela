import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Campo obrigatório!')
    .min(3, 'Nome deve ter pelo menos 3 letras!')
    .max(60),
  phone: yup
    .string()
    .required('Campo obrigatório!')
    .min(8, '')
    .matches(
      /^\(?\d{2}\)? ?([2-9]|\d{9}) ?\d{4}-? ?\d{4}$/,
      'O número deve ter o seguinte formato: 99 99999 9999'
    ),
});

export { formSchema };
