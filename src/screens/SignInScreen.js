import { async } from "@firebase/util";
import userEvent from "@testing-library/user-event";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();

    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(authUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const signin = async (e) => {
    e.preventDefault();

    try {
      const authUser = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(authUser);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="signinScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signin}>
          Sign In{" "}
        </button>

        <h4>
          <span className="signinScreen__gray">New to Netflix?</span>
          <span className="signinScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
