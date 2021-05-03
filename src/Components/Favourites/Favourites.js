import { HorizontalCard } from "..";
import { useCart } from "../Context/CartContext";
import "./favourites.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Favourites() {
  const { state } = useCart();

  return (
    <>
      <div className="favouritesContainer">
        {state.favourites.length <= 0 ? (
          <div className="emptyCartWrapper">
            <div className="emptyCartIconWrapper">
              <FavoriteIcon fontSize="inherit" color="inherit" />
            </div>
            <h2 className="emptyCartHeading">Didn't like anything ?</h2>
            <p className="emptyCartPara">Add Items to Favourites</p>
          </div>
        ) : (
          <div className="favouritesCardWrapper">
            {state.favourites.map((item) => (
              <li className="listStyleNone favouritesList" key={item.id}>
                <HorizontalCard
                  item={item}
                  showIncDecBtns={false}
                  showRemoveBtn={true}
                  showMoveToCart={true}
                />
              </li>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
