import React from "react";
import ProductForm from "../components/ProductForm";
import { updateProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

const EditProductPage = ({ product }) => {
  const navigate = useNavigate();

  const handleEdit = (updatedProduct) => {
    updateProduct(product.id, updatedProduct).then(() => {
      alert("Produit modifié !");
      navigate("/");
    });
  };

  return (
    <div className="center-container">
      <h1>Modifier un Produit</h1>
      <ProductForm initialData={product} onSubmit={handleEdit} />
      <button onClick={() => navigate("/")}>Vos Produits</button>
    </div>
  );
};

export default EditProductPage;
