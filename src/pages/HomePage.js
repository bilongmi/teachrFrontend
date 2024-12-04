import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";
import { getProducts, deleteProduct, getCategories } from "../services/api";

const HomePage = ({ onEdit }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
    getCategories().then(setCategories);
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    });
  };

  const handleSearch = (filters) => {
    getProducts().then((data) => {
      const filtered = data.filter((product) => {
        const byName = filters.name ? product.name.includes(filters.name) : true;
        const byPrice = filters.price ? product.price == filters.price : true;
        const byCategory = filters.category
          ? product.category === filters.category
          : true;
        return byName && byPrice && byCategory;
      });
      setProducts(filtered);
    });
  };

  return (
    <div className="center-container">
      <h1>Gérez vos Produits</h1>
      <SearchBar categories={categories} onSearch={handleSearch} />
      <ProductTable
        products={products}
        onEdit={(product) => {
          onEdit(product);
          navigate("/edit");
        }}
        onDelete={handleDelete}
      />
      <div>
        <button onClick={() => navigate("/add")}>Ajouter un produit</button>
        <button onClick={() => alert("Page Catégories non encore implémentée")}>
          Catégories
        </button>
      </div>
    </div>
  );
};

export default HomePage;
