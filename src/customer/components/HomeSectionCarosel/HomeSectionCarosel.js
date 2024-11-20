import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductCard from "../product/ProductCard";


const HomeSectionCarousel = ({ data = [], sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Create a ref for the carousel

  const items = data.slice(0, 10).map((item, index) => (
    <ProductCard key={index} product={item} />
  ));

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
    carouselRef.current?.slidePrev(); // Trigger carousel slide
  };

  const slideNext = () => {
    setActiveIndex((prev) =>
      Math.min(prev + 1, items.length - responsive[1024].items)
    );
    carouselRef.current?.slideNext(); // Trigger carousel slide
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>

      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach ref to the carousel
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex < items.length - responsive[1024].items && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;