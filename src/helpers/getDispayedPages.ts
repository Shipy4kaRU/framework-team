export const getDisplayedPages = (currentPage: number, totalPages: number) => {
  const displayedPages = [];

  if (currentPage === 1 && totalPages > 3) {
    return [1, 2, 3, totalPages];
  }

  displayedPages.push(1);

  if (currentPage > 1) {
    displayedPages.push(currentPage - 1);
  }

  displayedPages.push(currentPage);

  if (currentPage < totalPages) {
    displayedPages.push(currentPage + 1);
  }

  displayedPages.push(totalPages);
  return [...new Set(displayedPages)];
};
