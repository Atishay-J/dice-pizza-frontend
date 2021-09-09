import "./account.css";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import LocationOnSharpIcon from "@material-ui/icons/LocationOnSharp";
import DoneAllSharpIcon from "@material-ui/icons/DoneAllSharp";
import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router";
const LoggedInOptions = () => {
  const { authState, authDispatch } = useAuth();
  return (
    <div className="loggedInOptionsContainer">
      <div
        className="loginOptionListContainer flex-cont align-center "
        onClick={() => authDispatch({ type: "LOGOUT" })}
      >
        <ExitToAppSharpIcon />
        <h1 className="loginOptionsTitle">Logout</h1>
      </div>

      <div
        className="loginOptionListContainer flex-cont align-center "
        onClick={() => <Navigate to="address"></Navigate>}
      >
        <LocationOnSharpIcon />
        <h1 className="loginOptionsTitle">Change Address</h1>
      </div>
      <div
        className="loginOptionListContainer flex-cont align-center "
        onClick={() => <Navigate to="delivered"></Navigate>}
      >
        <DoneAllSharpIcon />
        <h1 className="loginOptionsTitle">Delivered Items</h1>
      </div>
      <div
        className="loginOptionListContainer flex-cont align-center"
        onClick={() => <Navigate to="setttings"></Navigate>}
      >
        <SettingsSharpIcon />
        <h1 className="loginOptionsTitle">Settings</h1>
      </div>
    </div>
  );
};
export default LoggedInOptions;
