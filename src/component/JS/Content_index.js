import { NavLink } from "react-router-dom";
import "../CSS/Content.css";

function Content_index() {
  return (
    <div className="content-container">
      <h2 className="content-style-h2">Calligraphy From Countries</h2>
      <div className="content-calligraphy">
        <div className="row">
          <NavLink to="/Category/East-Asia" className="content-style-item">
            <img src="/img/category/world.png" alt="" />
            <h3>EAST ASIA</h3>
          </NavLink>
          <NavLink to="/Category/Southeast-Asia" className="content-style-item">
            <img src="/img/category/southeast-asia.png" alt="India" />
            <h3>SOUTHEAST ASIA</h3>
          </NavLink>
        </div>
        <div className="row">
          <NavLink to="/Category/South-Asia" className="content-style-item">
            <img src="/img/category/world.png" alt="Viet Nam" />
            <h3>SOUTH ASIA</h3>
          </NavLink>
          <NavLink to="/Category/Western-Europe" className="content-style-item">
            <img src="/img/category/Western.png" alt="Viet Nam" />
            <h3>WESTERN EUROPE</h3>
          </NavLink>
        </div>
      </div>
      <NavLink to="/Category_main">
        <a className="content-link" style={{ color: "#EF233C" }}>
          See All Calligraphy
        </a>
      </NavLink>
    </div>
  );
}

export default Content_index;
