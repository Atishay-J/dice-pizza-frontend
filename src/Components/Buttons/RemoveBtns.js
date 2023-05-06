import { useCart } from '../Context/CartContext';
import axiosInstance from '../utils';

export default function RemoveBtn({ removeFrom, item }) {
  const { dispatch } = useCart();

  const toggleFavourites = () => {
    dispatch({ type: 'TOGGLE_FAVOURITES', payload: { id: item.id } });
    axiosInstance.post('/updatefavourites', {
      userId: localStorage.getItem('userId'),
      id: item.id
    });
  };

  return (
    <div className="removeBtnContainer">
      <button className="removeFromBtn" onClick={toggleFavourites}>
        Remove from {removeFrom}
      </button>
    </div>
  );
}
