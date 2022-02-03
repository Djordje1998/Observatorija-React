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
import AddScientist from "./components/AddScientist";
import Observations from "./components/Observations";

function App() {
  const [token, setToken] = useState();
  const [loginedUser,setLoginedUser] = useState();

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<LoginPage addToken={setToken} setLoginedUser={setLoginedUser}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<NavBar token={token} addToken={setToken} loginedUser={loginedUser}/>}>
          <Route path="stars" element={<Stars />} />
          <Route path="stars/add" element={<AddStar />}/>
          <Route path="scientists" element={<Scientists />} />
          <Route path="scientists/add" element={<AddScientist />} />
          <Route path="observations" element={<Observations/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
