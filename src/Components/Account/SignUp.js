import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  const [displayMsg, setDisplayMsg] = useState(false);

  const signUpUser = async () => {
    await axios
      .post("https://dicepizza.herokuapp.com/signup", {
        username: userInput.username,
        password: userInput.password,
      })
      .then((res) => console.log("Account Created", res), setDisplayMsg(true))
      .catch((err) => console.log("Error while creating account"));
  };

  return (
    <div className="signupContainer container flex-column align-center">
      <h1 className="heading-l">Signup</h1>

      <div className="signupFormWrapper">
        {displayMsg && (
          <div className="signUpMsgContainer mt15">
            <h3 className="signupMsg">
              Account succesfully created,{" "}
              <span
                style={{ textDecoration: "underline" }}
                className="signupMsgLink "
              >
                <Link to="/signin">SignIn</Link>
              </span>
            </h3>
          </div>
        )}

        <form
          action="#"
          className="flex-column align-center signInForm mt15"
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
            value="Signup"
            onClick={signUpUser}
          />
        </form>
        <h3 className="signupMsg">
          Already have an account,{" "}
          <span
            style={{ textDecoration: "underline" }}
            className="signupMsgLink "
          >
            <Link to="/signin">SignIn</Link>
          </span>
        </h3>
      </div>
    </div>
  );
};
export default SignUp;
