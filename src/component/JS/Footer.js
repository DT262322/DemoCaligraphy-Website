import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom"; // Import NavLink từ React Router
import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2 className="footer-heading">Calligraphy</h2>
        <p className="footer-address">
          Address: Số 8 Tôn Thất Thuyết, Phường Mỹ Đình, Quận Từ Liêm, Hà Nội
        </p>
        <span className="footer-phone">Phone: +8479797979</span>
        <div className="footer-social-icons">
          <FaFacebook size={30} className="social-icon" />
          <FaInstagram size={30} className="social-icon" />
          <FaEnvelope size={30} className="social-icon" />
          <FaPhone size={30} className="social-icon" />
        </div>
      </div>

      <div className="footer-link-menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Introduction</NavLink>
          </li>
          <li>
            <NavLink to="/Category_main">Category</NavLink>
          </li>
          <li>
            <NavLink to="/Feature_post">Feature Post</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62706.46740409418!2d106.6181255648058!3d10.799498473634962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175290e624afc3f%3A0x9b86bdb4da236d06!2zQVBURUNIIFNBSUdPTiAtIEjhu4YgVEjhu5BORyDEkMOATyBU4bqgTyBM4bqsUCBUUsOMTkggVknDik4gUVXhu5BDIFThur4gVOG6oEkgSENN!5e0!3m2!1svi!2s!4v1696406163762!5m2!1svi!2s"
          width="400" /* Độ rộng mới của bản đồ */
          height="225" /* Chiều cao mới của bản đồ */
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
