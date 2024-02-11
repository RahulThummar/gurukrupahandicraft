import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Image = ({ imgSrc, className }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <Skeleton width="100%" height="100%" style={{ position: "absolute" }} />
      )}
      <img
      
        className={className}
        src={imgSrc}
        alt={imgSrc}
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
};

export default Image;
