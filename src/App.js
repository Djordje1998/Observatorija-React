import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Stars from "./components/Stars";

function App() {
  const [token, setToken] = useState();

  function addToken(auth_token) {
    setToken(auth_token);
  }

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage addToken={addToken} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<NavBar token={token} />}>
          <Route path="stars" element={<Stars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
