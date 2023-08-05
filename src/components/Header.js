import React from 'react';
import { Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Heading as="h1" size="xl" textAlign="center" mt={8} mb={4}>
      Expense Tracker
    </Heading>
  );
}

export default Header;
