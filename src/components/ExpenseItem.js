import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';

const ExpenseItem = ({ expense, dispatch }) => {
  const handleDeleteExpense = () => {
    dispatch({ type: 'DELETE_EXPENSE', payload: expense.id });
  };

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        {expense.description}
      </Text>
      <Text>
        $
        {expense.amount}
      </Text>
      <IconButton
        icon={<AiOutlineDelete />}
        onClick={handleDeleteExpense}
        colorScheme="red"
        aria-label="Delete Expense"
        size="sm"
      />
    </Box>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ExpenseItem;
