import { useState } from "react";
import { useCart } from "../Context/CartContext";

export default function CartTotal() {
  const { state, dispatch } = useCart();

  const [checkInput, setCheckInput] = useState("");

  let priceArr = [];
  let qtyArr = [];
  let totalPrice = 0;

  state.cart.map(
    (item) => (priceArr = [...priceArr, parseFloat(item.price) * item.qty])
  );
  state.cart.map((item) => (qtyArr = [...qtyArr, item.qty]));

  let totalCartPrice = priceArr.reduce((a, b) => a + b, 0);

  let itemQty = qtyArr.reduce((a, b) => a + b, 0);

  totalPrice =
    totalCartPrice < state.discount.discountAmt
      ? totalCartPrice
      : totalCartPrice - state.discount.discountAmt;

  return (
    <div className="cartTotalContainer">
      {/* <h2> I am cart Total</h2> */}
      <div className="cartTotalItems">
        <h3 className="cartTotalHeading">
          Price Details ({itemQty} {itemQty > 1 ? "items" : "item"})
        </h3>
        <h6 className="cartTotalPrice">Total MRP : ₹ {totalCartPrice}</h6>
        <h6 className="cartTotalDiscount">
          Discount : ₹{" "}
          {state.discount.giveDiscount ? state.discount.discountAmt : "00"}
        </h6>
        <p className="cartTotalMessage">{state.discount.discountMsg}</p>
        <input
          className="cartTotalInput"
          type="text"
          placeholder="Enter Coupon Code"
          value={checkInput}
          onChange={(event) => setCheckInput(event.target.value)}
        />
        <button
          className="cartTotalInputBtn"
          onClick={() =>
            dispatch({
              type: "HANDLE_DISCOUNT",
              payload: { cartPrice: totalCartPrice, couponInput: checkInput },
            })
          }
        >
          Apply
        </button>
        <p className="cartTotalCouponInfo">
          <span className="couponIcon">%</span>"Flat50"
        </p>
      </div>

      <div className="cartTotal">
        <h4 className="cartTotalAmt">Total Amount: ₹ {totalPrice}</h4>
      </div>
      <button className="cartTotalBtn">Place Order</button>
    </div>
  );
}
