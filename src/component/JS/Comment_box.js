import React, { useState, useEffect } from "react";
import "../CSS/Comment-box.css";
import { useNavigate } from "react-router-dom";
import Notify, { logoutsuccess } from "./Notify";
const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [checkLogin, setCheckLogin] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  const F2 = () => {
    const newComment = { text: comment, id: Date.now() };
    setComments((prevComments) => [...prevComments, newComment]);
    setComment("");

    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
  };

  const F1 = (e) => {
    setComment(e.target.value);
  };

  const navtoLogin = () => {
    navigate("/Login");
  };

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  const Logout = () => {
    localStorage.setItem("isLoggedIn", "false"); // Đặt trạng thái đăng nhập toàn cục thành false
    localStorage.removeItem("comments");
    setComments([]);
    setCheckLogin(false);
    logoutsuccess();
  };

  return (
    <div className="comment-box">
      <div className="input-container">
        <h3>Give us your comment</h3>
        {checkLogin && (
          <button className="logout-button" onClick={Logout}>
            Log Out
          </button>
        )}
        <textarea
          className="comment-input"
          onChange={F1}
          value={comment}
          placeholder="Write your comment"
          disabled={!checkLogin}
        />
        <button onClick={F2} className="comment-button" disabled={!checkLogin}>
          Comment
        </button>
        {!checkLogin && (
          <p className="login-message">Please login to leave a comment</p>
        )}
        {!checkLogin && (
          <button onClick={navtoLogin} className="login-button">
            Login
          </button>
        )}
      </div>
      <div className="comments-container">
        {comments.map((comment) => (
          <div key={comment.id} className="comments">
            {comment.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentBox;
