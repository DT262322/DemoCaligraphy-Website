import PhotoAlbum from "react-photo-album";
import "../CSS/album.css"
const photos = [
  {id:1, src: "/img/album/1.jpg", width: 400, height: 533 },
  {id:2, src: "/img/album/2.jpg", width: 300, height: 400 },
  {id:3, src: "/img/album/3.jpg", width: 300, height: 450 },
  {id:4, src: "/img/album/4.jpg", width: 500, height: 697 },
  {id:5, src: "/img/album/5.jpg", width: 350, height: 233 },
  {id:6, src: "/img/album/5.png", width: 250, height: 325 },
  {id:7, src: "/img/album/6.jpg", width: 300, height: 524 },
  {id:8, src: "/img/album/7.png", width: 200, height: 150 },
  {id:9, src: "/img/album/8.jpg", width: 300, height: 198 },
  {id:10, src: "/img/album/9.jpg", width: 250, height: 366 },
  {id:11, src: "/img/album/10.png", width: 200, height: 302 },
  {id:12, src: "/img/album/11.jpg", width: 300, height: 98 },
  {id:13, src: "/img/album/12.jpg", width: 200, height: 226 },
  {id:14, src: "/img/album/13.jpg", width: 300, height: 193 },
  {id:15, src: "/img/album/14.png", width: 300, height: 403 },
  {id:16, src: "/img/album/15.jpg", width: 250, height: 120 },
  {id:17, src: "/img/album/16.jpg", width: 300, height: 254 },
  {id:18, src: "/img/album/17.jpg", width: 250, height: 165 },
  {id:19, src: "/img/album/18.jpg", width: 300, height: 426 },
  {id:20, src: "/img/album/19.jpg", width: 300, height: 177 },
  {id:21, src: "/img/album/21.jpg", width: 200, height: 181 },
];

export default function Album() {
  return <PhotoAlbum layout="rows" photos={photos} className="photo-album-photo"/>;
}