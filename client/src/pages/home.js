import React from "react";

import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Helmet } from "react-helmet-async";
import MainContent from "../comp/MainContent";
import MainHome from "../comp/MainHome";

const Home = () => {
  return (
    <>
  

      <Header />
  
      <MainContent/>

      <Footer />
    </>
  );
};

export default Home;
