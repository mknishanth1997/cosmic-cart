import { useData } from "@/context/dataContext";
import style from "./ShoppingCart.module.css";
import { useState } from "react";
type Props = {
  id: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const ShoppingCart: React.FC<Props> = ({ id, input, setInput }) => {
  const { allPlanetData, cosmicShop } = useData();
  let planetData = [];
  let planetIdd: number[] = [];
  function checkWhatToRender(id: string) {
    if (id === "cartItems") {
      console.log("Cart Items came in");
      addArrayOfItems(cosmicShop.cartItems);
      return;
    }
    if (id === "wishListItems") {
      console.log("Whis List came in");
      addArrayOfItems(cosmicShop.wishListItems);
      return;
    }
    const numericId = Number(id);
    if (!isNaN(numericId)) {
      console.log("Planet ID came in:", numericId);
      planetIdd.push(numericId);
      return;
    }
  }

  function addArrayOfItems(arr) {
    console.log({ arr });
    const newArr = arr.map((i) => i.planetId);
    planetIdd.push(...newArr); // spread them directly
    console.log(planetIdd);
  }

  checkWhatToRender(id);

  function getThePlanetData(arr) {
    const newArr = arr.map((id) => {
      const planet = allPlanetData.find(
        (planet) => planet.planetId === Number(id)
      );
      return planet;
    });
    planetData.push(...newArr.filter((p) => p !== undefined)); // filter out undefined values
    console.log({ planetData });
  }

  getThePlanetData(planetIdd);
  console.log(planetData.length);

  // ✅ Total from planetPrice only
  function calculateTotalPrice(planetData: Planets): number {
    return planetData.reduce((acc, planet) => acc + planet.planetPrice, 0);
  }
  const totalPrice = calculateTotalPrice(planetData);

  return (
    <div className={style.cartContainer}>
      {/* Title */}
      <h2 className={style.cartTitle}>Shopping Cart</h2>

      {/* Table */}
      <div className={style.cartTable}>
        <div className={style.tableHeader}>
          <div>Product</div>
          <div>Total Price</div>
          <div></div>
        </div>

        {/* Item 1 */}
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
                  <div className={style.productName}>{planet.planetName}</div>
                </div>
              </div>
              <div className={style.priceCell}>₹{planet.planetPrice}</div>
              <button className={style.removeBtn}>×</button>
            </div>
          ))}
        </div>
        {/* <div className={style.tableRow}>
          <div className={style.productCell}>
            <div className={`${style.productImage} ${style.bgBrown}`}>🎒</div>
            <div>
              <div className={style.productName}>Backpack</div>
              <div className={style.productBrand}>Fjallraven</div>
            </div>
          </div>
          <div className={style.priceCell}>$15000</div>
          <button className={style.removeBtn}>×</button>
        </div> */}
      </div>

      {/* Summary */}
      <div className={style.cartSummary}>
        {/* Input Box */}
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
    </div>
  );
};

export default ShoppingCart;
