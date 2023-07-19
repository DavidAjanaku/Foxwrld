import React from 'react';
import sandals from '../../assets/sandals.jpeg';
import { Link } from 'react-router-dom';

export default function CartProducts() {
  return (
    <div className="shadow-lg w-full">
      <div className="flex flex-col w-[300px] p-4 overflow-scroll h-[100px]">
        <div className="flex items-center mb-2">
          <img src={sandals} alt="sandals" className="w-14 h-14 object-contain mr-2" />
          <div className="flex flex-col">
            <p className="font-bold text-sm">Sandals</p>
            <p className="text-sm fontThin">Quantity: 2</p>
            <p className="fontThin text-sm">Subtotal: $3000</p>
          </div>
        </div>
       
      </div>

      <Link to="/Checkout" className="block w-full">
        <button className="bg-black text-white py-2 px-4 mt-2 w-full">
          Checkout
        </button>
      </Link>
    </div>
  );
}
