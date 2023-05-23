import React from "react";

import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainSport from "../comp/MainSport";
import { Helmet } from "react-helmet-async";

const Sport = () => {
  return (
    <>
      <Helmet>
        <title>Sport Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <MainSport />
      <Footer />
    </>
  );
};

export default Sport;
