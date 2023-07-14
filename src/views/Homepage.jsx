import React from "react";
import Header from "../components/Navigation/Header";
import Hamburger from "../components/Navigation/Hamburger";
import MainPageSlider from "../components/MainPageSlider";
import TextualPictureFrame from "../components/TextualPictureFrame";
import InPageNav from "../components/InPageNav";
import bag from '../assets/givenchy.jpeg';
import sandals from '../assets/sandals.jpeg';
import coats from '../assets/jacket.jpeg';
import Footer from "../components/Navigation/Footer";

export default function Homepage() {
  const color = "white"; // Define the color value

  return (
    <div>
      <div>
        <Header  color={"white"} />
        <Hamburger color={color} />

        <MainPageSlider />
       <div>
         <TextualPictureFrame img={bag} title={"Bag"} />
       </div>
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
