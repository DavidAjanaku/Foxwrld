import React from "react";
import Header from "../components/Navigation/Header";
import Hamburger from "../components/Navigation/Hamburger";
import googleLogo from "../assets/googleLogo.png";
import appleLogo from "../assets/appleLogo.png";
import { Link } from "react-router-dom";

export default function Verify() {
  return (
    <div className="flex flex-col h-screen">
      {/* <Header color="black" /> */}
      {/* <Hamburger color="black" /> */}
      <div className="flex flex-col items-center justify-center flex-grow mt-14">
        <h2 className="text-2xl font-bold mb-4 fontBold">A verification mail has been sent to you </h2>
        <p className="text-xl font-bold mb-4 fontBold">pls confirm your email address </p>

      </div>
    </div>
  );
}
