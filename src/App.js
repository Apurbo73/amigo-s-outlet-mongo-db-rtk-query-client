import React from "react";
import Carousel from "../src/components/pages/Carousel";
import AllProducts from "./components/Products/AllProducts";
import Home from "./components/pages/Home";
import { useGetAllProductsQuery } from "./features/apiSlice";
function App() {
  const { data: allProducts, isError, error } = useGetAllProductsQuery();

  return (
    <div className="App">
      {allProducts && <Home allProducts={allProducts} />}
    </div>
  );
}

export default App;
