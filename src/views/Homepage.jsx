import React from "react";
import Header from "../components/Header";
import Hamburger from "../components/Hamburger";
import MainPage from "../components/MainPage";
import MainPageSlider from "../components/MainPageSlider";
import TextualPictureFrame from "../components/TextualPictureFrame";
import InPageNav from "../components/InPageNav";
import bag from '../assets/gucci.jpeg';
import sandals from '../assets/sandals.jpeg';
import coats from '../assets/coats.jpeg';
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <div>
        <Header />
        <Hamburger />
        {/* <MainPageSlider /> */}
        <TextualPictureFrame img={bag} title={"Bag"} />
        <InPageNav/>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className="flex-grow ">
          <TextualPictureFrame img={sandals} title={"Sandals & Slides"} />
        </div>
        <div className="flex-grow ">
          <TextualPictureFrame img={coats} title={"Coats & Jackets"} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
