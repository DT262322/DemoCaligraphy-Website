import React, { useState } from "react";
import {data_calligraphy, data_feature} from "../DATA/Data_calligraphy";
import "../CSS/Category.css";
import { useParams } from "react-router-dom";
import Parser from "html-react-parser"
function Category_filter() {
  
 const {cat_id} = useParams();
 const tam=data_calligraphy.filter(x=>x.categoryid==cat_id)
 console.log(tam)
 const [calligraphy, setCalligraphy] = useState(tam);
 console.log('catid=', cat_id)

  return (
    <div className="category">
      <div className="category-container">
        {calligraphy.map((item) => (
          <div key={item.id} className="category-item">
            <h2 className="category-item-title">{item.name}</h2>
            <img
              className="category-item-image"
              src= {item.img}
            />
            <p className="category-item-content">{Parser(item.content_short)}</p>
            <a className="category-item-link" href={"/Detail_calligraphy/" + item.id}>
              See More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category_filter;
