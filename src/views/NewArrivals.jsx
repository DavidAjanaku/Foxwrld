import React from "react";
import Header from "../components/Navigation/Header";
import Hamburger from "../components/Navigation/Hamburger";
import Accordion from "../components/Accordion/Accordion";

export default function NewArrivals(props) {
  const color = "black"; // Define the color value

  return (
    <div>
      <div className="h-14">
        <Header />
        <Hamburger color={color} />
      </div>
      <main>
        <div>
          <div className="pt-14 pb-12 text-center uppercase">
            Mens New Arrival
          </div>
          <div>
<Accordion/>
          </div>
        </div>
      </main>
    </div>
  );
}
