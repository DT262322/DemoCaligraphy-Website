import { useParams } from "react-router-dom";
import { data_calligraphy } from "../DATA/Data_calligraphy";
import Parser from "html-react-parser";
import CommentBox from "./Comment_box";
import { useEffect } from "react";
import "../CSS/Detail-callygraphy.css";


function Detail_calligraphy() {
  let { id } = useParams();
  let index_calligraphy = data_calligraphy.findIndex((x) => x.id == id);
  let calligraphy = data_calligraphy[index_calligraphy] || {};
  useEffect(() => {
    // Thay đổi tiêu đề trang khi component được render
    document.title = "Detail Calligraphy";
  }, []); // Mảng rỗng [] để chỉ chạy một lần khi component được render

  return (
    <div className="content-container">
      <div className="content-section">
        <h1 className="content-title" style={{ color: "#D90429" }}>
          {calligraphy.name}
        </h1>
        <p className="content-text" style={{ color: "black" }}>
          {Parser(calligraphy.content_main)}
        </p>
      </div>
      <hr />
      <div className="content-image">
        <img src={calligraphy.photo} />
      </div>
      <hr />
      <div className="content-comment">
        <CommentBox />
      </div>
    </div>
  );
}

export default Detail_calligraphy;
