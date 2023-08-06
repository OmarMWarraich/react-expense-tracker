import React from 'react';
import ExpenseItem from './ExpenseItem';
import { useExpenseContext } from '../../context/ExpenseContext';

const ExpenseList = () => {
  const { state, dispatch } = useExpenseContext();

  const handleDeleteExpense = (expenseId) => {
    dispatch({ type: 'REMOVE_EXPENSE', payload: expenseId });
  };

  return (
    <>
      {state.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDeleteExpense={handleDeleteExpense} />
      ))}
    </>
  );
};

export default ExpenseList;
