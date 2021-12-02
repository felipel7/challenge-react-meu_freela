import styles from './styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div data-aos='zoom-in' className={styles.heroContent}>
        <span>Desenvolvedores prontos para ação</span>
        <h1>Seu projeto pronto na velocidade da luz</h1>
        <a href='#form'>
          <button type='button'>Peça uma reunião</button>
        </a>
      </div>
    </section>
  );
};

export { Hero };
