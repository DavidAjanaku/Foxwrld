import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const HamburgerMenu = ({ color, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("main");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSubMenu = (menu) => {
    setCurrentMenu(menu);
  };

  const navigateBack = () => {
    setCurrentMenu("main");
  };

  const renderMenuItems = () => {
    switch (currentMenu) {
      case "main":
        return (
          <ul className="pt-24 px-3">
            <li onClick={() => navigateToSubMenu("home")}>
              <span className="cursor-pointer ">Gifts</span>
            </li>
            <li onClick={() => navigateToSubMenu("new")}>
              <span className="cursor-pointer ">New in</span>
            </li>
            <li onClick={() => navigateToSubMenu("women")}>
              <span className="cursor-pointer ">Women</span>
            </li>
            <li onClick={() => navigateToSubMenu("men")}>
              <span className="cursor-pointer ">Men</span>
            </li>
          </ul>
        );
      case "home":
        return (
          <ul className="pt-24 px-3">
            <li>
              <span className="cursor-pointer " onClick={navigateBack}>
                &#8592;
              </span>
            </li>
            <li>
              <Link to="/home1" className="">
                subcategory 1
              </Link>
            </li>
            <li>
              <Link to="/home2" className="">
                subcategory 2
              </Link>
            </li>
            <li>
              <Link to="/home3" className="">
                subcategory 3
              </Link>
            </li>
          </ul>
        );
      case "new":
        return (
          <ul className="pt-24 px-3">
            <li>
              <span className="cursor-pointer " onClick={navigateBack}>
                &#8592;
              </span>
            </li>
            <li>
              <Link to="/home1" className="">
                New in 1
              </Link>
            </li>
            <li>
              <Link to="/home2" className="">
                New in 2
              </Link>
            </li>
            <li>
              <Link to="/home3" className="">
                New in 3
              </Link>
            </li>
          </ul>
        );
      case "women":
        return (
          <ul className="pt-24 px-3">
            <li>
              <span className="cursor-pointer " onClick={navigateBack}>
                &#8592;
              </span>
            </li>
            <li>
              <Link to="/home1" className="">
                women in 1
              </Link>
            </li>
            <li>
              <Link to="/home2" className="">
                women in 2
              </Link>
            </li>
            <li>
              <Link to="/home3" className="">
                women in 3
              </Link>
            </li>
          </ul>
        );

      case "men":
        return (
          <ul className="pt-24 px-3">
            <li>
              <span className="cursor-pointer " onClick={navigateBack}>
                &#8592;
              </span>
            </li>
            <li>
              <Link to="/home1" className="">
                men in 1
              </Link>
            </li>
            <li>
              <Link to="/home2" className="">
                men in 2
              </Link>
            </li>
            <li>
              <Link to="/home3" className="">
                men in 3
              </Link>
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="hamburger-menu mobile hidden">
      <div
        className={`menu-icon absolute z-50 flex items-center justify-between w-full px-3 ${
          isOpen ? "text-black" : ""
        }`}
      >
        <div className="logo">
          <Link
            to="/"
            className={`fontBold text-2xl ${
              isOpen ? "text-black" : `text-${color}`
            }`}
          >
            Foxwrld
          </Link>
        </div>
        <div>
          <Link to="/signup" className="px-4 sm:px-8 py-6">
            <svg
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke={color}
                d="M11.98 8.99c1.6568 0 3-1.3432 3-3 0-1.6569-1.3432-3-3-3-1.6569 0-3 1.3431-3 3 0 1.6568 1.3431 3 3 3Z"
              ></path>
              <path
                fill={color}
                d="M11.97 13.23a8.3597 8.3597 0 0 1 8.32 7H3.7a8.5996 8.5996 0 0 1 8.28-7m0-1.5a10.1597 10.1597 0 0 0-10 10h19.99c-.23-5.17-4-10-10-10h.01Z"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="relative">
          <Link to="/Checkout">
            <svg
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke={color}
                d="M20.9999 8.99h-18v12h18v-12ZM15.97 8.97v-2a4.0002 4.0002 0 0 0-4-4 4 4 0 0 0-4 4v2"
              ></path>
            </svg>
            {cartCount > 0 && (
              <span className="absolute bottom-4 -right-1  text-center p-2 h-4 w-4 rounded-full fontBold text-xs px-1 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        <div className="hamburger-button z-20">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            size={24}
            duration={0.6}
            color={isOpen ? "black" : color}
          />
        </div>

        <div></div>
      </div>

      {isOpen && (
        <div className="menu-items bg-white fixed top-0 right-0 h-screen w-full z-10">
          {renderMenuItems()}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
