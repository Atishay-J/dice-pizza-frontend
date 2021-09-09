import "./favourites.css";
import { useAuth } from "../Context/AuthContext";
import ShowFavourites from "./ShowFavourites";
import AskForSignIn from "./AskForSignIn";

export default function Favourites() {
  const { authState } = useAuth();

  return (
    <>{authState.isUserLoggedIn ? <ShowFavourites /> : <AskForSignIn />}</>
  );
}
