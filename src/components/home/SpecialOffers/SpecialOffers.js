import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product"; 
import { SplOfferData } from "../../../constants";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {SplOfferData.map((item) => (
          <Product
            _id={item._id}
            img={item.img[0]}
            productName={item.productName}
            price={item.price}
            color={item.color}
            badge={item.badge}
            des={item.des}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
