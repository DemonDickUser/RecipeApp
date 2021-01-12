import React from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Display = ({ pic, name, ingredients }) => {
  Aos.init({
    mirror: true,
  });
  return (
    <div data-aos-offset="200" data-aos="flip-right" className="card">
      <h3>{name}</h3>
      <ul>
        {ingredients.map((ingredients) => (
          <li key={Math.random()}>{ingredients.text}</li>
        ))}
      </ul>
      <img src={pic} alt="recipe" />
    </div>
  );
};
export default Display;
