import { FC, useState, Fragment } from 'react';
import styles from './styles.module.scss';
import { getDisplayedPages } from '../../helpers/getDispayedPages';

interface IPaginationProps {
  totalPages: number;
}

const Pagination: FC<IPaginationProps> = ({ totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(4); // стартовая страница

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const pages = getDisplayedPages(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      {pages.map((page, index) => (
        <Fragment key={page}>
          {index > 0 && pages[index] - pages[index - 1] > 1 && <span>...</span>}
          <button
            className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
            onClick={() => handlePageClick({ selected: page })}
            disabled={currentPage === page}
          >
            {page}
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default Pagination;
