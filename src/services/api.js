const api = {
  products: [
    { id: 1, name: "Produit 1", price: 100, category: "Catégorie 1" },
    { id: 2, name: "Produit 2", price: 150, category: "Catégorie 2" },
    { id: 3, name: "Produit 3", price: 200, category: "Catégorie 3" },
  ],
  categories: ["Catégorie 1", "Catégorie 2", "Catégorie 3"],
};

export const getProducts = () => Promise.resolve(api.products);
export const getCategories = () => Promise.resolve(api.categories);
export const addProduct = (product) => {
  api.products.push({ id: api.products.length + 1, ...product });
  return Promise.resolve();
};
export const addCategory = (category) => {
  api.categories.push({ id: api.categories.length + 1, ...category });
  return Promise.resolve();
};
export const updateProduct = (id, updatedProduct) => {
  const index = api.products.findIndex((p) => p.id === id);
  if (index !== -1) api.products[index] = { ...api.products[index], ...updatedProduct };
  return Promise.resolve();
};
export const updateCategory = (id, updatedCategory) => {
  const index = api.categories.findIndex((c) => c.id === id);
  if (index !== -1) api.categories[index] = { ...api.categories[index], ...updatedCategory };
  return Promise.resolve();
}
export const deleteProduct = (id) => {
  api.products = api.products.filter((p) => p.id !== id);
  return Promise.resolve();
};
export const deleteCategory = (id) => {
  api.categories = api.categories.filter((c) => c.id !== id);
  return Promise.resolve();
};