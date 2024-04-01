import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/Banner.css";
function Banner() {
  const img = [
    "/img/banner/banner-5.jpg",
    "/img/banner/banner-7.jpg",
    "/img/banner/banner-1.jpg",
    "/img/banner/banner-6.jpg",
    "/img/banner/banner-2.jpg",
  ];
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      infiniteLoop
      interval={2000}
      className="banner-carousel"
    >
      {img.map((x) => (
        <div>
          <img src={x} />
        </div>
      ))}
    </Carousel>
  );
}

export default Banner;
