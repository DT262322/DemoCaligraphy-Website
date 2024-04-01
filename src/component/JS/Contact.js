import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../CSS/Contact.css";
import { sendsuccess } from "./Notify"; // Import the sendsuccess function from Notify
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com'; // Correct the import
function Contact() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      age: "",
      gender: "",
      message: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "At Least 2 Letters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      age: Yup.number()
        .integer("Only Number")
        .positive("Not Negative")
        .required("Required!"),
      gender: Yup.string(),
      message: Yup.string(), // Add validation for the message field
    }),
    onSubmit: (values) => {
      var templateParams = {
        email_user: values.email, // Replace with the email field from your form
        full_name_customer: values.full_name, // Replace with the full_name field from your form
        message_customer: values.message, // Replace with the message field from your form
      };

      emailjs
        .send(
          "service_1998", 
          "template_1o1i6iq", 
          templateParams,
          "cvkHqP3Q0pekzOHYc"
        )
        .then((response) => {
          sendsuccess();
          navigate("/");
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    },
  });

  return (
    <div className="contact-container">
       <h2>CONTACT US</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>YOUR FULLNAME</label>
          <input
          type="text"
          name="full_name"
          value={formik.values.full_name}
          onChange={formik.handleChange} />
          {formik.errors.full_name && formik.touched.full_name &&(
            <span style={{color: "#EF233C"}}>{formik.errors.full_name}</span>
          )}
        </div>
        <div>
          <label>YOUR Email</label>
          <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email &&(
            <span style={{color: "#EF233C"}}>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label>YOUR AGE</label>
          <input
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange} />
          {formik.errors.age && formik.touched.age &&(
            <span style={{color: "#EF233C"}}>{formik.errors.age}</span>
          )}
        </div>
        <div>
          <label>GENDER</label>
          <input
          type="radio"
          name="gender"
          value="male"
          checked
          onChange={formik.handleChange} /> MALE
          
          <input
          type="radio"
          name="gender"
          value="female"
          onChange={formik.handleChange} /> FEMALE
        </div>
        <div>
          <label>MESSAGE</label>
          <textarea
          type="contact-textarea"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange} />
        </div>
        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
