// const axios = require('axios');

// class ShoppingCart {
//   constructor() {
//     this.items = {};   // Stores products in the cart
//     this.subtotal = 0; // Subtotal before tax
//     this.taxRate = 0.125; // Tax rate (12.5%)
//   }

//   // Fetch product price from the Price API
//   async fetchPrice(productName) {
//     try {
//       const response = await axios.get(`http://localhost:3001/products/${productName}`);
//       return response.data.price || null;
//     } catch (error) {
//       console.error(`Error fetching price for ${productName}:`, error.message);
//       return null;
//     }
//   }

//   // Add a product to the cart
//   async addProduct(productName, quantity) {
//     try {
//       const price = await this.fetchPrice(productName);
//       if (price === null) throw new Error(`Price not found for ${productName}`);

//       if (this.items[productName]) {
//         this.items[productName].quantity += quantity;
//       } else {
//         this.items[productName] = { quantity, price };
//       }
      
//       this.calculateTotals();
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   // Calculate subtotal, tax, and total
//   calculateTotals() {
//     this.subtotal = Object.values(this.items).reduce((sum, item) => sum + item.price * item.quantity, 0);
//     this.subtotal = Math.ceil(this.subtotal * 100) / 100; // Round up
//     this.tax = Math.ceil(this.subtotal * this.taxRate * 100) / 100; // Round up
//     this.total = Math.ceil((this.subtotal + this.tax) * 100) / 100; // Round up
//   }

//   // Get the current cart state
//   getCartState() {
//     return {
//       items: this.items,
//       subtotal: this.subtotal,
//       tax: this.tax,
//       total: this.total,
//     };
//   }
// }

// console.log("Hello, Shopping Cart!");


// module.exports = ShoppingCart;




const axios = require('axios');

class ShoppingCart {
  constructor() {
    this.items = {};   
    this.subtotal = 0; 
    this.taxRate = 0.125;
  }

  async fetchPrice(productName) {
    try {
      // Fetch price from Express API instead of hardcoded values
      const response = await axios.get(`http://localhost:3001/products/${encodeURIComponent(productName)}`);
      
      if (!response.data.price) return null; // If no price found, return null
      return response.data.price; // Return price
    } catch (error) {
      console.error(`Error fetching price for ${productName}:`, error.message);
      return null;
    }
  }
}

module.exports = ShoppingCart;

