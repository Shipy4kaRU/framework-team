import { ChangeEvent, FC, useState } from 'react';
import styles from './styles.module.scss';
import { setDebounce } from '../../helpers/setDebounce';

interface SerachProps {
  onSearch: (str: string) => void;
}

const Serach: FC<SerachProps> = ({ onSearch }) => {
  const [title, setTitle] = useState<string>('');

  const sendTitle = (text: string) => {
    setTitle(text);
    setDebounce(text, 1000);
    onSearch(text);
  };

  return (
    <div className={styles['search-container']}>
      <input
        type="text"
        className={styles.search}
        placeholder="Painting title"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          sendTitle(e.target.value);
        }}
      />
    </div>
  );
};

export default Serach;
