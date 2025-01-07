import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { setDebounce } from '../../helpers/setDebounce';

interface SerachProps {}

const Serach: FC<SerachProps> = ({}) => {
  const [title, setTitle] = useState<string>('');

  const sendTitle = (title: string) => {
    setDebounce(title, 1000);
  };

  return (
    <div className={styles['search-container']}>
      <input
        type="text"
        className={styles.search}
        placeholder="Painting title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
  );
};

export default Serach;
