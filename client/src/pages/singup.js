import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../comp/header";
import Footer from "../comp/Footer";
// import '../index.css'
import Axios from 'axios';
import { useEffect, useState } from "react";
import '../comp/login.css';
const SingUp=()=>{

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");

  



  useEffect(() => {
    Axios.get("http://localhost:3002/users").then((res) => {
    setUsers(res.data)
    
    });
  }, [users]);

  const createUser = (e) => {
    e.preventDefault();
      alert('crteate Users')
    Axios.post("http://localhost:3002/singup",{
      email:email,
      type: type,
      password:password
    })
    .then((res) => {
      setUsers(res.data)
    });
  };


  return(
    <>
      <Helmet>
        <title>SingUp Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <div className="login">
          <br/>
        {/* <form action="" >
          <h1 className="p-create">Create Users</h1>
          <input type="text"  placeholder="Email" onChange={e=>{setEmail(e.target.value)}} /> <br />
          <input type="text" placeholder="Type" onChange={e=>{setType(e.target.value)}}/> <br />
          <input type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/> <br />
          <button type="submit" onClick={createUser}>Sing Up</button>
      
        </form> */}


<img
          className="d"
          src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"
          alt="DNA logo"
        />
        <form action="">
        <h1 className="p-create">Create Users</h1>
          <br />
          <label for="">Full name</label><br />
      <input type="text" placeholder="Enter your full name" id="fullname" name="fullname" onChange={e=>{setType(e.target.value)}}/>
      <br/>
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
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            onChange={e=>{setPassword(e.target.value)}}
          />
          <br />
          <input type="submit" defaultValue="Login" onClick={createUser} />
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
            <p>I'm have an account?</p>
            <p>
            <Link to="/singin">Login</Link>
            
            </p>
          </div>
        </form>
        <p>©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED.</p>
      
      <Footer />

      </div>

      
      


      
    </>
  );
}

export default SingUp;