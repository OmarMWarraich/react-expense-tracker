import React from 'react';
import ExpenseItem from './ExpenseItem';
import { useExpenseContext } from '../context/ExpenseContext';

function ParentComponent() {
  const { state, dispatch } = useExpenseContext();

  return (
    <div>
      {/* Render the ExpenseItem component and pass the necessary data as props */}
      {state.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default ParentComponent;
