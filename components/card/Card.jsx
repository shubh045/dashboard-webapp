import "@styles/card.css";

const Card = ({icon, text, amount, percent}) => {
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>
      <div className="card-text">
        <p id="text-head">{text}</p>
        <div className="card-stats">
          <p id="amount">{amount}</p>
          <p id="percent">{percent}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;