import { NavLink } from "react-router-dom";
import "./Navbar.css";
import BorderAllOutlinedIcon from "@material-ui/icons/BorderAllOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink
          end
          to="/"
          activeClassName="selectedNavItem"
          className="navItem"
        >
          <BorderAllOutlinedIcon
            classes={{ root: "navIcons" }}
            style={{
              transform: "rotateZ(-15deg)",
            }}
          />
          Dice
        </NavLink>

        <NavLink
          end
          to="/cart"
          activeClassName="selectedNavItem"
          className="navItem"
        >
          <LocalMallOutlinedIcon classes={{ root: "navIcons" }} />
          Cart
        </NavLink>

        <NavLink
          end
          to="/favourite"
          activeClassName="selectedNavItem"
          className="navItem"
        >
          <FavoriteBorderOutlinedIcon classes={{ root: "navIcons" }} />
          Favourites
        </NavLink>

        <NavLink
          end
          to="/account"
          activeClassName="selectedNavItem"
          className="navItem"
        >
          <PersonOutlineOutlinedIcon classes={{ root: "navIcons" }} />
          Account
        </NavLink>
      </nav>
    </>
  );
}
