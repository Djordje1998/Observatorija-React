import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
