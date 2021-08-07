import "./App.css";
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import {
  Products,
  Cart,
  Favourites,
  Navbar,
  Error,
  TopNav,
  Account,
  SignIn,
  SignUp,
  useCart,
} from "./Components";
import { useEffect } from "react";
import { useAuth } from "./Components/Context/AuthContext";

function App() {
  const { authState } = useAuth();
  const { dispatch } = useCart();
  useEffect(() => {
    if (authState.isUserLoggedIn) {
      let userId = localStorage.getItem("userId");
      axios
        // .post("https://dicepizza.herokuapp.com/login",
        .get(`https://dicepizza.herokuapp.com/user/${userId}`)
        .then((res) => {
          dispatch({ type: "UPDATE_USER_CART", payload: res.data.cart });
          dispatch({ type: "UPDATE_FAVOURITES", payload: res.data.favourites });
        })
        .catch((err) => {
          console.error("Error while updating", err);
        });
    }
  }, [authState.isUserLoggedIn]);

  return (
    <>
      <div className="App">
        <div className="navWrapper">
          <TopNav />
          <Navbar />
        </div>
        <div className="routesDiv">
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/favourite" element={<Favourites />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
