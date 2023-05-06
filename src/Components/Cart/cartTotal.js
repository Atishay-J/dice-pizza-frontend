import { useEffect, useState } from 'react';
import { useCart } from '../Context/CartContext';

export default function CartTotal() {
  const { state, dispatch } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkInput, setCheckInput] = useState('');

  const totalCartPrice = state.cart.reduce((acc, cur) => {
    return acc + parseFloat(cur.price) * cur.qty;
  }, 0);

  const itemQty = state.cart.reduce((acc, cur) => {
    return acc + cur.qty;
  }, 0);

  const options = {
    key: process.env.REACT_APP_RAZORPAY_TEST_KEY,
    amount: totalPrice * 100,
    currency: 'INR',
    name: 'Dice Pizza',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
    prefill: {
      name: 'Guest User',
      email: 'guest.user@example.com',
      contact: '9000090000'
    },
    notes: {
      address: 'Razorpay Corporate Office'
    },
    theme: {
      color: '#78bc61'
    }
  };

  const openCheckout = () => {
    // eslint-disable-next-line no-undef
    var rzp1 = new Razorpay(options);
    rzp1.open(options);
  };

  useEffect(() => {
    setTotalPrice(() => {
      return totalCartPrice < state.discount.discountAmt
        ? totalCartPrice
        : totalCartPrice - state.discount.discountAmt;
    });
  }, [state.discount.discountAmt, totalCartPrice]);

  return (
    <div className="cartTotalContainer">
      <div className="cartTotalItems">
        <h3 className="cartTotalHeading">
          Price Details ({itemQty} {itemQty > 1 ? 'items' : 'item'})
        </h3>
        <h6 className="cartTotalPrice">Total MRP : ₹ {totalCartPrice}</h6>
        <h6 className="cartTotalDiscount">
          Discount : ₹{' '}
          {state.discount.giveDiscount ? state.discount.discountAmt : '00'}
        </h6>
        {checkInput && (
          <p className="cartTotalMessage">{state.discount.discountMsg}</p>
        )}
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
              type: 'HANDLE_DISCOUNT',
              payload: { cartPrice: totalCartPrice, couponInput: checkInput }
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
      <button className="cartTotalBtn" onClick={openCheckout}>
        Place Order
      </button>
    </div>
  );
}
