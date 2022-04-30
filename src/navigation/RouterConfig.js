import React from "react";
import { Routes, Route } from 'react-router-dom';
import { NotFound } from "./NotFound";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<NotFound />} />
        {/* List a generic 404-Not Found route here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
