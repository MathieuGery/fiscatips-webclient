import React from "react";
import { Routes, Route } from 'react-router-dom';
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Team from "../pages/Team";
import NotFound from "./NotFound";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/team' element={<Team/>} />
        <Route exact path='/contact' element={<Contact/>} />
        {/* List a generic 404-Not Found route here */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};
