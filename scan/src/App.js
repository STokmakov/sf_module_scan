import React, { Component, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "@styles/App.css";

import { Header } from "@components/Header";
import { Footer }  from "@components/Footer";

import { HomePage } from "@views/HomePage";


function App() {
const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="app">
    <Header isAuth={isAuth} setIsAuth={setIsAuth} />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;