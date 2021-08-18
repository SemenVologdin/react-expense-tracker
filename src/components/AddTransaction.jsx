import React from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const { transactions, addTransaction } = React.useContext(GlobalContext);

  const [text, setText] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [lastId, setLastId] = React.useState(transactions.length + 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: lastId,
      text,
      amount: +amount,
    };
    setLastId(lastId + 1);
    console.log(newTransaction);
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
