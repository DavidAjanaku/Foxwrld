import React, { useState } from 'react';

export default function ProductCard({ image,alternateImage, title, color, category }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const renderImage = () => {
    if (hovered) {
      // Render the alternate image when hovered
      return <img src={alternateImage} className="object-cover w-full h-full" alt={title} />;
    } else {
      // Render the default image
      return <img src={image} className="object-cover w-full h-full" alt={title}  />;
    }
  };

  return (
    <div className="product-card w-96 h-96">
    <div
      className="product-image relative w-full h-full pb-square"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0">{renderImage()}</div>
    </div>
    <div className="product-details text-center">
      <h2 className="product-title">{title}</h2>
      <p className="product-color">Color: {color}</p>
      <p className="product-category">{category}</p>
    </div>
  </div>
  );
}
