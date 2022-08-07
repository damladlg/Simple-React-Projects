import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import HomePage from "../src/components/HomePage";
import Login from "../src/components/LoginPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Settings from "./components/Settings";

function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Login />;
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
