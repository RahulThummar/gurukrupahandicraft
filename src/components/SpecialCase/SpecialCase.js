import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [cartCountChanged, setCartCountChanged] = useState(false);

  useEffect(() => { 
    setCartCountChanged(true); 
    const animationTimeout = setTimeout(() => {
      setCartCountChanged(false);
    }, 1000); // Adjust the duration as per your preference

    return () => clearTimeout(animationTimeout);
  }, [products.length]);

  return (
    <div className="fixed top-52 right-2 z-20 flex flex-col gap-2">
      <Link to="/cart">
        <div
          className={`bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative ${
            cartCountChanged ? "animate-cart" : ""
          }`}
        >
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Buy Now</p>
          {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
