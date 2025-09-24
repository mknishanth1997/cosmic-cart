"use client";
import { useData } from "@/context/dataContext";
import style from "./cartandwishlistitemscomp.module.css";
import ManyStyledButton from "@/components/ManyStyledButton/ManyStyledButton";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const CartAndWishComp: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const { allPlanetData, cosmicShop, saveCosmicCart } = useData();
  let planetData = [];
  let planetIdd: number[] = [];

  function checkWhatToRender(id: string) {
    if (id === "cartItems") {
      addArrayOfItems(cosmicShop.cartItems);
      return;
    }
    if (id === "wishListItems") {
      addArrayOfItems(cosmicShop.wishListItems);
      return;
    }
    const numericId = Number(id);
    if (!isNaN(numericId)) {
      planetIdd.push(numericId);
      return;
    }
  }

  function addArrayOfItems(arr) {
    const newArr = arr.map((i) => i.planetId);
    planetIdd.push(...newArr);
  }

  checkWhatToRender(id);

  function getThePlanetData(arr) {
    const newArr = arr.map((id) => {
      const planet = allPlanetData.find(
        (planet) => planet.planetId === Number(id)
      );
      return planet;
    });
    planetData.push(...newArr.filter((p) => p !== undefined));
  }

  getThePlanetData(planetIdd);

  function calculateTotalPrice(planetData: Planets): number {
    return planetData.reduce((acc, planet) => acc + planet.planetPrice, 0);
  }
  const totalPrice = calculateTotalPrice(planetData);

  // 🟢 Remove item handler
  function handleRemove(planetId: number) {
    if (id === "cartItems") {
      const newCart = cosmicShop.cartItems.filter(
        (item) => item.planetId !== planetId
      );
      saveCosmicCart({ ...cosmicShop, cartItems: newCart });
    } else if (id === "wishListItems") {
      const newWishlist = cosmicShop.wishListItems.filter(
        (item) => item.planetId !== planetId
      );
      saveCosmicCart({ ...cosmicShop, wishListItems: newWishlist });
    }
  }
  return (
    <div className={style.cartContainer}>
      <h2 className={style.cartTitle}>Shopping Cart</h2>

      {planetData.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Add something — right now the cart looks like your bank balance 💸
        </div>
      ) : (
        <>
          <div className={style.cartTable}>
            <div className={style.tableHeader}>
              <div>Product</div>
              <div>Total Price</div>
              <div></div>
            </div>

            <div>
              {planetData.map((planet) => (
                <div key={planet.planetId} className={style.tableRow}>
                  <div className={style.productCell}>
                    <div className={style.productImage}>
                      <img
                        src={planet.planetThumbnailImg}
                        alt={planet.planetName}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </div>
                    <div>
                      <div className={style.productName}>
                        {planet.planetName}
                      </div>
                    </div>
                  </div>
                  <div className={style.priceCell}>₹{planet.planetPrice}</div>
                  <button
                    className={style.removeBtn}
                    onClick={() => handleRemove(planet.planetId)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-right pt-4">
            <ManyStyledButton
              onClick={() => router.push(`/checkOutPage?id=${id}`)}
            >
              Buy Now
            </ManyStyledButton>
          </div>
        </>
      )}
    </div>
  );
};

export default CartAndWishComp;
