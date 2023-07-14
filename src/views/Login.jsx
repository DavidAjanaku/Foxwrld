import React from "react";
import Header from "../components/Navigation/Header";
import Hamburger from "../components/Navigation/Hamburger";
import Footer from "../components/Navigation/Footer";
import googleLogo from "../assets/googleLogo.png";
import appleLogo from "../assets/appleLogo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col h-screen">
      <Header color="black" />
      <Hamburger color="black" />
      <div className="flex flex-col items-center justify-center flex-grow mt-14">
        <h2 className="text-2xl font-bold mb-4 fontBold">Login</h2>
        <form className="w-64">
          <label htmlFor="email" className="mb-2 block fontBold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-2 py-1 mb-4 w-full"
          />

         


          <label htmlFor="password" className="mb-2 block fontBold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded px-2 py-1 mb-4 w-full"
          />

          <div className="flex flex-col justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-black-700 text-white rounded px-4 py-2 uppercase"
            >
              Create Account
            </button>

            <button className="flex justify-center border-2 border-black my-4 py-2 items-center">
              <span>
                <img src={googleLogo} className="w-6 " alt="" />
              </span>
              &nbsp;
              <span className="uppercase text-sm fontBold">
                continue with google
              </span>
            </button>
            <button className="flex justify-center border-2 border-black my-4 py-2 items-center">
              <span>
                <img src={appleLogo} className="w-6 " alt="" />
              </span>
              &nbsp;
              <span className=" text-sm fontBold uppercase">
                continue with apple
              </span>
            </button>
            <Link to="/"
             
              className="text-black hover:text-blue-700 block fontBold"
            >
              Forgot Password?
            </Link>
            <p className="text-sm  mt-4 fontBold">
              Don't have an account?
              <Link to="/signup"
                className="text-blue-700 hover:text-blue-900 fontBold"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
