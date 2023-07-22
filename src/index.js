import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/pages/Header";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
