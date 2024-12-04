import React, { useState, useEffect } from "react";
import { getCategories } from "../services/api";

const ProductForm = ({ initialData = {}, onSubmit }) => {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Sélectionnez une catégorie</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Valider</button>
    </form>
  );
};

export default ProductForm;
