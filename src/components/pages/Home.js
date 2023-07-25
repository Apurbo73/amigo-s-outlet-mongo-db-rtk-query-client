import React from "react";
import { useGetAllProductsQuery } from "../../features/apiSlice";
import AllProducts from "../Products/AllProducts";

const Home = () => {
  const { data: allProducts, isError, error } = useGetAllProductsQuery();

  return (
    <div>
      {allProducts && <AllProducts allProducts={allProducts} />}
    </div>
  );
};

export default Home;
