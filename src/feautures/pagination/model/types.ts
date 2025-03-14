export interface IPaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  handlePreviousPage: () => void;
  currentPage: number;
}

