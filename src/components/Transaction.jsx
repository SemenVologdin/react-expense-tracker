import React from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = React.useContext(GlobalContext);

  let isPositive = transaction.amount > 0;
  return (
    <li className={isPositive ? 'plus' : 'minus'}>
      {transaction.text} <span>{`${isPositive ? '+' : '-'}$${Math.abs(transaction.amount)}`}</span>
      <button
        className="delete-btn"
        onClick={() => {
          deleteTransaction(transaction.id);
        }}>
        &times;
      </button>
    </li>
  );
};
