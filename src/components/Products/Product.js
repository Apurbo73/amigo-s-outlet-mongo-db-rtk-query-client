import React from "react";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  // console.log(singleproduct)

  const { _id, name, imageLink, seller, price } = product;
  return (
    <div className="col-12 col-lg-3 col-md-3 ">
      <div style={{ backgroundColor: "lavender" }} className="m-2 rounded">
        <img
          style={{ height: 280 }}
          src={imageLink}
          className="card-img-top p-5 "
          alt="..."
        />
        <div className="card-body text-center ">
          <h5 className="card-title">
            {name}
          </h5>
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
