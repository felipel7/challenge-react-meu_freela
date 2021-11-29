import { toast } from 'react-toastify';
import { formSchema } from '../../Validations/FormValidation';
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';

import styles from './styles.module.scss';

interface FormValues {
  name: string;
  phone: string;
}

const Contact = () => {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      // Promise =>  p/ fazer o submit do form/values ao servidor
      new Promise<void>(res => {
        setTimeout(() => {
          console.log(values);
          res();
        }, 1500);
      });
      toast.success('Dados enviados com sucesso! :)');
    } catch (e) {
      toast.error('Houve um erro! :( Tente novamente');
      console.log(e);
    }

    actions.resetForm();
  };

  return (
    <section
      id='form'
      data-aos='zoom-in-up'
      className={styles.contactContainer}
    >
      <h2>Mande um oi, ligamos para você!</h2>
      <p>Preencha seus dados para que a gente possa entrar em contato.</p>
      <Formik
        validationSchema={formSchema}
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, isValidating, isSubmitting }) => (
          <Form>
            <div className={styles.formContent}>
              <div className={styles.formControl}>
                <label htmlFor='name'>Nome Completo</label>
                <Field
                  autoComplete='off'
                  id='name'
                  name='name'
                  placeholder='Ex: Mateus Ávila Isidoro'
                />
                {errors && <span>{errors.name}</span>}
              </div>

              <div className={styles.formControl}>
                <label htmlFor='phone'>Whatsapp</label>
                <Field
                  autoComplete='off'
                  id='phone'
                  name='phone'
                  placeholder='(99) 99999-9999'
                />
                {errors && <span>{errors.phone}</span>}
              </div>
              <button type='submit' disabled={isValidating || isSubmitting}>
                Peça uma reunião
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export { Contact };
