import React from "react";
import sandals from "../../assets/sandals.jpeg";

export default function CheckoutCard() {
  return (
    <div>
      {" "}
      <div className="itemContainer  flex md:p-5 border-t-2  border-b-2 mx-4 py-8">
        <div className="w-40 h-40">
          <img src={sandals} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full pl-4">
          <h2 className="text-sm fontbold">Print Slides</h2>
          <p className="text-gray-600 text-sm fontThin">Color: White/Blue</p>
          <p className="text-gray-600 text-sm fontThin">Item: 654384</p>

          <div className="flex items-center mt-16 md:justify-between flex-wrap">
            <p className="text-gray-600 mr-2 text-sm">Quantity: 2</p>
            <span className="text-gray-400 text-sm">|</span>

            <p className="text-gray-600 mr-2 text-sm">Size: 40</p>
            <span className="text-gray-400 text-sm">|</span>
            <p className="ml-2 text-sm fontBold">$640</p>
          </div>
        </div>
        <div>
          <p className="fontBold cursor-pointer">X</p>
        </div>
      </div>
    </div>
  );
}
