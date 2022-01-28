import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <BrowserRouter className="App">
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
