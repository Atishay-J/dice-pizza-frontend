import { HorizontalCard } from "../index";
import { useCart } from "../Context/CartContext";
import CartTotal from "./cartTotal";
import "./cart.css";
import FastfoodIcon from "@material-ui/icons/Fastfood";

export default function Cart() {
  const { state } = useCart();

  return (
    <>
      <div className="cartMainContainer">
        {/* <h1>Cart</h1> */}
        {state.cart.length <= 0 ? (
          <div className="emptyCartWrapper">
            <div className="emptyCartIconWrapper">
              <FastfoodIcon fontSize="inherit" color="inherit" />
            </div>
            <h2 className="emptyCartHeading">Looks like you are not hungry</h2>
            <p className="emptyCartPara">Add Items to cart</p>
          </div>
        ) : (
          <div className="mainCartWrapper">
            <div className="cartWrapper">
              {state.cart.map((item) => (
                <li className="listStyleNone cartList" key={item.id}>
                  <HorizontalCard item={item} showIncDecBtns={true} />
                </li>
              ))}
            </div>

            <div className="cartTotalWrapper">
              <CartTotal />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
