import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';

const IncomeItem = ({ income, onDeleteIncome }) => (
  <Box>
    <Text fontSize="lg" fontWeight="bold">
      {income.description}
    </Text>
    <Text>
      $
      {income.amount}
    </Text>
    <IconButton
      icon={<AiOutlineDelete />}
      onClick={() => onDeleteIncome(income.id)}
      colorScheme="red"
      aria-label="Delete Income"
      size="sm"
    />
  </Box>
);

IncomeItem.propTypes = {
  income: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onDeleteIncome: PropTypes.func.isRequired,
};

export default IncomeItem;
