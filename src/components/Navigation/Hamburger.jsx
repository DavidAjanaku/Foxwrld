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
            {jsonData.map((menu) => (
              <li
                key={menu.title}
                onClick={() => navigateToSubMenu(menu.title)}
                className="my-4"
              >
                <span className="cursor-pointer">{menu.title}</span>
              </li>
            ))}
          </ul>
        );
        default:
      const selectedMenu = jsonData.find((menu) => menu.title === currentMenu);
      if (selectedMenu) {
        const itemGroups = {};

        selectedMenu.subtitles.forEach((submenu) => {
          const groupName = submenu.items[0].text;
          if (!itemGroups[groupName]) {
            itemGroups[groupName] = [];
          }
          itemGroups[groupName].push(...submenu.items.map(item => submenu.text));
        });

        return (
          <ul className="pt-24 px-3">
            <li>
              <span className="cursor-pointer" onClick={navigateBack}>
                &#8592;
              </span>
            </li>
            {Object.keys(itemGroups).map((groupName) => (
              <li key={groupName} className="my-4">
                <h3 className="text-[14px]">{groupName}</h3>
                <ul>
                  {itemGroups[groupName].map((itemText) => (
                    <li key={itemText}>
                      <Link to="#" className="text-sm fontThin">
                        {itemText}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
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
