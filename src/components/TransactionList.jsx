import React from 'react';

import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = React.useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item) => {
          return <Transaction key={item.id} transaction={item} />;
        })}
      </ul>
    </>
  );
};
