import React from "react";
import Product from "./Product";
import { useGetAllProductsQuery } from "../../features/apiSlice";
import { isAllOf } from "@reduxjs/toolkit";

const AllProducts = () => {
  const { data: allProducts, isError, error } = useGetAllProductsQuery();
  return (
    <div className="row ">
    <div className="d-flex flex-wrap">
    {allProducts && allProducts.map((all)=><Product allProducts={all} />)}

    </div>
    </div>
  );
};

export default AllProducts;
