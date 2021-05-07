import { useCart } from "../Context/CartContext";

export default function IncDecBtn({ item }) {
  const { dispatch } = useCart();
  return (
    <div className="incrementDecrementContainer">
      <button
        className="incDecButton decBtn"
        onClick={() =>
          dispatch({ type: "DECREMENT_QTY", payload: { id: item.id } })
        }
      >
        -
      </button>

      <p>{item.qty}</p>

      <button
        className="incDecButton incBtn"
        onClick={() =>
          dispatch({
            type: "INCREMENT_QTY",
            payload: { id: item.id },
          })
        }
      >
        +
      </button>
    </div>
  );
}
