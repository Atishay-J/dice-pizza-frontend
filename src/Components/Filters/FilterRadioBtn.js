import React, { useState } from "react";
import { useFilter } from "../index";
import "./filter.css";

export default function FilterRadioBtns() {
  const { dispatch } = useFilter();

  const [isChecked, setIsChecked] = useState({
    sortByPrice: null,
    sortByRatings: null,
    sortByRelevance: "relevance",
  });

  const handleChange = (event) => {
    switch (event.target.name) {
      case "sortByPrice":
        setIsChecked({
          ...isChecked,
          sortByPrice: event.target.value,
          sortByRelevance: false,
        });
        return dispatch({
          type: event.target.name,
          payload: event.target.value,
        });

      case "sortByRatings":
        setIsChecked({
          ...isChecked,
          sortByRatings: event.target.value,
          sortByRelevance: false,
        });
        return dispatch({
          type: event.target.name,
          payload: event.target.value,
        });

      case "sortByRelevance":
        setIsChecked({
          ...isChecked,
          sortByRelevance: event.target.value,
          sortByRatings: false,
          sortByPrice: false,
        });
        return dispatch({
          type: event.target.name,
          payload: event.target.value,
        });

      default:
        return null;
    }
  };
  return (
    <>
      <div className="filterRadioContainer">
        {/* Sort By Relevance */}

        {/* <div className="sortByWrapper"> */}
        <label className="filterRadioBtnLabel">
          <input
            type="radio"
            className="filterRadioBtnInput"
            name="sortByRelevance"
            value="relevance"
            checked={isChecked.sortByRelevance === "relevance"}
            onChange={(event) => {
              handleChange(event);
            }}
          />
          Relevance
        </label>
        {/* </div> */}

        {/* Sort By Price */}

        <div className="sortByWrapper">
          <span className="sortName"> Price </span>
          <label className="filterRadioBtnLabel">
            <input
              type="radio"
              className="filterRadioBtnInput"
              name="sortByPrice"
              value="priceLowToHigh"
              checked={isChecked.sortByPrice === "priceLowToHigh"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            Low to High
          </label>
          <label className="filterRadioBtnLabel">
            <input
              type="radio"
              className="filterRadioBtnInput"
              name="sortByPrice"
              value="priceHighToLow"
              checked={isChecked.sortByPrice === "priceHighToLow"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            High to Low
          </label>
        </div>

        {/* Sort By Ratings */}

        <div className="sortByWrapper">
          <span className="sortName"> Ratings</span>
          <label className="filterRadioBtnLabel">
            <input
              type="radio"
              className="filterRadioBtnInput"
              name="sortByRatings"
              value="ratingsHighToLow"
              checked={isChecked.sortByRatings === "ratingsHighToLow"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            High to Low
          </label>
          <label className="filterRadioBtnLabel">
            <input
              type="radio"
              className="filterRadioBtnInput"
              name="sortByRatings"
              value="ratingsLowToHigh"
              checked={isChecked.sortByRatings === "ratingsLowToHigh"}
              onChange={(event) => {
                handleChange(event);
              }}
            />
            Low To High
          </label>
        </div>
        <br />
      </div>
    </>
  );
}
