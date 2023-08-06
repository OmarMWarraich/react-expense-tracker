import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';

export const IncomeContext = createContext();

const getInitialState = () => {
  const storedIncomes = JSON.parse(localStorage.getItem('incomes'));
  return storedIncomes || [];
};

const initialState = {
  incomes: getInitialState(),
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
    case 'SET_INCOMES':
      return {
        ...state,
        incomes: action.payload,
      };
    default:
      return state;
  }
};

const IncomeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(incomeReducer, initialState);

  const saveToLocalStorage = (incomes) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('incomes', JSON.stringify(incomes));
    }
  };

  const loadFromLocalStorage = () => {
    const storedIncomes = JSON.parse(localStorage.getItem('incomes'));
    return storedIncomes || [];
  };

  useEffect(() => {
    const storedIncomes = loadFromLocalStorage();
    dispatch({ type: 'SET_INCOMES', payload: storedIncomes });
  }, []);

  const getTotalIncome = () => {
    const total = state.incomes.reduce((total, item) => total + Number(item.amount), 0);
    return Number(total);
  };

  useEffect(() => {
    saveToLocalStorage(state.incomes);
  }, [state.incomes]);

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
