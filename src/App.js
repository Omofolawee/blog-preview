import React from "react";
import "./App.css";
import card from "./images/illustration.svg";
import avatar from "./images/avatar.webp";

const App = () => {
  return (
    <section className="body">
      <div className="container">
        <img src={card} alt="card" className="image" />
        <div className="text">
          <h3 className="learning">Learning</h3>
          <p>Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p className="paragraph">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className=" profile">
            <img src={avatar} alt="avatar" />
            <h3>Greg Hooper</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
