import "./account.css";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import { useAuth } from "../Context/AuthContext";
const LoggedInOptions = () => {
  const { authState, authDispatch } = useAuth();
  return (
    <div className="loggedInOptionsContainer">
      <div
        className="loginOptionListContainer flex-cont align-center space-around"
        onClick={() => authDispatch({ type: "LOGOUT" })}
      >
        <h1 className="loginOptionsTitle">Logout</h1>
        <ExitToAppSharpIcon />
      </div>
    </div>
  );
};
export default LoggedInOptions;
