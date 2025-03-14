import PaginationWrapper from "@/feautures/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { NewsList } from "@/widgets/news";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <PaginationWrapper
      top
      bottom
      handleNextPage={handleNextPage}
      handlePageClick={handlePageClick}
      handlePreviousPage={handlePreviousPage}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList
        direction="column"
        type="item"
        isLoading={isLoading}
        news={news}
      />
    </PaginationWrapper>
  );
};

export default NewsListWithPagination;
