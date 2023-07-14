import React from "react";
import Header from "../components/Navigation/Header";
import Hamburger from "../components/Navigation/Hamburger";
import Footer from "../components/Navigation/Footer";

export default function SignUp() {
  return (
    <div className="flex flex-col h-screen">
      <Header color="black"/>
      <Hamburger color="black" />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-2xl font-bold mb-4 fontBold">Create an Account</h2>
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
              className="bg-black hover:bg-black-700 text-white rounded px-4 py-2"
            >
              Create Account
            </button>
            <br />
            <a href="#" className="text-black hover:text-blue-700 block fontBold">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
