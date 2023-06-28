import React from "react";
import Header from "../components/Header";
import Hamburger from "../components/Hamburger";
import Footer from "../components/Footer";

export default function SignUp() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Hamburger />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
        <form className="w-64">
          <label htmlFor="email" className="mb-2 block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-2 py-1 mb-4"
          />

          <label htmlFor="password" className="mb-2 block">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded px-2 py-1 mb-4"
          />

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2"
            >
              Create Account
            </button>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
