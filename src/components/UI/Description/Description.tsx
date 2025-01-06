import { FC } from 'react';
import styles from './styles.module.scss';

interface DescriptionProps {
  created: string;
  name: string;
}

const Description: FC<DescriptionProps> = ({ created, name }) => {
  return (
    <div className={styles.description}>
      <div className={styles.author}>
        <h2 className={styles.header}>{name}</h2>
        <p className={styles.title}>{created}</p>
      </div>
      <div className="visually-hidden">
        <p>Где же я</p>
        <p>Тута я</p>
      </div>
    </div>
  );
};

export default Description;
