import React from "react";

const AddProductForm = () => {
  return (
    <div>
      <div className="row mt-5">
        <h4 className="text-center">Add New Product</h4>
        <form className="col-12 col-md-4 col-lg-4 mx-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Product Category"
            />
          </div>{" "}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Product Price"
            />
          </div>{" "}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emaileHelp"
              placeholder="Enter Image Link"
            />
          </div>{" "}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Seller Name"
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
