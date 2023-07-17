import React, { useState } from "react";
import { Link } from "react-router-dom";
import coats from "../../assets/coats.jpeg";
import ImageUpload from "../../assets/ImageUpload.png";
import Button from "../Button";

import Pagination from "../Navigation/Pagination";

export default function EditHomepage() {
  const [status, setStatus] = useState("Processing");
  const [selectAll, setSelectAll] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleVideoSubmit = (event) => {
    event.preventDefault();

    console.log("Video submitted!");
  };

  const handleCategorySubmit = (event) => {
    event.preventDefault();

    console.log("Category submitted!");
  };

  const handleTitleImageSubmit = (event) => {
    event.preventDefault();

    console.log("Title and image submitted!");
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleCategoryImageUpload = (event) => {
    const file = event.target.files[0];
    // Set the category image file using the appropriate state setter function
    setImageFile(file);
  };

  return (
    <div className="flex">
      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh]">
        <ul className="px-4">
          <li>
            <div className="fontBold">Welcome Admin</div>
          </li>
          <li>
            <div className="p-4 bg-slate-400 border-b">
              <Link to="/EditHomepage" className="text-white  ">
                <div>EditHomepage</div>
              </Link>
            </div>
            <div className="p-4  border-b hover:bg-slate-300 ">
              <Link to="/Reports" className="text-black  ">
                <div>Analysis</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/EditOrder" className="text-black active">
                <div>Edit Order</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/Products" className="text-black ">
                <div>Products</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/NewProducts" className="text-black ">
                <div>New Products</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/Order" className="text-black ">
                <div>Order</div>
              </Link>
            </div>
          </li>
          <li>
            <div className="p-4  hover:bg-slate-300 border-b">
              <Link to="/" className="text-black ">
                <div>Logout</div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="main-content flex-1 bg-white h-[100vh] overflow-scroll p-4">
        <header>
          <div className="flex my-4 items-center">
            <h1 className="font-bold text-lg fontBold">Edit Homepage </h1>{" "}
            &nbsp;
            <span className="bg-slate-400 w-5 h-5 rounded-full flex items-center justify-center text-white">
              <span>&#63;</span>
            </span>
          </div>
          <p className="text-sm text-slate-400">
            You've reached the editing dashboard homepage, where you can modify
            and personalize your dashboard experience
          </p>
        </header>
        <div className="main-content flex-1 p-4">
          {/* Video upload */}
          <form onSubmit={handleVideoSubmit}>
            <div className="my-4 bg-slate-200 rounded-lg shadow-lg p-4">
              <label htmlFor="videoUpload" className="font-bold block">
                <div className="bg-white border border-gray-300 p-2 mt-2 text-center ">
                  {!videoFile && (
                    <span className="text-slate-500 font-bold text-sm text-center">
                      Click to here to upload video{" "}
                      <img src={ImageUpload} className="w-32 m-auto" alt="" />
                    </span>
                  )}
                  {videoFile && (
                    <video controls>
                      <source
                        src={URL.createObjectURL(videoFile)}
                        type="video/*"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </label>
              <input
                type="file"
                id="videoUpload"
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
              />
<Button text="Submit Video"/>
             
            </div>
          </form>

          {/* Title and image */}
          <form onSubmit={handleTitleImageSubmit}>
            <section className="in-page__cell bg-slate-200 rounded-lg shadow-lg p-4">
              <h1 className="fontBold">Section 1</h1>
              <div className="my-4">
                <label htmlFor="titleInput" className="font-bold text-sm flex">
                  Title &nbsp;
                  <span className="bg-slate-400 w-5 h-5 rounded-full flex items-center justify-center text-white pb-1">
                    <span>&#161;</span>
                  </span>
                </label>

                <input
                  type="text"
                  id="titleInput"
                  value={title}
                  onChange={handleTitleChange}
                  maxLength={20}
                  className="border border-gray-300 p-2 mt-2 w-full"
                />
                <p className="text-sm text-slate-400">
                  Do not exceed 20 characters when entering the product title
                </p>
              </div>
              <div className="my-4">
                <label htmlFor="imageUpload" className="font-bold block">
                  <div className="bg-white border border-gray-300 p-2 mt-2  text-center">
                    {!imageFile && (
                      <span className="text-slate-500 font-bold text-sm">
                        Click to here to browse{" "}
                        <img src={ImageUpload} className="w-32 m-auto" alt="" />
                      </span>
                    )}

                    {imageFile && (
                      <img
                        src={URL.createObjectURL(imageFile)}
                        className="w-32"
                        alt="Uploaded"
                      />
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

               <Button text="Submit Title and Image"/>
              </div>
            </section>
          </form>

          <form onSubmit={handleCategorySubmit}>
            <section className="in-page__cell bg-slate-200 rounded-lg shadow-lg p-4 my-4">
              <div>
                <h1 className="fontBold">Section 2a</h1>
                <div className="my-4">
                  <label htmlFor="categorySelect" className="fontBold text-sm flex mb-4">
                    Categories &nbsp;
                    <span className="bg-slate-400 w-5 h-5 rounded-full flex items-center justify-center text-white pb-1">
                    <span>&#161;</span>
                  </span>
                  </label>
                  <select
                    id="categorySelect"
                    className="px-2 py-1 border border-gray-300 rounded"
                  >
                    <option>Select Categories</option>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Sandals & Slides</option>
                    <option>Coats & Jackets</option>
                  </select>
                </div>
                <div className="my-4">
                  <label
                    htmlFor="categoryImageUpload"
                    className="font-bold block"
                  >
                    <div className="bg-white border border-gray-300 p-2 mt-2 w-full text-center">
                      {!imageFile && (
                        <span className="text-slate-500 font-bold text-sm text-center">
                          Click to here to browse{" "}
                          <img src={ImageUpload} className="w-32 m-auto" alt="" />
                        </span>
                      )}{" "}
                      {imageFile && (
                        <img
                          src={URL.createObjectURL(imageFile)}
                          alt="Uploaded"
                        />
                      )}
                    </div>
                  </label>
                  <input
                    type="file"
                    id="categoryImageUpload"
                    accept="image/*"
                    onChange={handleCategoryImageUpload}
                    className="hidden"
                  />

                <Button text=" Submit Category"/>
                </div>
              </div>
            </section>
          </form>

          <form onSubmit={handleCategorySubmit}>
            <section className="in-page__cell bg-slate-200 rounded-lg shadow-lg p-4 my-4">
              <div>
                <h1 className="fontBold">Section 2b</h1>
                <div className="my-4">
                  <label htmlFor="categorySelect" className="fontBold text-sm flex mb-4">
                    Categories &nbsp; <span className="bg-slate-400 w-5 h-5 rounded-full flex items-center justify-center text-white pb-1">
                    <span>&#161;</span>
                  </span>
                  </label>
                  <select
                    id="categorySelect"
                    className="px-2 py-1 border border-gray-300 rounded"
                  >
                    <option>Select Categories</option>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Sandals & Slides</option>
                    <option>Coats & Jackets</option>
                  </select>
                </div>
                <div className="my-4">
                  <label
                    htmlFor="categoryImageUpload"
                    className="font-bold block"
                  >
                    <div className="bg-white border border-gray-300 p-2 mt-2 w-full text-center">
                      {!imageFile && (
                        <span className="text-slate-500 font-bold text-sm">
                          Click to here to browse{" "}
                          <img src={ImageUpload} className="w-32 m-auto" alt="" />
                        </span>
                      )}{" "}
                      {imageFile && (
                        <img
                          src={URL.createObjectURL(imageFile)}
                          alt="Uploaded"
                        />
                      )}
                    </div>
                  </label>
                  <input
                    type="file"
                    id="categoryImageUpload"
                    accept="image/*"
                    onChange={handleCategoryImageUpload}
                    className="hidden"
                  />

                 <Button text=" Submit Category"/>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>

      {/* <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh] overflow-scroll">
        <div>
          <div className="border-b border-gray-300 p-4 fontBold">
            <h2 className=" py-4 fontBold text-2xl">Order Actions</h2>
            <p></p>
          </div>
          <button className="bg-black text-white  m-4 p-2 ">
            Move to Trash
          </button>
        </div>
      </div> */}
    </div>
  );
}
