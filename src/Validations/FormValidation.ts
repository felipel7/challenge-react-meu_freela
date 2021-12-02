import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Campo obrigatório!')
    .min(3, 'Nome deve ter pelo menos 3 letras!')
    .max(100)
    .matches(/^[a-z ,.'-]+$/i, 'Somente letras!'),
  phone: yup
    .string()
    .required('Campo obrigatório!')
    .matches(/^\(?\d{2}\)? ?([1-9]|\d{9}) ?\d{4}-? ?\d{4}$/, ' '),
});

export { formSchema };
