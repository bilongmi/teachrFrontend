import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchCategories, removeCategory,} from "../features/categorySlice";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.list);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories()); 
    }
  }, [dispatch, status]);

  const handleDelete = (id) => {
    dispatch(removeCategory(id)); 
  };

  if (status === "loading") return <p>Chargement...</p>;
  if (status === "failed") return <p>Erreur : {error}</p>;

  return (
    <div className="center-container">
      <h1>Gérez vos Catégories</h1>
      
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
              <td>{category.nom}</td> {/* Rendu de la propriété "name" */}
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
                    onClick={() =>
                      navigate(`/edit-category/${category.id}`, {
                        state: { category },
                      })
                    }
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
      <button onClick={() => navigate("/add-category")} className="addcatg">
        Ajouter une catégorie
      </button>
      <button onClick={() => navigate("/")} className="prod">Vos Produits</button>
    </div>
  );
};

export default CategoriesPage;
