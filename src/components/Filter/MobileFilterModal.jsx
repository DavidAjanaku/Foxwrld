import React, { useState } from "react";
import Modal from "react-modal";

const MobileFilterModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log(selectedCategory);
  };

  const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
    content: {
      top: "0",
      right: "0",
      left: "0",
      bottom: "0",
    },
  };

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  Modal.setAppElement("#root"); // Replace '#root' with the root element of your app

  return (
    <div className="z-40 fixed bottom-0 right-0 m-4 md:hidden">
      <button
        onClick={openModal}
        className="bg-black hover:bg-slate-800 text-white font-bold p-5 rounded-full"
      >
        <svg
          className="icon__content"
          viewBox="0 0 1 0.75"
          focusable="false"
          width="16"
          height="12"
          style={{ fill: "#ffffff" }}
        >
          <title>facets</title>
          <path
            d="M.63.03v.03H0v.13h.63v.06h.12V.19H1V.06H.75V0H.63v.03M0 .125V.09v.035M.19.53v.03H0v.13h.19v.06h.12V.69H1V.56H.31V.5H.19v.03M0 .63V.59v.04"
          ></path>
        </svg>
      </button>
      <Modal
        isOpen={modalIsOpen}
        style={customModalStyles}
        onRequestClose={closeModal}
        contentLabel="Mobile Filter Modal"
      >
        <h2 className="text-2xl font-bold mb-4">Mobile Filter Modal</h2>
        <form>
          <div className="accordion">
            <button className="accordion-button">
              Accordion Title
              {/* Accordion icon */}
            </button>
            <div className="accordion-content">
              <select
                value={selectedCategory}
                onChange={handleCategorySelect}
                className="border border-gray-300 px-4 py-2 rounded-md"
              >
                <option value="">Select a category</option>
                <option value="subcategory1">Subcategory 1</option>
                <option value="subcategory2">Subcategory 2</option>
                {/* Add more subcategories as needed */}
              </select>
            </div>
          </div>
          <button
            onClick={closeModal}
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </form>
        <button
          onClick={closeModal}
          className="text-black font-bold py-2 px-4 rounded mt-4"
        >
          X
        </button>
      </Modal>
    </div>
  );
};

export default MobileFilterModal;
