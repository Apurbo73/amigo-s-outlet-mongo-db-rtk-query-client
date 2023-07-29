import React from "react";
import { useGetCartListQuery } from "../../features/apiSlice";

const Balance = () => {
  const {
    data: cartProducts,
    isLoading,
    isError,
    error
  } = useGetCartListQuery();
  //calculating  balance:

  const total = cartProducts => {
    let balance = 0;
    {
      cartProducts &&
        cartProducts.forEach(b => {
          const { price } = b;
          balance = balance + price;
        });
    }
    return balance;
  };

  //calculating total quantity of products in cart:

  const quantityOfproducts = cartProducts => {
    let totalProducts = 0;
    {
      cartProducts &&
        cartProducts.forEach(t => {
          const { quantity } = t;
          totalProducts = totalProducts + quantity;
        });
    }
    return totalProducts;
  };
  return (
    <div className="mt-5">
      <div
        style={{ height: 260 }}
        className=" border text-center bg-warning m-4"
      >
        <div className="m-3">
          <h4>{cartProducts && cartProducts.length !==0 ? "Your Cart" :"Your Cart Is Empty"} </h4>
          <hr />
          <h6> Total Category :  {cartProducts && cartProducts.length}</h6>
          <h6>Total Product: {quantityOfproducts(cartProducts)}</h6>
          <h6> Total Price : {total(cartProducts)} </h6>
          <div className="mt-3 btn btn-dark">Checkout Now</div>
          <p className="mt-2">Thanks For Visit</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
