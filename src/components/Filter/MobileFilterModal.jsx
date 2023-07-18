import React, { useState } from "react";
import Modal from "react-modal";

const MobileFilterModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionStylesOpen, setAccordionStylesOpen] = useState(false);
  const [accordionSizesOpen, setAccordionSizesOpen] = useState(false);

  const [selectedTags, setSelectedTags] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    console.log("Selected tags:", selectedTags); 
  };

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const toggleStylesAccordion = () => {
    setAccordionStylesOpen(!accordionStylesOpen);
  };

  const toggleSizesAccordion = () => {
    setAccordionSizesOpen(!accordionSizesOpen);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
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

  Modal.setAppElement("#root"); 

  return (
    <div className="z-40 fixed bottom-0 right-0 m-4 md:hidden">
      <button
        onClick={openModal}
        className="bg-black hover:bg-slate-800 text-white font-bold p-5 rounded-full"
      >
       <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M4 6h16M4 12h8m-8 6h16"
  />
</svg>

      </button>
      <Modal
        isOpen={modalIsOpen}
        style={customModalStyles}
        onRequestClose={closeModal}
        contentLabel="Mobile Filter Modal"
      >
          <button
    onClick={closeModal}
    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
        <h2 className="text-2xl font-bold mb-4">Mobile Filter Modal</h2>
        <div className="accordion">
          <button
            className="accordion-button fontBold"
            onClick={toggleAccordion}
          >
            Category
            {/* SVG */}
          </button>
          {accordionOpen && (
            <div className="accordion-content">
              <div>
                <label
                  className={`inline-flex items-center mt-2 cursor-pointer ${
                    selectedTags.includes("bag(323)")
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleTagClick("bag(323)")}
                >
                  <span className="ml-2">bag(323)</span>
                  {selectedTags.includes("bag(323)") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </label>
                <label
                  className={`inline-flex items-center mt-2 cursor-pointer ${
                    selectedTags.includes("Cape (23)")
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleTagClick("Cape (23)")}
                >
                  <span className="ml-2">Cape (23)</span>
                  {selectedTags.includes("Cape (23)") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </label>
                <label
                  className={`inline-flex items-center mt-2 cursor-pointer ${
                    selectedTags.includes("Blazers (22)")
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleTagClick("Blazers (22)")}
                >
                  <span className="ml-2">Blazers (22)</span>
                  {selectedTags.includes("Blazers (22)") && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </label>
              </div>
            </div>
          )}
          <div>
            <button
              className="accordion-button fontBold"
              onClick={toggleStylesAccordion}
            >
              Styles
              {/* SVG */}
            </button>
            {accordionStylesOpen && (
              <div className="accordion-content">
                <div>
                  <label
                    className={`inline-flex items-center mt-2 cursor-pointer ${
                      selectedTags.includes("Style 1")
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleTagClick("Style 1")}
                  >
                    <span className="ml-2">Style 1</span>
                    {selectedTags.includes("Style 1") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </label>
                  <label
                    className={`inline-flex items-center mt-2 cursor-pointer ${
                      selectedTags.includes("Style 2")
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleTagClick("Style 2")}
                  >
                    <span className="ml-2">Style 2</span>
                    {selectedTags.includes("Style 2") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </label>
                  <label
                    className={`inline-flex items-center mt-2 cursor-pointer ${
                      selectedTags.includes("Style 3")
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleTagClick("Style 3")}
                  >
                    <span className="ml-2">Style 3</span>
                    {selectedTags.includes("Style 3") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </label>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              className="accordion-button fontBold"
              onClick={toggleSizesAccordion}
            >
              Sizes
              {/* SVG */}
            </button>
            {accordionSizesOpen && (
              <div className="accordion-content">
                <div>
                  <label
                    className={`inline-flex items-center mt-2 cursor-pointer ${
                      selectedTags.includes("S(32)")
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleTagClick("S(32)")}
                  >
                    <span className="ml-2">S(32)</span>
                    {selectedTags.includes("S(32)") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </label>
                  <label
                    className={`inline-flex items-center mt-2 cursor-pointer ${
                      selectedTags.includes("L (333)")
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleTagClick("L (333)")}
                  >
                    <span className="ml-2">L (333)</span>
                    {selectedTags.includes("L (333)") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </label>
                  <label
                    className={`inline-flex items-center mt-2 cursor-pointer ${
                      selectedTags.includes("Large")
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleTagClick("Large")}
                  >
                    <span className="ml-2">Large</span>
                    {selectedTags.includes("Large") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L9.586 10 7.293 7.707a1 1 0 111.414-1.414L11 8.586l2.293-2.293a1 1 0 111.414 1.414L12.414 10l2.293 2.293a1 1 0 01-1.414 1.414L11 11.414l-2.293 2.293a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={closeModal}
          className="bg-black text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default MobileFilterModal;
