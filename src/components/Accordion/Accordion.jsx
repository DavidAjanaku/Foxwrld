import React, { useState, useEffect } from "react";

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
    <div className="accordion flex justify-between border-4 py-4 px-12">
      <div
        className="category relative "
        onMouseEnter={toggleCategory}
        onMouseLeave={toggleCategory}
      >
        Category
        {categoryOpen && (
          <ul className="sub-categories absolute bg-white shadow-md w-60">
            <li className="py-2 px-4 flex items-center justify-between">
            <button
          className="select-all-button"
          onClick={handleSelectAllCategories}
        >
          Select All
        </button>
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedCategories.includes("Bags") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleCategorySelection("Bags")}
            >
              Bags
              {selectedCategories.includes("Bags") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedCategories.includes("Blazers") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleCategorySelection("Blazers")}
            >
              Blazers
              {selectedCategories.includes("Blazers") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedCategories.includes("Capes") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleCategorySelection("Capes")}
            >
              Capes
              {selectedCategories.includes("Capes") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedCategories.includes("Dresses") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleCategorySelection("Dresses")}
            >
              Dresses
              {selectedCategories.includes("Dresses") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedCategories.includes("Hats") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleCategorySelection("Hats")}
            >
              Hats
              {selectedCategories.includes("Hats") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
          </ul>
        )}
        {selectedCategories.length > 0 && (
          <button className="reset-button ml-2" onClick={handleResetCategories}>
            Reset
          </button>
        )}
      
      </div>
      <div
        className="style relative"
        onMouseEnter={toggleStyle}
        onMouseLeave={toggleStyle}
      >
        Style
        {styleOpen && (
          <ul className="sub-categories absolute bg-white shadow-md">
            <li className="py-2 px-4 flex items-center justify-between">
            <button className="select-all-button" onClick={handleSelectAllStyles}>
          Select All
        </button>
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedStyles.includes("Boots") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleStyleSelection("Boots")}
            >
              Boots
              {selectedStyles.includes("Boots") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedStyles.includes("Cardigans") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleStyleSelection("Cardigans")}
            >
              Cardigans
              {selectedStyles.includes("Cardigans") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
          </ul>
        )}
        {selectedStyles.length > 0 && (
          <button className="reset-button" onClick={handleResetStyles}>
            Reset
          </button>
        )}
     
      </div>
      <div
        className="size relative"
        onMouseEnter={toggleSize}
        onMouseLeave={toggleSize}
      >
        Size
        {sizeOpen && (
          <ul className="sub-categories absolute bg-white shadow-md " >
            <li className="py-2 px-4 flex items-center justify-between">
            <button className="select-all-button" onClick={handleSelectAllSizes}>
          Select All
        </button>
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedSizes.includes("35") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSizeSelection("35")}
            >
              35
              {selectedSizes.includes("35") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedSizes.includes("36") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSizeSelection("36")}
            >
              36
              {selectedSizes.includes("36") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
            <li
              className={`py-2 px-4 flex items-center justify-between ${
                selectedSizes.includes("37") ? "bg-blue-200" : ""
              }`}
              onClick={() => handleSizeSelection("37")}
            >
              37
              {selectedSizes.includes("37") && (
                <span className="ml-2">&#10003;</span>
              )}
            </li>
          </ul>
        )}
        {selectedSizes.length > 0 && (
          <button className="reset-button" onClick={handleResetSizes}>
            Reset
          </button>
        )}
   
      </div>
    </div>
  );
}
