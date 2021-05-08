import { useAuth } from "../Context/AuthContext";
import "./account.css";
import LoggedInOptions from "./LoggedInUserOptions";

import SignUp from "./SignUp";

const Account = () => {
  const { authState } = useAuth();

  console.log("AUttth", authState.isUserLoggedIn);
  return (
    <div className="accountContainer container">
      {authState.isUserLoggedIn ? <LoggedInOptions /> : <SignUp />}
    </div>
  );
};
export default Account;
