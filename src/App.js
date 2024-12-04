import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import AddCategoryPage from "./pages/AddCategoryPage";
import EditCategoryPage from "./pages/EditCategoryPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage"
import './App.css'

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onEdit={setSelectedProduct} />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/add-category" element={<AddCategoryPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit" element={<EditProductPage product={selectedProduct} />} />
        <Route path="/edit-category/:id" element={<EditCategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;


