import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

// Reducer Function to handle changes in state

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload,
        ),
      };
    case 'EDIT_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) => (expense.id
        === action.payload.id ? action.payload : expense)),
      };
    case 'SET_EXPENSES':
      return {
        ...state,
        expenses: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Create Context
const ExpenseContext = createContext();

// Create Provider

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addExpense = (expense) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };

  const editExpense = (expense) => {
    dispatch({
      type: 'EDIT_EXPENSE',
      payload: expense,
    });
  };

  const setExpenses = (expenses) => {
    dispatch({
      type: 'SET_EXPENSES',
      payload: expenses,
    });
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  const setError = (error) => {
    dispatch({
      type: 'SET_ERROR',
      payload: error,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        loading: state.loading,
        error: state.error,
        addExpense,
        deleteExpense,
        editExpense,
        setExpenses,
        setLoading,
        setError,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom Hook to consume the ExpenseContext

const useExpenseContext = () => useContext(ExpenseContext);

ExpenseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ExpenseProvider, useExpenseContext };
