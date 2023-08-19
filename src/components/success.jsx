import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md text-center">
        <div className="flex items-center justify-center text-green-500 text-6xl mb-4">
          <svg
            id="changeColor"
            fill="#DC7633"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="200"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="200"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <path
                id="pathAttribute"
                d="M 37.5 39.523438 L 366 39.523438 L 366 335.773438 L 37.5 335.773438 Z M 37.5 39.523438 "
                clip-rule="nonzero"
                fill="#7ad71d"
              ></path>
            </defs>
            <path
              id="pathAttribute"
              d="M 366 187.648438 C 366 269.460938 292.464844 335.773438 201.75 335.773438 C 111.035156 335.773438 37.5 269.460938 37.5 187.648438 C 37.5 105.832031 111.035156 39.523438 201.75 39.523438 C 292.464844 39.523438 366 105.832031 366 187.648438 Z M 366 187.648438 "
              fill-opacity="1"
              fill-rule="nonzero"
              fill="#7ad71d"
            ></path>
            <g id="inner-icon" transform="translate(95,85)">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="199.8"
                zoomAndPan="magnify"
                viewBox="0 0 30 30.000001"
                height="199.8"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
                id="IconChangeColor"
              >
                <defs>
                  <clipPath id="id1">
                    <path
                      d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                      clip-rule="nonzero"
                      id="mainIconPathAttribute"
                      fill="#ffffff"
                    ></path>
                  </clipPath>
                </defs>
                <g clip-path="url(#id1)">
                  <path
                    fill="#ffffff"
                    d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                    id="mainIconPathAttribute"
                  ></path>
                </g>
              </svg>{" "}
            </g>
          </svg>
        </div>
        <h2 className="text-3xl font-semibold mb-2">Payment Successful!</h2>
        <p className="text-gray-600">Thank you for your purchase.</p>
        <p>A copy of your receipt has been sent to your email.</p>

        <div className="text-center flex justify-center">
          <Link to="/" className="mt-4 text-blue-500">
            <Button text="Back to Home" />
          </Link>
        </div>
      </div>
    </div>
  );
}
