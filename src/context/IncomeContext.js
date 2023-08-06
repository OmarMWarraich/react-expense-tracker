import React, {
  createContext, useContext, useReducer,
} from 'react';
import PropTypes from 'prop-types';

export const IncomeContext = createContext();

const initialState = {
  incomes: [],
};

const incomeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };
    case 'REMOVE_INCOME':
      return {
        ...state,
        incomes: state.incomes.filter((income) => income.id !== action.payload),
      };
    default:
      return state;
  }
};

const IncomeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(incomeReducer, initialState);

  const getTotalIncome = () => {
    const total = state.incomes.reduce((total, item) => total + Number(item.amount), 0);
    return Number(total);
  };

  return (
    <IncomeContext.Provider value={{ state, dispatch, getTotalIncome }}>
      {children}
    </IncomeContext.Provider>
  );
};

const useIncomeContext = () => {
  const context = useContext(IncomeContext);
  if (!context) {
    throw new Error('useIncomeContext must be used within an IncomeContextProvider');
  }
  return context;
};

IncomeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { IncomeContextProvider, useIncomeContext };
