import './App.css';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;

