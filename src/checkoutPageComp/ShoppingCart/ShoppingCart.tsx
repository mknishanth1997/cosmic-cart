import { useData } from "@/context/dataContext";
import style from "./ShoppingCart.module.css";

type Props = {
  id: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const ShoppingCart: React.FC<Props> = ({ id, input, setInput }) => {
  const { allPlanetData, cosmicShop, saveCosmicCart } = useData();

  // ✅ Derive IDs based on mode
  let planetIds: number[] = [];
  if (id === "cartItems") {
    planetIds = cosmicShop.cartItems.map((i) => i.planetId);
  } else if (id === "wishListItems") {
    planetIds = cosmicShop.wishListItems.map((i) => i.planetId);
  } else {
    const numericId = Number(id);
    if (!isNaN(numericId)) planetIds = [numericId];
  }

  // ✅ Get actual planet data
  const planetData = planetIds
    .map((pid) => allPlanetData.find((p) => p.planetId === pid))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  // ✅ Calculate total price
  const totalPrice = planetData.reduce(
    (acc, planet) => acc + planet.planetPrice,
    0
  );

  // ✅ Remove item handler
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
      {/* Title */}
      <h2 className={style.cartTitle}>
        {id === "wishListItems" ? "Wishlist" : "Shopping Cart"}
      </h2>

      {planetData.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          Add something — right now this cart looks like your bank balance 💸
        </div>
      ) : (
        <>
          {/* Table */}
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

          {/* Summary */}
          <div className={style.cartSummary}>
            <input
              type="text"
              placeholder="Enter your Name"
              className={style.inputBox}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <p>{input}</p>

            <div className={style.summaryRow}>
              <span>Subtotal:</span>
              <span>{`₹${totalPrice}`}</span>
            </div>
            <div className={style.summaryRow}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className={style.totalRow}>
              <span>Total:</span>
              <span>{`₹${totalPrice}`}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
