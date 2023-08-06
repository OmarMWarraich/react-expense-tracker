import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { IncomeContext } from './IncomeContext';
import { ExpenseContext } from './ExpenseContext';

export const BalanceContext = createContext();

const BalanceContextProvider = ({ children }) => {
  const { getTotalIncome } = useContext(IncomeContext);
  const { getTotalExpense } = useContext(ExpenseContext);

  const calculateBalance = () => {
    const totalIncome = getTotalIncome();
    const totalExpenses = getTotalExpense();
    return totalIncome - totalExpenses;
  };

  return (
    <BalanceContext.Provider value={{ calculateBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

BalanceContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BalanceContextProvider;
