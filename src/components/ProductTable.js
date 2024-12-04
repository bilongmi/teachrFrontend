import React, { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../services/api";
import CustomButton from "./Button";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Catégorie</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>
              <CustomButton
                color="error"
                onClick={() => handleDelete(product.id)}
              >
                Supprimer
              </CustomButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
