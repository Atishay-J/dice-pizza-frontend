import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { FilterRadioBtns } from "../index";
import React, { useState } from "react";

import BorderAllOutlinedIcon from "@material-ui/icons/BorderAllOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import SwapVertSharpIcon from "@material-ui/icons/SwapVertSharp";

export default function TopNav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  let location = useLocation();

  let dropDownClass = `mobileDropDownList ${
    dropdownVisible && "showDropdownList"
  }`;

  return (
    <div className="topNavContainer">
      <NavLink end to="/">
        <div className="logoContainer">
          <div className="logoIcon">
            <div className="logoItemWrapper">
              <div className="logoItem">D</div>

              <div className="logoItem">I</div>
            </div>
            <div className="logoItemWrapper">
              <div className="logoItem">C</div>

              <div className="logoItem">E</div>
            </div>
          </div>
          <h3 className="logoText">Pizza</h3>
        </div>
      </NavLink>

      {/* TOP NAV SORT FILTER */}

      {location.pathname === "/" && (
        <div className="mobileFilterWrapper">
          <div className="mobileDropdownContainer">
            <button
              className="mobileDropDownBtn"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <SwapVertSharpIcon /> Sort
            </button>
            <div className={dropDownClass}>
              <FilterRadioBtns />
            </div>
          </div>
        </div>
      )}

      <div className="navLinksContainer">
        <NavLink
          end
          to="/"
          activeClassName="selectedNavItem"
          className="navItem"
        >
          {/* <BorderAllOutlinedIcon
            classes={{ root: "navIcons" }}
            style={{
              transform: "rotateZ(-15deg)",
            }}
          /> */}
          Dice
        </NavLink>

        <NavLink
          end
          to="/cart"
          activeClassName="selectedNavItem"
          className="navItem"
        >
          {/* <LocalMallOutlinedIcon classes={{ root: "navIcons" }} /> */}
          Cart
        </NavLink>

        <NavLink
          end
          to="/favourite"
          activeClassName="selectedNavItem"
          className="navItem"
        >
          {/* <FavoriteBorderOutlinedIcon classes={{ root: "navIcons" }} /> */}
          Favourites
        </NavLink>

        <NavLink
          end
          to="/account"
          activeClassName="selectedNavItem"
          className="navItem"
        >
          {/* <PersonOutlineOutlinedIcon classes={{ root: "navIcons" }} /> */}
          Account
        </NavLink>
      </div>
    </div>
  );
}
