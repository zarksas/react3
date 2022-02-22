import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="counter">
        <div className="start">140</div>
        <div className="options">
          <button className="butt1">Увеличить</button>
          <button className="butt2">Уменьшить</button>
          <button className="butt3">Сбросить</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
