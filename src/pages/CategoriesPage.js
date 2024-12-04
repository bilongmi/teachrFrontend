import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories, deleteCategory } from "../services/api";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Récupérer les catégories depuis l'API
    getCategories().then((data) => {
      setCategories(data); // Vérifiez que data est un tableau d'objets { id, name }
    });
  }, []);

  const handleDelete = (id) => {
    deleteCategory(id).then(() => {
      setCategories((prev) => prev.filter((c) => c.id !== id));
    });
  };

  return (
    <div className="center-container">
      <h1>Gérez vos Catégories</h1>
      <button onClick={() => navigate("/add-category")}>Ajouter une catégorie</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td> {/* Rendu de la propriété "name" */}
              <td>
                <div className="action-buttons">
                  <button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#FFA500",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      marginRight: "10px",
                      borderRadius: "5px",
                    }}
                    onClick={() => navigate(`/edit-category/${category.id}`, { state: { category } })}
                  >
                    Modifier
                  </button>
                  <button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#FF0000",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                    onClick={() => handleDelete(category.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/")}>Vos Produits</button>
    </div>
  );
};

export default CategoriesPage;
