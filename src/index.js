import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ExpenseProvider } from './context/ExpenseContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ExpenseProvider>
        <App />
      </ExpenseProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
