import React from "react";
import Carousel from "../src/components/pages/Carousel"
import AllProducts from "./components/Products/AllProducts";
function App() {
  return (
    <div className="App">
      <Carousel />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        provident velit dicta quae, sequi, laudantium odit optio inventore
        soluta adipisci officia eius ea ratione! Expedita pariatur sit sunt
        beatae natus?
      </p>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
