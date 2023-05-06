import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../utils';

const SignUp = () => {
  const [{ username, password }, setUserInput] = useState({
    username: '',
    password: ''
  });

  const [displayMsg, setDisplayMsg] = useState({ status: false, msg: '' });

  const signUpUser = async () => {
    if (username && password) {
      await axiosInstance
        .post('/signup', {
          username,
          password
        })
        .then((res) => {
          setDisplayMsg({ status: true, msg: 'Account succesfully created' });
        })
        .catch((err) => {
          console.log('Error while creating account', err);
          setDisplayMsg({ status: true, msg: err.response.data });
        });
    }
  };

  return (
    <div className="signupContainer container flex-column align-center">
      <h1 className="heading-l">Signup</h1>

      <div className="signupFormWrapper">
        {displayMsg.status && (
          <div className="signUpMsgContainer mt15">
            <h3 className="signupMsg">{displayMsg.msg}</h3>
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
              value={username}
              onChange={(e) =>
                setUserInput({ password, username: e.target.value })
              }
            />
            <input
              className="simpleText-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) =>
                setUserInput({ username, password: e.target.value })
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
          Already have an account,{' '}
          <span
            style={{ textDecoration: 'underline' }}
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
