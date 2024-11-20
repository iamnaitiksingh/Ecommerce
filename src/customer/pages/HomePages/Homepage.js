import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../../components/HomeSectionCarosel/HomeSectionCarosel";
import mens_kurta from "../../../Data/mens_kurta";
import { findProducts } from "../../../State/Product/Action";
import { Pagination } from "@mui/material";

const Homepage = () => {
  const location = useLocation();
  const param = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
console.log("products",products.products.content)
console.log("mens_kurta", mens_kurta)
  // Extract query parameters
  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const colorValue = searchParams.get("color");
  const sizeValue = searchParams.get("size");
  const priceValue = searchParams.get("price");
  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = parseInt(searchParams.get("page")) || 1;
  const stock = searchParams.get("stock");

  useEffect(() => {
    const [minPrice, maxPrice] = priceValue
      ? priceValue.split("-").map(Number)
      : [0, 10000];

    const data = {
      category: "mens_kurta", // Corrected typo
      colors: colorValue || [],
      sizes: sizeValue || [],
      minPrice,
      maxPrice,
      minDiscount: discount || 0, // Corrected spelling
      sort: sortValue || "price_low",
      pageNumber,
      pageSize: 10,
      stock,
    };
    dispatch(findProducts(data));
  }, [
    param.levelThree,
    colorValue,
    sizeValue,
    priceValue,
    discount,
    sortValue,
    pageNumber,
    stock,
    dispatch,
  ]);

  return (
    <>
      <MainCarosel />
      <div
        className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10"
      >
        <HomeSectionCarousel data={products.products.content} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </>
  );
};

export default Homepage;
