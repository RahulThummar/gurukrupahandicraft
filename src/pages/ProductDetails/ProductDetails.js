import React, { useEffect, useState } from "react";
import { paginationItems } from "../../constants";
import {Link, useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";


const ProductDetails = () => {
  const location = useLocation();
  const { _id } = useParams(); 
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const [found, setFound] = useState(true);
  const filteredData= paginationItems.filter((a)=>a._id==_id) 
  const foundItem = paginationItems.find(item => item._id == _id);

  useEffect(() => {
    if (location.state) {
      setProductInfo(location.state.item);
    } else {
      setProductInfo(filteredData);
    }

    if (!foundItem) {
    setFound(false)
     } 
    setPrevLocation(location.pathname);
  }, [location , found]);

   const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      {found ?
        
          productInfo.length > 0 &&
            <div className="max-w-container mx-auto px-4">
              <div className="xl:-mt-10 -mt-7">
                <Breadcrumbs title="" prevLocation={prevLocation} />
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
                <div className="h-full">
                  <ProductsOnSale productInfo={productInfo[0]} />
                </div>
          
                <div className="h-full xl:col-span-2" onClick={() => openModal()}>
                  <img
                    className="w-full h-full object-fill cursor-pointer"
                    src={productInfo[0].img[0]}
                    alt={productInfo[0].img[0]}
                  />
                </div>
                <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
                  <ProductInfo productInfo={productInfo[0]} />
                </div>
              </div>
            </div>
        
        :
      
<div className="flex items-center justify-center m-10 ">
  <div className="max-w-[500px] p-4 py-5 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
    <h1 className="font-titleFont text-xl font-bold uppercase">
      No Product Found
    </h1>
    <p className="text-sm text-center px-10 -mt-2">
      We couldn't find any product matching your search criteria.
      Explore our shop for a wide range of items.
    </p>
    <Link to="/shop">
      <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
        Continue Shopping
      </button>
    </Link>
  </div>
</div>



      }

      
       {isModalOpen && (
        <div
          className="fixed top-10 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
           style={{
      borderRadius: '10px', 
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', 
    }}
        >
          <div className="w-[450px] h-[500px] p-4">
            <img
              className="w-full h-full object-fill cursor-pointer"
              src={productInfo[0].img[0]}
              alt={productInfo[0].img[0]}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetails;
