import { FormEvent, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';

const Contact = () => {
  const [isValid, setIsValid] = useState(true);
  const [errorPhoneMsg, setErrorPhoneMsg] = useState('');

  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = handleValidation(phoneRef.current!.value);

    if (result) {
      setIsValid(true);
      toast.success('Mensagem enviada! :)');
    } else {
      setErrorPhoneMsg('Número inválido!');
      setIsValid(false);
      toast.error('Verifique os dados novamente!');
    }

    formRef.current?.reset();
  };

  const handleValidation = (value: string) => {
    return /^\(?\d{2}\)? ?([2-9]|\d{9}) ?\d{4}-? ?\d{4}$/.test(value.trim());
  };

  return (
    <section id='form' className={styles.contactContainer}>
      <h2>Mande um oi, ligamos para você!</h2>
      <p>Preencha seus dados para que a gente possa entrar em contato.</p>

      <form ref={formRef} onSubmit={e => handleSubmit(e)}>
        <div className={styles.formControl}>
          <label htmlFor='name'>Nome Completo</label>
          <input
            autoComplete='off'
            type='text'
            id='name'
            placeholder='Ex: Mateus Ávila Isidoro'
          />
        </div>

        <div className={styles.formControl}>
          <label htmlFor='phone'>Whatsapp</label>
          <input
            autoComplete='off'
            className={isValid ? '' : `${styles.error}`}
            id='phone'
            placeholder='(99) 99999-9999'
            ref={phoneRef}
            type='text'
          />
          {!isValid && <span>{errorPhoneMsg}</span>}
        </div>
        <button type='submit'>Peça uma reunião</button>
      </form>
    </section>
  );
};

export { Contact };
