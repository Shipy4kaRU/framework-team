import { FC } from 'react';
import icons from '../../icons/icons_sprite.svg';
import styles from './styles.module.scss';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return (
    <header className={styles.header}>
      <a href="https://framework.team/" className={styles.link}>
        <svg className={styles.logo}>
          <use xlinkHref={`${icons}#logo`} />
        </svg>
      </a>
      <button
        className={styles.button}
        onClick={() => {
          handleTheme();
        }}
      >
        <svg className={styles.theme}>
          <use xlinkHref={`${icons}#moon`} />
        </svg>
      </button>
    </header>
  );
};

export default Header;
