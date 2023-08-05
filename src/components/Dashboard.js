import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import IncomeList from './income/IncomeList';
import IncomeForm from './income/IncomeForm';
import ExpenseList from './expense/ExpenseList';
import ExpenseForm from './expense/ExpenseForm';

const Dashboard = () => (
  <Flex justifyContent="space-evenly">
    <Box>
      <ExpenseForm />
      <ExpenseList />
    </Box>
    <Box>
      <IncomeForm />
      <IncomeList />
    </Box>
  </Flex>
);

export default Dashboard;
