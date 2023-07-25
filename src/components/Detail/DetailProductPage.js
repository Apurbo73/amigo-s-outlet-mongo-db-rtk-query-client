import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../features/apiSlice";

const DetailProductPage = ({ detailProduct }) => {
  const { _id, name, imageLink, seller, price, category } = detailProduct;
  const [deleteProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
  const navigate = useNavigate();
  //handle Delete:
  const handleDelete = e => {
    e.preventDefault();
    deleteProduct(_id);
  };
  useEffect(() => {
    isSuccess && navigate("/");
  }, [isSuccess]);
  return (
    <div>
      <div
        className="card m-2 col-12 col-md-2 col-lg-2 mx-auto mt-5"
        style={{ width: "20rem" }}
      >
        <img src={imageLink} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">
            {name}
          </h5>
          <p className="card-text">
            Price: {price} Taka
          </p>
          <p className="card-text">
            Seller: {seller}
          </p>
          <p className="card-text">
            Category: {category}
          </p>
          <Link to="/" className="btn btn-warning w-50">
            Edit
          </Link>
          <Link  className="btn btn-dark w-50" onClick={handleDelete}>
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
