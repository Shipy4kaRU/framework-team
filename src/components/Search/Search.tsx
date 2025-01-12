import { ChangeEvent, FC, FormEvent, useState } from 'react';
import styles from './styles.module.scss';
import icons from '../../icons/icons_sprite.svg';

interface SerachProps {
  onSearch: (str: string) => void;
}

let debounceTimer: ReturnType<typeof setTimeout>;
const Serach: FC<SerachProps> = ({ onSearch }) => {
  const [title, setTitle] = useState<string>('');

  const inputTitle = (text: string, isImmediatly: boolean): void => {
    if (isImmediatly) {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      setTitle(text);
      onSearch(text);
    } else {
      setTitle(text);
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
      debounceTimer = setTimeout(() => {
        onSearch(text);
      }, 1000);
    }
  };

  return (
    <form
      className={styles['search-container']}
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        inputTitle(title, true);
      }}
    >
      <svg className={styles.searchIcon}>
        <use xlinkHref={`${icons}#search`} />
      </svg>
      <input
        type="text"
        className={styles.search}
        placeholder="Painting title"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          inputTitle(e.target.value, false);
        }}
      />
      {Boolean(title) && (
        <button
          type="button"
          className={styles.btnDelete}
          onClick={() => {
            inputTitle('', true);
          }}
        >
          <svg className={styles.delete}>
            <use xlinkHref={`${icons}#delete`} />
          </svg>
        </button>
      )}
    </form>
  );
};

export default Serach;
