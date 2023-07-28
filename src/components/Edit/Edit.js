import React from "react";
import EditForm from "./EditForm";
import { useGetSingleProductQuery } from "../../features/apiSlice";
import { useParams } from "react-router-dom";
import Header from "../pages/Header";

const Edit = () => {
  const { id } = useParams();

  const {
    data: singleProduct,
    isLoading,
    isError,
    error
  } = useGetSingleProductQuery(id);
  //   console.log(detailProduct)
  return (
    <div>
      <Header />
      {singleProduct && <EditForm singleProduct={singleProduct} />}
    </div>
  );
};

export default Edit;
