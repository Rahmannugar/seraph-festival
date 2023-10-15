import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EventPlan from "./Pages/EventPlan";
import About from "./Pages/About";
import Registration from "./Pages/Registration";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventPlan />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
