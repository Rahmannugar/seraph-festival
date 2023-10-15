import React from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./Pages/Home"));
const EventPlan = React.lazy(() => import("./Pages/EventPlan"));
const About = React.lazy(() => import("./Pages/About"));
const Registration = React.lazy(() => import("./Pages/Registration"));

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
