import React, { useState } from 'react';
import { Link } from "react-router-dom";
import HamburgerSlidesPictures from "./HamburgerSlidesPictures";
import womenBag from '../assets/womenBag.jpg';
import trenchCoats from '../assets/trenchcoats.jpg';
import kiddies from '../assets/kiddies.jpg';
import tshirt from '../assets/tshirt.jpg';





function Hamburger() {

  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menuOpen state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="wrapper mobile hidden">
      <nav>
        <Link to="/" className="z-30 font-extrabold  text-3xl">
          <p className="font-mono">Foxwrld</p>
        </Link>

        <input
          type="checkbox"
          id="menu"
          name="menu"
          className="m-menu__checkbox"
        />
        <label className="m-menu__toggle z-30" onClick={toggleMenu} htmlFor="menu">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="arcs"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </label>
        <label className="m-menu__overlay" htmlFor="menu"></label>

        <div  className={`m-menu ${menuOpen ? 'open' : ''}`}>
          <div className="m-menu__header">
            {/* <span>MENU</span> */}
            <label className="m-menu__toggle" htmlFor="menu">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="arcs"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </label>
          </div>
          <ul >
            {/* Gifts Category */}
            <li>
              <label className="a-label__chevron" htmlFor="item-2">
                Gifts
              </label>
              <input
                type="checkbox"
                id="item-2"
                name="item-2"
                className="m-menu__checkbox"
              />
              <div className="m-menu">
                <ul className="mt-12">
                  <div className="m-menu__header">
                    <label className="m-menu__toggle" htmlFor="item-2">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="butt"
                        strokeLinejoin="arcs"
                      >
                        <path d="M19 12H6M12 5l-7 7 7 7" />
                      </svg>
                    </label>
                    <span>Home</span>
                  </div>

                  <li>
                    <label className="a-label__chevron" htmlFor="item-2-3">
                      Women's Gifts
                    </label>
                    <input
                      type="checkbox"
                      id="item-2-3"
                      name="item-2"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-2-3">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Womens Gift </span>
                      </div>
                      <ul>
                        <li>
                          <label>All Gifts</label>
                        </li>
                        <li>
                          <label>Bags New In</label>
                        </li>
                        <li>
                          <label>Personalized Gifts</label>
                        </li>
                        <li>
                          <label>Home & Pet Accessories</label>
                        </li>
                      
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-2-9">
                      Men's Gifts
                    </label>
                    <input
                      type="checkbox"
                      id="item-2-9"
                      name="item-2"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-2-9">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Mens Gift </span>
                      </div>
                      <ul>
                        <li>
                          <label>All Gifts</label>
                        </li>
                        <li>
                          <label>Personalized Gifts</label>
                        </li>
                        <li>
                          <label>Home & Pet Accessories</label>
                        </li>
                    
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-2-8">
                      Children's Gifts
                    </label>
                    <input
                      type="checkbox"
                      id="item-2-8"
                      name="item-2"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-2-8">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Childrens Gift </span>
                      </div>
                      <ul>
                        <li>
                          <label>All Gifts</label>
                        </li>
                        <li>
                          <label>Baby Gifts</label>
                        </li>
                       
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label>Foxwrld Services</label>
                  </li>
                </ul>
              </div>
            </li>

            {/* End of gift category */}

            {/* New in  category*/}
            <li>
              <label className="a-label__chevron" htmlFor="item-3">
                New In
              </label>
              <input
                type="checkbox"
                id="item-3"
                name="item-3"
                className="m-menu__checkbox"
              />
              <div className="m-menu">
                <ul className="mt-12">
                  <div className="m-menu__header">
                    <label className="m-menu__toggle" htmlFor="item-3">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="butt"
                        strokeLinejoin="arcs"
                      >
                        <path d="M19 12H6M12 5l-7 7 7 7" />
                      </svg>
                    </label>
                    <span>Home</span>
                  </div>

                  <li>
                    <label>Womens New in </label>
                  </li>
                  <li>
                    <label>Mens New in </label>
                  </li>
                  <li>
                    <label>Childrens New in </label>
                  </li>
                  <li>
                    <label>Foxwrld Collections</label>
                  </li>
                </ul>
              </div>
            </li>

            {/* End of new in category */}

            {/* Womens Category */}
            <li>
              <label className="a-label__chevron" htmlFor="item-4">
                Women
              </label>
              <input
                type="checkbox"
                id="item-4"
                name="item-4"
                className="m-menu__checkbox"
              />
              <div className="m-menu">
                <ul className="mt-12">
                  <div className="m-menu__header">
                    <label className="m-menu__toggle" htmlFor="item-4">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="butt"
                        strokeLinejoin="arcs"
                      >
                        <path d="M19 12H6M12 5l-7 7 7 7" />
                      </svg>
                    </label>
                    <span>Home</span>
                  </div>

                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-1">
                      New Arrivals
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-1"
                      name="item-4-1"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-1">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-3-6">
                      Clothing
                    </label>
                    <input
                      type="checkbox"
                      id="item-3-6"
                      name="item-3-6"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-3-6">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-2">
                      Bags
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-2"
                      name="item-4-2"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-2">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-3">
                      Shoes
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-3"
                      name="item-4-3"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-3">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-4">
                      Accesories
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-4"
                      name="item-4-4"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-4">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-4">
                      Clothes & Jackets
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-4"
                      name="item-4-4"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-4">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label>Foxwrld Services</label>
                  </li>
                </ul>
              </div>
            </li>
            {/* End of womens cateogry */}

            {/* Men Category */}
            <li>
              <label className="a-label__chevron" htmlFor="item-4">
                Men
              </label>
              <input
                type="checkbox"
                id="item-4"
                name="item-4"
                className="m-menu__checkbox"
              />
              <div className="m-menu">
                <ul className="mt-12">
                  <div className="m-menu__header">
                    <label className="m-menu__toggle" htmlFor="item-4">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="butt"
                        strokeLinejoin="arcs"
                      >
                        <path d="M19 12H6M12 5l-7 7 7 7" />
                      </svg>
                    </label>
                    <span>Home</span>
                  </div>

                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-1">
                      New Arrivals
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-1"
                      name="item-4-1"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-1">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-3-6">
                      Clothing
                    </label>
                    <input
                      type="checkbox"
                      id="item-3-6"
                      name="item-3-6"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-3-6">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-2">
                      Bags
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-2"
                      name="item-4-2"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-2">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-3">
                      Shoes
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-3"
                      name="item-4-3"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-3">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-4">
                      Accesories
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-4"
                      name="item-4-4"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-4">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-4-4">
                      Clothes & Jackets
                    </label>
                    <input
                      type="checkbox"
                      id="item-4-4"
                      name="item-4-4"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-4-4">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label>Foxwrld Services</label>
                  </li>
                </ul>
              </div>
            </li>

            {/* End of men category */}

            {/* Children Category */}
            <li>
              <label className="a-label__chevron" htmlFor="item-5">
                Childrens
              </label>
              <input
                type="checkbox"
                id="item-5"
                name="item-5"
                className="m-menu__checkbox"
              />
              <div className="m-menu">
                <ul className="mt-12">
                  <div className="m-menu__header">
                    <label className="m-menu__toggle" htmlFor="item-5">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="butt"
                        strokeLinejoin="arcs"
                      >
                        <path d="M19 12H6M12 5l-7 7 7 7" />
                      </svg>
                    </label>
                    <span>Home</span>
                  </div>

                  <li>
                    <label className="a-label__chevron" htmlFor="item-5-1">
                      New Arrivals
                    </label>
                    <input
                      type="checkbox"
                      id="item-5-1"
                      name="item-5-1"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-5-1">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-5-2">
                      Gifts
                    </label>
                    <input
                      type="checkbox"
                      id="item-5-2"
                      name="item-5-2"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-5-2">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-5-3">
                     Baby 0-24 MTHS
                    </label>
                    <input
                      type="checkbox"
                      id="item-5-3"
                      name="item-5-3"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-5-3">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-5-4">
                      Girl 3-14 YRS
                    </label>
                    <input
                      type="checkbox"
                      id="item-5-4"
                      name="item-5-4"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-5-4">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-5-5">
                      Boy 3-14YRS
                    </label>
                    <input
                      type="checkbox"
                      id="item-5-5"
                      name="item-5-5"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-5-5">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <label className="a-label__chevron" htmlFor="item-5-6">
                     Accessories
                    </label>
                    <input
                      type="checkbox"
                      id="item-5-6"
                      name="item-5-6"
                      className="m-menu__checkbox"
                    />
                    <div className="m-menu">
                      <div className="m-menu__header mt-12">
                        <label className="m-menu__toggle" htmlFor="item-5-6">
                          <svg
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="butt"
                            strokeLinejoin="arcs"
                          >
                            <path d="M19 12H6M12 5l-7 7 7 7" />
                          </svg>
                        </label>
                        <span>Item 2.3 </span>
                      </div>
                      <ul>
                        <li>
                          <label>Item 2.3.1</label>
                        </li>
                        <li>
                          <label>Item 2.3.2</label>
                        </li>
                        <li>
                          <label>Item 2.3.3</label>
                        </li>
                        <li>
                          <label>Item 2.3.4</label>
                        </li>
                        <li>
                          <label>Item 2.3.5</label>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* <li>
                    <label>Foxwrld Services</label>
                  </li> */}
                </ul>
              </div>
            </li>
            {/* End of Children Category */}
            {/* <li>
              <label>Item 4</label>
            </li>
            <li>
              <label>Item 5</label>
            </li>
            <li>
              <label>Item 6</label>
            </li> */}
                <div>
            <div className="overflow-scroll no-scroll my-4">
              <div className="flex w-[500px] overflow-scroll no-scroll" >
              <HamburgerSlidesPictures img={womenBag} text={"Bag"}/>
              <HamburgerSlidesPictures img={trenchCoats} text={"Trench Coats"}/>
              <HamburgerSlidesPictures img={kiddies} text={"Children"}/>
              <HamburgerSlidesPictures img={tshirt} text={"T shirt"}/>
              </div>
            </div>
          </div>

<div className='mx-4'>
  <h1 className=''>Account</h1>
<div>
<Link>Sign in/Register</Link>
</div>

</div>
          </ul>
      
        </div>
      </nav>
    </div>
  );
}

export default Hamburger;
