import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Accordion() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const toggleStyle = () => {
    setStyleOpen(!styleOpen);
  };

  const toggleSize = () => {
    setSizeOpen(!sizeOpen);
  };

  const handleCategorySelection = (subcategory) => {
    if (selectedCategories.includes(subcategory)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== subcategory)
      );
    } else {
      setSelectedCategories([...selectedCategories, subcategory]);
    }
  };

  const handleStyleSelection = (subcategory) => {
    if (selectedStyles.includes(subcategory)) {
      setSelectedStyles(selectedStyles.filter((item) => item !== subcategory));
    } else {
      setSelectedStyles([...selectedStyles, subcategory]);
    }
  };

  const handleSizeSelection = (subcategory) => {
    if (selectedSizes.includes(subcategory)) {
      setSelectedSizes(selectedSizes.filter((item) => item !== subcategory));
    } else {
      setSelectedSizes([...selectedSizes, subcategory]);
    }
  };

  const handleResetCategories = () => {
    setSelectedCategories([]);
  };

  const handleResetStyles = () => {
    setSelectedStyles([]);
  };

  const handleResetSizes = () => {
    setSelectedSizes([]);
  };

  const handleSelectAllCategories = () => {
    setSelectedCategories(["Bags", "Blazers", "Capes", "Dresses", "Hats"]);
  };

  const handleSelectAllStyles = () => {
    setSelectedStyles(["Boots", "Cardigans"]);
  };

  const handleSelectAllSizes = () => {
    setSelectedSizes(["35", "36", "37"]);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setCategoryOpen(false);
      setStyleOpen(false);
      setSizeOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="accordion relative flex  border-[1px] uppercase py-6 text-[11px] text-black px-12  ">
      <div
        className="category  mr-6 cursor-pointer fontbold"
        onMouseEnter={toggleCategory}
        onMouseLeave={toggleCategory}
      >
        Category
        {categoryOpen && (
          <ul className="sub-categories left-0 absolute w-full bg-white shadow-md p-4 z-10 ">
            <button
              className="select-all-button m-3"
              onClick={handleSelectAllCategories}
            >
              <Link to="#" className="underline"> 
             Select All
             </Link>
            </button>
            {selectedCategories.length > 0 && (
          <button className="reset-button ml-2" onClick={handleResetCategories}>
            Reset
          </button>
        )}
            <div className="w-1/3 grid grid-cols-2 gap-4">
              <li
                className={`py-2 px-4 flex items-center ${
                  selectedCategories.includes("Bags") ? "bg-blue-200" : ""
                } hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Bags")}
              >
                Bags &nbsp;<span>(32)</span>
                {selectedCategories.includes("Bags") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
              <li
                className={`py-2 px-4 flex items-center  ${
                  selectedCategories.includes("Blazers") ? "bg-blue-200" : ""
                }hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Blazers")}
              >
                Blazers &nbsp;<span>(32)</span>
                {selectedCategories.includes("Blazers") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
              <li
                className={`py-2 px-4 flex items-center  ${
                  selectedCategories.includes("Capes") ? "bg-blue-200" : ""
                } hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Capes")}
              >
                Capes &nbsp;<span>(32)</span>
                {selectedCategories.includes("Capes") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
              <li
                className={`py-2 px-4 flex items-center  ${
                  selectedCategories.includes("Dresses") ? "bg-blue-200" : ""
                }hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Dresses")}
              >
                Dresses &nbsp;<span>(32)</span>
                {selectedCategories.includes("Dresses") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
              <li
                className={`py-2 px-4 flex items-center  ${
                  selectedCategories.includes("Hats") ? "bg-blue-200" : ""
                }hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Hats")}
              >
                Hats &nbsp;<span>(32)</span>
                {selectedCategories.includes("Hats") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
              <li
                className={`py-2 px-4 flex items-center  ${
                  selectedCategories.includes("Dresses") ? "bg-blue-200" : ""
                }hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Dresses")}
              >
                Dresses &nbsp;<span>(32)</span>
                {selectedCategories.includes("Dresses") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
              <li
                className={`py-2 px-4 flex items-center  ${
                  selectedCategories.includes("Hats") ? "bg-blue-200" : ""
                }hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Hats")}
              >
                Hats &nbsp;<span>(32)</span>
                {selectedCategories.includes("Hats") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
              <li
                className={`py-2 px-4 flex items-center  ${
                  selectedCategories.includes("Dresses") ? "bg-blue-200" : ""
                }hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Dresses")}
              >
                Dresses &nbsp;<span>(32)</span>
                {selectedCategories.includes("Dresses") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
              <li
                className={`py-2 px-4 flex items-center  ${
                  selectedCategories.includes("Hats") ? "bg-blue-200" : ""
                }hover:bg-blue-200  cursor-pointer`}
                onClick={() => handleCategorySelection("Hats")}
              >
                Hats &nbsp;<span>(32)</span>
                {selectedCategories.includes("Hats") && (
                  <span className="ml-2">&#10003;</span>
                )}
              </li>
            </div>
          </ul>
        )}
      
      </div>


      <div
        className="style mx-6 cursor-pointer fontbold"
        onMouseEnter={toggleStyle}
        onMouseLeave={toggleStyle}
      >
        Style
        {styleOpen && (
          <ul className="sub-categories absolute left-0 w-full bg-white shadow-md p-4 z-10">
              <button
                className="select-all-button m-4"
                onClick={handleSelectAllStyles}
              >
               <Link to="#" className="underline"> 
             Select All
             </Link>
              </button>
              {selectedStyles.length > 0 && (
          <button className="reset-button" onClick={handleResetStyles}>
            Reset
          </button>
        )}
          <div className="w-1/3 grid grid-cols-2 gap-4">
        
            <li
              className={`py-2 px-4 flex items-center  ${
                selectedStyles.includes("Boots") ? "bg-blue-200" : ""
              }  hover:bg-blue-200  cursor-pointer`}
              onClick={() => handleStyleSelection("Boots")}
            >
              Boots&nbsp;<span>(323)</span>
              {selectedStyles.includes("Boots") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center  ${
                selectedStyles.includes("Cardigans") ? "bg-blue-200" : ""
              }  hover:bg-blue-200  cursor-pointer`}
              onClick={() => handleStyleSelection("Cardigans")}
            >
              Cardigans&nbsp;<span>(12)</span>
              {selectedStyles.includes("Cardigans") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center  ${
                selectedStyles.includes("Cardigans") ? "bg-blue-200" : ""
              } hover:bg-blue-200  cursor-pointer`}
              onClick={() => handleStyleSelection("Cardigans")}
            >
              Cardigans&nbsp;<span>(2)</span>
              {selectedStyles.includes("Cardigans") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center  ${
                selectedStyles.includes("Cardigans") ? "bg-blue-200" : ""
              } hover:bg-blue-200  cursor-pointer`}
              onClick={() => handleStyleSelection("Cardigans")}
            >
              Cardigans&nbsp;<span>(32)</span>
              {selectedStyles.includes("Cardigans") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
          </div>
          </ul>
        )}
      
      </div>
      <div
        className="size ml-6 cursor-pointer fontbold"
        onMouseEnter={toggleSize}
        onMouseLeave={toggleSize}
      >
        Size
        {sizeOpen && (
          <ul className="sub-categories absolute left-0 w-full bg-white  shadow-md p-4 z-10">
               <button
                className="select-all-button m-4"
                onClick={handleSelectAllSizes}
              >
             <Link to="#" className="underline"> 
             Select All
             </Link>
              </button>
              {selectedSizes.length > 0 && (
          <button className="reset-button" onClick={handleResetSizes}>
            Reset
          </button>
        )}
         <div className="w-1/3 grid grid-cols-2 gap-4">
        
            <li
              className={`py-2 px-4 flex items-center  ${
                selectedSizes.includes("35") ? "bg-blue-200" : ""
              } hover:bg-blue-200  cursor-pointer`}
              onClick={() => handleSizeSelection("35")}
            >
             S  &nbsp;<span>(32)</span>
              {selectedSizes.includes("35") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center  ${
                selectedSizes.includes("36") ? "bg-blue-200" : ""
              } hover:bg-blue-200  cursor-pointer`}
              onClick={() => handleSizeSelection("36")}
            >
              M  &nbsp;<span>(32)</span>
              {selectedSizes.includes("36") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center  ${
                selectedSizes.includes("37") ? "bg-blue-200" : ""
              } hover:bg-blue-200  cursor-pointer`}
              onClick={() => handleSizeSelection("37")}
            >
              L  &nbsp;<span>(32)</span>
              {selectedSizes.includes("37") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
         </div>
          </ul>
        )}
      
      </div>
    </div>
  );
}
