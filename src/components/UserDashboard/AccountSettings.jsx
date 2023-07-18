import React from 'react';
import Header from '../Navigation/Header';
import HamburgerMenu from '../Navigation/Hamburger';
import HeroSlider from '../../assets/hero-slider.webp';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Navigation/Footer';

export default function AccountSettings() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };
  return (
    <div>
      <div className='h-24'>
        <Header color={'black'} />
        <HamburgerMenu color={'black'} />
      </div>
      <div>
        <section className='hero-section'>
          <img src={HeroSlider} alt="" className='w-full h-72 object-cover' />
          <h1 className='text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-center w-full fontBold'>
            Welcome, dummy name!
          </h1>
        </section>
        <section className="accountOptions bg-gray-200">
          <div className="container mx-auto px-4 py-20">
          <button className='text-2xl' onClick={handleGoBack}>
              &#8592;
            </button>
            <h2 className='fontBold  text-3xl mb-5'>My Personal Details</h2>
            <form className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border border-none rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border border-none rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div className="col-span-2 md:col-span-3">
                <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="border border-none rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  className="border border-none rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-none rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div className="col-span-1 md:col-span-3">
                <button
                  type="submit"
                  className="bg-black text-white rounded-md py-2 px-4 w-full"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
