import './App.css';
import { ExpenseContextProvider } from './context/ExpenseContext';
import { IncomeContextProvider } from './context/IncomeContext';
import BalanceContextProvider from './context/BalanceContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  <div className="App">
    <ExpenseContextProvider>
      <IncomeContextProvider>
        <BalanceContextProvider>
          <Header />
          <Dashboard />
        </BalanceContextProvider>
      </IncomeContextProvider>
    </ExpenseContextProvider>
  </div>
);

export default App;
