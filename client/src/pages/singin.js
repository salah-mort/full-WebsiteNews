import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import Header from "../comp/header";
import Footer from "../comp/Footer";
import Axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import '../comp/login.css';

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    Axios.post("http://localhost:3002/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        alert("succful Login");
        // Save the token in local storage
        localStorage.setItem("token", res.data.token);

        // Redirect the user to the profile page
        window.location.href = "./Profile";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <div className="login">
        <br />
        <img
          className="d"
          src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"
          alt="DNA logo"
        />
        <form action="">
          <h1>Login Here </h1>
          <br />
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <br />
          <label htmlFor="">
            Password
            <div>
              <a
                href="https://sso.masaischool.com/forgot-password/"
                target="_blank"
              >
                <div>Forgot password?</div>
              </a>
            </div>{" "}
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <br />
          <br />
          <input type="submit" defaultValue="Login" onClick={signIn} />
          <button>
            <div>
              <img
                src="https://sso.masaischool.com/google.svg"
                alt="google logo"
              />
            </div>
            <div>CONTINUE WITH GOOGLE</div>
          </button>
          <div>
            <p>Don't have an account?</p>
            <p>
              
              <Link to="/singup">Sign Up</Link>
              
            </p>
          
          </div>
        </form>
        <p>©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED.</p>
        <Footer />
      
      </div>

</>

    
    
  );
};

export default SingIn;
