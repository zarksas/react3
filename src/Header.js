import React from "react";
import ellips from "./assets/ellips.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="ellips">
          <div className="img">
            <img src={ellips} alt="no" />
            <div className="ounter">ounter</div>
          </div>
        </div>
        <div className="menubar">
          <ul>
            <li>Главная</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Header;
