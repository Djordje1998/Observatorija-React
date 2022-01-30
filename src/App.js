import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Stars from "./components/Stars";
import Scientists from "./components/Scientists";
import AddStar from "./components/AddStar";

function App() {
  const [token, setToken] = useState();

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage addToken={setToken}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<NavBar token={token} addToken={setToken}/>}>
          <Route path="stars" element={<Stars />} >
            
          </Route>
          <Route path="stars/add" element={<AddStar />}/>
          <Route path="scientists" element={<Scientists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
