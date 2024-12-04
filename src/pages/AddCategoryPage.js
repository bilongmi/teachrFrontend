import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories, addCategory } from "../services/api";

const AddCategoryPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleAddCategory = () => {
    if (name.trim()) {
      addCategory({ name }).then(() => {
        alert("Catégorie ajoutée !");
        navigate("/categories");
      });
    } else {
      alert("Le nom de la catégorie est requis.");
    }
  };

  return (
    <div className="center-container">
      <h1>Ajouter une Catégorie</h1>
      <input
        type="text"
        placeholder="Nom de la catégorie"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddCategory}>Ajouter</button>
      <button onClick={() => navigate("/categories")}>Retour</button>
    </div>
  );
};

export default AddCategoryPage;
