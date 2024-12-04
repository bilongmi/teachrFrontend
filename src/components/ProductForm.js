import React, { useState, useEffect } from "react";
import { addProduct, getCategories } from "../services/api";
import CustomButton from "./Button";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price, category }).then(() => {
      setName("");
      setPrice("");
      setCategory("");
      alert("Produit ajouté !");
    });
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
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Sélectionnez une catégorie</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <CustomButton type="submit">Ajouter Produit</CustomButton>
    </form>
  );
};

export default ProductForm;
