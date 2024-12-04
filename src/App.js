import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import './App.css'; // Import des styles CSS

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Produit à modifier

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onEdit={setSelectedProduct} />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit" element={<EditProductPage product={selectedProduct} />} />
      </Routes>
    </Router>
  );
};

export default App;
