import React, { useEffect, useState } from "react";
import { paginationItems } from "../../constants";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";


const ProductDetails = () => {
  const location = useLocation();
  const { _id } = useParams(); 
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);
  const filteredData = paginationItems.filter((a) => a._id == _id)
  
  console.log(location.state.item, "location.state.item")

  useEffect(() => {
    if (location.state) {
      setProductInfo(location.state.item);
    } else {
      setProductInfo(filteredData);
    }
    setPrevLocation(location.pathname);
  }, [location]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      {productInfo.length>0&&
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">
            <ProductsOnSale productInfo={productInfo[0]} />
          </div>
          
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full object-fill"
              src={productInfo[0].img[0]}
              alt={productInfo[0].img[0]}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo[0]} />
          </div>
        </div>
      </div>}
    </div>
  );
};

export default ProductDetails;
