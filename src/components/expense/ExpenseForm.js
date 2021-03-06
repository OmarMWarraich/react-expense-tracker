import React, { useState } from 'react';
import {
  Card,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useExpenseContext } from '../../context/ExpenseContext';

function ExpenseForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { dispatch } = useExpenseContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = new Date().getTime().toString();

    dispatch({ type: 'ADD_EXPENSE', payload: { id, description, amount } });

    setDescription('');
    setAmount('');
  };

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <Flex direction="column" maxW="sm" m="auto" p={4}>
        <FormControl id="description" isRequired>
          <FormLabel>Expense</FormLabel>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </FormControl>
        <FormControl id="amount" isRequired>
          <FormLabel />
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
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
    </Card>
  );
}

export default ExpenseForm;
