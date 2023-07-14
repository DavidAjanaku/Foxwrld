
import React, { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({color}) => {
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
          <ul className='pt-24 px-3'>
          
         
            <li onClick={() => navigateToSubMenu('home')}>
              <span className="cursor-pointer ">
                Gifts 
              </span>
            </li>
            <li onClick={() => navigateToSubMenu('new')}>
            <span className="cursor-pointer ">
                New in 
              </span>
            </li>
            <li onClick={() => navigateToSubMenu('women')}>
            <span className="cursor-pointer ">
                Women
              </span>
            </li>
            <li onClick={() => navigateToSubMenu('men')}>
            <span className="cursor-pointer ">
                Men
              </span>
            </li>
          </ul>
        );
      case 'home':
        return (
          <ul className='pt-24'>
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
        case 'new':
        return (
          <ul className='pt-24'>
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
        case 'women':
          return (
            <ul className='pt-24'>
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

          case 'men':
            return (
              <ul className='pt-24'>
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
      <div className="menu-icon fixed z-50 flex items-center justify-between w-full px-3">
        <div className="logo">
          <Link to="/" className='fontBold text-2xl'>Foxwrld</Link>
        </div>
        <div className="hamburger-button z-20">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            size={24}
            duration={0.6}
            color={color}
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
