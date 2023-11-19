import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product"; 
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { newArrivalData } from "../../../constants";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {newArrivalData.map((item) => (
          <div className="px-2">
            <Product
              _id={item._id}
              img={item.img[0]}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
