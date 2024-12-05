import React, { useState } from "react";

const SearchBar = ({ onSearch, categories }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch({ name, price, category });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Toutes les catégories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat.nom}>
            {cat.nom}
          </option>
        ))}
      </select>
      <button className="blue-button" onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;
