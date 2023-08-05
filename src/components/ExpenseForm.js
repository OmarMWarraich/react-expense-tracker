import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useExpenseContext } from '../context/ExpenseContext';

function ExpenseForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { dispatch } = useExpenseContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique id for the new expense
    const id = new Date().getTime().toString();

    // Dispatch the action to add the new expense
    dispatch({ type: 'ADD_EXPENSE', payload: { id, description, amount } });

    // Clear the form inputs after submission
    setDescription('');
    setAmount('');
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Flex direction="column" maxW="sm" m="auto" p={4}>
        <FormControl id="description" isRequired>
          <FormLabel>Expense Description</FormLabel>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </FormControl>
        <FormControl id="amount" isRequired>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          mt={4}
          alignSelf="flex-end"
        >
          Add Expense
        </Button>
      </Flex>
    </Box>
  );
}

export default ExpenseForm;
