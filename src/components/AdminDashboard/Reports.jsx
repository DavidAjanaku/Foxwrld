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
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
     <div className="flex  flex-wrap gap-4">
     <div className="mb-4">
        <div className="border rounded p-4">
          <strong>Total Sales:</strong> {totalSales}
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-4">
          <strong>Net Sales:</strong> {netSales}
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-4">
          <strong>Orders:</strong> {orders}
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-4">
          <strong>Product Sales:</strong> {productSales}
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-4">
          <strong>Visitors:</strong> {visitors}
        </div>
      </div>
      <div className="mb-4">
        <div className="border rounded p-4">
          <strong>Views:</strong> {views}
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
          <div className="border-b border-gray-300 p-4 fontBold">
            <h2 className=" py-4 fontBold text-2xl">
              Order Actions
            </h2>
           <p></p>
          </div>
          <button className="bg-black text-white  m-4 p-2 ">Move to Trash</button>
         
        </div>
      </div>
    </div>
  );
}
