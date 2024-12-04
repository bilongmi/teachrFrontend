const api = {
    products: [
      { id: 1, name: "Produit 1", price: 50, category: "Catégorie 1" },
      { id: 2, name: "Produit 2", price: 30, category: "Catégorie 2" },
    ],
    categories: [
      { id: 1, name: "Catégorie 1" },
      { id: 2, name: "Catégorie 2" },
    ],
  };
  
  export const getProducts = () => Promise.resolve(api.products);
  export const getCategories = () => Promise.resolve(api.categories);
  export const addProduct = (product) => {
    api.products.push({ id: api.products.length + 1, ...product });
    return Promise.resolve(product);
  };
  export const addCategory = (category) => {
    api.categories.push({ id: api.categories.length + 1, ...category });
    return Promise.resolve(category);
  };
  export const deleteProduct = (id) => {
    api.products = api.products.filter((p) => p.id !== id);
    return Promise.resolve();
  };
  export const deleteCategory = (id) => {
    api.categories = api.categories.filter((c) => c.id !== id);
    return Promise.resolve();
  };
  