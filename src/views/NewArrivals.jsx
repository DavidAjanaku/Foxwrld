import React from "react";
import Header from "../components/Navigation/Header";
import Hamburger from "../components/Navigation/Hamburger";
import Accordion from "../components/Accordion/Accordion";

import ProductCard from "../components/ProductsDetails/ProductCard";
import sandals from '../assets/sandals.jpeg';
import coats from '../assets/jacket.jpeg';
import Pagination from "../components/Navigation/Pagination";




export default function NewArrivals(props) {
  const color = "black"; // Define the color value

  return (
    <div>
      <div className="h-14">
        <Header />
        <Hamburger color={color} />
      </div>
      <main>
        <div>
          <div className="pt-14 pb-12 text-center uppercase">
            Mens New Arrival
          </div>
          <div>
<Accordion/>

{/* <FilterSection/> */}
<div className="pt-14 pb-12 text-center  text-sm">
            <span className="text-sm">233 results</span>
          </div>
          </div>
        </div>
        <div >
        <div className="flex flex-wrap justify-center">
          <ProductCard image={sandals} alternateImage={coats} title={"Oversized Cat-eye Frame Sunglasses "} color={"3"}  category={"New In"}/>
          <ProductCard image={sandals} alternateImage={coats} title={"Heyy"} color={"3"}  category={"New In"}/>
          <ProductCard image={sandals} alternateImage={coats} title={"Heyy"} color={"3"}  category={"New In"}/>
          <ProductCard image={sandals} alternateImage={coats} title={"Heyy"} color={"3"}  category={"New In"}/>
          <ProductCard image={sandals} alternateImage={coats} title={"Heyy"} color={"3"}  category={"New In"}/>
          <ProductCard image={sandals} alternateImage={coats} title={"Heyy"} color={"3"}  category={"New In"}/>

          </div>
          <Pagination/>
        </div>
      </main>
    </div>
  );
}
