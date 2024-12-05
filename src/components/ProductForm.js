import React, { useState, useEffect } from "react";


const ProductForm = ({ initialData = {}, onSubmit, categories }) => {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [category, setCategory] = useState(initialData.category || "");
  const [description, setDescription] = useState(initialData.description || "");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price, category, description });
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
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description"></textarea>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Sélectionnez une catégorie</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat.id}>
            {cat.nom}
          </option>
        ))}
      </select>
      <button type="submit">Valider</button>
    </form>
  );
};

export default ProductForm;
