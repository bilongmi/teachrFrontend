import React from "react";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";

const App = () => {
  return (
    <div>
      <h1>Gestion des Produits</h1>
      <ProductForm />
      <ProductTable />
    </div>
  );
};

export default App;
