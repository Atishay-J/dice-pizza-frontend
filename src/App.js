import "./App.css";

import { Routes, Route } from "react-router-dom";
import {
  Products,
  Cart,
  Favourites,
  Navbar,
  Error,
  TopNav,
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
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
