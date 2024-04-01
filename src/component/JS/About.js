import React from "react";
import "../CSS/About.css";
import Album from "./album";

function About() {
  return (
    <div className="custom-container">
      <div className="custom-about-content">
        <h2 className="custom-heading" style={{color: "#EF233C" }}> History about calligraphy</h2>
        <p className="custom-paragraph" style={{ textAlign: "justify" }}>
          Calligraphy is a type of art that creates letters in the Latin script.
          Calligraphy is using brush pens and ink as the main means to convey
          the writer's inner feelings onto a variety of materials. Applying some
          penmanship techniques of Eastern calligraphy and applying additional
          methods to suit Latin writing systems. This is a form of interference
          between East and West cultures, creating a unique traditional art
          form. According to Tu Nguyen of China, Calligraphy means "using
          writing to convey the information content of things is called Letters"
          and "things that have gone through the process of perfection are
          called Dharma". In this sense, calligraphy is also understood as an
          art form originating from written expression. Similarly, the word
          "Calligraphy" in Western languages also means beautiful handwriting.
          Calligraphy is a combination of the words Calli and Graphy. Calli
          comes from the Greek word Kalli, derived from Kallos meaning beauty
          and the word Graphy from Greek Graphein, meaning writing. Therefore,
          calligraphy has the most general meaning of beautiful handwriting.
        </p>
        {/* <img
          className="custom-image"
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/Kurukshetra.jpg"
          alt="Juhi Chitra"
        />
        <img
          className="custom-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/%D0%A1%D1%82%D0%B5%D0%BB%D0%B0_%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0_%D0%B3%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%BE%D0%B2_%D0%9F%D0%B5%D0%BF%D0%B8.jpg/800px-%D0%A1%D1%82%D0%B5%D0%BB%D0%B0_%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B0_%D0%B3%D0%BE%D0%BD%D1%87%D0%B0%D1%80%D0%BE%D0%B2_%D0%9F%D0%B5%D0%BF%D0%B8.jpg"
          alt="Home Studio"
        /> */}
        <Album />
      </div>
    </div>
  );
}

export default About;
