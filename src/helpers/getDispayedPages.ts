export const getDisplayedPages = (currentPage: number, totalPages: number) => {
  const displayedPages = [];

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
