import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const IncomeContext = createContext();

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
      return state;
    default:
      return state;
  }
};

const IncomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(incomeReducer, initialState);

  return (
    <IncomeContext.Provider value={{ state, dispatch }}>
      {children}
    </IncomeContext.Provider>
  );
};

const useIncomeContext = () => {
  const context = useContext(IncomeContext);
  if (!context) {
    throw new Error('useIncomeContext must be used within an IncomeProvider');
  }
  return context;
};

IncomeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { IncomeProvider, useIncomeContext };
