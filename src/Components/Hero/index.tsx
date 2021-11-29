import styles from './styles.module.scss';
import hero from '../../assets/images/hero.webp';

const Hero = () => {
  return (
    <figure className={styles.heroContainer}>
      <img src={hero} alt='a man coding in the background' />
      <figcaption data-aos='zoom-in-up' className={styles.heroHeading}>
        <p>Desenvolvedores prontos para ação</p>
        <h1>Seu projeto pronto na velocidade da luz</h1>
        <a href='#form' style={{ background: 'black' }}>
          <button type='button'>Peça uma reunião</button>
        </a>
      </figcaption>
    </figure>
  );
};

export { Hero };
