import React from "react";
import { Link } from "react-router-dom";
const Product = ({allProducts}) => {
  console.log(allProducts)

  const {_id,name,imageLink, seller,price}=allProducts;
  return (
    <div className=" ">
      <div className="card m-2 col-12 col-md-2 col-lg-2" style={{ width: "18rem" }}>
        <img src={imageLink} className="card-img-top" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
           Price: {price} Taka
          </p>
          <Link to={`/detail/${_id}`} className="btn btn-warning w-100">
            See Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
