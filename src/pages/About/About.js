import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Gurukrupa Handicraft</span>{" "}
          is your one-stop destination for exquisite wedding materials, crafting essentials, and a world of creative possibilities.
          <p style={{fontWeight:"600", fontSize:"21px",marginTop:"10px"}}>Owners:</p>
        
        <div style={{ display: "flex",marginTop:"5px" }}>
          <div style={{ marginRight: "100px" }}>
            <p>Navinbhai Ranpariya</p>
            <p>99133 28095</p>
          </div>

          <div>
            <p>Darshanbhai Shyani</p>
            <p>97121 07544</p>
          </div>
        </div>


          <p style={{ fontWeight: "600", fontSize: "21px", marginTop:"10px" }}>Address:</p>
          <p style={{marginTop:"5px"}}>34, Vandana society, vi-1, Opp, Harikrushna society, shyamdham road, nana varachha, surat.</p>
        </h1>
        <Link to="/shop">
          <button className="w-52 mt-5 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
