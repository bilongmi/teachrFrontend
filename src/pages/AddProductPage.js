import React, { useEffect } from "react";
import ProductForm from "../components/ProductForm";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createProduct } from "../features/productSlice";
import { fetchCategories } from "../features/categorySlice";

const AddProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    
      dispatch(fetchCategories()); 
    
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(createProduct(product)).then(() => {
      alert("Produit ajouté !");
      navigate("/");
    });
  };
 

  return (
    <div className="center-container">
      <h1>Ajouter un Produit</h1>
      <ProductForm onSubmit={handleAdd} categories={categories} />
      <button onClick={() => navigate("/")}>Vos Produits</button>
    </div>
  );
};

export default AddProductPage;
