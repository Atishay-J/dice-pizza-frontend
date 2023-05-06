import './ProductCard.css';
import { Link } from 'react-router-dom';
import { StarRatings } from '../index';

import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import axiosInstance from '../utils';

export default function ProductCard({ item, reducerState, dispatch }) {
  const checkIfFav = () =>
    reducerState.favourites.find((itemsInFav) => itemsInFav.id === item._id)
      ? true
      : false;

  const addToCart = async () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: item._id,
        img: item.image,
        title: item.title,
        price: item.price,
        isVeg: item.isVeg,
        rating: item.rating
      }
    });
    await axiosInstance
      .post('/addproduct', {
        userId: localStorage.getItem('userId'),
        id: item._id,
        img: item.image,
        title: item.title,
        price: item.price,
        isVeg: item.isVeg,
        rating: item.rating
      })
      .then((res) => console.log('Updated cart', res))
      .catch((err) => console.log('Error update', err));
  };

  const toggleFavourites = () => {
    dispatch({
      type: 'TOGGLE_FAVOURITES',
      payload: {
        id: item._id,
        img: item.image,
        title: item.title,
        price: item.price,
        isVeg: item.isVeg,
        rating: item.rating
      }
    });

    axiosInstance
      .post('/updatefavourites', {
        userId: localStorage.getItem('userId'),
        id: item._id,
        img: item.image,
        title: item.title,
        price: item.price,
        isVeg: item.isVeg,
        rating: item.rating
      })
      .catch((err) => console.log('some error occured', err));
  };

  return (
    <div className="productCardContainer">
      <div className="prodImageWrapper">
        <img className="prodCardImg" src={item.image} alt="pizza" />
        <div className="addToFavContainer">
          <label className="heartLabel">
            <input
              className="heartBtn"
              type="checkbox"
              checked={checkIfFav()}
              onChange={toggleFavourites}
            />
            <FavoriteSharpIcon
              style={{ fontSize: '2.2rem' }}
              classes={{ root: 'heartIcon' }}
            />
          </label>
        </div>
      </div>
      <div className="prodInfoWrapper">
        <h1 className="prodCardTitle">{item.title}</h1>

        <div className="productPriceWrapper">
          <p className="prodCardPrice"> ₹{item.price}</p>
          <div className="isVegContainer">
            <div className={`isVeg ${item.isVeg ? 'veg' : 'nonVeg'}`}></div>
          </div>
        </div>
        <div className="starRatingsWrapper">
          <StarRatings
            starred={item.rating}
            activeColor="#78bc61"
            color="#dadada"
          />
        </div>
        <div className="prodCardBtnsWrapper">
          {reducerState.cart.find(
            (itemInCart) => itemInCart.id === item._id
          ) ? (
            <Link to="/cart" className="prodCardBtnLink">
              <button className="prodCardBtn">Goto cart</button>
            </Link>
          ) : (
            <button className="prodCardBtn" onClick={addToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
