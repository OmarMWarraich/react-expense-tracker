import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { GiReceiveMoney } from 'react-icons/gi';
import { BalanceContext } from '../../context/BalanceContext';

const Balance = () => {
  const { calculateBalance } = React.useContext(BalanceContext);

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      shadow="md"
      bg="white"
      textAlign="center"
    >
      <Box as={GiReceiveMoney} size="32px" color="blue.500" mb={2} />
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Your Balance
      </Text>
      <Text fontSize="2xl">{calculateBalance()}</Text>
    </Box>
  );
};

export default Balance;
