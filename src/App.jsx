import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Layout>
  );
}

export default App;
