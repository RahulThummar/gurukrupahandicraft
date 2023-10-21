import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { useLocation } from "react-router-dom";

const items = paginationItems;
console.log(items, "items")
function Items({ currentItems }) {
  console.log(currentItems[3],"====")
  return (
    <>
      {currentItems.map((item) => (
        <div key={item._id} className="w-full cover-fill">
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
    </>
  );
}

const Pagination = ({ itemsPerPage: defaultItemsPerPage }) => {
    const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (location.state.item) {
       console.log("object")
      
       setSearchTerm(location.state.item);
     }
  }, [location.state]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setItemOffset(0); // Reset offset when search term changes
  };

  console.log(searchTerm, "====searchTerm")
  console.log(typeof(searchTerm), "====searchTerm")


  const filteredItems = items.filter((item) => {
    const productName = item.productName ? item.productName.toLowerCase() : '';
    const des = item.des ? item.des.toLowerCase() : '';

    return (
        productName.includes(searchTerm.toLowerCase()) ||
        des.includes(searchTerm.toLowerCase())
    );
});

  const endOffset = Math.min(itemOffset + itemsPerPage, filteredItems.length);
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const itemStart = itemOffset + 1; // Adjusted calculation for itemStart

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setItemOffset(0); // Reset offset when items per page changes
  };

  return (
  <div>
  <div className="flex items-center gap-4 justify-between w-full mb-4 flex-col md:flex-row">
    <div className="w-full md:w-[60%] mb-4 md:mb-0">
      <div className="relative w-full md:w-[400px] h-[50px] bg-bg-white flex items-center gap-2 text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
        <input
          className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] bg-white placeholder:text-[14px]"
          type="search"
          onChange={handleSearch}
          value={searchTerm}
          placeholder="Search your products here"
        />
        <FaSearch className="w-5 h-5" />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-2 text-base text-[#767676] relative">
      <label className="block md:mr-2">Sort by:</label>
      <select
        id="countries"
        className="w-full md:w-48 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
        onChange={handleSearch}
      >
        <option value="">- Select Product -</option>
        <option value="Clock" selected={searchTerm === "Clock"}>Wall Clock</option>
        <option value="Toran" selected={searchTerm==="Toran"}>Toran</option>
        <option value="Bajoth" selected={searchTerm==="Bajoth"}>Bajoth</option>
      </select>
      <span className="absolute text-sm right-2 md:right-4 top-2.5">
        <GoTriangleDown />
      </span>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-2 text-base text-[#767676] relative">
      <label className="block md:mr-2">Show:</label>
      <select
        onChange={handleItemsPerPageChange}
        value={itemsPerPage}
        id="countries"
        className="w-full md:w-16 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
      >
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="36">36</option>
        <option value="48">48</option>
      </select>
      <span className="absolute text-sm right-3 top-2.5">
        <GoTriangleDown />
      </span>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mdl:gap-4 lg:gap-10">
    <Items currentItems={currentItems} />
  </div>

  {endOffset > 0 &&
    <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
        pageClassName="mr-6"
        containerClassName="flex text-base font-semibold font-titleFont py-10"
        activeClassName="bg-black text-white"
      />

      <p className="text-base font-normal text-lightText">
        Products from {endOffset > 0 ? itemStart : 0} to {endOffset} of {filteredItems.length}
      </p>
    </div>
  }
  {endOffset < 1 &&
    <p className="text-base font-normal text-lightText">
      No product found.
    </p>}
</div>

  );
};

export default Pagination;
