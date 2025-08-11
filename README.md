# Junior Engineer Programming Challenge

## Project Overview

This project is a solution for the Junior Engineer Programming Challenge.  
It reads product data from a CSV file, processes it, and generates a summary report including:

- Filtering products that are in stock and priced over a minimum threshold (default $100)
- Grouping products by category and counting the number per category
- Sorting products by price and displaying the top N most expensive products (default top 5)
- Saving the report as a JSON file

## Technologies Used

- JavaScript (Node.js)
- File system module (`fs`) to read CSV and write JSON report
- Modular code design with reusable functions
- Jest for unit testing (optional)

## How to Run

### Prerequisites

- Node.js installed ([Download here](https://nodejs.org/))
- Git (optional, for cloning repo)

### Steps

1. Clone the repository or download the source code.
2. Ensure you have a `products.csv` file in the root directory with the following format:
