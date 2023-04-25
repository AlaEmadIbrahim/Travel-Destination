import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Details from "./components/TourDetails/TourDetails.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
