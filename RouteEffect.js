import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UseEffect from "./UseEffect";
import SingleEffect from "./SingleEffect";

function RouteEffect() {
  return (
    <>
      <nav>
        <Link to="/details">HOME PAGE</Link>
      </nav>
      <Routes>
        <Route path="/details" element={<UseEffect />} />
        <Route path="/single/:detid" element={<SingleEffect />} />
      </Routes>
    </>
  );
}

export default RouteEffect;
