import { useParams } from "react-router-dom";
import { data_feature } from "../DATA/Data_calligraphy";
import Parser from "html-react-parser";
import "../CSS/Detail-feature.css"
import { useEffect } from "react";
function Detail_feature() {
    let {id} = useParams();
    let index_feature = data_feature.findIndex((x)=>x.id ==id);
    let feature = data_feature[index_feature];
    useEffect(() => {
        // Thay đổi tiêu đề trang khi component được render
        document.title = "Detail Feature-Post";
      }, []); // Mảng rỗng [] để chỉ chạy một lần khi component được render
    return ( 
        <div className="container">
            <div className="detail-feature">
                <h1>{feature.name}</h1>
                <p>{Parser(feature.content_main)}</p>
            </div>
        </div>
     );
}

export default Detail_feature;
