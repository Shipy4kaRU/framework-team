import { FC, useState, Fragment } from 'react';
import styles from './styles.module.scss';
import { getDisplayedPages } from '../../helpers/getDispayedPages';
import icons from '../../icons/icons_sprite.svg';

interface IPaginationProps {
  totalPages: number;
}

const Pagination: FC<IPaginationProps> = ({ totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(4);

  const pages = getDisplayedPages(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => {
          if (currentPage > 1) setCurrentPage((state) => state - 1);
        }}
      >
        <svg className={styles.prev}>
          <use xlinkHref={`${icons}#arrow`} />
        </svg>
      </button>
      {pages.map((page, index) => (
        <Fragment key={page}>
          {index > 0 && pages[index] - pages[index - 1] > 1 && <span>...</span>}
          <button
            className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
            onClick={() => setCurrentPage(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        </Fragment>
      ))}
      <button
        className={styles.button}
        onClick={() => {
          if (currentPage < 10) setCurrentPage((state) => state + 1);
        }}
      >
        <svg className={styles.next}>
          <use xlinkHref={`${icons}#arrow`} />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
