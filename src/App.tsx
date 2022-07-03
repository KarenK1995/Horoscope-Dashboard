import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Zodiac from "./Pages/Zodiac";
import Navbar from "./Components/Navbar";
import ZodiacData from "./Pages/Zodiac/ZodiacData";
import RefreshZodiac from "./Pages/Zodiac/RefreshZodiac";

function App() {
  return (
    <div className="App text-light bg-dark" style={{ height: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Zodiac" element={<Zodiac />} />
        <Route path="/Zodiac/:lang" element={<ZodiacData />} />
        <Route path="/Zodiac/refresh/:lang" element={<RefreshZodiac />} />
      </Routes>
    </div>
  );
}

export default App;
