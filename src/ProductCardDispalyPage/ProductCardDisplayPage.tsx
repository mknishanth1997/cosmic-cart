import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { ProductDisplayCard } from "@/components/ProductDisplayCard/ProductDisplayCard";
import styles from "./ProductCardDisplayPage.module.css";
import { useData } from "@/context/dataContext";
import Link from "next/link";
export function ProductCardDisplayPage() {
  const { allPlanetData, saveCosmicCart } = useData();
  return (
    <>
      {" "}
      <div className={styles.homePageContainer}>
        <div className={styles.sliderWrapper}>
          <ImageSlider />
        </div>
        <h1 className={styles.heroHeading}>
          Purchase your planet. It'll be very secure. No one can get there — not
          even you.
        </h1>
        <h3 className={styles.featureHeading}>Featured Products</h3>

        <div className={styles.ProductCardDispalyPage}>
          {allPlanetData.map((planet) => (
            <ProductDisplayCard
              key={planet.planetId}
              planetThumbnailImg={planet.planetThumbnailImg}
              planetOffer={planet.planetOfferDetails}
              planetName={planet.planetName}
              planetDescription={planet.planetShortDescription}
              planetPrice={planet.planetPrice}
              planetAvailabilty={planet.planetInStock}
              planetId={planet.planetId}
            />
          ))}
        </div>
      </div>
    </>
  );
}
