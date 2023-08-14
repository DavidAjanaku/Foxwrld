import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import jsonData from "./jsonData.json"; // Import the JSON data

const HamburgerMenu = ({ color, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("main");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSubMenu = (menuTitle) => {
    setCurrentMenu(menuTitle);
  };

  const navigateBack = () => {
    setCurrentMenu("main");
  };

  const renderMenuItems = () => {
    switch (currentMenu) {
      case "main":
        return (
          <ul className="pt-24 px-3">
            {jsonData.data.map((menu) => (
              <li key={menu.id} onClick={() => navigateToSubMenu(menu.Title)} className="my-4">
                <span className="cursor-pointer ">{menu.Title}</span>
              </li>
            ))}
          </ul>
        );
      default:
        const selectedMenu = jsonData.data.find((menu) => menu.Title === currentMenu);
        if (selectedMenu) {
          const subMenus = [];
          return (
            <ul className="pt-24 px-3">
              <li>
                <span className="cursor-pointer" onClick={navigateBack}>
                  &#8592;
                </span>
              </li>
              {selectedMenu.Categories.map((category) => {
                if (!subMenus.includes(category.subMenu)) {
                  subMenus.push(category.subMenu);
                  return (
                    <li key={category.subMenu} className="my-4">
                      <h3 className="text-[14px]">{category.subMenu}</h3>
                      <ul>
                        {selectedMenu.Categories
                          .filter((subcategory) => subcategory.subMenu === category.subMenu)
                          .map((subcategory) => (
                            <li key={subcategory.id}>
                              <Link to={subcategory.menus} className="text-sm fontThin">
                                {subcategory.categories}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          );
        }
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
        {/* Rest of your component code... */}
        <div className="hamburger-button z-20">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            size={24}
            duration={0.6}
            color={isOpen ? "black" : color}
          />
        </div>
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
