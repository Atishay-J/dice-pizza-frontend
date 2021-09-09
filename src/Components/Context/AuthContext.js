import { createContext, useContext, useReducer } from "react";

export const authContext = createContext();

const initState = {
  isUserLoggedIn: localStorage.getItem("userId") ? true : false,
  userData: "",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      let userId = action.payload._id;

      localStorage.setItem("userId", userId);
      return { userData: action.payload, isUserLoggedIn: true };

    case "LOGOUT":
      localStorage.removeItem("userId");
      return { ...state, isUserLoggedIn: false };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initState);

  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
