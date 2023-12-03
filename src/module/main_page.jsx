import React from "react";
import Navbar from "../components/navbar";
import HomePage from "../components/homePage";
import Section1 from "../components/pages/section1";
import Section2 from "../components/pages/section2";
import Section3 from "../components/pages/section3";
import Section4 from "../components/pages/section4";
import Card1 from "../components/cards/card1";
import Footer from "../components/footer";

const MainPage = () => {
  return (
    <>
      <div className="mx-lg-5 px-lg-5 mx-2">
        <Navbar />
        <HomePage />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Card1 />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
