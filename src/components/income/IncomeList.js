import React from 'react';
import IncomeItem from './IncomeItem';
import { useIncomeContext } from '../../context/IncomeContext';

const IncomeList = () => {
  const { state, dispatch } = useIncomeContext();

  const handleDeleteIncome = (id) => {
    dispatch({ type: 'REMOVE_INCOME', payload: id });
  };

  return (
    <>
      {state.incomes.map((income) => (
        <IncomeItem key={income.id} income={income} onDeleteIncome={handleDeleteIncome} />
      ))}
    </>
  );
};

export default IncomeList;
