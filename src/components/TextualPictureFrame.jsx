import React from "react";
import { Link } from "react-router-dom";

export default function TextualPictureFrame(props) {
  return (
    <div className="text-center relative">
      <Link to="/NewArrivals">
        <div className="relative">
          <div className="">
            <img
              src={props.img}
              alt=""
              className="object-contain w-full h-[500px]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
      </Link>
      <div className="m-auto absolute text-white bottom-0 left-0 right-0">
        <h1 className="text-3xl sm:text-4xl md:text-2xl">{props.title}</h1>
        <div className="flex  md:flex-row justify-center">
          <p className="m-2 md:m-4">
            <Link
              to="/NewArrivals"
              className="text-sm md:text-sm underline font-bold hover:text-slate-700 underline-offset-8"
            >
              Women
            </Link>
          </p>
          <p className="m-2 md:m-4">
            <Link
              to="/NewArrivals"
              className="text-sm md:text-sm underline underline-offset-8 hover:text-slate-700 font-bold"
            >
              Men
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
