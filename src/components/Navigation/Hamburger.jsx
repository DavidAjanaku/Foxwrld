
import React, { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('main');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSubMenu = (menu) => {
    setCurrentMenu(menu);
  };

  const navigateBack = () => {
    setCurrentMenu('main');
  };

  const renderMenuItems = () => {
    switch (currentMenu) {
      case 'main':
        return (
          <ul className='pt-24'>
          
         
            <li onClick={() => navigateToSubMenu('home')}>
              <span className="cursor-pointer hover:text-blue-500">
                Home 
              </span>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        );
      case 'home':
        return (
          <ul className='pt-24'>
            <li>
              <span className="cursor-pointer hover:text-blue-500" onClick={navigateBack}>
                Go Back
              </span>
            </li>
            <li>
              <Link to="/home1" className="hover:text-blue-500">
                Home 1
              </Link>
            </li>
            <li>
              <Link to="/home2" className="hover:text-blue-500">
                Home 2
              </Link>
            </li>
            <li>
              <Link to="/home3" className="hover:text-blue-500">
                Home 3
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
      <div className="menu-icon fixed z-50 flex items-center justify-between w-full">
        <div className="logo">
          <Link to="/" className='fontBold text-2xl'>Foxwrld</Link>
        </div>
        <div className="hamburger-button z-20">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            size={24}
            duration={0.6}
            color="#333"
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
