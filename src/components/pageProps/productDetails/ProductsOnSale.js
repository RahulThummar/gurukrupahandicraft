import React, { useState } from "react";
import { SplOfferData } from "../../../constants";

const ProductsOnSale = (props) => { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgPath, setImgPath] = useState(null);

  const openModal = (img) => {
    setImgPath(img)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            onClick={()=>openModal(item)}
          >
            <div>
              <img className="w-24 cursor-pointer" src={item} alt={item} />
            </div>
             
          </div>
        ))}
      </div>

     {isModalOpen && (
  <div
    className="fixed top-10 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
    onClick={closeModal}
    style={{
      borderRadius: '10px', 
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
    }}
  >
    <div className="w-[450px] h-[500px] p-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
      <img
        className="w-full h-full object-contain cursor-pointer"
        src={imgPath}
        alt={imgPath}
        style={{ borderRadius: '10px' }}
      />
    </div>
  </div>
)}



    </div>
  );
};

export default ProductsOnSale;
