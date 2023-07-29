import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/pages/Header";
import SignUp from "./components/SignUp/SignUp";
import LogIn from "./components/Login/LogIn";
import Add from "./components/AddProduct/Add";
import DetailProduct from "./components/Detail/DetailProduct";
import Edit from "./components/Edit/Edit";
import Footer from "./components/pages/Footer";
import Cart from "./components/cart/Cart";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/add-product" element={<Add />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
