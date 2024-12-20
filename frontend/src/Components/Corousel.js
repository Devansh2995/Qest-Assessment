import React, { useState } from "react";
import "./Corousel.css";

const Carousel = ({ items, visibleItems = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - visibleItems : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === items.length - visibleItems ? 0 : prev + 1
    );
  };

  const displayedItems = items.slice(
    currentIndex,
    currentIndex + visibleItems
  ).length < visibleItems
    ? [...items.slice(currentIndex), ...items.slice(0, visibleItems - items.slice(currentIndex).length)]
    : items.slice(currentIndex, currentIndex + visibleItems);

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="carousel-items">
        {displayedItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.imgSrc} alt={item.altText} />
            <h3>{item.title}</h3>
            <p>
              {item.description} <a href="#">Know more...</a>
            </p>
          </div>
        ))}
      </div>
      <button className="carousel-btn next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
