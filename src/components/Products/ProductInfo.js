import React from "react";
import Product from "./Product";

const ProductInfo = ({ products }) => {
  return (
    <div className="">
      <div className="row ">
        <div className="d-flex flex-wrap ">
          {products &&
            products.map(singleproduct =>
              <Product singleproduct={singleproduct} />
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
