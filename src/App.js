import './App.css';
import { ExpenseProvider } from './context/ExpenseContext';
import { IncomeProvider } from './context/IncomeContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => (
  <div className="App">
    <ExpenseProvider>
      <IncomeProvider>
        <Header />
        <Dashboard />
      </IncomeProvider>
    </ExpenseProvider>
  </div>
);

export default App;
