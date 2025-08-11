const fs = require("fs");
const path = require("path");
const {
  filterProducts,
  groupProductsByCategory,
  getTopExpensive,
} = require("./productUtils");

//Parse CSV into an array of objects
function parseCSV(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.trim().split("\n");
    const headers = lines[0].split(",");

    return lines.slice(1).map((line) => {
      const values = line.split(",");
      return headers.reduce((obj, header, index) => {
        let value = values[index];
        if (header === "Price") value = parseFloat(value);
        if (header === "InStock") value = value.toLowerCase() === "true";
        obj[header] = value;
        return obj;
      }, {});
    });
  } catch (err) {
    console.error("Error reading or parsing CSV file:", err.message);
    process.exit(1);
  }
}

const csvFilePath = path.join(__dirname, "products.csv");
const products = parseCSV(csvFilePath);

function generateReport(products) {
  console.log("\nProducts in stock & over $100:");
  filterProducts(products).forEach((p) => {
    console.log(`- ${p.ProductName} ($${p.Price})`);
  });

  console.log("\nProducts per category:");
  const categoryCounts = groupProductsByCategory(products);
  for (const [category, count] of Object.entries(categoryCounts)) {
    console.log(`- ${category}: ${count}`);
  }

  console.log("\nTop 5 most expensive products:");
  getTopExpensive(products, 5).forEach((p, i) => {
    console.log(`${i + 1}. ${p.ProductName} ${p.Price}`);
  });

  const reportContent = {
    inStockOver100: filterProducts(products),
    categoryCounts,
    topExpensive: getTopExpensive(products, 5),
  };
  fs.writeFileSync(
    "report.json",
    JSON.stringify(reportContent, null, 2),
    "utf-8"
  );
  console.log("\nReport saved as report.json");
}

generateReport(products);
