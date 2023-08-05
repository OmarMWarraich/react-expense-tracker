import React from 'react';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';

import IncomeList from './income/IncomeList';
import IncomeForm from './income/IncomeForm';
import ExpenseList from './expense/ExpenseList';
import ExpenseForm from './expense/ExpenseForm';

const Dashboard = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)');

  return (
    <>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        justifyContent="center"
        alignItems="flex-start"
        mt={4}
        p={9}
      >
        <Box mr={isMobile ? 0 : 2} mt={2}>
          <ExpenseForm />
          <ExpenseList />
        </Box>
        <Box ml={isMobile ? 0 : 2} mt={2}>
          <IncomeForm />
          <IncomeList />
        </Box>
      </Flex>
    </>
  );
};

export default Dashboard;
