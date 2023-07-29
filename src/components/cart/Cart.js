import React from "react";
import CartPage from "./CartPage";
import Header from "../pages/Header";
import { useGetCartListQuery } from "../../features/apiSlice";
import Balance from "../pages/Balance";

const Cart = () => {
  const { data: cartList, isLoading, isError, error } = useGetCartListQuery();
  return (
    <div>
      <Header />
     <div className="row container mx-auto">
         <div className="d-flex flex-wrap">
        <div className="col-md-7 col-lg-7 col-12">
          {cartList &&
            cartList.map(list => <CartPage key={list.id} list={list} />)}
        </div>
        <div className="col-md-5 col-lg-5 col-12">
          <Balance />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Cart;
