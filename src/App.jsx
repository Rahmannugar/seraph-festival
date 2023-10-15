import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./Pages/Home"));
const EventPlan = React.lazy(() => import("./Pages/EventPlan"));
const About = React.lazy(() => import("./Pages/About"));
const Registration = React.lazy(() => import("./Pages/Registration"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<EventPlan />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
