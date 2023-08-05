import React from 'react';
import IncomeItem from './IncomeItem';
import { useIncomeContext } from '../../context/IncomeContext';

const IncomeList = () => {
  const { state, dispatch } = useIncomeContext();

  return (
    <>
      {state.incomes.map((income) => (
        <IncomeItem key={income.id} income={income} dispatch={dispatch} />
      ))}
    </>
  );
};

export default IncomeList;
