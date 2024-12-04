import React from "react";
import ProductForm from "../components/ProductForm";
import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const navigate = useNavigate();

  const handleAdd = (product) => {
    addProduct(product).then(() => {
      alert("Produit ajouté !");
      navigate("/");
    });
  };

  return (
    <div className="center-container">
      <h1>Ajouter un Produit</h1>
      <ProductForm onSubmit={handleAdd} />
      <button onClick={() => navigate("/")}>Vos Produits</button>
    </div>
  );
};

export default AddProductPage;
