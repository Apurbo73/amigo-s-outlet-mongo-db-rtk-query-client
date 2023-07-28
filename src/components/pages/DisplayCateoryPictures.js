import React, { useEffect, useState } from "react";
import { data } from "../ImageData";
const DisplayCateoryPictures = props => {
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(
    () => {
      props.onFilter(selectedCategory);
    },
    [selectedCategory, props]
  );
  return (
    <div className="d-flex flex-wrap ">
      {data &&
        data.map(d => {
          return (
            <div
            className="categorySelect"
              style={{ margin: 10 }}
              onClick={() => {
                setSelectedCategory(d.category);
              }}
            >
              <img src={d.image} alt="" />
              <p style={{fontWeight:600}} className="text-center">
                {d.category}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayCateoryPictures;
