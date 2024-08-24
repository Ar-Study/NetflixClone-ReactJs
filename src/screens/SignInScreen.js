import userEvent from "@testing-library/user-event";
import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signinScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit">Sign In </button>

        <h4>
          <span className="signinScreen__gray">New to Netflix?</span>
          <span className="signinScreen__link">Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
