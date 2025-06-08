import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./page/Login";
import User from "./page/User";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
