// Example array of products
const products = [
    { id: 1, name: 'Product A', price: 20 },
    { id: 2, name: 'Product B', price: 30 },
    { id: 3, name: 'Product C', price: 25 },
    { id: 4, name: 'Product D', price: 35 }
  ];
  
  // Filter products based on a condition (e.g., products with a price less than 30)
  const filteredProducts = products.filter(product => product.price < 30);
  
  // Output the filtered products
  console.log(filteredProducts);