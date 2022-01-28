import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Stars from "./components/Stars";
import Scientists from "./components/Scientists";

function App() {
  const [token, setToken] = useState();

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<NavBar token={token} />}>
          <Route path="stars" element={<Stars setToken={setToken}/>} />
          <Route path="scientists" element={<Scientists setToken={setToken}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
