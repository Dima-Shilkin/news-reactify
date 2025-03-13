import { IFilters } from "../../interfaces";
import Categories from "../Categories/Categories";
import Slider from "../Slider/Slider";
import Search from "../Search/Search";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeContext";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
