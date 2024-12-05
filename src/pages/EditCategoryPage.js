import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modifyCategory } from "../features/categorySlice";


const EditCategoryPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { category } = state;
  const dispatch = useDispatch();

  const [name, setName] = useState(category.name);

  const handleEditCategory = () => {
    if (name.trim()) {
      dispatch(modifyCategory({ id:category.id,  name } )).then(() => {
        alert("Catégorie modifiée !");
        navigate("/categories");
      });
    } else {
      alert("Le nom de la catégorie est requis.");
    }
  };

  return (
    <div className="center-container">
      <h1>Modifier la Catégorie</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleEditCategory}>Modifier</button>
      <button onClick={() => navigate("/categories")}>Retour</button>
    </div>
  );
};

export default EditCategoryPage;
