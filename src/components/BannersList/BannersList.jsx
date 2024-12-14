import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewBanner from "../NewBanner/NewBanner";
import styles from "./styles.module.css";

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 12, "row");

export default BannersListWithSkeleton;
