import React from "react";
import ProductForm from "../components/ProductForm";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { modifyProduct } from "../features/productSlice";

const EditProductPage = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (updatedProduct) => {
   dispatch(modifyProduct ( updatedProduct)) .then(() => {
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
