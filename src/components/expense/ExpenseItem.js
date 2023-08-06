import React from 'react';
import PropTypes from 'prop-types';
import { Card, Text, IconButton } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';

const ExpenseItem = ({ expense, onDeleteExpense }) => (
  <Card mt={4}>
    <Text fontSize="lg" fontWeight="bold">
      {expense.description}
    </Text>
    <Text>
      $
      {expense.amount}
    </Text>
    <IconButton
      icon={<AiOutlineDelete />}
      onClick={() => onDeleteExpense(expense.id)}
      colorScheme="red"
      aria-label="Delete Expense"
      size="sm"
    />
  </Card>
);

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onDeleteExpense: PropTypes.func.isRequired,
};

export default ExpenseItem;
