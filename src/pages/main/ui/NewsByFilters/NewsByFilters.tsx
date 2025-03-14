import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { NewsFilters } from "@/widgets/news";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        filters={filters}
        news={news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default NewsByFilters;
