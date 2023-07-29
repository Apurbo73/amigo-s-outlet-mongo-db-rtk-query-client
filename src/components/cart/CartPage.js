import React from "react";
import { useRemoveFromCartMutation } from "../../features/apiSlice";

const CartPage = ({ list }) => {
  const { name, imageLink, price, quantity, seller, category, _id } = list;
  const [
    removeFromCart,
    { isLoading, isError, error }
  ] = useRemoveFromCartMutation();
  //handle Delete:
  const handleDelete = (e) => {
    e.preventDefault();
    removeFromCart(_id);
  };
  return (
    <div>
      <div className=" m-5">
        <div className="">
          <div className=" m-4">
            <div className="card ">
              <img src={imageLink} className="card-img-top p-5" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">
                  Name: {name}
                </h5>
                <p className="card-text">
                  Category: {category}
                </p>
                <p>
                  Seller: {seller}
                </p>
                <p>
                  Quantity: {quantity}
                </p>
                <p>
                  Price: {price}
                </p>

                <a href="#" className="btn btn-danger" onClick={handleDelete}>
                  Delete From Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
