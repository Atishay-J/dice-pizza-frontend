import "./App.css";

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
} from "./Components";

function App() {
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
