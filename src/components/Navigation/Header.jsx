import React,{ useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNewInDropdownOpen, setIsNewInDropdownOpen] = useState(false);
  const [isWomenDropdown, setIsWomenDropdown] = useState(false);
  const [isMenDropdown, setIsMenDropdown] = useState(false);


  

  const dropdownTimeoutRef = useRef(null);
  const newInDropdownTimeoutRef = useRef(null);

  const handleDropdownToggle = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Adjust the delay as needed
  };

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
  };
  const handleNewInDropdownToggle = () => {
    clearTimeout(newInDropdownTimeoutRef.current);
    setIsNewInDropdownOpen(true);
  };

  const handleNewInDropdownClose = () => {
    newInDropdownTimeoutRef.current = setTimeout(() => {
      setIsNewInDropdownOpen(false);
    }, 300); // Adjust the delay as needed
  };

  const handleNewInDropdownEnter = () => {
    clearTimeout(newInDropdownTimeoutRef.current);
  };


  const handleDropdownWomenToggle = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsWomenDropdown(true);
  };

  const handleDropdownWomenClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsWomenDropdown(false);
    }, 300); // Adjust the delay as needed
  };

  const handleDropdownWomenEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
  };


  const handleDropdownMenToggle = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setIsMenDropdown(true);
  };

  const handleDropdownMenClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsMenDropdown(false);
    }, 300); // Adjust the delay as needed
  };

  const handleDropdownMenEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
  };

  
  return (
    <div className="  hide px-8 absolute left-0 right-0 z-30">
      <div className="flex justify-between items-center relative w-full h-20 max-w-[256rem] ">
        <a href="#" className="relative items-center text-black z-30 text-3xl font-sans font-extrabold">
          Foxwrld
        </a>
        <header className="text-white ">
          <ul className="flex ">
          <li className="group" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownClose}>
              <a
                href="#"
                className="px-4 sm:px-8 py-6"
              >
                Gifts
              </a>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full w-full bg-white h-[80vh] p-10" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownClose}>
                      <h1 className="text-black font-extrabold uppercase mb-3">Womens Gifts</h1>
                  <ul className="flex flex-col text-black">
                    <li className="text-black">
                      <a href="#" className="">
                        Subcategory 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    {/* Add more subcategories here */}
                  </ul>

                  <h1 className="text-black uppercase mb-3 mt-3">Womens Gifts</h1>
                  <ul className="flex flex-col text-black">
                    <li className="text-black">
                      <a href="#" className="p">
                        Subcategory 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    {/* Add more subcategories here */}
                  </ul>
                </div>
              )}
            </li>
            <li className="group" onMouseEnter={handleNewInDropdownToggle} onMouseLeave={handleNewInDropdownClose}>
              <a
                href="#"
                className="px-4 sm:px-8 py-6"
              >
                New in
              </a>
              {isNewInDropdownOpen && (
                <div className="absolute left-0 top-full w-full bg-white h-[80vh] p-10" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownClose}>
                      <h1 className="text-black font-extrabold uppercase mb-3">New in</h1>
                  <ul className="flex flex-col text-black">
                    <li className="text-black">
                      <a href="#" className="">
                        Subcategory 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    {/* Add more subcategories here */}
                  </ul>

                  <h1 className="text-black uppercase mb-3 mt-3">Womens Gifts</h1>
                  <ul className="flex flex-col text-black">
                    <li className="text-black">
                      <a href="#" className="p">
                        Subcategory 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    {/* Add more subcategories here */}
                  </ul>
                </div>
              )}
            </li>
            <li className="group" onMouseEnter={handleDropdownWomenToggle} onMouseLeave={handleDropdownWomenClose}>
              <a
                href="#"
                className="px-4 sm:px-8 py-6"
              >
               Women
              </a>
              {isWomenDropdown && (
                <div className="absolute left-0 top-full w-full bg-white h-[80vh] p-10" onMouseEnter={handleDropdownWomenEnter} onMouseLeave={handleDropdownWomenClose}>
                      <h1 className="text-black font-extrabold uppercase mb-3">Women</h1>
                  <ul className="flex flex-col text-black">
                    <li className="text-black">
                      <a href="#" className="">
                        Subcategory 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    {/* Add more subcategories here */}
                  </ul>

                  <h1 className="text-black uppercase mb-3 mt-3">Womens Gifts</h1>
                  <ul className="flex flex-col text-black">
                    <li className="text-black">
                      <a href="#" className="p">
                        Subcategory 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    {/* Add more subcategories here */}
                  </ul>
                </div>
              )}
            </li>
            <li className="group" onMouseEnter={handleDropdownMenToggle} onMouseLeave={handleDropdownMenClose}>
              <a
                href="#"
                className="px-4 sm:px-8 py-6"
              >
               Men
              </a>
              {isMenDropdown && (
                <div className="absolute left-0 top-full w-full bg-white h-[80vh] p-10" onMouseEnter={handleDropdownMenEnter} onMouseLeave={handleDropdownMenClose}>
                      <h1 className="text-black font-extrabold uppercase mb-3">Men</h1>
                  <ul className="flex flex-col text-black">
                    <li className="text-black">
                      <a href="#" className="">
                        Subcategory 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="">
                        Subcategory 2
                      </a>
                    </li>
                    {/* Add more subcategories here */}
                  </ul>

                  <h1 className="text-black uppercase mb-3 mt-3">Womens Gifts</h1>
                  <ul className="flex flex-col text-black">
                    <li className="text-black">
                      <a href="#" className="p">
                        Subcategory 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="p">
                        Subcategory 2
                      </a>
                    </li>
                    {/* Add more subcategories here */}
                  </ul>
                </div>
              )}
            </li>
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
                  fill="#fff"
                  d="M11.0499 3.55a7.5 7.5 0 1 1 0 15.0002 7.5 7.5 0 0 1 0-15.0001Zm0-1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
                ></path>
                <path stroke="#fff" d="m16.72 16.72 4.56 4.56"></path>
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
                  stroke="#fff"
                  d="M11.98 8.99c1.6568 0 3-1.3432 3-3 0-1.6569-1.3432-3-3-3-1.6569 0-3 1.3431-3 3 0 1.6568 1.3431 3 3 3Z"
                ></path>
                <path
                  fill="#fff"
                  d="M11.97 13.23a8.3597 8.3597 0 0 1 8.32 7H3.7a8.5996 8.5996 0 0 1 8.28-7m0-1.5a10.1597 10.1597 0 0 0-10 10h19.99c-.23-5.17-4-10-10-10h.01Z"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <a href="#" className="px-4 sm:px-8 py-6">
              <svg
                role="img"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  d="M20.9999 8.99h-18v12h18v-12ZM15.97 8.97v-2a4.0002 4.0002 0 0 0-4-4 4 4 0 0 0-4 4v2"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
  }