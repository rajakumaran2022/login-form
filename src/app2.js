import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import { Route } from "react-router-dom";

function App2() {
  return (
    <div>
    <Route path="/" element={<Navbar />} />
    </div>
  );
}

export default App2;
