import React, { useState } from "react";
import { data_calligraphy } from "../DATA/Data_calligraphy";
import "../CSS/Category.css";
import Parser from "html-react-parser";

function Category_main() {
  const [calligraphy, setCalligraphy] = useState(data_calligraphy);

  return (
    <div className="category">
      <div className="category-container">
        {calligraphy.map((item) => (
          <div key={item.id} className="category-item">
            <h2 className="category-item-title">{item.name}</h2>
            <img
              className="category-item-image"
              src={item.img}
              alt={item.name} 
            />
            <p className="category-item-content">
              {Parser(item.content_short)}
            </p>
            <a
              className="category-item-link"
              href={"/Detail_calligraphy/" + item.id}
            >
              See More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category_main;
