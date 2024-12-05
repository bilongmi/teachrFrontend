import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, deleteProduct, setProducts } from "../features/productSlice";

const HomePage = ({ onEdit }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleSearch = (filters) => {
    const filtered = products.filter((product) => {
      const byName = filters.name ? product.nom.includes(filters.name) : true;
      const byPrice = filters.price ? product.prix == filters.price : true;
      const byCategory = filters.category
        ? product.categories === filters.category
        : true;
      return byName && byPrice && byCategory;
    });
    dispatch(setProducts(filtered));
  };

  return (
    <div className="center-container">
      <h1>Gérez vos Produits</h1>
      <div className="navbar">
        <SearchBar categories={categories} onSearch={handleSearch} />
        <button
          className="orange-button"
          onClick={() => navigate("/categories")}
        >
          Catégories
        </button>
      </div>
      <ProductTable
        products={products}
        onEdit={(product) => {
          onEdit(product);
          navigate("/edit");
        }}
        onDelete={handleDelete}
      />
      <div className="add-product-container">
        <button className="blue-button" onClick={() => navigate("/add")}>
          Ajouter un produit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
