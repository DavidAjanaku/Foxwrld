import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hamburger from '../components/Navigation/Hamburger';
import Header from '../components/Navigation/Header';
import sandals from '../assets/sandals.jpeg';
import CheckOutCard from '../components/CheckoutComponent/CheckOutCard';
import CheckoutCards from  '../components/CheckoutComponent/CheckOutCard'
import Footer from '../components/Navigation/Footer';

export default function CheckOut() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div>
     
      <div>
        <section className='mt-10 p-2'>
          <section className="header flex mx-auto">
            <button className='text-2xl' onClick={handleGoBack}>
              &#8592;
            </button>
            <Link className='mx-auto fontBold'>
              Foxwrld
            </Link>
          </section>
          <div>
            <section>
              <div>
                <div className="shopping-bag uppercase my-14 text-center font-bold">
                  shopping bag (2)
                </div>

                <div className="shopping-bag__container flex flex-wrap">
                  <div className="shopping-bag__products md:w-2/4 h-full md:h-[50vh] overflow-y-scroll">
                    <CheckOutCard />
                    <CheckOutCard />
                  </div>
                  <div className="shopping-bag__payment bg-gray-100 w-full md:w-2/4 p-5 md:h-[30vh] m-3 md:m-0">
                    <h2 className='text-lg font-bold mb-4'>Payment</h2>
                    <div className='flex justify-between'>
                      <p>Subtotal:</p>
                      <p>$640</p>
                    </div>
                    <div className='flex justify-between'>
                      <p>Shipping:</p>
                      <p>$10</p>
                    </div>
                    <hr className='my-4' />
                    <div className='flex justify-between'>
                      <p className='font-bold'>Total:</p>
                      <p className='font-bold'>$650</p>
                    </div>
                    <button className='bg-black text-white py-2 px-4 mt-4 rounded w-full uppercase'>Checkout</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
