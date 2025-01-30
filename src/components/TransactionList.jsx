import Transactioncard from "./Transactioncard";

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <hr />
      {transactions.map((transaction) => (
        <Transactioncard
          key={transaction.id}
          id={transaction.id}
          title={transaction.title}
          amount={transaction.amount}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TransactionList;
