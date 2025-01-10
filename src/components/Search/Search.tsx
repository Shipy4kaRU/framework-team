import { ChangeEvent, FC, useState } from 'react';
import styles from './styles.module.scss';
import icons from '../../icons/icons_sprite.svg';

interface SerachProps {
  onSearch: (str: string) => void;
}

let debounceTimer: ReturnType<typeof setTimeout>;
const Serach: FC<SerachProps> = ({ onSearch }) => {
  const [title, setTitle] = useState<string>('');

  const inputTitle = (text: string): void => {
    setTitle(text);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      onSearch(text);
    }, 1000);
  };

  return (
    <div className={styles['search-container']}>
      <svg className={styles.searchIcon}>
        <use xlinkHref={`${icons}#search`} />
      </svg>
      <input
        type="text"
        className={styles.search}
        placeholder="Painting title"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          inputTitle(e.target.value);
        }}
      />
      {Boolean(title) && (
        <button
          className={styles.btnDelete}
          onClick={() => {
            inputTitle('');
          }}
        >
          <svg className={styles.delete}>
            <use xlinkHref={`${icons}#delete`} />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Serach;
