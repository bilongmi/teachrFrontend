import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import EditCategoryPage from "./pages/EditCategoryPage";
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/add-category" element={<AddCategoryPage />} />
        <Route path="/edit-category/:id" element={<EditCategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;


