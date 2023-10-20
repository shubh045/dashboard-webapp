"use client";

import "@styles/signin.css";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillApple,
} from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import { redirect } from "next/navigation";

const SignIn = () => {
  const session = useSession();
  if (session.status === "authenticated") {
    redirect("/dashboard");
  }

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container">
        <div className="left-part">
          <p id="logo">LOGO</p>
          <h1 id="board">Board.</h1>
          <div className="socials">
            <p>
              <AiFillGithub className="icon1" />
            </p>
            <p>
              <AiFillTwitterCircle className="icon2" />
            </p>
            <p>
              <AiFillLinkedin className="icon3" />
            </p>
            <p>
              <BiLogoDiscord className="icon4" />
            </p>
          </div>
        </div>
        <div className="right-part">
          <h1>Sign In</h1>
          <p id="signin-text">Sign in to your account</p>
          <div className="login-buttons">
            {session.status === "unauthenticated" && (
              <button
                className="social-btn"
                onClick={() => {
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/dashboard",
                  });
                }}
              >
                <span className="icon">
                  <FcGoogle className="icn" />
                </span>
                <p className="icon-text">Sign in with Google</p>
              </button>
            ) }
            <button className="social-btn" id="apple-button">
              <span className="icon" id="apple-icon">
                <AiFillApple className="icn" id="apple" />
              </span>
              <p className="icon-text">Sign in with Apple</p>
            </button>
          </div>
          <div className="card">
            <form className="login-form">
              <div className="card-container">
                <div className="input-field">
                  <label htmlFor="email" className="label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="input"
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="input"
                  />
                </div>
                <a href="#" className="f-pass">
                  Forgot password?
                </a>
                <button className="signin-btn">Sign In</button>
              </div>
            </form>
            <p id="registeration">
              Don't have an account?{" "}
              <a href="#" id="register-btn">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
