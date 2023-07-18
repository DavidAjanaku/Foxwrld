import React from 'react';
import Header from '../Navigation/Header';
import HamburgerMenu from '../Navigation/Hamburger';
import HeroSlider from '../../assets/hero-slider.webp';
import { Link,useNavigate } from 'react-router-dom';
import Footer from '../Navigation/Footer';
import Pagination from '../Navigation/Pagination';

export default function AccountSettings() {
  const orders = [
    {
      id: 1,
      itemAmount: "$400.00",
      date: '2023-07-01',
      status: 'Delivered',
      itemNo: 'ABC123',
      address: '123 Main St, City, State, 12345',
    },
    {
      id: 2,
      itemAmount: "$50000.00",
      date: '2023-07-05',
      status: 'Pending',
      itemNo: 'DEF456',
      address: '456 Elm St, City, State, 67890',
    },
 
  ];

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
          <div className="container mx-auto px-4 py-8">
          <button className='text-2xl' onClick={handleGoBack}>
              &#8592;
            </button>
            <h2 className="text-3xl font-bold mb-4 fontBold">Order History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b fontBold">Item Amount</th>
                    <th className="py-2 px-4 border-b fontBold">Date</th>
                    <th className="py-2 px-4 border-b fontBold">Status</th>
                    <th className="py-2 px-4 border-b fontBold">Item Number</th>
                    <th className="py-2 px-4 border-b fontBold">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="py-2 px-4 border-b text-center">{order.itemAmount}</td>
                      <td className="py-2 px-4 border-b text-center">{order.date}</td>
                      <td className="py-2 px-4 border-b text-center">{order.status}</td>
                      <td className="py-2 px-4 border-b text-center">{order.itemNo}</td>
                      <td className="py-2 px-4 border-b">{order.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='mt-10'>
            <Pagination/>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
