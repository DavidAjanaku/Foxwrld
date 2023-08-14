import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CartProducts from "../Cart/CartProducts";
import jsonData from "./jsonData.json";

export default function Header({ color, cartCount }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNewInDropdownOpen, setIsNewInDropdownOpen] = useState(false);
  const [isWomenDropdown, setIsWomenDropdown] = useState(false);
  const [isMenDropdown, setIsMenDropdown] = useState(false);

  const dropdownTimeoutRef = useRef(null);
  const newInDropdownTimeoutRef = useRef(null);

  // const handleDropdownToggle = () => {
  //   clearTimeout(dropdownTimeoutRef.current);
  //   setIsDropdownOpen(true);
  // };

  const handleDropdownToggle = (menuId) => {
    clearTimeout(dropdownTimeoutRef.current);

    setIsDropdownOpen(menuId);
  };

  const handleDropdownEnter = (menuId) => {
    setIsDropdownOpen(menuId);
  };

  const handleDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500); // Adjust the timeout value as needed
  };

  // const handleDropdownEnter = () => {
  //   clearTimeout(dropdownTimeoutRef.current);
  // };

  const handleNewInDropdownToggle = () => {
    clearTimeout(newInDropdownTimeoutRef.current);
    setIsNewInDropdownOpen(true);
  };

  const handleNewInDropdownClose = () => {
    newInDropdownTimeoutRef.current = setTimeout(() => {
      setIsNewInDropdownOpen(false);
    }, 30000);
  };

  const handleNewInDropdownEnter = () => {
    clearTimeout(newInDropdownTimeoutRef.current);
  };

  const handleWomenDropdownToggle = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsWomenDropdown(true);
  };

  const handleWomenDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsWomenDropdown(false);
    }, 300);
  };

  const handleWomenDropdownEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
  };

  const handleMenDropdownToggle = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsMenDropdown(true);
  };

  const handleMenDropdownClose = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsMenDropdown(false);
  };

  const handleMenDropdownEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
  };

  {
    console.log(jsonData.data.Categories);
  }

  const handleDropdownCart = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setCartCount((prevCount) => prevCount + 1);
  };

  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

  const handleCartDropdownToggle = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  const handleCartDropdownClose = () => {
    setIsCartDropdownOpen(false);
  };

  return (
    <div className="relative">
      {isDropdownOpen ||
      isNewInDropdownOpen ||
      isWomenDropdown ||
      isMenDropdown ? (
        <div className="fixed inset-0 bg-black opacity-50 " />
      ) : null}
      <div className="  hide px-8 absolute left-0 right-0 z-30">
        <div className="flex justify-between items-center relative w-full h-20 max-w-[256rem] ">
          <Link
            to="/"
            className={`relative items-center text-${color} z-30 text-3xl font-sans font-extrabold`}
          >
            Foxwrld
          </Link>
          <header className={`text-${color}`}>
            <ul className="flex">
              {jsonData.data.map((menu) => (
                <li
                  key={menu.id}
                  className="group"
                  onMouseEnter={() => handleDropdownToggle(menu.id)}
                  onMouseLeave={handleDropdownClose}
                >
                  <Link to="#" className="px-4 sm:px-8 py-6 font-bold uppercase">
                    {menu.Title}
                  </Link>
                  {isDropdownOpen === menu.id && (
                    <div
                      className="absolute left-0 top-full w-full bg-white h-[80vh] p-10 flex "
                      onMouseEnter={() => handleDropdownEnter(menu.id)}
                      onMouseLeave={handleDropdownClose}
                    >
                      {console.log("Subcategories:", menu.Categories)} {/* Log subcategories */}
                      {menu.Categories && menu.Categories.length > 0 ? (
                        // Group categories by submenu
                        menu.Categories.reduce((acc, category) => {
                          const existingSubMenu = acc.find((group) => group.subMenu === category.subMenu);
                          if (existingSubMenu) {
                            existingSubMenu.categories.push(category);
                          } else {
                            acc.push({
                              subMenu: category.subMenu,
                              categories: [category],
                            });
                          }
                          return acc;
                        }, []).map((subMenuGroup) => (
                          <section key={subMenuGroup.subMenu} className="my-4 mr-16">
                            <h1 className="text-black font-extrabold uppercase mb-1 text-[12px] font-bold">
                              {subMenuGroup.subMenu}
                            </h1>
                            <ul className="flex flex-col text-black">
                              {subMenuGroup.categories.map((category) => (
                                <li key={category.id} className="text-black">
                                  <Link to="#" className="text-[12px] fontThin">
                                    {category.categories}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))
                      ) : (
                        <div>No subcategories available</div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </header>

          <ul className="flex whitespace-nowrap h-full relative">
            <li>
              <button className="px-4 sm:px-8 py-6">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill={color}
                    d="M11.0499 3.55a7.5 7.5 0 1 1 0 15.0002 7.5 7.5 0 0 1 0-15.0001Zm0-1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
                  ></path>
                  <path stroke={color} d="m16.72 16.72 4.56 4.56"></path>
                </svg>
              </button>
            </li>
            <li>
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
            </li>
            <li className="relative">
              <a
                href="#"
                className="px-4 sm:px-8 py-6 relative"
                onClick={handleCartDropdownToggle}
              >
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
                  <span className="absolute bottom-8 -right-1 z-40 text-center p-2 h-4 w-4 rounded-full fontBold text-xs px-1 py-0.5">
                    {cartCount}
                  </span>
                )}
                {isCartDropdownOpen && (
                  <div
                    className="absolute top-full right-0 bg-white mt-2 p-2"
                    onMouseLeave={handleCartDropdownClose}
                  >
                    {/* Add your cart dropdown content here */}
                    <CartProducts />
                  </div>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
