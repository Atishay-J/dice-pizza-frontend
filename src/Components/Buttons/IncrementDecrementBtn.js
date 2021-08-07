import axios from "axios";
import { useEffect, useRef } from "react";
import { useCart } from "../Context/CartContext";

export default function IncDecBtn({ item }) {
  const { dispatch } = useCart();
  const debounced = useRef();

  const updateOnServer = (productId, type) => {
    let userId = localStorage.getItem("userId");

    clearTimeout(debounced.current);

    debounced.current = setTimeout(() => {
      axios
        .post("http://localhost:8000/updateqty", {
          userId,
          productId,
          type,
          qty: item.qty,
        })
        .then((res) => console.log("Product updated", res))
        .catch((err) => console.log("error while updating product", err));
    }, 400);
  };

  const incrementQty = () => {
    dispatch({
      type: "INCREMENT_QTY",
      payload: { id: item.id },
    });
    updateOnServer(item.id, "INCREMENT");
  };

  const decrementQty = () => {
    dispatch({ type: "DECREMENT_QTY", payload: { id: item.id } });
    updateOnServer(item.id, "DECREMENT");
  };

  useEffect(() => {
    let timer;
    debounced.current = timer;
  }, []);

  return (
    <div className="incrementDecrementContainer">
      <button className="incDecButton decBtn" onClick={decrementQty}>
        -
      </button>

      <p>{item.qty}</p>

      <button className="incDecButton incBtn" onClick={incrementQty}>
        +
      </button>
    </div>
  );
}
