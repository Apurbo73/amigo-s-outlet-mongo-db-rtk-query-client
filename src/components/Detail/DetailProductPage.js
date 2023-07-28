import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../features/apiSlice";

const DetailProductPage = ({ detailProduct }) => {
  const { _id, name, imageLink, seller, price, category } = detailProduct;
  const [deleteProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
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
  return (
    <div>
      <div>
        {/* navbar starts */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                  <a className="nav-link text-light" href="#">
                    Cart
                  </a>
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
        </nav>
        {/* navbar ends */}
        {/* navbar part2 starts */}

        <div className="navPart2">
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
        </div>
        {/* navbar part2 ends */}
      </div>
      <div className="card mb-3 mx-auto mt-5" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={imageLink}
              className="img-fluid rounded-start p-3"
              alt="..."
            />
            <div className="text-center">
              <Link className="btn btn-dark m-1">+</Link>
              <Link className="btn btn-warning m-1">0</Link>
              <Link className="btn btn-dark ">-</Link>
            </div>
          </div>
          <div className="col-md-5">
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

              <Link className="btn btn-dark m-1" onClick={handleDelete}>
                Delete
              </Link>
              <Link to={`/edit/${_id}`} className="btn btn-warning ">
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
