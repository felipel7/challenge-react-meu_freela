import styles from './styles.module.scss';
import hero from '../../assets/images/hero.webp';

const Hero = () => {
  return (
    <figure className={styles.heroContainer}>
      <img src={hero} alt='a man coding in the background' />
      <figcaption className={styles.heroHeading}>
        <p>Desenvolvedores prontos para ação</p>
        <h1>Seu projeto pronto na velocidade da luz</h1>
        <button type='button'>
          <a href='#form'>Peça uma reunião</a>
        </button>
      </figcaption>
    </figure>
  );
};

export { Hero };
