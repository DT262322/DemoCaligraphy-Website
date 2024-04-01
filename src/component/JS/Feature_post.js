import { useState } from "react";
import { data_calligraphy, data_feature } from "../DATA/Data_calligraphy";
import Parser from "html-react-parser";
import "../CSS/Feature-post.css"; 

function Feature_post() {
  const [feature, setFeture] = useState(data_feature);

  return (
    <div className="feature-container">
      {feature.map((x) => (
        <div key={x.id} className="feature-item">
          <h2>{x.name}</h2>
          <img
            className="feature-item-image"
            src={x.img}
            alt={x.name}
          />
          <h3>{Parser(x.content_short)}</h3>

          <a className="feature-detail-link" href={"/Detail_feature/" + x.id}>
            See More
          </a>
        </div>
      ))}
    </div>
  );
}

export default Feature_post;
