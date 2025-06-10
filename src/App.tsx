import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './page/Login';
import User from './page/User';
import Dashboard from './page/Dashboard';
import Expense from './page/Expense';
import ApprovalExpense from './page/ApprovalExpense';
import ApprovalReport from './page/ApprovalReport';
import Department from './page/Department';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/approval-expense" element={<ApprovalExpense />} />
        <Route path="/approval-report" element={<ApprovalReport />} />
        <Route path="/department" element={<Department />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
