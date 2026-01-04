export function filterProducts(
  products,
  searchQuery,
  category,
  sortOrder
) {
  let filtered = [...products];

  if (searchQuery) {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  }

  if (category) {
    filtered = filtered.filter(
      (product) => product.category === category
    );
  }

  if (sortOrder === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
}

export function getUniqueCategories(products) {
  return [...new Set(products.map(p => p.category))].sort();
}
