import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="  hide mx-8 absolute left-0 right-0 z-30">
      <div className="flex justify-between items-center relative w-full h-20 max-w-[256rem] ">
        <a href="#" className="relative items-center text-black text-3xl">
          Foxwrld
        </a>
        <header>
          <ul className="flex">
            <li>
              <a href="#" className="px-4 sm:px-8 py-6">
                Gifts
              </a>
              <a href="#" className="px-4 sm:px-8 py-6">
                New in
              </a>
              <a href="#" className="px-4 sm:px-8 py-6">
                Women
              </a>
              <a href="#" className="px-4 sm:px-8 py-6">
                Men
              </a>
              <a href="#" className="px-4 sm:px-8 py-6">
                Children
              </a>
            </li>
          </ul>
        </header>
        <ul className="flex whitespace-nowrap h-full relative">
          <li>
            <button className="px-4 sm:px-8 py-6">
              <svg
                role="img"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M11.0499 3.55a7.5 7.5 0 1 1 0 15.0002 7.5 7.5 0 0 1 0-15.0001Zm0-1.5a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
                ></path>
                <path stroke="currentColor" d="m16.72 16.72 4.56 4.56"></path>
              </svg>
            </button>
          </li>
          <li>
            <Link to="/signup" className="px-4 sm:px-8 py-6">
              <svg
                role="img"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M11.98 8.99c1.6568 0 3-1.3432 3-3 0-1.6569-1.3432-3-3-3-1.6569 0-3 1.3431-3 3 0 1.6568 1.3431 3 3 3Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M11.97 13.23a8.3597 8.3597 0 0 1 8.32 7H3.7a8.5996 8.5996 0 0 1 8.28-7m0-1.5a10.1597 10.1597 0 0 0-10 10h19.99c-.23-5.17-4-10-10-10h.01Z"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <a href="#" className="px-4 sm:px-8 py-6">
              <svg
                role="img"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M20.9999 8.99h-18v12h18v-12ZM15.97 8.97v-2a4.0002 4.0002 0 0 0-4-4 4 4 0 0 0-4 4v2"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
  }