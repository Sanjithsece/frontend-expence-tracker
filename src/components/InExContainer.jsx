const InExContainer = ({ transactions = [] }) => {
  let income = 0;
  let expense = 0;

  transactions.forEach((txn) => {
    if (txn.amount > 0) {
      income += txn.amount;
    } else {
      expense += txn.amount;
    }
  });

  return (
    <>
      <h4>Balance</h4>
      <h5>${income + expense}</h5>
      <div className="Total">
        <div className="income">
          <h5>Income</h5>
          <h6>${income}</h6>
        </div>
        <div className="expense">
          <h5>Expense</h5>
          <h6>${expense}</h6>
        </div>
      </div>
    </>
  );
};

export default InExContainer;
