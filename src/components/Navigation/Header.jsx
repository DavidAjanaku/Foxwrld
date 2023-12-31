import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CartProducts from "../Cart/CartProducts";
import jsonData from "./jsonData.json";

export default function Header({ color, cartCount }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNewInDropdownOpen, setIsNewInDropdownOpen] = useState(false);
  const [isWomenDropdown, setIsWomenDropdown] = useState(false);
  const [isMenDropdown, setIsMenDropdown] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);


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
    }, 300);
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
    }, 300000);
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
              {jsonData.map((menu, index) => (
                <li
                  key={index}
                  className="group"
                  onMouseEnter={() => handleDropdownToggle(index)}
                  onMouseLeave={handleDropdownClose}
                >
                  <Link
                    to="#"
                    className="px-4 sm:px-8 py-6 font-bold uppercase"
                  >
                    {menu.title}
                  </Link>
                  {isDropdownOpen === index && (
                    <div
                      className="absolute left-0 top-full w-full bg-white h-[80vh] p-10 flex "
                      onMouseEnter={() => handleDropdownEnter(index)}
                      onMouseLeave={handleDropdownClose}
                    >
                      {menu.subtitles && menu.subtitles.length > 0 ? (
                        <section key={menu.title} className="my-4 mr-16">
                          <ul className="flex  text-black">
                            {menu.subtitles
                              .reduce((acc, subtitle) => {
                                const existingGroupIndex = acc.findIndex(
                                  (group) =>
                                    group.text === subtitle.items[0].text
                                );
                                if (existingGroupIndex === -1) {
                                  acc.push({
                                    text: subtitle.items[0].text,
                                    items: [subtitle],
                                  });
                                } else {
                                  acc[existingGroupIndex].items.push(subtitle);
                                }
                                return acc;
                              }, [])
                              .map((itemGroup) => (
                                <React.Fragment key={itemGroup.text}>
                               <div className="mr-10">
                               <h1 className="text-black font-extrabold uppercase mb-1 text-[12px] font-bold">
                                    {itemGroup.text}
                                  </h1>
                                  <ul className=" text-black">
                                    {itemGroup.items.map((submenu) => (
                                  <li
                                  key={submenu.text}
                                  className="text-black"
                                  onClick={() => {
                                    setSelectedSubcategory(submenu);
                                    console.log("Selected Subcategory:", {
                                      title: menu.title,
                                      subtitle: submenu.text,
                                      item: submenu.items[0].text
                                    });
                                  }}
                                >
                                  <Link to={submenu.items[0].link || "#"} className="text-[12px] fontThin">
                                    {submenu.text}
                                  </Link>
                                </li>
                                    ))}
                                  </ul>
                               </div>
                                </React.Fragment>
                              ))}
                          </ul>
                        </section>
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
