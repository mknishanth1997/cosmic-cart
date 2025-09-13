import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { ProductDisplayCard } from "@/components/ProductDisplayCard/ProductDisplayCard";
import styles from "./ProductCardDisplayPage.module.css";
import { useData } from "@/context/dataContext";
export function ProductCardDisplayPage() {
  const { allPlanetData, saveCosmicCart } = useData();
  return (
    <>
      {" "}
      <div className={styles.homePageContainer}>
        <ImageSlider></ImageSlider>
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
            ></ProductDisplayCard>
          ))}
        </div>
      </div>
    </>
  );
}
