import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleUser from "./pages/SingleUser";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:id" element={<SingleUser />}></Route>
    </Routes>
  )
}
