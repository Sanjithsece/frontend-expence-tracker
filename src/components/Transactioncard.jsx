const Transactioncard = ({ id, title, amount, onDelete }) => {
    const colorClass = amount >= 0 ? "positive" : "negative";
  
    return (
      <div className={`transaction-card ${colorClass}`}>
        <span>{title}</span>
        <span>${amount}</span>
        <div className="del-btn">
          <button onClick={() => onDelete(id)} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default Transactioncard;
  