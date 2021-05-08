import { createContext, useContext, useReducer } from "react";

export const authContext = createContext();

const initState = {
  isUserLoggedIn: localStorage.getItem("isUserLoggedIn") ? true : false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isUserLoggedIn", "true");
      return { ...state, isUserLoggedIn: true };

    case "LOGOUT":
      localStorage.removeItem("isUserLoggedIn");
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
