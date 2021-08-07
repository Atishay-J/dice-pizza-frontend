import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const initState = {
  cart: [],
  favourites: [],
  isItemInCart: false,
  discount: {
    discountCode: "flat50",
    discountAmt: 0,
    discountInput: "",
    discountMsg: "",
    giveDiscount: false,
  },
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        isItemInCart: true,
        // qty: state.qty + 1,
        cart: [
          {
            id: action.payload.id,
            title: action.payload.title,
            img: action.payload.img,
            price: action.payload.price,
            isVeg: action.payload.isVeg,
            rating: action.payload.rating,
            qty: 1,
          },
          ...state.cart,
        ],
      };

    case "UPDATE_USER_CART":
      return {
        ...state,
        isItemInCart: true,
        cart: [...action.payload],
      };

    case "TOGGLE_FAVOURITES":
      if (state.favourites.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          favourites: state.favourites.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        favourites: [
          {
            id: action.payload.id,
            title: action.payload.title,
            img: action.payload.img,
            price: action.payload.price,
            isVeg: action.payload.isVeg,
            rating: action.payload.rating,
            qty: 1,
          },

          ...state.favourites,
        ],
      };

    case "UPDATE_FAVOURITES":
      return { ...state, favourites: [...action.payload] };

    case "INCREMENT_QTY": {
      let item = state.cart.find((pizza) => pizza.id === action.payload.id);
      let product;

      if (item) {
        product = state.cart.map((pizza) =>
          pizza.id === action.payload.id
            ? {
                ...pizza,
                qty: pizza.qty + 1,
              }
            : pizza
        );
      }
      return { ...state, cart: product };
    }

    case "DECREMENT_QTY": {
      let item = state.cart.find((pizza) => pizza.id === action.payload.id);
      let product;
      if (item.qty <= 1) {
        product = state.cart.filter((item) => item.id !== action.payload.id);
        return { ...state, cart: product };
      }
      if (item) {
        product = state.cart.map((pizza) =>
          pizza.id === action.payload.id
            ? {
                ...pizza,
                qty: pizza.qty - 1,
              }
            : pizza
        );
      }

      return { ...state, cart: product };
    }

    case "HANDLE_DISCOUNT":
      state = { ...state, discount: { ...state.discount, discountAmt: 50 } };

      if (
        state.discount.discountCode.toUpperCase() ===
          action.payload.couponInput.toUpperCase() &&
        state.discount.discountAmt > action.payload.cartPrice
      ) {
        return {
          ...state,
          discount: {
            ...state.discount,
            discountMsg: "Cart price should be more",
            giveDiscount: false,
          },
        };
      }
      if (
        state.discount.discountCode.toUpperCase() ===
          action.payload.couponInput.toUpperCase() &&
        state.discount.discountAmt < action.payload.cartPrice
      ) {
        return {
          ...state,
          discount: {
            ...state.discount,
            discountMsg: "Applied",
            giveDiscount: true,
          },
        };
      }
      if (
        state.discount.discountCode.toUpperCase() !==
        action.payload.couponInput.toUpperCase()
      ) {
        return {
          ...state,
          discount: {
            ...state.discount,
            discountMsg: "Invalid Coupon",
            giveDiscount: false,
          },
        };
      }
      break;

    default:
      return state;
  }
};

//   ***** CART PROVIDER  *****

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
