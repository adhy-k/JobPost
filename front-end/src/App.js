import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import JobPost from "./components/JobPost";
import JobView from "./components/JobView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobPost />} />
        <Route path="/view" element={<JobView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
