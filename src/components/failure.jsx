import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Failure() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md text-center">
        <div className="mb-4">
        <svg
           id="changeColor"
           fill="#DC7633"
           xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink"
           width="200"
           viewBox="0 0 375 374.999991"
           height="200"
           preserveAspectRatio="xMidYMid meet"
           version="1.0"
           className='m-auto'
          >
            <defs>
              <path
                id="pathAttribute"
                d="M 37.5 39.523438 L 366 39.523438 L 366 335.773438 L 37.5 335.773438 Z M 37.5 39.523438 "
                clip-rule="nonzero"
                fill="#df4343"
              ></path>
            </defs>
            <path
              id="pathAttribute"
              d="M 366 187.648438 C 366 269.460938 292.464844 335.773438 201.75 335.773438 C 111.035156 335.773438 37.5 269.460938 37.5 187.648438 C 37.5 105.832031 111.035156 39.523438 201.75 39.523438 C 292.464844 39.523438 366 105.832031 366 187.648438 Z M 366 187.648438 "
              fill-opacity="1"
              fill-rule="nonzero"
              fill="#df4343"
            ></path>
            <g id="inner-icon" transform="translate(95,85)">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="199.8"
                height="199.8"
                fill="currentColor"
                class="bi bi-exclamation-circle"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  id="mainIconPathAttribute"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
                  id="mainIconPathAttribute"
                  fill="#ffffff"
                ></path>{" "}
              </svg>{" "}
            </g>
          </svg>
        </div>
        <h2 className="text-3xl font-semibold mb-2">Payment Failed</h2>
        <p className="text-gray-600">
          We're sorry, but there was an issue with your payment.
        </p>
        <p>Please try again later or contact our support.</p>

        <div className="mt-4 flex justify-center">
          <Link to="/" className="text-blue-500">
            <Button text="Back to Home" />
          </Link>
        </div>
      </div>
    </div>
  );
}
