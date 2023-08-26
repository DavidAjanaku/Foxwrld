import React from "react";
import Header from "../components/Navigation/Header";
import Hamburger from "../components/Navigation/Hamburger";
import Accordion from "../components/Accordion/Accordion";
import MobileFilterModal from "../components/Filter/MobileFilterModal";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductsDetails/ProductCard";
import sandals from "../assets/sandals.jpeg";
import coats from "../assets/jacket.jpeg";
import Pagination from "../components/Navigation/Pagination";
import Footer from "../components/Navigation/Footer.jsx";
import pjamas1 from "../assets/pjamas1.jpeg";
import pjamas2 from "../assets/pjamas2.jpeg";
import jacket1 from "../assets/jacket1.jpeg";
import jacket2 from "../assets/jacket2.jpeg";
import productData from "../components/Navigation/ProductDetails.json"

export default function NewArrivals() {
  return (
    <div>
      <div className="h-14">
        <Header color={"black"} />
        <Hamburger  color={"black"}/>
      </div>
      <main>
        <div>
          <div className="pt-14 pb-14 mt-24 mb-24 text-center uppercase fontbold">
            Mens New Arrival
          </div>
          <div>
            <div className="hidden md:block">
              <Accordion />
            </div>
            <MobileFilterModal />

            {/* <FilterSection/> */}
            <div className="pt-14 pb-12 text-center  text-sm">
              <span className="text-[12px]">233 results</span>
            </div>
          </div>
        </div>
        <div>
        <div className="flex flex-wrap justify-center">
            {productData.map((product) => (
              <Link to={`/ProductPage/${product.id}`} key={product.id}>
                <ProductCard
                  image={product.image[0].image} // Use the first image URL from the array
                  alternateImage={product.alternateImage}
                  title={product.title}
                  color={product.color} // You should replace this with the actual color value
                  category={product.categories[0].categories} // Use the first category from the array
                />
              </Link>
            ))}
          </div>
          <Pagination />
        </div>
      </main>
      <Footer />
    </div>
  );
}
