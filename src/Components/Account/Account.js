import { useAuth } from "../Context/AuthContext";
import "./account.css";
import LoggedInOptions from "./LoggedInUserOptions";
import SignIn from "./SignIn";

const Account = () => {
  const { authState } = useAuth();

  return (
    <div className="accountContainer container">
      {authState.isUserLoggedIn ? <LoggedInOptions /> : <SignIn />}
    </div>
  );
};
export default Account;
