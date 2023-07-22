import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <div>
      {/* navbar starts */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            Amigo's Outlet
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign Out
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* navbar ends */}
      {/* navbar part2 starts */}

      <div className="navPart2">
        <i className="fa-solid fa-bars navPart2Item mt-1" />
        <div className="navPart2Item">Sell</div>
        <div className="navPart2Item">Gift Cards Sell</div>
        <div className="navPart2Item">Registry</div>
        <div className="navPart2Item">Reviews</div>
        <div className="navPart2Item">Top Deals</div>
        <div className="navPart2Item">New Arrival</div>
      </div>
      {/* navbar part2 ends */}
      <Carousel></Carousel>
    </div>
  );
};

export default Header;
