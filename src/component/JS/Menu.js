import "../CSS/Menu.css";
import { NavLink } from "react-router-dom";
import Banner from "./banner";

function Menu() {
  const changPagetitle = (title) => {
    document.title = title;
  };
  return (
    <div>
      <header id="header">
        {/* Thanh Menu */}
        <nav
          className="navbar navbar-expand-sm navbar-dark"
          style={{ backgroundColor: "#8d99ae" }}
        >
          <NavLink
            className="navbar-brand"
            to="/"
            onClick={() => changPagetitle("HOME")}
          >
            <div className="logo">Calligraphy</div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={() => changPagetitle("HOME")}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/About"
                  onClick={() => changPagetitle("INTRODUCTION")}
                >
                  INTRODUCTION
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/Category_main"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => changPagetitle("CATEGORY")}
                >
                  CATEGORY
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <NavLink
                    className="dropdown-item"
                    to="/Category/East-Asia"
                    onClick={() => changPagetitle("EAST ASIA")}
                  >
                    EAST ASIA
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/Category/Southeast-Asia"
                    onClick={() => changPagetitle("SOUTHEAST ASIA")}
                  >
                    SOUTHEAST ASIA
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/Category/South-Asia"
                    onClick={() => changPagetitle("SOUTH ASIA")}
                  >
                    SOUTH ASIA
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/Category/Western-Europe"
                    onClick={() => changPagetitle ("WESTERN EUROPE")}
                  >
                    WESTERN EUROPE
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Feature_post"
                  onClick={() => changPagetitle("FEATURE POST")}
                >
                  FEATURE POST
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/Contact"
                  onClick={() => changPagetitle("CONTACT")}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container banner">
          <Banner />
        </div>
      </header>
    </div>
  );
}

export default Menu;
