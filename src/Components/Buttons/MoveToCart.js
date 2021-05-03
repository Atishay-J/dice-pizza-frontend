import { useCart } from "../Context/CartContext";

import { Link } from "react-router-dom";

export default function MoveBtn({ item }) {
  const { state, dispatch } = useCart();

  return (
    <div className="moveBtnContainer">
      {state.cart.find((itemInCart) => itemInCart.id === item.id) ? (
        <Link to="/cart" className="moveBtnLink">
          <button className="moveToCart">Goto cart</button>
        </Link>
      ) : (
        <button
          className="moveToCart"
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: {
                id: item.id,
                img: item.img,
                title: item.title,
                price: item.price,
                isVeg: item.isVeg,
                ratings: item.ratings,
              },
            })
          }
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
