import React, { useState } from "react";
import Header from "../Navigation/Header";
import Hamburger from "../Navigation/Hamburger";
import pyjamas from "../../assets/pjamas1.jpeg";
import jacket from "../../assets/jacket1.jpeg";
import jacke2 from "../../assets/jacket2.jpeg";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Header />
      <Hamburger color={"black"} />

      <div className="pt-36">
        <div className="product-details flex">
          <div className="w-2/4 h-52 justify-center">
            <img
              src={pyjamas}
              alt=""
              className={`product-image cursor-crosshair ${
                activeIndex === 0 ? "active" : ""
              }`}
            />
            <img
              src={jacket}
              alt=""
              className={`product-image cursor-crosshair ${
                activeIndex === 1 ? "active" : ""
              }`}
            />
            <img
              src={jacke2}
              alt=""
              className={`product-image cursor-crosshair ${
                activeIndex === 2 ? "active" : ""
              }`}
            />
          </div>
          <div className="w-full">
            <div>
              <div className="product-info py-6 border-b-2">
                <div className="product-info-panel pb-10">
                  <ul className="breadcumbs flex">
                    <li className="mr-2">
                      <Link>Women</Link>
                    </li>
                    <li className="mr-2">
                      <Link>New Arrivals</Link>
                    </li>
                    <li className="mr-2">
                      <Link>New in</Link>
                    </li>
                  </ul>
                </div>
                <h1 className="product-info-panel-title">
                  <span className="mr-6">Mini Frances Bag</span>
                  <span className="product-info-panel__price">$2000</span>
                </h1>
              </div>
              <div className="color-picker py-6">
                <div className="color-picker__info">
                  <span className="color-picker__text">Color:</span>
                  <div className="color-picker__label">Optic White</div>
                </div>
                <div className="color-picker__swatch--container flex">
                  <div
                    className="swatch w-8 h-8 bg-cover bg-center"
                    style={{ backgroundImage: `url(${jacke2})` }}
                  >
                    <Link className="rounded-full h-8 w-8">
                      <span className="swatch__color"></span>
                    </Link>
                  </div>
                  <div
                    className="swatch w-8 h-8 bg-cover bg-center"
                    style={{ backgroundImage: `url(${jacket})` }}
                  >
                    <Link className="rounded-full h-8 w-8">
                      <span className="swatch__color"></span>
                    </Link>
                  </div>
                  <div
                    className="swatch w-8 h-8 bg-cover bg-center"
                    style={{ backgroundImage: `url(${pyjamas})` }}
                  >
                    <Link className="rounded-full h-8 w-8">
                      <span className="swatch__color"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="product-dimensions">
                <div className="product-dimensions-header">
                  <h2 className="product-dimensions__header-title">
                    Product details
                  </h2>
                </div>
                <div className="product-dimensions-content">
              <div className="product-dimensions-content-wrapper">
                <div className="product-dimensions-content-description">
                  <div className="description text">
                    <p>A simple, structured tote in grainy leather, punctuated with the Thomas Burberry Monogram.</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
