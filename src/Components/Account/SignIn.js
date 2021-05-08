import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const SignIn = () => {
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const [displayMsg, setDisplayMsg] = useState(false);

  const { authState, authDispatch } = useAuth();

  let Navigate = useNavigate();

  useEffect(() => {
    console.log("Usee effect called", authState.isUserLoggedIn);
    authState.isUserLoggedIn && Navigate("/");
  }, [Navigate, authState]);

  const signInUser = async () => {
    await axios
      .post("https://dicepizza.herokuapp.com/login", {
        username: userInput.username,
        password: userInput.password,
      })
      .then((res) => {
        console.log("Logged In");
        authDispatch({ type: "LOGIN" });
      })
      .catch((err) => {
        console.log("Sign Up error response", err);
        setDisplayMsg(true);
      });
  };

  return (
    <div className="signInContainer container  flex-column align-center">
      <h1 className="heading-l">SignIn</h1>

      {displayMsg && <h3>Wrong Username or password</h3>}

      <form
        className="flex-column align-center signInForm mt15"
        action="#"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="inputsWrapper flex-column">
          <input
            className="simpleText-input"
            type="text"
            placeholder="username"
            value={userInput.username}
            onChange={(e) =>
              setUserInput({ ...userInput, username: e.target.value })
            }
          />
          <input
            className="simpleText-input"
            type="password"
            placeholder="password"
            value={userInput.password}
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
          />
        </div>
        <input
          className="btn success submitBtn"
          type="submit"
          value="SignIn"
          onClick={signInUser}
        />
      </form>

      <p className="signInPara mt10">
        Don't have an accout?{" "}
        <Link to="/signup">
          <span className="formLink"> SignUp</span>
        </Link>
      </p>
    </div>
  );
};
export default SignIn;