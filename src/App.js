import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thank from "./pages/Thank";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Thank" element={<Thank />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
