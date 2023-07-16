import React, { useState } from "react";
import { Link } from "react-router-dom";
import coats from "../../assets/coats.jpeg";
import Pagination from "../Navigation/Pagination";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function Reports() {
  const [status, setStatus] = useState("Processing");
  const [selectAll, setSelectAll] = useState(false);


  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const totalSales = 10000;
  const netSales = 8000;
  const orders = 500;
  const productSales = 2000;
  const visitors = 1000;
  const views = 5000;

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  const topCategory = 'Electronics';
  const categoryItemsSold = 500;
  const categoryTotalEarnings = 25000;

  const topProduct = {
    name: 'Smartphone',
    image: 'https://example.com/smartphone-image.jpg',
    quantitySold: 200,
    totalEarnings: 10000,
  };

  return (
    <div className="flex">
      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh]">
        <ul>
          <li>
            <div>
              <Link to="#" className="text-blue-500 hover:underline">
                Appearance
              </Link>
            </div>
            <div>
              <Link to="#" className="text-blue-500 hover:underline">
                Appearance
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="main-content flex-1 bg-white h-[100vh] overflow-scroll p-4">
      <div className="  p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 fontBold">Reports</h1>
     <div className="flex  flex-wrap gap-4">
     <div className="mb-4">
        <div className="border rounded p-6 text-center">
          <strong className="text-sm fontBold">Total Sales</strong>
          <div className="mt-4">
          999
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-6 text-center">
          <strong className="text-sm fontBold">Net Sales</strong>
          <div className="mt-4">
          999
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-6 text-center">
          <strong className="text-sm fontBold">Orders </strong>
          <div className="mt-4">
          $12
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-6 text-center">
          <strong className="text-sm fontBold">Product Sales</strong>
          <div className="mt-4">
          $1200
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-6 text-center">
          <strong className="text-sm fontBold">Visitors</strong>
          <div className="mt-4">
          123
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-6 text-center">
          <strong className="text-sm fontBold">Views</strong>
          <div className="mt-4">
          999
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-6 text-center">
          <strong className="text-sm fontBold">Returns</strong>
          <div className="mt-4">
          23
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-4">
          <strong>Date Range:</strong>
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        </div>
      </div>
     </div>
    </div>
     
      </div>

      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh] overflow-scroll">
      <div>
        <div className="border-b border-gray-300 p-4 font-bold">
          <h2 className="py-4 text-2xl">Order Actions</h2>
          <p></p>
        </div>
        <button className="bg-black text-white m-4 p-2">Move to Trash</button>
      </div>

      <div>
        <div className="border-b border-gray-300 p-4 font-bold">
          <h2 className="py-4 text-2xl">Top Category</h2>
        <h1 className="uppercase fontBold">Item mostly sold</h1 >
        </div>
       <div className="p-4">
          <div className="flex items-center">
            <img src={coats} alt={topProduct.name} className="w-12 h-12 mr-4" />
            <div>
              <p>Name: {topProduct.name}</p>
              <p>Quantity Sold: {topProduct.quantitySold}</p>
              <p>Total Earnings: ${topProduct.totalEarnings}</p>
            </div>
          </div>
        </div>
      </div>

     
      </div>
    </div>
  );
}
