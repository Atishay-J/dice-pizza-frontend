import "./favourites.css";
import VpnKeySharpIcon from "@material-ui/icons/VpnKeySharp";
import { Link } from "react-router-dom";

export default function Favourites() {
  return (
    <div className="askForSignInContainer container">
      <div className="emptyCartWrapper">
        <div className="emptyCartIconWrapper">
          <VpnKeySharpIcon fontSize="inherit" color="inherit" />
        </div>
        <h2 className="emptyCartHeading">Login to see your Favourites</h2>
        <p className="emptyCartPara" style={{ textDecoration: "underline" }}>
          <Link to="/signin">SignIn</Link>
        </p>
      </div>
    </div>
  );
}
