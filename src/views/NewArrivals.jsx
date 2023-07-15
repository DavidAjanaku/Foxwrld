import React from "react";
import Header from "../components/Navigation/Header";
import Hamburger from "../components/Navigation/Hamburger";
import Accordion from "../components/Accordion/Accordion";
import MobileFilterModal from "../components/Filter/MobileFilterModal";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductsDetails/ProductCard";
import sandals from '../assets/sandals.jpeg';
import coats from '../assets/jacket.jpeg';
import Pagination from "../components/Navigation/Pagination";
import Footer from "../components/Navigation/Footer.jsx"
import pjamas1 from '../assets/pjamas1.jpeg';
import pjamas2 from '../assets/pjamas2.jpeg';
import jacket1 from '../assets/jacket1.jpeg';
import jacket2 from '../assets/jacket2.jpeg';






export default function NewArrivals(props) {
  const color = "black"; // Define the color value

  return (
    <div>
      <div className="h-14">
        <Header  color={"black"} />
        <Hamburger />
      </div>
      <main>
        <div>
          <div className="pt-14 pb-12 text-center uppercase">
            Mens New Arrival
          </div>
          <div>
            <div className="hidden md:block">

<Accordion/>
            </div>
<MobileFilterModal/>

{/* <FilterSection/> */}
<div className="pt-14 pb-12 text-center  text-sm">
            <span className="text-sm">233 results</span>
          </div>
          </div>
        </div>
        <div >
        <div className="flex flex-wrap justify-center">
          <Link to="/ProductPage">
          <ProductCard image={sandals} alternateImage={coats} title={"Oversized Cat-eye Frame Sunglasses "} color={"3"}  category={"New In"}/>

          </Link>
          <ProductCard image={jacket1} alternateImage={jacket2} title={"Varsanol Casual Leather"} color={"3"}  category={"New In"}/>
          <ProductCard image={sandals} alternateImage={coats} title={"Heyy"} color={"3"}  category={"New In"}/>
          <ProductCard image={sandals} alternateImage={coats} title={"Heyy"} color={"3"}  category={"New In"}/>
          <ProductCard image={pjamas1} alternateImage={pjamas2} title={"Pyjamas"} color={"2"}  category={"New In"}/>
          <ProductCard image={sandals} alternateImage={coats} title={"Heyy"} color={"3"}  category={"New In"}/>

          </div>
          <Pagination/>
        </div>
      </main>
      <Footer/>
    </div>

  );
}
