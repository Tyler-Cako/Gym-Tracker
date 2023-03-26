import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./normalize.css"
import "./skeleton.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider'
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
    </BrowserRouter>
  </AuthProvider>
);
