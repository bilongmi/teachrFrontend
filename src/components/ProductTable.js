import React, { useEffect } from 'react';
import CustomButton from "./Button";

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prix</th>
          <th>Catégorie</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.nom}</td>
            <td>{product.prix} €</td>
            <td>{product.categorie.nom}</td>
            <td>{product.description}</td>
            <td>
              <div className="action-buttons">
                <CustomButton color="warning" onClick={() => onEdit(product)}>
                  Modifier
                </CustomButton>
                <CustomButton color="error" onClick={() => onDelete(product.id)}>
                  Supprimer
                </CustomButton>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
