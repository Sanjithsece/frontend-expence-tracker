import { useState, useEffect } from "react";
import axios from "axios";
import TransactionList from "./components/TransactionList";
import NewTnxForm from "./components/NewTnxForm";
import InExContainer from "./components/InExContainer";

const API_URL = "https://backend-expencence-tracker.onrender.com";

// Add axios interceptors for debugging
axios.interceptors.request.use(request => {
  console.log('Starting Request:', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  console.log('Response Error:', error);
  return Promise.reject(error);
});

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/expenses`);
      console.log('Fetched expenses:', response.data);
      setTransactions(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching expenses:", error.response?.data || error.message);
      setError('Failed to fetch expenses: ' + (error.response?.data?.message || error.message));
    }
  };

  const addToList = async (title, amount) => {
    try {
      const data = {
        title,
        amount: Number(amount)
      };
      console.log('Sending expense data:', data);
      const response = await axios.post(`${API_URL}/api/expenses`, data);
      console.log('New expense added:', response.data);
      setTransactions(prev => [...prev, response.data]);
      setError(null);
    } catch (error) {
      console.error("Error adding expense:", error.response?.data || error.message);
      setError('Failed to add expense: ' + (error.response?.data?.message || error.message));
    }
  };

  const deleteTransaction = async (id) => {
    try {
      console.log('Deleting expense with id:', id);
      await axios.delete(`${API_URL}/api/expenses/${id}`);
      setTransactions(prev => prev.filter(transaction => transaction.id !== id));
      setError(null);
    } catch (error) {
      console.error("Error deleting expense:", error.response?.data || error.message);
      setError('Failed to delete expense: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container">
      <h3>Expense Tracker</h3>
      {error && (
        <div style={{ color: 'red', margin: '10px 0', padding: '10px', backgroundColor: '#ffe6e6', borderRadius: '4px' }}>
          {error}
        </div>
      )}
      <InExContainer transactions={transactions} />
      <TransactionList transactions={transactions} onDelete={deleteTransaction} />
      <NewTnxForm addToList={addToList} />
    </div>
  );
};

export default App;
