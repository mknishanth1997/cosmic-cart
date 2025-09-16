import style from "./ShoppingCart.module.css";
const ShoppingCart = () => {
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
        <div className={style.tableRow}>
          <div className={style.productCell}>
            <div className={`${style.productImage} ${style.bgBrown}`}>🎒</div>
            <div>
              <div className={style.productName}>Backpack</div>
              <div className={style.productBrand}>Fjallraven</div>
            </div>
          </div>
          <div className={style.priceCell}>$15000</div>
          <button className={style.removeBtn}>×</button>
        </div>
      </div>

      {/* Summary */}
      <div className={style.cartSummary}>
        {/* Input Box */}
        <input
          type="text"
          placeholder="Enter your Name"
          className={style.inputBox}
        />

        <div className={style.summaryRow}>
          <span>Subtotal:</span>
          <span>$18600</span>
        </div>
        <div className={style.summaryRow}>
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className={style.totalRow}>
          <span>Total:</span>
          <span>$18600</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
