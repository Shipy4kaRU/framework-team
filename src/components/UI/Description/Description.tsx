import { FC } from 'react';
import styles from './styles.module.scss';

interface DescriptionProps {}

const Description: FC<DescriptionProps> = ({}) => {
  return (
    <div className={styles.description}>
      <div className={styles.author}>
        <h2 className={styles.header}>CASCATE DI TIVOLI</h2>
        <p className={styles.title}>1761</p>
      </div>
      <div className="visually-hidden">
        <p>Где же я</p>
        <p>Тута я</p>
      </div>
    </div>
  );
};

export default Description;
