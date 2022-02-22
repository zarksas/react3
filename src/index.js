import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

ReactDOM.render(
  <div className="blog">
    <Header />
    <Content />
    <Footer />
  </div>,
  document.getElementById("root")
);
