import React from "react";
import { SplOfferData } from "../../../constants";

const ProductsOnSale = (props) => {
  console.log(props,"ppppppptrd")
  return (
    <div>
      {/* <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3> */}
      <div className="flex flex-col gap-2">
        {props.productInfo.img.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24" src={item} alt={item} />
            </div>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
