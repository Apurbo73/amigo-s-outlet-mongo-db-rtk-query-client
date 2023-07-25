import React from "react";
import { Link } from "react-router-dom";
const Product = ({singleproduct}) => {
  console.log(singleproduct)

  const {_id,name,imageLink, seller,price}=singleproduct;
  return (
    <div className=" ">
      <div className="card m-2 col-12 col-lg-6 col-md-6" style={{ width: "18rem" }}>
        <img style={{height:250}} src={imageLink} className="card-img-top" alt="..." />
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
