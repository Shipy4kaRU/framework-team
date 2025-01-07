import { FC, useState, Fragment } from 'react';
import styles from './styles.module.scss';
import { getDisplayedPages } from '../../helpers/getDispayedPages';
import icons from '../../icons/icons_sprite.svg';
import { paginationActions } from '../../interfaces/enums';

interface IPaginationProps {
  totalPages: number;
  setPage: (arg: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ totalPages, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (action: paginationActions, num?: number) => {
    if (action === paginationActions.next) {
      setCurrentPage((prev) => {
        const nextPage = prev + 1;
        setPage(nextPage);
        return nextPage;
      });
    } else if (action === paginationActions.prev) {
      setCurrentPage((prev) => {
        const prevPage = prev - 1;
        setPage(prev);
        return prevPage;
      });
    } else if (action === paginationActions.current && num) {
      setCurrentPage(num);
      setPage(num);
    }
  };

  const pages = getDisplayedPages(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => {
          if (currentPage > 1) changePage(paginationActions.prev);
        }}
      >
        <svg className={styles.prev}>
          <use xlinkHref={`${icons}#arrow`} />
        </svg>
      </button>
      {pages.map((page, index) => (
        <Fragment key={page}>
          {index > 0 && pages[index] - pages[index - 1] > 1 && <span className={styles.page}>...</span>}
          <button
            className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
            onClick={() => changePage(paginationActions.current, page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        </Fragment>
      ))}
      <button
        className={styles.button}
        onClick={() => {
          if (currentPage < totalPages) changePage(paginationActions.next);
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
