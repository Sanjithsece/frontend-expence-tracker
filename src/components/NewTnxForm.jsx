import { useState } from "react";

const NewTnxForm = ({ addToList }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      alert("Please provide both title and amount.");
    } else {
      addToList(title, Number(amount));
      setTitle("");
      setAmount(0);
    }
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button onClick={addTransaction}>Add Transaction</button>
      </form>
    </>
  );
};

export default NewTnxForm;
