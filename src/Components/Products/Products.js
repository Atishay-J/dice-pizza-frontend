import { useFilter } from "../Context/FilterContext";
import React, { useState } from "react";

import {
  ProductCard,
  useCart,
  FilterToggleBtn,
  FilterRadioBtns,
  useProducts,
} from "../index";
import "./products.css";

import SwapVertSharpIcon from "@material-ui/icons/SwapVertSharp";
import SkeletonCard from "../Cards/SkeletonCard";

export default function Products() {
  const value = useCart();
  const { apiProductData } = useProducts();
  const { state } = useFilter();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  let dropDownClass = `dropDownList ${dropdownVisible && "showDropdownList"}`;

  const toggleVeg = (productsData, isVeg) => {
    if (isVeg) {
      return [...productsData].filter((product) => product.isVeg === true);
    }
    return productsData;
  };

  const sortByPrices = (products, sortBy) => {
    switch (sortBy) {
      case "priceLowToHigh":
        return [...products].sort((a, b) => a["price"] - b["price"]);

      case "priceHighToLow":
        return [...products].sort((a, b) => b["price"] - a["price"]);

      default:
        return products;
    }
  };

  const sortByRatings = (sortedByPrice, sortBy) => {
    switch (sortBy) {
      case "ratingsHighToLow":
        return sortedByPrice.sort((a, b) => b["rating"] - a["rating"]);

      case "ratingsLowToHigh":
        return sortedByPrice.sort((a, b) => a["rating"] - b["rating"]);

      default:
        return sortedByPrice;
    }
  };

  const sortByRelevances = (sortedData, sortBy) => {
    if (sortBy === "relevance") {
      return [...sortedData];
    }
    return sortedData;
  };

  let sortedByIsVeg = toggleVeg(apiProductData, state.isVeg);
  let sortedByPrice = sortByPrices(sortedByIsVeg, state.sortByPrice);
  let sortedByRatings = sortByRatings(sortedByPrice, state.sortByRating);
  let sortedByRelevance = sortByRelevances(
    sortedByRatings,
    state.sortByRelevance
  );

  return (
    <>
      <div className="productsMainWrapper">
        <div className="productsBannerWrapper">
          <div className="productBannerImageWrapper">
            <img
              className="productBannerImage"
              src="https://bit.ly/2QBqSLh"
              alt="Pizza Banner"
            />
          </div>
          <div className="productBannerImageWrapper">
            <img
              className="productBannerImage"
              src="https://bit.ly/3aO2zjW"
              alt="Pizza Banner"
            />
          </div>
          <div className="productBannerImageWrapper">
            <img
              className="productBannerImage"
              src="https://bit.ly/2SiluNu"
              alt="Pizza Banner"
            />
          </div>
        </div>

        <div className="productFilterContainer">
          <div className="filterWrapper">
            <div className="dropdownContainer">
              <button
                className="dropDownBtn"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <SwapVertSharpIcon /> Sort
              </button>
              <div className={dropDownClass}>
                <FilterRadioBtns />
              </div>
            </div>

            <div className="mobileToggleContainer">
              <FilterToggleBtn />
            </div>
          </div>
        </div>
        <div className="productsWrapper">
          {/* <h1>I am products</h1> */}

          {sortedByRelevance.length <= 0 && <SkeletonCard />}

          {sortedByRelevance.length > 0 &&
            sortedByRelevance.map((item) => (
              <li className="listStyleNone productList" key={item._id}>
                <ProductCard
                  item={item}
                  reducerState={value.state}
                  dispatch={value.dispatch}
                />
              </li>
            ))}
        </div>
      </div>
    </>
  );
}
