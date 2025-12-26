import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import JobPost from "./components/JobPost";
import JobView from "./components/JobView";

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<JobPost />} />
            <Route path="/view" element={<JobView />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
