import { createContext, useContext, useReducer } from "react";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ISVEG":
      return { ...state, isVeg: action.payload.checked };
    case "sortByPrice":
      return { ...state, sortByPrice: action.payload, sortByRelevance: null };
    case "sortByRatings":
      return { ...state, sortByRating: action.payload, sortByRelevance: null };
    case "sortByRelevance":
      return {
        ...state,
        sortByRelevance: action.payload,
        sortByPrice: null,
        sortByRating: null,
      };
    default:
      return state;
  }
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    sortByPrice: null,
    sortByRating: null,
    sortByRelevance: null,
    isVeg: false,
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
