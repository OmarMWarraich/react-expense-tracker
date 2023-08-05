import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const ExpenseContext = createContext();

const initialState = {
  expenses: [], // Assuming this is an array of expense objects
};

function expenseReducer(state, action) {
  // Implement your reducer logic based on different actions
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'REMOVE_EXPENSE':
      // Implement remove logic here
      return state;
    // Other cases
    default:
      return state;
  }
}

function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
}

function useExpenseContext() {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext must be used within an ExpenseProvider');
  }
  return context;
}

ExpenseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ExpenseProvider, useExpenseContext };
