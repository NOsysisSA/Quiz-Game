import React from "react";
import "../Styles/intro.css";
import { Link } from "react-router-dom";
function Intro() {
  return (
    <div className="intro">
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you scrore 100%</p>
      <Link to="/question">
        <button>BEGIN</button>
      </Link>
    </div>
  );
}

export default Intro;
