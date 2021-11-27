import styles from './hero.module.scss';
import hero from '../../assets/images/hero.webp';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <img src={hero} alt='' />
      <div className={styles.heroHeading}>
        <p>Desenvolvedores prontos para ação</p>
        <h1>Seu projeto pronto na velocidade da luz</h1>
        <button type='button'>Peça uma reunião</button>
      </div>
    </section>
  );
};

export { Hero };
