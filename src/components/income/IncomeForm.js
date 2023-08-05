import React, { useState } from 'react';
import {
  Card,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useIncomeContext } from '../../context/IncomeContext';

function IncomeForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const { dispatch } = useIncomeContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique id for the new income
    const id = new Date().getTime().toString();

    // Dispatch the action to add the new income
    dispatch({ type: 'ADD_INCOME', payload: { id, description, amount } });

    // Clear the form inputs after submission
    setDescription('');
    setAmount('');
  };

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <Flex direction="column" maxW="sm" m="auto" p={4}>
        <FormControl id="description" isRequired>
          <FormLabel>Income</FormLabel>
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
          Add Income
        </Button>
      </Flex>
    </Card>
  );
}

export default IncomeForm;
