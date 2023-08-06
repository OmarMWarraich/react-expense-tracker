import React, {
  createContext,
  useContext,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';

export const ExpenseContext = createContext();

const initialState = {
  expenses: [],
};

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'REMOVE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload,
        ),
      };
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const getTotalExpense = () => {
    const total = state.expenses.reduce((total, item) => total + Number(item.amount), 0);
    return Number(total);
  };

  return (
    <ExpenseContext.Provider value={{ state, dispatch, getTotalExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

function useExpenseContext() {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext must be used within an ExpenseContextProvider');
  }
  return context;
}

ExpenseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ExpenseContextProvider, useExpenseContext };
