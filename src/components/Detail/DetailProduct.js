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

  return (
    <div className="">
      {detailProduct && <DetailProductPage detailProduct={detailProduct} />}
    </div>
  );
};

export default DetailProduct;
