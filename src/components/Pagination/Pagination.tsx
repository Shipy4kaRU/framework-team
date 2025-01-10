import { FC, Fragment, useEffect } from 'react';
import styles from './styles.module.scss';
import { getDisplayedPages } from '../../helpers/getDispayedPages';
import icons from '../../icons/icons_sprite.svg';
import { paginationActions } from '../../interfaces/enums';

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  setPage: (arg: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ totalPages, currentPage, setPage }) => {
  const changePage = (action: paginationActions, num?: number): void => {
    if (action === paginationActions.next) setPage(currentPage + 1);
    else if (action === paginationActions.prev) setPage(currentPage - 1);
    else if (action === paginationActions.current && num) setPage(num);
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const pages = getDisplayedPages(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.btnPrev} ${styles.btn}`}
        onClick={() => {
          if (currentPage > 1) changePage(paginationActions.prev);
        }}
      >
        <svg className={styles.prev}>
          <use xlinkHref={`${icons}#prev`} />
        </svg>
      </button>
      {pages.map((page, index) => (
        <Fragment key={page}>
          {index > 0 && pages[index] - pages[index - 1] > 1 && (
            <button style={{ cursor: 'default', boxShadow: 'none', fontWeight: 300 }} className={styles.page}>
              ...
            </button>
          )}
          <button
            key={page}
            className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
            onClick={() => changePage(paginationActions.current, page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        </Fragment>
      ))}
      <button
        className={`${styles.btnNext} ${styles.btn}`}
        onClick={() => {
          if (currentPage < totalPages) changePage(paginationActions.next);
        }}
      >
        <svg className={styles.next}>
          <use xlinkHref={`${icons}#next`} />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
