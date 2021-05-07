import { IncDecBtn, RemoveBtn, MoveBtn, StarRatings } from "../index";
import "./HorizontalCard.css";

export default function HorizontalCard({
  item,
  showIncDecBtns,
  showRemoveBtn,
  showMoveToCart,
}) {
  return (
    <div className="horizontalCardContainer">
      <img className="horizontalCardImg" src={item.img} alt="pizza" />
      <div className="horizontalCardInfoContainer">
        <h1 className="horizontalCardTitle">{item.title}</h1>
        <div className="starRatingsWrapper">
          <StarRatings
            starred={item.ratings}
            activeColor="#78bc61"
            color="#dadada"
          />
        </div>
        <h6 className="horizontalCardPrice"> ₹{item.price}</h6>

        <div className="isVegContainer">{item.isVeg}</div>
        {showIncDecBtns && <IncDecBtn item={item} />}
        {showRemoveBtn && <RemoveBtn item={item} removeFrom="favourites" />}
        {showMoveToCart && <MoveBtn item={item} />}
      </div>
    </div>
  );
}
