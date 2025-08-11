const {
  filterProducts,
  groupProductsByCategory,
  getTopExpensive,
} = require("./productUtils");

const sampleProducts = [
  {
    ProductName: "Laptop",
    Price: 1500,
    Category: "Electronics",
    InStock: true,
  },
  {
    ProductName: "Keyboard",
    Price: 500,
    Category: "Electronics",
    InStock: true,
  },
  { ProductName: "Coffee Mug", Price: 12, Category: "Home", InStock: false },
  { ProductName: "Chair", Price: 80, Category: "Furniture", InStock: true },
  {
    ProductName: "Monitor",
    Price: 220,
    Category: "Electronics",
    InStock: true,
  },
];

test("filters products in stock and price > 100", () => {
  const result = filterProducts(sampleProducts, 100);
  expect(result).toEqual([
    {
      ProductName: "Laptop",
      Price: 1500,
      Category: "Electronics",
      InStock: true,
    },
    {
      ProductName: "Keyboard",
      Price: 500,
      Category: "Electronics",
      InStock: true,
    },
    {
      ProductName: "Monitor",
      Price: 220,
      Category: "Electronics",
      InStock: true,
    },
  ]);
});

test("groups products by category", () => {
  const result = groupProductsByCategory(sampleProducts);
  expect(result).toEqual({
    Electronics: 3,
    Home: 1,
    Furniture: 1,
  });
});

test("gets top 5 expensive products", () => {
  const result = getTopExpensive(sampleProducts, 5);
  expect(result).toEqual([
    {
      ProductName: "Laptop",
      Price: 1500,
      Category: "Electronics",
      InStock: true,
    },
    {
      ProductName: "Keyboard",
      Price: 500,
      Category: "Electronics",
      InStock: true,
    },
    {
      ProductName: "Monitor",
      Price: 220,
      Category: "Electronics",
      InStock: true,
    },
    {
      ProductName: "Chair",
      Price: 80,
      Category: "Furniture",
      InStock: true,
    },
    {
      ProductName: "Coffee Mug",
      Price: 12,
      Category: "Home",
      InStock: false,
    },
  ]);
});
