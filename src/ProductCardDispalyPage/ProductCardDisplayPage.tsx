"use client";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { ProductDisplayCard } from "@/components/ProductDisplayCard/ProductDisplayCard";
import styles from "./ProductCardDisplayPage.module.css";
import { useData } from "@/context/dataContext";

export function ProductCardDisplayPage() {
  const { allPlanetData } = useData();

  return (
    <div className={styles.homePageContainer}>
      {/* Hero Slider */}
      <div className={styles.sliderWrapper}>
        <ImageSlider />
      </div>

      {/* Main Heading */}
      <h1 className={`${styles.heroHeading} mt-8 mb-6 text-center`}>
        Purchase your planet. It'll be very secure.
        <br />
        <span className="text-gray-600 font-normal">
          No one can get there — not even you.
        </span>
      </h1>

      {/* Featured Products */}
      <div className="">
        <h3 className={`${styles.featureHeading}  text-center`}>
          Featured Products
        </h3>

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
    </div>
  );
}
