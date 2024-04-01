import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import Notify, { loginsuccess,loginfailed } from "./Notify";
//npm install emailjs-com

const Login = () => {
  const dataUser = "https://64de10cc825d19d9bfb1fb93.mockapi.io/1/userdata";
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login"
    axios
      .get(dataUser)
      .then((response) => {
        const userData = response.data;
        localStorage.setItem("userData", JSON.stringify(userData));
        setUserData(userData);
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required!"),
      password: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      const checkUser = userData.some(
        (user) =>
          user.username === values.username && user.password === values.password
      );
      if (checkUser) {
        
        localStorage.setItem("isLoggedIn", "true");
        loginsuccess();
        navigate('/Category_main');
        
      } else {
        loginfailed();
      }
    },
  });

  return (
    <div className="contact-container">
      <h2>LOGIN</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <span style={{ color: "#EF233C" }}>{formik.errors.username}</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <span style={{ color: "#EF233C" }}>{formik.errors.password}</span>
          )}
        </div>
        <NavLink to="/Register">Sign Up</NavLink>
        <div>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
