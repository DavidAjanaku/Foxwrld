import React, { useState } from "react";
import Header from "../Navigation/Header";
import Hamburger from "../Navigation/Hamburger";
import pyjamas from "../../assets/pjamas1.jpeg";
import jacket from "../../assets/jacket1.jpeg";
import jacke2 from "../../assets/jacket2.jpeg";
import { Link } from "react-router-dom";

export default function ProductDetails({ updateCartCount }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handleAddToCart = () => {
    updateCartCount((prevCount) => prevCount + 1);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const images = [
    { src: pyjamas, alt: "Pyjamas" },
    { src: jacket, alt: "Jacket" },
    { src: jacke2, alt: "Jacke2" },
  ];

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Header color="black" />
      <Hamburger color={"black"} />

      <div className="pt-36">
        <div className="product-details flex flex-wrap">
          <div className="w-full lg:w-2/4 h-full md:h-52 relative justify-center slideshow">
            <button
              className="prev-arrow absolute left-10 top-32 md:top-2/3"
              onClick={handlePrevSlide}
            >
              <span className="text-3xl text-slate-300">&lt;</span>
            </button>
            <button
              className="next-arrow absolute top-32 md:top-2/3 right-10"
              onClick={handleNextSlide}
            >
              <span className="text-3xl text-slate-300">&gt;</span>
            </button>
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className="product-image cursor-crosshair h-[70vh] w-full object-contain"
            />
          </div>
          <div className="w-full lg:w-2/4 details px-8" >
            <div>
              <div className="product-info py-6 border-b-2">
                <div className="product-info-panel pb-10">
                  <ul className="breadcumbs flex">
                    <li className="mr-2">
                      <Link>Women</Link>
                    </li>
                    <span className="divider mx-2">|</span>
                    <li className="mr-2">
                      <Link>New Arrivals</Link>
                    </li>
                    <span className="divider mx-2">|</span>
                    <li className="mr-2 underline-offset-4 underline">
                      <Link>New in</Link>
                    </li>
                  </ul>
                </div>
                <h1 className="product-info-panel-title flex flex-col">
                  <span className="mr-6 fontBold">Mini Frances Bag</span>
                  <span className="product-info-panel__price fontBold text-[12px]">
                    $2000
                  </span>
                </h1>
              </div>
              <div className="color-picker py-8 border-b-2">
                <div className="color-picker__info flex">
                  <span className="color-picker__text fontBold">Color:</span>
                  <div className="color-picker__label">Optic White</div>
                </div>
                <div className="color-picker__swatch--container flex">
                  <div
                    className="swatch w-8 h-8 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${jacke2})` }}
                  >
                    <Link className="rounded-full h-8 w-8">
                      <span className="swatch__color"></span>
                    </Link>
                  </div>
                  <div
                    className="swatch w-8 h-8 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${jacket})` }}
                  >
                    <Link className="rounded-full h-8 w-8">
                      <span className="swatch__color"></span>
                    </Link>
                  </div>
                  <div
                    className="swatch w-8 h-8 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${pyjamas})` }}
                  >
                    <Link className="rounded-full h-8 w-8">
                      <span className="swatch__color"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="product-dimensions border-b-2 py-6">
                <div className="product-dimensions-header">
                  <h2 className="product-dimensions__header-title fontBold">
                    Product details
                  </h2>
                </div>
                <div className="product-dimensions-content">
                  <div className="product-dimensions-content-wrapper">
                    <div className="product-dimensions-content-description">
                      <div className="description text">
                        <p>
                          A simple, structured tote in grainy leather,
                          punctuated with the Thomas Burberry Monogram.
                        </p>
                      </div>
                      <div className="description-feature-text">
                        <ul>
                          <li>27 x 11 x 20cm/10.6 x 4.3 x 7.9in</li>
                          <li>Handle drop: 9cm/3.5in</li>
                          <li>Min. shoulder strap drop: 44.5cm/17.5in</li>
                          <li>Max. shoulder strap drop: 55.5cm/21.9in</li>
                          <li>Outer: 100% calf leather</li>
                          <li>Lining: 100% lambskin</li>
                          <li>Leather top handles</li>
                          <li>Made in Italy</li>
                          <li>Item 80725171</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-sizes py-8">
                <h3 className="fontBold mb-2">Sizes:</h3>
                <div className="size-options flex">
                  <button
                    className={`size-option px-4 py-2 ${
                      selectedSize === "S" ? "ring ring-black" : ""
                    }`}
                    onClick={() => handleSizeSelect("S")}
                  >
                    S
                  </button>
                  <button
                    className={`size-option px-4 py-2 ${
                      selectedSize === "M" ? "ring ring-black" : ""
                    }`}
                    onClick={() => handleSizeSelect("M")}
                  >
                    M
                  </button>
                  <button
                    className={`size-option px-4 py-2 ${
                      selectedSize === "L" ? "ring ring-black" : ""
                    }`}
                    onClick={() => handleSizeSelect("L")}
                  >
                    L
                  </button>
                  <button
                    className={`size-option px-4 py-2 ${
                      selectedSize === "XL" ? "ring ring-black" : ""
                    }`}
                    onClick={() => handleSizeSelect("XL")}
                  >
                    XL
                  </button>
                </div>
              </div>

              <div className="products-action--panel py-8">
                <button
                  className="bg-black hover:bg-slate-900 text-white font-bold py-4 px-4 rounded w-3/4"
                  onClick={handleAddToCart}
                >
                  Add to Shopping Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
