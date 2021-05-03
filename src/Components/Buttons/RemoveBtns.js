import { useCart } from "../Context/CartContext";

export default function RemoveBtn({ removeFrom, item }) {
  const { dispatch } = useCart();

  console.log("Item from favroutites", item);

  return (
    <div className="removeBtnContainer">
      <button
        className="removeFromBtn"
        onClick={() =>
          dispatch({ type: "TOGGLE_FAVOURITES", payload: { id: item.id } })
        }
      >
        Remove from {removeFrom}
      </button>
    </div>
  );
}
