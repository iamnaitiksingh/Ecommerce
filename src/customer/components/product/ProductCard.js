import React from "react";
import { useNavigate } from "react-router-dom";
// import product from  "../../../Data/mens_kurta"

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className=" w-[15rem] m-3 rounded-lg shadow-lg shadow-slate-500  my-5 border border-red-500 cursor-pointer hover:shadow-2xl transition ease-in-out  hover:scale-110     "
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full rounded-t-lg   object-cover object-left-top  "
          src={product.imageUrl}
          alt="image_men"
        />
      </div>
      <div className="textPart rounded-b-lg bg-slate-300 p-3">
        <div>
          {<p className="font-bold opacity-60">{product.brand}</p>}
          <p>{product.title}</p>
        </div>
        <div className=" flex items-center space-x-2">
          <p className="font-semibold">₹ {product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
