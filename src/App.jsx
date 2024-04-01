import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Tournaments from "./Pages/Tournaments.jsx";

function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tournaments" element={<Tournaments />} />
    </Routes>
  </Layout>
  );
}

export default App;
