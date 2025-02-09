const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// Updated products with frosties and shreddies
const products = {
    cornflakes: { price: 2.52 },
    weetabix: { price: 9.98 },
    cheerios: { price: 4.99 },
    frosties: { price: 3.50 },   // Added frosties
    shreddies: { price: 3.75 }   // Added shreddies
};

// API route to get product price
app.get('/products/:productName', (req, res) => {
    const product = req.params.productName.toLowerCase();
    
    // Check if the product exists in the products object
    if (products[product]) {
        res.json(products[product]); // Send product data
    } else {
        res.status(404).json({ error: "Product not found" }); // If product not found
    }
});

// Start the server on port 3001
app.listen(3001, () => console.log("Server running on port 3001"));
