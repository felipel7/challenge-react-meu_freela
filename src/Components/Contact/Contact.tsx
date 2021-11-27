import styles from './styles.module.scss';

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <h2>Mande um oi, ligamos para você!</h2>
      <p>Preencha seus dados para que a gente possa entrar em contato.</p>

      <form>
        <div className={styles.formControl}>
          <label htmlFor='name'>Nome Completo</label>
          <input type='text' id='name' placeholder='Ex: Mateus Ávila Isidoro' />
        </div>

        <div className={styles.formControl}>
          <label htmlFor='phone'>Whatsapp</label>
          <input type='text' id='phone' placeholder='(99) 99999-9999' />
        </div>
        <button type='button'>Peça uma reunião</button>
      </form>
    </section>
  );
};

export { Contact };
