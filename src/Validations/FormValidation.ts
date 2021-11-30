import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Campo obrigatório!')
    .min(3, 'Nome deve ter pelo menos 3 letras!')
    .max(100),
  phone: yup
    .string()
    .required('Campo obrigatório!')
    .matches(
      /^\(?\d{2}\)? ?([2-9]|\d{9}) ?\d{4}-? ?\d{4}$/,
      'Deve ter o formato: 99 99999 9999'
    ),
});

export { formSchema };
