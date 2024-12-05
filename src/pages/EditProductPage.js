import React, { useEffect, } from "react";
import ProductForm from "../components/ProductForm";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { modifyProduct } from "../features/productSlice";
import { fetchCategories } from "../features/categorySlice";

const EditProductPage = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleEdit = (product) => {
   dispatch(modifyProduct ( product)).then(() => {
      alert("Produit modifié !");
      navigate("/");
    });
  };

  return (
    <div className="center-container">
      <h1>Modifier un Produit</h1>
      <ProductForm  onSubmit={handleEdit} initialData={product} />
      <button onClick={() => navigate("/")}>Vos Produits</button>
    </div>
  );
};

export default EditProductPage;
