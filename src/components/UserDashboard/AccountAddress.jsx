import React, { useState } from "react";
import Header from "../Navigation/Header";
import HamburgerMenu from "../Navigation/Hamburger";
import HeroSlider from "../../assets/hero-slider.webp";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Navigation/Footer";


export default function Account() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div>
      <div className="h-24">
        <Header color={"black"} />
        <HamburgerMenu color={"black"} />
      </div>
      <div>
        <section className="hero-section">
          <img src={HeroSlider} alt="" className="w-full h-72 object-cover" />
          <h1 className="text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-center w-full">
            Welcome, dummy name!
          </h1>
        </section>
        <section className="accountOptions">
          <div className="container mx-auto px-4 py-20  w-full">
            <button className="text-2xl" onClick={handleGoBack}>
              &#8592;
            </button>
            <h2 className="fontBold text-3xl mb-5">Address Book</h2>
            <div className="container mx-auto px-4 my-10 overflow-x-scroll noscroll">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">First Name</th>
                    <th className="px-4 py-2">Last Name</th>
                    <th className="px-4 py-2">Address 1</th>
                    <th className="px-4 py-2">Address 2</th>

                    <th className="px-4 py-2">Zip Code</th>
                    <th className="px-4 py-2">City</th>
                    <th className="px-4 py-2">State</th>
                    <th className="px-4 py-2">Contact Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">John</td>
                    <td className="border px-4 py-2">Doe</td>
                    <td className="border px-4 py-2">123 Example Street</td>
                    <td className="border px-4 py-2"></td>

                    <td className="border px-4 py-2">12345</td>
                    <td className="border px-4 py-2">Sample City</td>
                    <td className="border px-4 py-2">Sample State</td>
                    <td className="border px-4 py-2">123-456-7890</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <form className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border  rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border  rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label
                  htmlFor="addressLine1"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="addressLine1"
                  className="border  rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label
                  htmlFor="addressLine2"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address Line 2
                </label>
                <input
                  type="text"
                  id="addressLine2"
                  className="border  rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-bold mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className=" border rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-gray-700 font-bold mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className=" border rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className=" border rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  className=" border rounded-md p-2 w-full"
                  // Add any necessary event handlers or state
                />
              </div>

              <div className="col-span-1 md:col-span-3">
                <button
                  type="submit"
                  className="bg-black text-white rounded-md py-2 px-4 w-full"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
        <div>
          <button className="bg-black text-white p-4 m-4" onClick={toggleModal}>
            Add New Address
          </button>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white h-full w-full p-4 rounded shadow">
                <div className="flex justify-end">
                  <button className="text-gray-500" onClick={toggleModal}>
                    X
                  </button>
                </div>
                <h2 className="text-lg font-bold mb-4">Modal Content</h2>
                <form className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="border  rounded-md p-2 w-full"
                      // Add any necessary event handlers or state
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="border  rounded-md p-2 w-full"
                      // Add any necessary event handlers or state
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="addressLine1"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      id="addressLine1"
                      className="border  rounded-md p-2 w-full"
                      // Add any necessary event handlers or state
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="addressLine2"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="addressLine2"
                      className="border  rounded-md p-2 w-full"
                      // Add any necessary event handlers or state
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className=" border rounded-md p-2 w-full"
                      // Add any necessary event handlers or state
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      className=" border rounded-md p-2 w-full"
                      // Add any necessary event handlers or state
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className=" border rounded-md p-2 w-full"
                      // Add any necessary event handlers or state
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      id="contactNumber"
                      className=" border rounded-md p-2 w-full"
                      // Add any necessary event handlers or state
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
