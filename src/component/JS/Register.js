import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate  } from "react-router-dom"; // Import navigate để chuyển hướng trang
import "../CSS/Register.css"
import Notify, { registersuccess } from "./Notify";
import { ToastContainer, toast } from "react-toastify";
function Register() {
  const url = "https://64de10cc825d19d9bfb1fb93.mockapi.io/1/userdata";
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate (); 
  useEffect(() => {
    document.title = "Register"
    // Tải dữ liệu từ API khi trang tải lên
    axios.get(url).then((response) => {
      setUserData(response.data);
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      gender: "male", // Chọn một giới tính mặc định
    },
    validationSchema: Yup.object({
      username: Yup.string().min(5, "At Least 5 Letters").required("Required!"),
      password: Yup.string()
        .required("Required!")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      gender: Yup.string(),
    }),
    onSubmit: (values) => {
      // Kiểm tra xem username đã tồn tại trong dữ liệu từ API
      if (userData.some((user) => user.username === values.username)) {
        setIsUsernameTaken(true);
        return;
      }

      // thực hiện nếu tên người dung chưa đăng kí
      axios
        .post(url, values)
        .then((response) => {
          console.log(response.data);
          registersuccess();
          navigate("/Login");
        })
        .catch((error) => {
          console.error(error);
          alert("Register Failed");
        });
    },
  });
  // Hàm xử lý khi trường tên người dùng thay đổi
  const handleUsernameChange = (e) => {
    // Kiểm tra xem tên người dùng đã tồn tại trong dữ liệu từ API
    const isTaken = userData.some((user) => user.username === e.target.value);
    setIsUsernameTaken(isTaken);
    formik.handleChange(e);
  };
  return (
    <div className="contact-container">
      <h2>REGISTER</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={handleUsernameChange} // Thay đổi xử lý sự kiện onBlur thành onChange
          />
          {formik.errors.username && formik.touched.username && (
            <span style={{ color: "#EF233C" }}>{formik.errors.username}</span>
          )}
          {isUsernameTaken && (
            <span style={{ color: "#EF233C" }}>Username is already taken</span>
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
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <span style={{ color: "#EF233C" }}>
              {formik.errors.confirmPassword}
            </span>
          )}
        </div>
        <div>
          <label>YOUR Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <span style={{ color: "#EF233C" }}>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label>GENDER</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formik.values.gender === "male"} // Đã chỉnh sửa ở đây
            onChange={formik.handleChange}
          />{" "}
          MALE
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formik.values.gender === "female"} // Đã chỉnh sửa ở đây
            onChange={formik.handleChange}
          />{" "}
          FEMALE
        </div>
        <div>
          <button type="submit">REGISTER</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
