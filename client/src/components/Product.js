import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { toast, ToastContainer } from "react-toastify";
const Product = () => {
  const [product, setProduct] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const { state } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    setProduct(state ? state : {});
  }, [state]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={product && product.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
            {product && product.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">
              {product && product.title}
            </h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">
                ${product && product.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${product && product.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-base">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">
            {product && product.description}
          </p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? baseQty : baseQty - 1)
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                {baseQty}
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                addToCart({
                  _id: product._id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  quantity: baseQty,
                  description: product.description,
                }) & toast.success(`${product.title} is added`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category:
            <span className="font-medium capitalize">
              {product && product.category}
            </span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Product;
