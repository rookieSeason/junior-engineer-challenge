// Filter products based on their availability and price
function filterProducts(products, minPrice = 100) {
  return products.filter((p) => p.InStock && p.Price > minPrice);
}
// Group products by their category
function groupProductsByCategory(products) {
  return products.reduce((acc, product) => {
    acc[product.Category] = (acc[product.Category] || 0) + 1;
    return acc;
  }, {});
}

// Sort & get top 5 expensive products
function getTopExpensive(products, topN = 5) {
  return [...products].sort((a, b) => b.Price - a.Price).slice(0, topN);
}

module.exports = {
  filterProducts,
  groupProductsByCategory,
  getTopExpensive,
};
