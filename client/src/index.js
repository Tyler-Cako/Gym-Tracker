import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./normalize.css"
import "./skeleton.css"
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login"
import Signup from "./routes/Signup"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>
);
