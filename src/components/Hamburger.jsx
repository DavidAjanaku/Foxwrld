import { useState } from "react";
import { chevronForwardOutline, chevronBackOutline } from "ionicons/icons";

export default function Hamburger() {
  let [open, setOpen] = useState(false);
  const [showGiftsDropdown, setShowGiftsDropdown] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubcategory, setCurrentSubcategory] = useState(null);

  const handleGiftsClick = () => {
    setCurrentCategory("gifts");
    setCurrentSubcategory(null);
    setShowGiftsDropdown(!showGiftsDropdown);
  };

  const subcategories = {
    gifts: ["for him", "for her"],
    forhim: ["electronics", "gadgets"],
    forher: ["bags", "clothes", "shoes"],
    newin: ["category1", "category2"],
    men: ["category3", "category4"],
    women: ["category5", "category6"],
    children: ["category7", "category8"],
  };

  return (
    <div className="mobile hidden h-16">
      <div className="shadow- w-full fixed top-0 left-0">
        <div className="flex items-center justify-between bg-white py-4 :px-10 px-7">
          <div className="text-3xl cursor-pointer flex items-center text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Foxwrld
          </div>
          <div>
            <ul className="flex whitespace-nowrap h-full absolute right-[80px] top-[6px]">
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
                      fill="currentColor"
                      d="M11.0499 3.55a7.5 7.5 0 1 1 0 15.0002 7.5 7.5 0 0 1 0-15.0001Zm0-1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      d="m16.72 16.72 4.56 4.56"
                    ></path>
                  </svg>
                </button>
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
                      stroke="currentColor"
                      d="M11.98 8.99c1.6568 0 3-1.3432 3-3 0-1.6569-1.3432-3-3-3-1.6569 0-3 1.3431-3 3 0 1.6568 1.3431 3 3 3Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M11.97 13.23a8.3597 8.3597 0 0 1 8.32 7H3.7a8.5996 8.5996 0 0 1 8.28-7m0-1.5a10.1597 10.1597 0 0 0-10 10h19.99c-.23-5.17-4-10-10-10h.01Z"
                    ></path>
                  </svg>
                </a>
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
                      stroke="currentColor"
                      d="M20.9999 8.99h-18v12h18v-12ZM15.97 8.97v-2a4.0002 4.0002 0 0 0-4-4 4 4 0 0 0-4 4v2"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer"
            >
              {open ? (
                <ion-icon name="close">&#10005;</ion-icon>
              ) : (
                <ion-icon name="menu">&#9776;</ion-icon>
              )}
            </div>
          </div>
          <nav>
            <ul
              className={`:flex :items-center :pb-0 pb-12 absolute :static bg-white :z-auto z-[-1] right-0 w-full :w-auto :pr-0 pr-9 transition-all duration-500 ease-in ${
                open ? " " : "right-[-100%]"
              }`}
            >
              {/* Category: Gifts */}
              <li className=":mr-8 text-xl :my-0 my-7">
                <button
                  onClick={handleGiftsClick}
                  className="px-4 sm:px-8 py-6 text-gray-800 hover:text-gray-400 duration-500"
                >
                  Gifts
                </button>
                {showGiftsDropdown && currentCategory === "gifts" && (
                  <ul className="absolute left-0 mt-2 bg-white shadow">
                    {subcategories.gifts.map((subcategory) => (
                      <li className="py-2 px-4" key={subcategory}>
                        <button
                          onClick={() => setCurrentSubcategory(subcategory)}
                          className="text-gray-800 hover:text-gray-400"
                        >
                          {subcategory}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Category: New In */}
              <li className=":mr-8 text-xl :my-0 my-7">
                <button
                  onClick={() => setCurrentCategory("newin")}
                  className="px-4 sm:px-8 py-6 text-gray-800 hover:text-gray-400 duration-500"
                >
                  New in
                </button>
                {currentCategory === "newin" && (
                  <ul className="absolute left-0 mt-2 bg-white shadow">
                    {subcategories.newin.map((subcategory) => (
                      <li className="py-2 px-4" key={subcategory}>
                        <button
                          onClick={() => setCurrentSubcategory(subcategory)}
                          className="text-gray-800 hover:text-gray-400"
                        >
                          {subcategory}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Category: Men */}
              <li className=":mr-8 text-xl :my-0 my-7">
                <button
                  onClick={() => setCurrentCategory("men")}
                  className="px-4 sm:px-8 py-6 text-gray-800 hover:text-gray-400 duration-500"
                >
                  Men
                </button>
                {currentCategory === "men" && (
                  <ul className="absolute left-0 mt-2 bg-white shadow">
                    {subcategories.men.map((subcategory) => (
                      <li className="py-2 px-4" key={subcategory}>
                        <button
                          onClick={() => setCurrentSubcategory(subcategory)}
                          className="text-gray-800 hover:text-gray-400"
                        >
                          {subcategory}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Category: Women */}
              <li className=":mr-8 text-xl :my-0 my-7">
                <button
                  onClick={() => setCurrentCategory("women")}
                  className="px-4 sm:px-8 py-6 text-gray-800 hover:text-gray-400 duration-500"
                >
                  Women
                </button>
                {currentCategory === "women" && (
                  <ul className="absolute left-0 mt-2 bg-white shadow">
                    {subcategories.women.map((subcategory) => (
                      <li className="py-2 px-4" key={subcategory}>
                        <button
                          onClick={() => setCurrentSubcategory(subcategory)}
                          className="text-gray-800 hover:text-gray-400"
                        >
                          {subcategory}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Category: Children */}
              <li className=":mr-8 text-xl :my-0 my-7">
                <button
                  onClick={() => setCurrentCategory("children")}
                  className="px-4 sm:px-8 py-6 text-gray-800 hover:text-gray-400 duration-500"
                >
                  Children
                </button>
                {currentCategory === "children" && (
                  <ul className="absolute left-0 mt-2 bg-white shadow">
                    {subcategories.children.map((subcategory) => (
                      <li className="py-2 px-4" key={subcategory}>
                        <button
                          onClick={() => setCurrentSubcategory(subcategory)}
                          className="text-gray-800 hover:text-gray-400"
                        >
                          {subcategory}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
