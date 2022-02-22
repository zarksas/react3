import React from "react";
import vector from "./assets/vector.png";
import text from "./assets/text.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="unter">
        <img src={vector} alt="no" />
        <img className="text" src={text} alt="no" />
      </div>
      <div className="bar">Партнерам</div>
      <div className="bar">Разработчикам</div>
      <div className="bar">Вакансии</div>
      <div className="last">ООО “интукод”, 2020г.</div>
    </div>
  );
};

export default Footer;
