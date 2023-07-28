import React, { useState } from "react";
import AllProducts from "../Products/AllProducts";
import Carousel from "./Carousel";
import Search from "../Search";
import { Link } from "react-router-dom";
import DisplayCateoryPictures from "./DisplayCateoryPictures";
const Home = ({ allProducts }) => {
  const [products, setProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [show, setShow] = useState(false);

  // handle Search:
  const handleSearch = searchText => {
    // console.log(searchText);
    let text = searchText.toLowerCase();
    const searchedProduct = products.filter(data => {
      const newProduct = data.name.toLowerCase();
      return newProduct.includes(text);
    });
    setFilteredProducts(searchedProduct);
  };
    //handle Filter Category:
    const handleFilterCategory=(category)=>{
      let filteredCategory = category.toLowerCase();
      const filteredProduct = allProducts.filter(data => {
        const newProduct = data.category.toLowerCase();
        return newProduct.includes(filteredCategory);
      });
      show && setFilteredProducts(filteredProduct);
    }
  return (
    <div>
      {/* navbar starts */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

            <Search onSearch={handleSearch} />
          </div>
        </div>
      </nav>
      {/* navbar ends */}
      {/* navbar part2 starts */}

      <div className="navPart2 mt-5">
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

      <Carousel />

      <div className="" onClick={()=>{setShow(!show)}}>
        <DisplayCateoryPictures onFilter={handleFilterCategory} />
      </div>
      <p className="p-1 btn-secondary text-center " onClick={()=>{setShow(!show)}}>{show ? "Unselect Category To See All" : "Select Category Above"}</p>

      {allProducts && <AllProducts allProducts={filteredProducts} />}
    </div>
  );
};

export default Home;
