import React, { useEffect, useState } from "react";

// import { data } from "../ImageData";
import Product from "./Product";

const AllProducts = ({ allProducts }) => {
  return (
    <div className="row">
     <div className="d-flex flex-wrap">
     {allProducts &&
        allProducts.map(product =>
          <Product key={product.id} product={product} />
        )}
     </div>
    </div>
  );
};

export default AllProducts;
