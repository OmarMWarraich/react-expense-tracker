import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

export const ExpenseContext = createContext();

const getInitialState = () => {
  const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
  return storedExpenses || [];
};

const initialState = {
  expenses: getInitialState(),
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
    case 'SET_EXPENSES':
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const saveToLocalStorage = (expenses) => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };

  const loadFromLocalStorage = () => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    return storedExpenses || [];
  };

  useEffect(() => {
    const storedExpenses = loadFromLocalStorage();
    dispatch({ type: 'SET_EXPENSES', payload: storedExpenses });
  }, []);

  const getTotalExpense = () => {
    const total = state.expenses.reduce((total, item) => total + Number(item.amount), 0);
    return Number(total);
  };

  useEffect(() => {
    saveToLocalStorage(state.expenses);
  }, [state.expenses]);

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
