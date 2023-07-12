import React from 'react';
import Hamburger from '../components/Navigation/Hamburger';
import Header from '../components/Navigation/Header';
import { Link } from 'react-router-dom';
import sandals from '../assets/sandals.jpeg';
import CheckoutCard from '../components/Checkout/CheckoutCard';
import Footer from '../components/Navigation/Footer';

export default function Checkout() {
  return (
    <div>
      <div className='h-11'>
        <Hamburger />
        <Header color="black" />
      </div>
      <div>
        <section className='mt-10 p-2'>
          <section className="header flex mx-auto">
            <Link className='text-2xl'>
              &#8592;
            </Link>
            <Link className='mx-auto fontBold'>
              Foxwrld
            </Link>
          </section>
          <div>
            <section>
              <div className=''>
                <div className="shopping-bag uppercase  my-14 text-center fontBold">
                  shopping bag (2)
                </div>

                <div className="shopping-bag__container flex flex-wrap">
                  <div className="shopping-bag__products md:w-2/4 h-full md:h-[50vh]  overflow-y-scroll">
                 <CheckoutCard/>
                 <CheckoutCard/>

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
      <Footer/>
    </div>
  );
}
