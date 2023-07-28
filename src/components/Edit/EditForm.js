import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdateProductMutation } from "../../features/apiSlice";

const EditForm = ({ singleProduct }) => {
  const {
    _id,
    name: initialName,
    category: initialCategory,
    price: initialPrice,
    imageLink: initialImage,
    seller: initialSeller
  } = singleProduct;

  const [name, setName] = useState(initialName);
  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState(initialPrice);
  const [imageLink, setImageLink] = useState(initialImage);
  const [seller, setSeller] = useState(initialSeller);
  const [
    updateProduct,
    { isLoading, isError, error }
  ] = useUpdateProductMutation();
  //handle update Submit:
  const handleSubmit = e => {
    e.preventDefault();
    updateProduct({
      id:_id,
      data: {
        name,
        category,
        price,
        imageLink,
        seller
      }
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
              value={name}
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
              value={category}
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
              value={price}
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
              value={imageLink}
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
              value={seller}
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

export default EditForm;
