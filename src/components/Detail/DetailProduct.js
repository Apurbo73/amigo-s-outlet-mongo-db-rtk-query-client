import React from "react";
import DetailProductPage from "./DetailProductPage";
import { useGetSingleProductQuery } from "../../features/apiSlice";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const {
    data: detailProduct,
    isLoading,
    isError,
    error
  } = useGetSingleProductQuery(id);
  console.log(detailProduct)
  //decide what to render:
  //   let content = null;
  //   if (isLoading) {
  //     content = <div>Loading...</div>;
  //   }
  //   if (!isLoading && isError) {
  //     content = <div>Something went wrong...</div>;
  //   }
  //   if (!isLoading && !isError && detailProduct.length !== 0) {
  //     content = <DetailProductPage />;
  //   }
  return (
    <div>
      {detailProduct && <DetailProductPage detailProduct={detailProduct} />}
    </div>
  );
};

export default DetailProduct;
