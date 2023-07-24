import React, { useState } from "react";
import { useAddProductMutation } from "../../features/apiSlice";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [seller, setSeller] = useState("");
  const [price, setPrice] = useState("");
  const [addProduct, { isLoading, isError, error }] = useAddProductMutation();

  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    addProduct({
      name,
      category,
      imageLink,
      seller,
      price
    });
  };

  return (
    <div>
      <div className="row mt-5">
        <h4 className="text-center">Add New Product</h4>
        <form
          className="col-12 col-md-4 col-lg-4 mx-auto shadow-lg p-3 mb-5 bg-body rounded"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Product Name"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Product Category"
              onChange={e => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Product Price"
              onChange={e => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emaileHelp"
              placeholder="Enter Image Link"
              onChange={e => {
                setImageLink(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Seller Name"
              onChange={e => {
                setSeller(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-warning  w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
