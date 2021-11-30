import styles from './styles.module.scss';
import manThinking from '../../assets/images/thinking.webp';

const AboutUs = () => {
  return (
    <section className={`${styles.aboutUsContainer} aboutUsContainer-dark`}>
      <div className={styles.aboutUsContent}>
        <div data-aos='fade-up'>
          <h2>Nossa iniciativa</h2>
          <p>
            Somos desenvolvedores que se dedicam a fazer projetos perfeitos e
            entregar valor para todos os seus clientes. Gostamos de ver clientes
            satisfeitos com projetos feitos com carinho, atenção e qualidade
            altíssima.
          </p>
        </div>

        <picture data-aos='fade-left'>
          <img src={manThinking} alt='a man thinking' />
        </picture>
      </div>
    </section>
  );
};

export { AboutUs };
