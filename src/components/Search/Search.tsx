import { FC } from 'react';
import styles from './styles.module.scss';

interface SerachProps {}

const Serach: FC<SerachProps> = ({}) => {
  return (
    <div className={styles['search-container']}>
      <input type="text" className={styles.search} placeholder="Painting title" />
    </div>
  );
};

export default Serach;
