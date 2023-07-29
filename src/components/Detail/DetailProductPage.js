import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddToCartMutation, useDeleteProductMutation } from "../../features/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../pages/Header";
const DetailProductPage = ({ detailProduct }) => {
  const { _id, name, imageLink, seller, price, category } = detailProduct;
  const [deleteProduct, { isLoading,isSuccess }] = useDeleteProductMutation();
  // handle quantity  of products:
  let [count, setCount] = useState(1);
  //handle Increment Count:
  const handleIncrement = () => {
    setCount(count + 1);
    // console.log(count);
  };
  //handle Decrement Count:
  const handleDecrement = () => {
    setCount(count - 1);
    if (count === 0) {
      toast("Quantity can't be less than 1");
      setCount(0);
    }
  };
  //handle Add To Cart:
  const handleAddToCart=(e)=>{
    e.preventDefault();
    addToCart({
      name,
      category,
      imageLink,
      quantity: count,
      price: price* count,
      seller,
      
    });
    toast(` ${name} is added to cart`);

  }
  // console.log(count)
  const navigate = useNavigate();
  //handle Delete:
  const handleDelete = e => {
    e.preventDefault();
    deleteProduct(_id);
  };
  useEffect(
    () => {
      isSuccess && navigate("/");
    },
    [isSuccess]
  );
  const [addToCart ]=useAddToCartMutation();
  return (
    <div className="mb-5">
      <ToastContainer />
      <div>
        {/* navbar starts */}
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" href="#">
              Amigo's <span className="text-warning">Outlet</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link to='/cart' className="nav-link text-light" href="#">
                    Cart 
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/sign-up" className="nav-link text-light" href="#">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link text-light" href="#">
                    Guidelines
                  </a>
                </li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/add-product"
                  className="nav-item "
                >
                  <a className="nav-link text-light" href="#">
                    Add Product (+)
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </nav> */}
        <Header></Header>
        {/* navbar ends */}
        {/* navbar part2 starts */}

        {/* <div className="navPart2">
          <i className="fa-solid fa-bars navPart2Item mt-1" />
          <div className="navPart2Item">Sell</div>
          <div className="navPart2Item">Gift Cards </div>
          <div className="navPart2Item">Grocery</div>
          <div className="navPart2Item">Electronics</div>
          <div className="navPart2Item">Sports</div>
          <div className="navPart2Item">Mobiles</div>
          <div className="navPart2Item">Home</div>
          <div className="navPart2Item">Furniture</div>
          <div className="navPart2Item">Fashion</div>
          <div className="navPart2Item">Top Deals</div>
          <div className="navPart2Item">New Arrival</div>
        </div> */}
        {/* navbar part2 ends */}
      </div>

      <div className="row m-5">
        <div className="d-flex flex-wrap">
          <div className="col-md-5 col-lg-5 col-12">
            <img src={imageLink} alt="" className="w-100"/>
            <div className="text-center">
              <Link className="btn btn-dark m-1" onClick={handleIncrement}>
               +
              </Link>
              <Link className="btn btn-warning m-1">
                Quantity : {count}
              </Link>
              <Link className="btn btn-dark " onClick={handleDecrement}>
                -
              </Link> 
              <Link className="btn btn-outline-warning m-1" onClick={handleAddToCart} >
                Add To Cart
              </Link>
            </div>
          </div>

          <div className="col-md-7 col-lg-7 col-12">
            <div className="card-body text-center">
              <h5 className="card-title">
                {name}
              </h5>
              <p className="card-text">
                Price : {price}.
              </p>
              <p className="card-text">
                Seller : {seller}.
              </p>
              <p className="card-text">
                Category : {category}.
              </p>

              <Link className="btn btn-dark m-1 w-25" onClick={handleDelete}>
                Delete
              </Link>
              <Link to={`/edit/${_id}`} className="btn btn-warning w-25">
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductPage;
