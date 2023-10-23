"use client";

import "@styles/card.css";

const Card = ({icon, text, amount, percent,v}) => {
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-text">
        <p id="text-head">{text}</p>
        <div className="card-stats">
          <p id="amount">{amount}</p>
          <span style={{fontSize: "8px", color: "#858585", position: "absolute", top: "242px", left: "600px"}}>{v}</span>
          <p id="percent">{percent}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
