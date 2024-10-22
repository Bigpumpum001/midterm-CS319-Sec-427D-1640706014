// Function to filter products priced above a certain threshold
function filterProductsByPrice(products, threshold) {
    return products.filter(product => product.price > threshold);
}

// Function to create an array of product names
function getProductNames(products) {
    return products.map(product => product.name);
}

// Function to calculate the total cost of all products
function calculateTotalCost(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
