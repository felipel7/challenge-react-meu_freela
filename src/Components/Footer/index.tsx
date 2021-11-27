import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>
        Desafio 1 - front-end iniciante
        <span>
          Iniciativa <strong>DEV HALL</strong>
        </span>
      </p>
    </footer>
  );
};

export { Footer };
